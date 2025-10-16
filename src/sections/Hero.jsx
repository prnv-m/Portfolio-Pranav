import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, useProgress, PerspectiveCamera, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import {useMediaQuery} from 'react-responsive';

const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("HackerRoom component crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Html center>
          <div style={{ color: 'white', padding: '20px', background: 'rgba(255, 0, 0, 0.2)', borderRadius: '10px' }}>
            <p>Something went wrong loading this 3D model.</p>
            <p style={{ fontSize: '12px', color: '#ccc' }}>Check the console for an error related to "Svg".</p>
          </div>
        </Html>
      );
    }
    return this.props.children;
  }
}

// --- Loader Component ---
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};


// --- Zoom Target Coordinates for Hero Section ---
const ZOOM_TARGET_POSITION = new THREE.Vector3(69, -49, 0);
const ZOOM_LOOK_AT_TARGET = new THREE.Vector3(60, -15, 10);
const START_CAMERA_POSITION = new THREE.Vector3(0, 20, 250);

// --- Scroll Animation Durations ---
const INTRO_FADE_DURATION = 500;
const ROTATION_SCROLL_DURATION = 1000;
const ZOOM_SCROLL_DURATION = 750;
const FADE_SCROLL_DURATION = 500;
const FADE_OVERLAP_DURATION = 600;

const TOTAL_SCROLL_HEIGHT = INTRO_FADE_DURATION + ROTATION_SCROLL_DURATION + ZOOM_SCROLL_DURATION + FADE_SCROLL_DURATION - FADE_OVERLAP_DURATION;

// --- 3D Model Components ---

function TokyoModel({ scrollRotation, zoomProgress, modelOpacity }) {
  const { scene } = useGLTF('/models/tokyo.glb');
  const modelRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = modelOpacity;
      }
    });
  }, [modelOpacity, scene]);

  useFrame(({ camera }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scrollRotation;
    }
    camera.position.lerpVectors(START_CAMERA_POSITION, ZOOM_TARGET_POSITION, zoomProgress);
    const lookAtPosition = new THREE.Vector3().lerpVectors(
      new THREE.Vector3(0, 0, 0),
      ZOOM_LOOK_AT_TARGET,
      zoomProgress
    );
    camera.lookAt(lookAtPosition);
  });

  return <primitive ref={modelRef} object={scene} scale={0.4} position={[0, -8, 0]} />
}


// --- New HackerRoom Component ---
function HackerRoom(props) {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');

  const monitortxt = useTexture('textures/desk/monitor.png');
  const screenTxt = useTexture('textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
      {/* <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} /> */}
    </group>
  );
}
useGLTF.preload('/models/hacker-room.glb');


const Hero = () => {
  const START_ANGLE = Math.PI / 0.66;
  const NUMBER_OF_ROTATIONS = 1;
  const END_ANGLE = START_ANGLE + (NUMBER_OF_ROTATIONS * Math.PI * 2);

  const [scrollRotation, setScrollRotation] = useState(START_ANGLE);
  const [zoomProgress, setZoomProgress] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(0);
  const [introProgress, setIntroProgress] = useState(0);
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({minWidth:748});
  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const currentIntroProgress = Math.min(scrollY / INTRO_FADE_DURATION, 1);
      setIntroProgress(currentIntroProgress);

      let rotationProgress = 0;
      if (scrollY > INTRO_FADE_DURATION) {
        const scrollInRotationZone = scrollY - INTRO_FADE_DURATION;
        rotationProgress = Math.min(scrollInRotationZone / ROTATION_SCROLL_DURATION, 1);
      }
      const rotation = START_ANGLE + rotationProgress * (END_ANGLE - START_ANGLE);
      setScrollRotation(rotation);

      let currentZoomProgress = 0;
      const zoomStartScroll = INTRO_FADE_DURATION + ROTATION_SCROLL_DURATION;
      if (scrollY > zoomStartScroll) {
        const scrollInZoomZone = scrollY - zoomStartScroll;
        currentZoomProgress = Math.min(scrollInZoomZone / ZOOM_SCROLL_DURATION, 1);
      }
      setZoomProgress(currentZoomProgress);

      let currentFadeOpacity = 0;
      const fadeStartScroll = zoomStartScroll + ZOOM_SCROLL_DURATION - FADE_OVERLAP_DURATION;
      if (scrollY > fadeStartScroll) {
        const scrollInFadeZone = scrollY - fadeStartScroll;
        currentFadeOpacity = Math.min(scrollInFadeZone / FADE_SCROLL_DURATION, 1);
      }
      setFadeOpacity(currentFadeOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [START_ANGLE, END_ANGLE]);

  return (
    <>
      <section style={{ height: `calc(${TOTAL_SCROLL_HEIGHT}px + 100vh)` }} className='w-full flex flex-col relative'>
        <div style={{ opacity: 1 - introProgress }} className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10'>
          <p className='text-xl sm:text-5xl md:text-6xl font-medium text-white text-center font-generalsans'>Hello! I am Pranav <span className='waving-hand'>👋</span></p>
          <p className='hero_tag text-gray_gradient'>Passionate Developer and Data Science Enthusiast</p>
        </div>

        <div className='w-full h-screen sticky top-0 inset-0'>
          <div
            className="absolute top-0 left-0 w-full h-full bg-black z-20"
            style={{ opacity: fadeOpacity, pointerEvents: 'none' }}
          />

          <Canvas className='w-full h-full' camera={{ position: START_CAMERA_POSITION.toArray(), fov: 60 }}>
            <ambientLight intensity={0.3} />
            <spotLight position={[0, 50, 50]} angle={0.5} penumbra={0.5} intensity={2} castShadow color="#ffffff" />
            <Suspense fallback={<CanvasLoader />}>
              <TokyoModel scrollRotation={scrollRotation} zoomProgress={zoomProgress} modelOpacity={introProgress} />
            </Suspense>
          </Canvas>
        </div>
      </section>

      {/* --- New HackerRoom Section --- */}
      <section className='h-screen w-full bg-black relative'>
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <ErrorBoundary>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HackerRoom 
                scale={[0.1,0.1,0.1]}
                position={[1,-8,2]}
                rotation={[0, -Math.PI, 0]} 
              />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              <OrbitControls enableZoom={true} />
            </ErrorBoundary>
          </Suspense>
        </Canvas>
      </section>
    </>
  )
}

export default Hero;