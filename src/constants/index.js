export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const skills = {
  languages: [
    {
      id: 1,
      name: 'Python',
      icon: '/assets/python.svg',
      proficiency: 90,
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: '/assets/javascript.svg',
      proficiency: 85,
    },
    {
      id: 3,
      name: 'TypeScript',
      icon: '/assets/typescript.png',
      proficiency: 85,
    },
    {
      id: 4,
      name: 'Java',
      icon: '/assets/java.svg',
      proficiency: 80,
    },
    {
      id: 5,
      name: 'C/C++',
      icon: '/assets/cpp.svg',
      proficiency: 75,
    },
  ],
  frontend: [
    {
      id: 1,
      name: 'React',
      icon: '/assets/react.svg',
      proficiency: 90,
    },
    {
      id: 2,
      name: 'HTML/CSS',
      icon: '/assets/html.svg',
      proficiency: 90,
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      icon: '/assets/tailwindcss.png',
      proficiency: 85,
    },
  ],
  backend: [
    {
      id: 1,
      name: 'Node.js',
      icon: '/assets/nodejs.svg',
      proficiency: 85,
    },
    {
      id: 2,
      name: 'FastAPI',
      icon: '/assets/fastapi.svg',
      proficiency: 85,
    },
    {
      id: 3,
      name: 'Flask',
      icon: '/assets/flask.svg',
      proficiency: 80,
    },
    {
      id: 4,
      name: 'REST APIs',
      icon: '/assets/api.svg',
      proficiency: 85,
    },
  ],
  databases: [
    {
      id: 1,
      name: 'PostgreSQL',
      icon: '/assets/postgresql.svg',
      proficiency: 85,
    },
    {
      id: 2,
      name: 'MongoDB',
      icon: '/assets/mongodb.svg',
      proficiency: 80,
    },
    {
      id: 3,
      name: 'SQLite',
      icon: '/assets/sqlite.svg',
      proficiency: 80,
    },
    {
      id: 4,
      name: 'Oracle SQL',
      icon: '/assets/oracle.svg',
      proficiency: 75,
    },
    {
      id: 5,
      name: 'Redis',
      icon: '/assets/redis.svg',
      proficiency: 75,
    },
  ],
  devops: [
    {
      id: 1,
      name: 'Docker',
      icon: '/assets/docker.svg',
      proficiency: 85,
    },
    {
      id: 2,
      name: 'Git/GitHub',
      icon: '/assets/github.svg',
      proficiency: 90,
    },
    {
      id: 3,
      name: 'Postman',
      icon: '/assets/postman.svg',
      proficiency: 85,
    },
    {
      id: 4,
      name: 'Pytest',
      icon: '/assets/pytest.svg',
      proficiency: 80,
    },
  ],
  other: [
    {
      id: 1,
      name: 'Machine Learning',
      icon: '/assets/ml.svg',
      proficiency: 80,
    },
    {
      id: 2,
      name: 'WebRTC',
      icon: '/assets/webrtc.svg',
      proficiency: 75,
    },
    {
      id: 3,
      name: 'WebSockets',
      icon: '/assets/websocket.svg',
      proficiency: 80,
    },
    {
      id: 4,
      name: 'Data Structures & Algorithms',
      icon: '/assets/dsa.svg',
      proficiency: 85,
    },
  ],
};

export const myProjects = [
  {
    title: 'SecureBank - High-Security Banking Platform',
    desc: 'A high-security, lightweight banking platform utilizing Zero Trust principles with custom anomaly detection models. Features real-time behavioral biometrics authentication analyzing keystroke dynamics for user verification with 98.5% accuracy.',
    subdesc:
      'Built with TypeScript, React, WebSockets, Docker, Redis, and MongoDB. Processes 1,000+ transactions/sec with a Random Forest model identifying 95% of fraudulent patterns in live data.',
    href: 'https://github.com/prnv-m/securebank',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'WebSockets',
        path: '/assets/websocket.svg',
      },
      {
        id: 4,
        name: 'Docker',
        path: '/assets/docker.svg',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
    ],
  },
  {
    title: 'ConvoStack - Video Conferencing with AI Transcription',
    desc: 'A full-stack video conferencing platform featuring real-time transcription, note export, and Riverside.fm-style chunked media storage. Native C++ transcription engine achieves sub-100ms latency for real-time performance.',
    subdesc:
      'Developed with C++, WebRTC, Vosk, React, Amazon S3, Gemini LLM, and Nginx. Integrated LLM-powered Q&A and smart note formatting, cutting manual review time by 60%.',
    href: 'https://github.com/prnv-m/convostack',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/cpp.svg',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'WebRTC',
        path: '/assets/webrtc.svg',
      },
      {
        id: 4,
        name: 'AWS S3',
        path: '/assets/aws.svg',
      },
    ],
  },
  {
    title: 'PriceInsights - E-commerce Price Tracker',
    desc: 'A comprehensive full-stack price tracking solution monitoring product prices across 5+ e-commerce platforms including Blinkit, Zepto, and Amazon. Reduces user spending by up to 15% through intelligent price monitoring.',
    subdesc:
      'Built with React, Tailwind CSS, FastAPI, PostgreSQL, and Docker. Uses Prophet time-series forecasting model to predict price fluctuations with 87% accuracy, processing 10,000+ products daily.',
    href: 'https://github.com/prnv-m/priceinsights',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'FastAPI',
        path: '/assets/fastapi.svg',
      },
      {
        id: 3,
        name: 'PostgreSQL',
        path: '/assets/postgresql.svg',
      },
      {
        id: 4,
        name: 'Docker',
        path: '/assets/docker.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Ozibook',
    pos: 'Data Analyst Intern',
    duration: 'May 2025 – Aug 2025',
    title: "Deployed Python and SQL scripts to automate data extraction and visualization, creating dashboards that boosted decision-making accuracy by 25%. Created workflow automations using n8n, increasing on-time delivery rate by 30%.",
    icon: '/assets/ozibook.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'VIT',
    pos: 'Computer Science Student',
    duration: '2022 – Present',
    title: "Pursuing B.Tech in Computer Science Engineering with specialization in Data Science at Vellore Institute of Technology. Maintaining a CGPA of 9.20/10 while actively participating in hackathons and competitive programming.",
    icon: '/assets/vit.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Uddeshya NGO',
    pos: 'Co-lead',
    duration: '2023 – Present',
    title: "Co-leading an NGO club with 190+ members, organizing impactful social initiatives and community events. Managing team coordination and project execution for various social welfare activities.",
    icon: '/assets/ngo.svg',
    animation: 'salute',
  },
];

export const achievements = [
  {
    id: 1,
    title: 'VIT TAM Hackathon Finalist',
    description: 'Secured finalist position in VIT TAM Hackathon with an AI-powered study application.',
    year: '2024',
  },
  {
    id: 2,
    title: 'LeetCode 1500+ Rating',
    description: 'Achieved 1500+ rating on LeetCode through consistent problem-solving and algorithmic thinking.',
    year: '2024',
  },
  {
    id: 3,
    title: 'Microsoft Azure AI-900 Certified',
    description: 'Completed Microsoft Azure Cloud AI-900 certification, demonstrating cloud AI fundamentals.',
    year: '2024',
  },
  {
    id: 4,
    title: 'Academic Excellence',
    description: 'Maintaining 9.20/10 CGPA at VIT with specialization in Data Science.',
    year: '2022 - Present',
  },
];