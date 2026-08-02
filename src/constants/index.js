const navLinks = [
  { name: "Work", link: "#work" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Featured Projects" },
  { value: 300, suffix: "+", label: "LeetCode Problems" },
  { value: 9.2, suffix: "/10", label: "CGPA" },
  { value: 2027, suffix: "", label: "Graduation Year" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "Building scalable web applications with React, Next.js, FastAPI, and modern development practices.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI/ML Integration",
    desc: "Implementing AI solutions using LLMs, RAG, transformers, and vector databases for intelligent applications.",
  },
  {
    imgPath: "/images/time.png",
    title: "Problem Solving",
    desc: "Strong foundation in data structures, algorithms, and system design. 300+ LeetCode problems solved.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const techCategories = [
  {
    title: "Languages",
    icon: "</>",
    items: ["C++", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: "UI",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: "API",
    items: ["FastAPI", "Node.js", "Express.js"],
  },
  {
    title: "AI / Machine Learning",
    icon: "AI",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "LLM APIs", "AI Agents", "RAG", "Embeddings", "Vector Search"],
  },
  {
    title: "Databases / Cloud / Tools",
    icon: "Ops",
    items: ["PostgreSQL", "Firebase", "Docker", "Git", "GitHub", "Vercel", "Render"],
  },
];

const socialImgs = [
  {
    name: "github",
    url:"https://github.com/Rudra-1509",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/rudranilmondal/",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "x",
    url:"https://twitter.com",
    imgPath: "/images/x.png",
  },
  {
    name: "email",
    url:"mailto:rudranilmn1509@gmail.com",
    imgPath: "/images/email.png",
  },
];

const projects = [
  {
    title: "Multi-Agent Orchestration System",
    description: "Real-time multi-agent orchestration where specialized agents collaborate using supervisor-based routing architecture. Implemented LLM-driven task decomposition with SSE-based streaming for live agent execution visualization.",
    tech: ["Python", "FastAPI", "LangGraph", "React", "TanStack Start"],
    liveLink: "https://multi-agentorchestration.vercel.app",
    githubLink: "https://github.com/Rudra-1509/multi-agent-orchestration",
    imgPath: "/images/project_multiagent.png",
    date: "Feb 2026 - May 2026",
  },
  {
    title: "AI Mock Interviewer",
    description: "Full-stack voice-based AI mock interview platform that simulates technical and behavioral interviews using conversational AI. Integrated real-time speech recognition and dynamic question generation with AI-powered feedback analysis.",
    tech: ["Next.js", "Vapi", "OpenAI", "Firebase", "Tailwind"],
    liveLink: "https://ai-mock-interview-orcin.vercel.app",
    githubLink: "https://github.com/Rudra-1509/ai_mock_interview",
    imgPath: "/images/project_interview.png",
    date: "Apr 2025 - Jul 2025",
  },
  {
    title: "AI Study Assistant",
    description: "AI-powered study assistant that transforms PDFs, images, and raw text into structured explanations using OCR and semantic retrieval. Achieved 100% processing success rate on 31 diverse documents with average latency of 55.6s.",
    tech: ["React", "FastAPI", "Transformers", "HuggingFace", "Python"],
    liveLink: "https://ai-study-assistant-sand.vercel.app",
    githubLink: "https://github.com/Rudra-1509/ai-study-assistant",
    imgPath: "/images/project_study.png",
    date: "Nov 2025 - Jan 2026",
  },
  {
    title: "Apple iPhone 15 Clone",
    description: "Responsive e-commerce website clone showcasing modern web design with smooth animations and interactive product showcase using React and Three.js.",
    tech: ["React", "Three.js", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/Rudra-1509/apple_iPhone_clone",
    imgPath: "/images/project3.png",
    date: "May 2025 - Jul 2025",
  },
  {
    title: "Amazon Clone",
    description: "Full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality. Built with React and integrated with Firebase for backend services.",
    tech: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    githubLink: "https://github.com/Rudra-1509/amazon-clone-js",
    imgPath: "/images/devices.png",
    date: "Dec 2024 - Feb 2025",
  },
  {
    title: "Subscription Tracker",
    description: "Full-stack application to track and manage subscriptions with recurring payment tracking and expense analytics.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    githubLink: "https://github.com/Rudra-1509/subscription_tracker",
    imgPath: "/images/devices.png",
    date: "May 2025 - Aug 2025",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  socialImgs,
  techStackIcons,
  techStackImgs,
  techCategories,
  navLinks,
  projects,
};
