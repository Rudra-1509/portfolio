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
    desc: "Building responsive and scalable applications using React, Next.js, FastAPI, Node.js, and modern web technologies.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI Engineering",
    desc: "Developing intelligent applications using LLMs, RAG pipelines, embeddings, AI agents, and machine learning frameworks.",
  },
  {
    imgPath: "/images/time.png",
    title: "Problem Solving",
    desc: "Strong foundation in algorithms, data structures, and computer science fundamentals with 330+ LeetCode problems solved.",
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
    label: "Foundation layer",
    icon: "</>",
    items: ["C++", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend Development",
    label: "Product interfaces",
    icon: "UI",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend Development",
    label: "APIs and services",
    icon: "API",
    items: ["FastAPI", "Node.js", "Express.js"],
  },
  {
    title: "AI / Machine Learning",
    label: "Intelligent systems",
    icon: "AI",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "LLM APIs", "AI Agents", "RAG", "Embeddings", "Vector Search"],
  },
  {
    title: "Database / Cloud / Tools",
    label: "Shipping and operations",
    icon: "Ops",
    items: ["PostgreSQL", "Firebase", "Docker", "Git", "GitHub", "Vercel", "Render"],
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/rudranil1509",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    url:"https://github.com/Rudra-1509",
    imgPath: "/images/github.png",
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
    description: "A real-time multi-agent AI platform where autonomous agents collaborate through supervisor-based routing. Built with streaming execution, agent coordination, and live visualization of AI workflows.",
    tech: ["Python", "FastAPI", "LangGraph", "React", "TanStack Start"],
    liveLink: "https://multi-agent-orchestration.rudranilmn1509.workers.dev/",
    githubLink: "https://github.com/Rudra-1509/multi-agent-orchestration",
    imgPath: "/images/project_multiagent.jpg",
    date: "Feb 2026 - May 2026",
  },
  {
    title: "AI Mock Interviewer",
    description: "An AI-powered interview platform that conducts realistic technical and behavioral interviews using conversational AI. Includes voice interaction, dynamic questioning, and personalized feedback generation.",
    tech: ["Next.js", "Vapi", "OpenAI", "Firebase", "Tailwind CSS"],
    liveLink: "https://ai-mock-interview-orcin.vercel.app",
    githubLink: "https://github.com/Rudra-1509/ai_mock_interview",
    imgPath: "/images/project_interview.jpg",
    date: "Apr 2025 - Jul 2025",
  },
  {
    title: "AI Study Assistant",
    description: "An AI learning assistant that converts PDFs, images, and text into structured study material using OCR, embeddings, and LLM-powered generation. Designed for efficient knowledge extraction and personalized learning.",
    tech: ["React", "FastAPI", "Python", "Embeddings", "RAG", "scikit-learn"],
    liveLink: "https://ai-study-assistant-delta-lake.vercel.app/",
    githubLink: "https://github.com/Rudra-1509/ai-study-assistant",
    imgPath: "/images/project_study.jpg",
    date: "Nov 2025 - Jan 2026",
  },
  {
    title: "Apple iPhone 15 Clone",
    description: "A high-quality product showcase inspired by Apple's design language, featuring smooth animations, interactive UI elements, and immersive 3D experiences.",
    tech: ["React", "Three.js", "Tailwind CSS", "JavaScript"],
    liveLink: "https://apple-i-phone-clone-mu.vercel.app",
    githubLink: "https://github.com/Rudra-1509/apple_iPhone_clone",
    imgPath: "/images/project_apple.png",
    date: "May 2025 - Jul 2025",
  },
  {
    title: "Amazon Clone",
    description: "A full-stack e-commerce platform featuring product browsing, cart management, and Firebase-powered backend integration.",
    tech: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    githubLink: "https://github.com/Rudra-1509/amazon-clone-js",
    imgPath: "/images/project_amazon_clone.jpg",
    date: "Dec 2024 - Feb 2025",
  },
  {
    title: "Subscription Tracker",
    description: "A personal finance application for tracking recurring subscriptions, monitoring expenses, and managing monthly spending insights.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    githubLink: "https://github.com/Rudra-1509/subscription_tracker",
    imgPath: "/images/project_subscription.jpg",
    date: "Jul 2025 - Aug 2025",
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
