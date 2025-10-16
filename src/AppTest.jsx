import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import { useRef } from "react";
const RotatingCubeAndCylinder = () => {
  const groupRef = useRef();
  // why use useref as its mutable and since direction is always changing aka animation
  //so we can use useframe so it is a callback before render is called
  useFrame( () =>{
    if (groupRef.current) { //if we can access the mesh of current object
      groupRef.current.rotation.x += 0.01;
      groupRef.current.rotation.y += 0.01;
    }
  })
  return (
    <group ref = {groupRef}>
      <mesh position={[1,0,0]}>
        <boxGeometry args={[1,1,1]} />
        <meshLambertMaterial color = "#468585" emissive= "#468585"/>
        <Sparkles count = {200} scale={1} size={3} speed={0.00002} noise={0.2} color={"red"}/>

      </mesh>
      <mesh position={[0,0,0]}>
          <cylinderGeometry args={[1,1,3]}/>
          <meshLambertMaterial color = "#468585" emissive= "#468585"/>
    </mesh>
    </group>
  )
}
const App = () => {
  return (
    <Canvas style = {{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate ></OrbitControls>
      <directionalLight position = {[1,1,1]} intensity = {10} color = {0x9cdba6} />
      <color attach= "background" args = {['#F0F0F0']} />
      
      <RotatingCubeAndCylinder />
    </Canvas>
  )
};
export default App;