export const projects = [
  {
  id: "nutriai",

  title: "NutriAI – Enterprise AI Nutrition Platform",

  category: "AI",

  image: "videos/nutri.mp4",

  video: "/projects/nutriai/demo.mp4",

  github: "https://github.com/afrin/nutriai",

  live: "https://nutrition-azure.vercel.app/",

  shortDescription:
    "Built an enterprise-grade AI nutrition platform that generates personalized meal recommendations based on user health profiles, dietary goals, regional cuisine, pantry items, and budget using modern AI, full-stack, and cloud technologies.",

  description:
    "Developed NutriAI, an enterprise-scale AI nutrition assistant designed with a microservices architecture to deliver personalized meal planning and nutrition guidance. Built the frontend using Next.js, React, TypeScript, and Tailwind CSS, while designing backend services with FastAPI, REST APIs, and WebSockets. Implemented intelligent nutrition calculations including BMI, BMR, daily calorie requirements, macronutrients, fiber, and water intake based on user demographics and activity levels. Added AI-powered meal recommendations supporting weight loss, maintenance, and muscle gain, along with health-specific guidance for diabetes, hypertension, PCOS, and high cholesterol. Integrated regional cuisine preferences, pantry-aware meal filtering, budget optimization, food allergy handling, and smart ingredient substitutions. Designed the platform for future AI enhancements with Retrieval-Augmented Generation (RAG), semantic search, vector databases, recommendation engines, OCR, barcode scanning, image-based calorie estimation, voice interactions, smartwatch integrations, clinician dashboards, and local LLM support through Ollama. Containerized the application using Docker and prepared the infrastructure for PostgreSQL, Redis, AWS deployment, monitoring, CI/CD pipelines, and scalable production deployment.",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "REST API",
    "WebSockets",
    "PostgreSQL",
    "Redis",
    "JWT",
    "OAuth",
    "Docker",
    "GitHub Actions",
    "AWS",
    "Ollama",
    "RAG",
    "Vector Database",
    "Semantic Search",
    "Machine Learning"
  ],

  features: [
    "AI Personalized Meal Planner",
    "Nutrition Calculator (BMI, BMR & Macros)",
    "Health Condition Recommendations",
    "Regional Cuisine Support",
    "Budget-Aware Meal Planning",
    "Pantry-Based Meal Suggestions",
    "Food Allergy Detection",
    "Smart Ingredient Substitutions",
    "Interactive Nutrition Dashboard",
    "Water Intake Tracker",
    "Local AI Assistant",
    "Recommendation Engine",
    "RAG-Ready Architecture",
    "JWT & OAuth Authentication",
    "REST APIs & WebSockets",
    "Dockerized Microservices",
    "AWS Deployment Ready",
    "CI/CD with GitHub Actions"
  ],

  screenshots: [
    "videos/architechture.mp4"
  ],

  architecture: {
    frontend: "Next.js + React + TypeScript",
    backend: "FastAPI",
    database: "PostgreSQL + Redis",
    deployment: "AWS + Docker"
  },
},
 {
  id: "architecture-playground",

  title: "Architecture Playground",

  category: "System Design",

  image:
    "videos/architecture.mp4",

  video:
    "/projects/architecture-playground/demo.mp4",

  github:
    "https://github.com/afrin/architecture-playground",

  live:
    "https://architecture-taupe.vercel.app/",

  shortDescription:
    "Interactive visual system architecture designer with drag-and-drop components.",

  description:
    "Architecture Playground is a modern web application that enables developers, software architects, and students to design scalable software architectures visually. Users can drag infrastructure components onto a canvas, connect services, customize diagrams, save projects, import/export JSON files, and generate professional architecture diagrams. Built with React Flow, TypeScript, Zustand, and Vite for high performance and an intuitive user experience.",

  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "React Flow",
    "Zustand",
    "Immer",
    "Framer Motion",
    "Tailwind CSS",
    "HTML2Canvas",
    "Lucide React"
  ],

  features: [
    "Drag & Drop Architecture Components",
    "Interactive React Flow Canvas",
    "Custom Node Connections",
    "Zoom, Pan & Minimap",
    "Import Architecture from JSON",
    "Export Architecture as JSON",
    "PNG Image Export",
    "Auto Layout Support",
    "Responsive User Interface",
    "Undo & Redo",
    "Grid & Snap Support",
    "Component Search",
    "Node Customization",
    "Project Save & Load",
    "Modern Glassmorphism UI"
  ],

  screenshots: [
    "videos/architecture.mp4"
  ],

  architecture: {
    frontend: "React + TypeScript + Vite",
    backend: "None (Client-side Application)",
    database: "Local Storage / JSON",
    deployment: "Vercel"
  },
},

  {
  id: "ai-resume-analyzer",

  title: "AI Resume Analyzer",

  category: "React",

  image: "videos/resume.mp4",

  video: "/projects/resume-analyzer/demo.mp4",

  github: "https://github.com/afrin/ai-resume-analyzer",

  live: "https://resume-analyzer-blond-eight.vercel.app/",

  shortDescription:
    "Built an AI-powered ATS Resume Analyzer that evaluates resumes against target job roles, providing ATS scores, keyword matching, resume health metrics, personalized improvement suggestions, and an AI-generated cover letter starter through a modern responsive interface.",

  description:
    "Developed a browser-based AI Resume Analyzer using React, Vite, and Tailwind CSS that enables users to upload text-based PDF resumes and receive detailed ATS-style evaluations. Implemented PDF.js for extracting resume text and metadata, including page count and file information. Designed a role-aware ATS scoring engine that analyzes keyword coverage, resume sections, quantified achievements, and overall resume health. Added intelligent improvement suggestions and AI-inspired cover letter starter generation without requiring external APIs. Integrated drag-and-drop PDF uploads with validation for supported file types and size limits. Included copy-to-clipboard functionality, downloadable analysis reports, responsive dashboards, animated loading states, and modern dark-mode UI using Framer Motion. Optimized client-side performance while maintaining a fully offline analysis workflow with deterministic scoring logic.",

  technologies: [
    "React 19",
    "Vite",
    "Tailwind CSS 4",
    "JavaScript",
    "PDF.js",
    "Framer Motion",
    "React Router",
    "React Dropzone",
    "React Hot Toast",
  ],

  features: [
    "ATS Resume Scoring",
    "Role-Based Keyword Matching",
    "PDF Resume Upload",
    "Resume Health Metrics",
    "Resume Improvement Suggestions",
    "AI Cover Letter Starter",
    "Drag & Drop Upload",
    "Copy Analysis Report",
    "Download Report",
    "Responsive Dark UI",
    "Animated Dashboard",
    "Client-Side PDF Analysis",
  ],

  screenshots: [
    "videos/resume.mp4"
  ],

  architecture: {
    frontend: "React + Vite",
    backend: "None (Client-side Analysis)",
    database: "None",
    deployment: "Vercel",
  },
},

//  {
//   id: "system-design-playground",

//   title: "System Design Playground",

//   category: "Developer Tool",

//   image:
//     "/projects/system-design-playground/cover.webp",

//   video:
//     "/projects/system-design-playground/demo.mp4",

//   github:
//     "https://github.com/afrin/system-design-playground",

//   live:
//     "https://your-live-demo.vercel.app/",

//   shortDescription:
//     "Interactive platform for building and simulating system architecture diagrams.",

//   description:
//     "A monorepo-based System Design Playground that enables users to create, edit, and simulate distributed system architectures. It features drag-and-drop diagram creation, real-time simulation of system metrics such as cost, latency, throughput, and availability, project persistence, import/export functionality, and starter templates. The frontend works entirely in the browser while optionally supporting an Express backend.",

//   technologies: [
//     "React",
//     "TypeScript",
//     "Vite",
//     "Tailwind CSS",
//     "React Flow",
//     "Node.js",
//     "Express",
//     "Monorepo",
//   ],

//   features: [
//     "Drag-and-Drop Architecture Canvas",
//     "Live System Simulation",
//     "Cost, Latency & Availability Metrics",
//     "Project Save & Load",
//     "Import & Export Project JSON",
//     "Starter Architecture Templates",
//     "Node Configuration Panel",
//     "Browser-Only Simulation Engine",
//     "Optional Express Backend",
//   ],

//   screenshots: [
//     "/projects/system-design-playground/1.webp",
//     "/projects/system-design-playground/2.webp",
//   ],

//   architecture: {
//     frontend: "React + Vite + Tailwind CSS + React Flow",
//     backend: "Node.js + Express (Optional)",
//     database: "Local Browser Storage",
//     deployment: "Vercel",
//   },
// },
{
  id: "db-query-ai",

  title: "DB Query AI – AI-Powered Database Query Generator",

  category: "AI + MERN",

  image:
    "videos/AI query.mp4",

  video:
    "/projects/db-query-ai/demo.mp4",

  github:
    "https://github.com/yourusername/db-query-ai",

  live:
    "https://ai-query-frontend-nine.vercel.app/",

  shortDescription:
    "Developed a full-stack AI-powered database query generation platform that converts natural language into SQL and MongoDB queries using Google Gemini AI. Users can upload database schemas, visualize table relationships, generate optimized queries, view execution results, and analyze data through interactive charts.",

  description:
    "Built DB Query AI, a production-ready MERN application that simplifies database querying through natural language processing. Integrated Google Gemini AI to translate user prompts into optimized SQL and MongoDB queries while providing detailed explanations and performance optimization suggestions. Implemented support for uploading custom SQL DDL scripts and MongoDB JSON schemas with automatic parsing and schema visualization. Designed an interactive dashboard featuring schema exploration, query history, favorites, execution previews, and chart-based analytics using Recharts. Developed secure REST APIs with Node.js and Express for schema management, AI query generation, history tracking, and favorites management. Added offline sandbox mode with client-side fallbacks, local storage persistence, responsive UI components, and modern dashboard design to deliver an intuitive AI-assisted database development experience.",

  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Google Gemini AI",
    "CSS3",
    "Recharts",
    "Lucide React",
    "REST API",
    "Axios",
    "Local Storage",
    "Mongoose",
    "JSON",
    "SQL",
    "MongoDB Query Language"
  ],

  features: [
    "Google Gemini AI Integration",
    "Natural Language to SQL",
    "Natural Language to MongoDB",
    "Custom Schema Upload",
    "SQL DDL Parser",
    "MongoDB Schema Parser",
    "Schema Visualization",
    "Interactive Database Explorer",
    "Query Explanation",
    "Query Optimization Suggestions",
    "Mock Query Execution",
    "Interactive Charts",
    "Bar Chart Visualization",
    "Line Chart Visualization",
    "Pie Chart Visualization",
    "Query History",
    "Favorite Queries",
    "Search History",
    "Copy Generated Queries",
    "Sandbox Offline Mode",
    "Local Storage Backup",
    "Responsive Dashboard",
    "REST API Architecture"
  ],

  screenshots: [
    "videos/AI query.mp4"
  ],

  architecture: {
    frontend: "React + JavaScript + CSS + Recharts",
    backend: "Node.js + Express.js",
    database: "MongoDB",
    deployment: "Vercel + Render + MongoDB Atlas"
  },
},
{
  id: "drawing-socket",

  title: "Drawing Socket v2.0 – Real-Time Collaborative Whiteboard",

  category: "MERN + WebSockets",

  image:
    "videos/socket.mp4",

  video:
    "/projects/drawing-socket/demo.mp4",

  github:
    "https://github.com/yourusername/drawing-socket",

  live:
    "https://drawing-socket.vercel.app/",

  shortDescription:
    "Developed a production-ready real-time collaborative whiteboard application featuring live multi-user drawing, advanced drawing tools, shape creation, text annotations, zoom controls, export functionality, and WebSocket-powered synchronization using Socket.IO.",

  description:
    "Built Drawing Socket v2.0, a professional real-time collaborative whiteboard application designed for seamless multi-user drawing and brainstorming. Implemented Socket.IO-powered live synchronization, enabling multiple users to draw simultaneously with instant updates and connected-user tracking. Developed an advanced drawing engine supporting freehand brush strokes, eraser, text annotations, rectangles, circles, triangles, and straight lines with customizable colors, opacity, brush styles, stroke sizes, and font controls. Added shape filling with independent fill colors, undo/redo history management, responsive zoom controls, high-quality PNG export, and modern UI components for an intuitive user experience. Designed scalable Node.js and Express backend services with WebSocket communication for low-latency collaboration while ensuring responsive performance across modern browsers. Enhanced usability through professional toolbar organization, smooth animations, responsive layouts, and optimized canvas rendering, creating a production-ready collaborative digital whiteboard suitable for education, design, team collaboration, and brainstorming sessions.",

  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Socket.IO",
    "HTML5 Canvas",
    "CSS3",
    "WebSockets",
    "MongoDB",
    "Mongoose",
    "React Hooks",
    "Context API",
    "Canvas API"
  ],

  features: [
    "Real-Time Collaboration",
    "Socket.IO Integration",
    "Live User Counter",
    "Freehand Brush Tool",
    "Eraser Tool",
    "Text Tool",
    "Rectangle Drawing",
    "Circle Drawing",
    "Triangle Drawing",
    "Line Drawing",
    "Shape Fill Support",
    "Custom Fill Colors",
    "Brush Size Control",
    "Brush Opacity Control",
    "Multiple Brush Styles",
    "Solid Brush",
    "Dotted Brush",
    "Dashed Brush",
    "Undo & Redo",
    "Canvas Clear",
    "Zoom Controls",
    "Responsive Canvas",
    "PNG Export",
    "Modern Toolbar UI",
    "Real-Time Synchronization",
    "Responsive Design",
    "Production Ready"
  ],

  screenshots: [
    "videos/socket.mp4"
  ],

  architecture: {
    frontend: "React + HTML5 Canvas + CSS3",
    backend: "Node.js + Express.js + Socket.IO",
    database: "MongoDB",
    deployment: "Vercel + Render + MongoDB Atlas"
  },
},
{
  id: "multi-agent-research",

  title: "Multi-Agent Research Report Generator",

  category: "Python",

  image: "videos/search agent.mp4",

  video: "/projects/research/demo.mp4",

  github: "https://github.com/afrin/multi-agent-research",

  live: "https://research-agent-5gbg8klq9-afrinashars-projects.vercel.app/",

  shortDescription:
    "Developed a Python-based multi-agent research system that automates topic research by collecting web information, summarizing findings, verifying facts, generating structured reports, and exporting professional PDF documents through an intelligent agent workflow.",

  description:
    "Built a lightweight multi-agent research automation system in Python that transforms a user-defined research topic into a comprehensive report. Designed an agent-based workflow where specialized agents collaborate to gather web search results, summarize information, validate facts from retrieved sources, organize content into a well-structured report, and generate a professional PDF document. Implemented configurable environment variables for research topics, output directories, and search limits, making the application flexible for different research tasks. Added Docker support for containerized deployment and designed the architecture to be easily extended with real search APIs, cloud storage, authentication, background job queues, monitoring, and logging for production environments.",

  technologies: [
    "Python",
    "Docker",
    "FPDF / ReportLab",
    "Environment Variables",
    "Unittest",
    "Web Search APIs",
    "Multi-Agent Workflow",
    "Git",
  ],

  features: [
    "Multi-Agent Research Pipeline",
    "Automated Web Research",
    "Content Summarization",
    "Fact Verification",
    "Structured Report Generation",
    "PDF Export",
    "Configurable Research Topics",
    "Environment-Based Configuration",
    "Docker Support",
    "Unit Testing",
    "Extensible Production Architecture",
  ],

  screenshots: [
    "videos/search agent.mp4"
  ],

  architecture: {
    frontend: "None (CLI)",
    backend: "Python",
    database: "None",
    deployment: "Docker",
  },
},
{
  id: "tokenization-comparison",

  title: "Tokenization Comparison Visualizer",

  category: "React",

  image: "videos/tokenizer.mp4",

  video: "/projects/tokenization/demo.mp4",

  github: "https://github.com/afrin/tokenization-comparison",

  live: "https://toon-teal.vercel.app/",

  shortDescription:
    "Built an interactive React application that visualizes and compares tokenization across multiple AI models and encoding formats, displaying token counts, byte representations, and token boundaries in real time.",

  description:
    "Developed a responsive Tokenization Comparison Visualizer using React.js that enables users to compare how different AI tokenizers encode the same text. Implemented real-time tokenization analysis with interactive visualizations showing token boundaries, token IDs, byte representations, token counts, and encoding efficiency across multiple formats. Added side-by-side comparison panels, syntax highlighting, color-coded tokens, and live statistics to help developers understand how text is processed by language models. Designed an intuitive interface with instant updates, customizable input, dark mode, copy functionality, and responsive layouts, making the application useful for AI engineers, prompt engineers, and NLP learners.",

  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Vite",
    "Tokenizer Libraries",
    "HTML5",
    "CSS3"
  ],

  features: [
    "Real-Time Tokenization",
    "Multi-Tokenizer Comparison",
    "Token Count Analysis",
    "Byte Representation Viewer",
    "Color-Coded Token Visualization",
    "Side-by-Side Comparison",
    "Encoding Statistics",
    "Live Input Updates",
    "Dark & Light Theme",
    "Copy Results",
    "Responsive UI",
    "Interactive Token Explorer"
  ],

  screenshots: [
    "videos/tokenizer.mp4"
  ],

  architecture: {
    frontend: "React",
    backend: "None",
    database: "None",
    deployment: "Vercel"
  },
},
{
  id: "regex-pattern-tester",

  title: "Regex Pattern Tester",

  category: "React",

  image: "videos/regex.mp4",

  video: "/projects/regex/demo.mp4",

  github: "https://github.com/afrin/regex-pattern-tester",

  live: "https://afrinashar.github.io/regex-pattern-matchers/",

  shortDescription:
    "Built an interactive React-based Regular Expression (Regex) tester that enables users to write, test, debug, and visualize regex patterns against sample text with real-time matching and explanations.",

  description:
    "Developed a modern Regex Pattern Tester using React.js that provides an intuitive environment for learning and testing regular expressions. Implemented real-time pattern matching with instant highlighting of matched text, support for common regex flags, capturing groups, lookaheads, lookbehinds, and quantifiers. Added interactive examples, syntax validation, error detection, and detailed match information including group captures, match positions, and replacement previews. Designed an educational interface featuring built-in regex cheat sheets, sample expressions, live explanations, copy functionality, and responsive layouts to help developers, students, and testers master regular expressions efficiently.",

  technologies: [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Regex Engine",
    "HTML5",
    "CSS3"
  ],

  features: [
    "Real-Time Regex Testing",
    "Live Match Highlighting",
    "Regex Flags Support",
    "Capturing Groups Visualization",
    "Lookahead & Lookbehind Support",
    "Match Position Detection",
    "Replacement Preview",
    "Regex Syntax Validation",
    "Interactive Examples",
    "Regex Cheat Sheet",
    "Copy Pattern & Results",
    "Responsive UI"
  ],

  screenshots: [
    "videos/regex.mp4"
  ],

  architecture: {
    frontend: "React",
    backend: "None",
    database: "None",
    deployment: "Vercel"
  },
},
{
  id: "insightai-studio",

  title: "InsightAI Studio – AI Data Visualization Platform",

  category: "AI + MERN",

  image:
    "/projects/insightai/cover.webp",

  video:
    "/projects/insightai/demo.mp4",

  github:
    "https://github.com/afrin/InsightAI-Studio",

  live:
    "https://insightai-studio.vercel.app/",

  shortDescription:
    "Developed a full-stack AI-powered business intelligence platform that transforms CSV, Excel, and JSON datasets into interactive dashboards using Google Gemini AI. Users can upload data, ask questions in natural language, and instantly generate charts, KPIs, and actionable business insights.",

  description:
    "Built InsightAI Studio, a production-ready AI-powered analytics platform that enables users to upload CSV, Excel, and JSON datasets for intelligent data exploration. Integrated Google Gemini AI to understand natural language prompts such as 'Show monthly revenue trends' or 'Compare sales by region' and automatically generate the most appropriate visualizations. Implemented dynamic chart rendering with Recharts, AI-generated KPI cards, trend analysis, dashboard generation, and conversational data exploration. Developed secure JWT authentication with refresh tokens, protected routes, dataset management, dashboard persistence, and responsive user interfaces using React and Tailwind CSS. Designed scalable REST APIs with Node.js and Express, supporting file uploads, AI prompt processing, chart selection, and data analysis. Added export capabilities, reusable dashboard layouts, modern UI components, and optimized application performance to deliver a professional business intelligence experience comparable to modern analytics platforms.",

  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Google Gemini AI",
    "Tailwind CSS",
    "Recharts",
    "TanStack Query",
    "React Router",
    "JWT",
    "Axios",
    "Multer",
    "XLSX",
    "Zod",
    "React Hook Form",
    "Framer Motion",
  ],

  features: [
    "JWT Authentication",
    "Google Gemini AI Integration",
    "Natural Language Data Queries",
    "CSV Upload",
    "Excel Upload",
    "JSON Upload",
    "Automatic Chart Selection",
    "Interactive Dashboards",
    "Dynamic KPI Cards",
    "Business Insight Generation",
    "Dataset Management",
    "Dashboard Management",
    "Responsive Design",
    "Dark Mode Ready",
    "Export Reports",
    "Protected Routes",
    "AI Chat Interface",
    "REST API Architecture",
  ],

  screenshots: [
    "../../../assets/insightai.mp4"
  ],

  architecture: {
    frontend: "React + TypeScript + Vite + Tailwind CSS",
    backend: "Node.js + Express.js",
    database: "MongoDB",
    deployment: "Vercel + Render + MongoDB Atlas",
  },
},
];