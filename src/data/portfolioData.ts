import { ProjectItem, SkillCategory, ExplorationTheme } from '../types';

export const personalProfile = {
  name: "Hassan Huraiz",
  headline: "AI & ML Engineering Student | Generative AI Enthusiast | Aspiring AI Application Developer",
  location: "Mangaluru, Karnataka, India",
  email: "hassanhuraiz34@gmail.com",
  linkedin: "https://www.linkedin.com/in/hassan-huraiz-849b80445/",
  college: "AJ Institute of Engineering and Technology, Mangaluru",
  degree: "Computer Science Engineering — Artificial Intelligence and Machine Learning",
  interests: [
    "Artificial Intelligence and Machine Learning",
    "Generative AI",
    "AI-powered applications",
    "Python",
    "Web development",
    "AI-assisted development and rapid prototyping",
    "Using AI to solve practical problems"
  ]
};

export const heroContent = {
  eyebrow: "COMPUTER SCIENCE • AI & MACHINE LEARNING",
  mainHeading: "Curious Minds Build What Comes Next.",
  supportingHeadline: "I'm Hassan Huraiz — an AI & ML engineering student exploring Generative AI, intelligent applications, and modern web experiences.",
  supportingDescription: "I enjoy exploring how artificial intelligence can make learning easier, transform ideas into useful digital products, and create better experiences for people.",
  primaryCta: "Explore My Projects",
  secondaryCta: "Let's Connect",
  locationText: "Mangaluru, India"
};

export const aboutContent = {
  heading: "Learning Today. Building for Tomorrow.",
  introParagraphs: [
    "I am an undergraduate engineering student pursuing Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning at AJ Institute of Engineering and Technology, Mangaluru.",
    "My technical journey is driven by an active curiosity about how intelligence can be embedded into software. Rather than focusing solely on textbook theory, I enjoy exploring how modern Generative AI models and web technologies can come together to solve practical academic and everyday challenges.",
    "I am currently developing my foundations through rigorous academic coursework, iterative project planning, rapid prototyping, and AI-assisted engineering workflows. I believe in honest, hands-on learning—experimenting with ideas, testing assumptions, and progressively building scalable digital tools."
  ],
  overviewCards: [
    { label: "Education", value: "Computer Science Engineering — AI & ML", icon: "GraduationCap" },
    { label: "Institution", value: "AJ Institute of Engineering and Technology", icon: "Building2" },
    { label: "Location", value: "Mangaluru, Karnataka, India", icon: "MapPin" },
    { label: "Current Focus", value: "AI Applications, Generative AI & Web Dev", icon: "Sparkles" }
  ],
  coreValues: [
    {
      title: "Academic Curiosity",
      desc: "Building a grounded understanding of algorithms, operating systems, and core machine learning mathematics."
    },
    {
      title: "Hands-on Experimentation",
      desc: "Testing concepts through code, prototyping interfaces, and exploring new AI frameworks as they emerge."
    },
    {
      title: "Practical Problem Solving",
      desc: "Focusing on tools that genuinely improve student workflows, exam preparation, and information accessibility."
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-generative",
    title: "AI and Generative AI",
    code: "Category A",
    description: "Core conceptual understanding and exploration of machine intelligence and generative systems.",
    accentColor: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
    items: [
      "Artificial Intelligence",
      "Machine Learning fundamentals",
      "Generative AI concepts",
      "AI-powered application ideas"
    ]
  },
  {
    id: "programming-cs",
    title: "Programming and Computer Science",
    code: "Category B",
    description: "Foundational computer science principles, system architecture, and core coding languages.",
    accentColor: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-400",
    items: [
      "Python",
      "C programming",
      "Data Structures",
      "Java OOP",
      "Operating Systems",
      "Database Systems",
      "Design and Analysis of Algorithms"
    ]
  },
  {
    id: "web-product",
    title: "Web and Product Development",
    code: "Category C",
    description: "Modern frontend and full-stack building blocks, component design, and prototyping workflows.",
    accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
    items: [
      "HTML and CSS / web development fundamentals",
      "MERN stack fundamentals",
      "AI-assisted development",
      "Website prototyping and deployment workflows"
    ]
  },
  {
    id: "data-problem-solving",
    title: "Data and Problem Solving",
    code: "Category D",
    description: "Analytical techniques for working with tabular data, academic patterns, and solution ideation.",
    accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    items: [
      "Excel and data analytics fundamentals",
      "Student performance prediction concepts",
      "Academic data analysis",
      "Product ideation and problem solving"
    ]
  }
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "student-performance-prediction",
    title: "Student Performance Prediction",
    category: "Academic AI/ML Project",
    status: "Academic project — implementation status to be verified.",
    badgeType: "academic",
    shortDescription: "An academic project focused on exploring how student-related data can be analyzed to understand and predict academic performance.",
    problemStatement: "Students and educators need ways to identify academic performance patterns and understand which factors may influence results.",
    objectives: [
      "Explore relevant student performance data.",
      "Understand relationships between selected academic factors and results.",
      "Investigate suitable machine learning approaches for performance prediction.",
      "Present prediction results in an understandable format."
    ],
    methodologyOverview: "The planned pipeline involves conducting exploratory data analysis on student demographic and examination metrics, evaluating correlation matrices to discern influential variables, benchmarking supervised regression or classification algorithms, and synthesizing findings into accessible reports.",
    proposedTechnologies: [
      "Python (Proposed)",
      "Pandas (Proposed)",
      "Scikit-learn (Proposed)",
      "Matplotlib / Seaborn (Proposed)"
    ],
    evidence: {
      dataset: "Not yet added",
      resultsAndScreenshots: "Not yet added",
      githubRepo: "Not yet added",
      liveDemo: "Not yet added"
    },
    implementationStage: "Academic Research & Planning Stage",
    isConcept: false,
    accentColor: "cyan"
  },
  {
    id: "ai-academic-companion",
    title: "AI Academic Companion for Engineering Students",
    category: "Personal Project Concept",
    status: "Concept / in development — not a completed product.",
    badgeType: "concept",
    shortDescription: "An AI-powered learning platform concept designed to help engineering students understand subjects, prepare for examinations, and organize academic resources.",
    problemStatement: "Engineering curriculums often present dense technical subjects and scattered study materials, making it challenging for students to get clear explanations at their individual pace or efficiently analyze previous-year exam patterns.",
    objectives: [
      "Provide multi-tiered, subject-aware conceptual explanations.",
      "Consolidate previous-year questions systematically by semester and branch.",
      "Analyze historical exam archives to highlight frequently recurring topics.",
      "Bridge personalized learning with practical exam preparation in a single unified interface."
    ],
    plannedFeatures: [
      {
        title: "Subject-Aware AI Explanations",
        desc: "Context-specific breakdowns provided in easy, medium, and advanced detail levels to suit the student's current mastery."
      },
      {
        title: "Course-, Branch- & Subject-Specific PYQ Organization",
        desc: "Systematic classification of previous-year university questions by semester, engineering branch, and module."
      },
      {
        title: "Recurring Topic & High-Frequency Question Detection",
        desc: "Algorithmic analysis of past papers to highlight recurring question patterns and critical study topics."
      },
      {
        title: "AI-Generated Study Diagrams & Visual Guides",
        desc: "Exploratory generation of technical visual breakdowns to clarify intricate engineering mechanisms."
      },
      {
        title: "Marks Dashboard",
        desc: "Interactive interface for logging internal assessments and keeping academic progress organized."
      },
      {
        title: "Exploratory Student Performance Prediction",
        desc: "Predictive module analyzing coursework consistency to provide proactive academic insights."
      }
    ],
    methodologyOverview: "Architectural blueprint involves a modern React frontend connected to a FastAPI / Node.js backend. The intelligence layer will integrate Generative AI APIs for adaptive subject synthesis, paired with structured JSON schema databases for previous-year question repositories and curriculum indices.",
    proposedTechnologies: [
      "React / Vite (Frontend Concept)",
      "Python / FastAPI (Backend Concept)",
      "Generative AI APIs (Planned LLM Integration)",
      "Tailwind CSS (UI System)",
      "PostgreSQL / MongoDB (Planned Database)"
    ],
    evidence: {
      dataset: "Not yet added",
      resultsAndScreenshots: "Not yet added",
      githubRepo: "Not yet added",
      liveDemo: "Not yet added"
    },
    implementationStage: "System Architecture & Concept Development Stage",
    isConcept: true,
    accentColor: "purple"
  }
];

export const academicSubjectsExplored = [
  { name: "C Programming", category: "Core Languages" },
  { name: "Data Structures", category: "Computer Science Core" },
  { name: "Java OOP", category: "Object-Oriented Design" },
  { name: "Software Engineering", category: "Systems & Lifecycle" },
  { name: "Operating Systems", category: "Systems & Architecture" },
  { name: "Database Systems", category: "Data Management" },
  { name: "Design & Analysis of Algorithms", category: "Algorithmic Theory" },
  { name: "Unix / POSIX Fundamentals", category: "Environment & Shell" },
  { name: "MERN Stack Fundamentals", category: "Full-Stack Development" },
  { name: "Excel & Data Analytics", category: "Data Analytics" }
];

export const explorationThemes: ExplorationTheme[] = [
  {
    id: "ai-education",
    title: "AI for Education",
    tag: "Learning Assistive Tech",
    description: "Exploring ways AI can help students understand difficult concepts and prepare for examinations.",
    highlights: [
      "Multi-level concept simplification (beginner to exam-ready)",
      "Curating and structuring past engineering question papers",
      "Visual learning aids and structured topic summaries"
    ]
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    tag: "Emerging Models & Prompts",
    description: "Learning about AI-powered tools and ways to turn ideas into useful experiences.",
    highlights: [
      "Leveraging modern LLM APIs for interactive software features",
      "AI-assisted coding and structured prompt experimentation",
      "Synthesizing complex technical documentation into actionable steps"
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    tag: "Modern Interface Engineering",
    description: "Exploring how modern web technologies can make digital products accessible and easy to use.",
    highlights: [
      "Building responsive, accessible interfaces with React and Tailwind CSS",
      "Developing component-driven architectures with reusable design tokens",
      "Prototyping clean user experiences that make AI capabilities intuitive"
    ]
  }
];
