export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
};

export type ExpertiseItem = {
  id: string;
  title: string;
  description: string;
  icon: "stack" | "server" | "api" | "shield" | "speed" | "realtime";
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
};

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  score?: string;
  highlights?: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  sourceUrl: string;
  palette: ProjectPalette;
};

export type ProjectPalette = {
  from: string;
  to: string;
  soft: string;
  border: string;
  text: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  subtitle?: string;
  image: string;
};

export const personalInfo = {
  name: "Anusha Jindal",
  initials: "AJ",
  role: "Full Stack Developer",
  focus: "Architecture-first backend and product engineering",
  location: "Kalka, Haryana, India",
  email: "anushajindal1940@gmail.com",
  phone: "+91 9588575578",
  availability: "Open to full-time roles, internships, and high-impact freelance projects.",
  shortBio:
    "I design scalable backend systems and production-ready full stack applications with a strong focus on clean architecture, secure APIs, and maintainable code.",
};

export const navLinks: NavLink[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "education", label: "Education", href: "#education" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "certificates", label: "Certificates", href: "#certificates" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/anushajindal2046", icon: "github" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/anusha-jindal-36959028a", icon: "linkedin" },
  { id: "email", label: "Email", href: "mailto:anushajindal2046@gmail.com", icon: "email" },
];

export const heroContent = {
  sectionLabel: "00 - FULL STACK DEVELOPER",
  headingName: personalInfo.name,
  introLines: [
    "Building scalable backend systems with clean architecture.",
    "Delivering secure APIs, real-time products, and high-performance web experiences.",
  ],
  roles: ["Full-Stack Developer", "Backend Developer", "System Design Enthusiast", "Problem Solver"],
  primaryCta: {
    label: "View Work",
    href: "#projects",
  },
  secondaryCta: {
    label: "Contact Me",
    href: "#contact",
  },
};

export const aboutContent = {
  sectionLabel: "01 - ABOUT",
  title: "Architecture-First\nDeveloper",
  paragraphs: [
    "I am a results-driven Full Stack Developer with strong backend depth in system design, API engineering, and secure service development. I build applications that are stable in production and easy to scale.",
    "My work blends backend architecture and product-focused frontend execution. I care about maintainability, readable code, thoughtful abstractions, and practical performance improvements.",
    "From real-time collaboration systems to analytics platforms, I focus on shipping reliable software that solves real business and user problems.",
  ],
  expertise: [
    {
      id: "full-stack",
      title: "Full Stack Development",
      description: "End-to-end product development from backend services to polished frontend experiences.",
      icon: "stack",
    },
    {
      id: "backend",
      title: "Backend Systems",
      description: "Modular backend architecture using layered services and robust domain boundaries.",
      icon: "server",
    },
    {
      id: "api-design",
      title: "API Design",
      description: "RESTful API design with consistent contracts, validation, and version-friendly patterns.",
      icon: "api",
    },
    {
      id: "security",
      title: "Authentication / Security",
      description: "JWT, RBAC, and secure authorization flows for protected enterprise-ready applications.",
      icon: "shield",
    },
    {
      id: "performance",
      title: "Performance Optimization",
      description: "Query optimization, caching strategies, and tuning for predictable system performance.",
      icon: "speed",
    },
    {
      id: "realtime",
      title: "Real-time Applications",
      description: "Socket-driven collaboration and low-latency event pipelines for interactive products.",
      icon: "realtime",
    },
  ] as ExpertiseItem[],
};

export const sectionContent = {
  experience: {
    sectionLabel: "02 - EXPERIENCE",
    title: "Experience",
  },
  education: {
    sectionLabel: "03 - EDUCATION",
    title: "Education",
  },
  projects: {
    sectionLabel: "04 - PROJECTS",
    title: "Projects",
  },
  skills: {
    sectionLabel: "05 - TECH STACK",
    title: "Skills",
  },
  certificates: {
    sectionLabel: "06 - CERTIFICATES",
    title: "Certificates",
  },
  resume: {
    sectionLabel: "07 - RESUME",
    title: "Resume",
  },
  contact: {
    sectionLabel: "08 - CONTACT",
    title: "Contact",
  },
};

export const experienceData: ExperienceItem[] = [
  {
    id: "redhat",
    role: "Outreach Team Member",
    company: "Red Hat Club, Chitkara University",
    duration: "2024 - 2025",
    location: "",
    highlights: [
      "Led event promotion strategies through digital campaigns and on-campus coordination.",
      "Anchored technical events and improved participant communication quality.",
      "Built supporting web pages and promotional assets in collaboration with cross-functional teams.",
    ],
  },
  {
    id: "c2s2",
    role: "Core Member",
    company: "C2S2 Reflection Club",
    duration: "2023 - 2024",
    location: "",
    highlights: [
      "Contributed to event ideation, branding, and execution for technical and community programs.",
      "Coordinated planning workflows and improved event communication material quality.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "btech",
    degree: "B.E. in Computer Science and Engineering",
    institution: "Chitkara University",
    duration: "Aug 2023 - Aug 2027",
    score: "CGPA: 8.66/10",
    highlights: [
      "Core focus: Data Structures, DBMS, Operating Systems, Computer Networks, and System Design.",
      "Built full stack and backend-heavy projects with scalable architecture and secure API practices.",
    ],
  },
  {
    id: "class-12",
    degree: "Class XII",
    institution: "GMSSS Sec-16D, Chandigarh",
    duration: "2023",
    score: "82.2%",
  },
  {
    id: "class-10",
    degree: "Class X",
    institution: "Amravati Vidyalaya, Panchkula",
    duration: "2021",
    score: "94.6%",
  },
];

export const projectData: ProjectItem[] = [
  {
    id: "b-ware",
    title: "B-ware",
    subtitle: "AI Claim Verification Platform",
    year: "2025",
    description:
      "AI-driven verification platform with NLP-powered evidence extraction, credibility scoring, and secure API workflows. Designed with modular services and containerized deployment for maintainability.",
    techStack: ["React", "Node.js", "Express", "MySQL", "Redis", "Python"],
    image: "/images/projects/bware.png",
    imageAlt: "B-ware project dashboard preview",
    liveUrl: "https://github.com/anushajindal2046",
    sourceUrl: "https://github.com/anushajindal2046",
    palette: {
      from: "#2563eb",
      to: "#93c5fd",
      soft: "rgba(44, 108, 172, 0.50)",
      border: "rgba(56, 189, 248, 0.52)",
      text: "#ffffff",
    },
  },
  {
    id: "resume-analyzer",
    title: "Resume Analyzer",
    subtitle: "AI Resume + Company Fit Predictor",
    year: "2025",
    description:
      "Resume intelligence engine that parses PDF and DOCX documents, computes weighted skill gaps, and predicts profile-fit alignment for target company stacks.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "NLP"],
    image: "/images/projects/resume-ai.png",
    imageAlt: "Resume analyzer platform interface",
    liveUrl: "https://github.com/anushajindal2046",
    sourceUrl: "https://github.com/anushajindal2046",
    palette: {
      from: "#16a34a",
      to: "#86efac",
      soft: "rgba(12, 157, 122, 0.42)",
      border: "rgba(45, 212, 191, 0.40)",
      text: "#ffffff",
    },
  },
  {
    id: "scoopy-doo",
    title: "Scoopy Doo",
    subtitle: "Real-time Dessert Commerce Suite",
    year: "2024",
    description:
      "Commerce application with secure auth, role-based admin operations, and Socket.IO real-time updates. Added Redis caching and workflow-focused reliability improvements.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "EJS"],
    image: "/images/projects/scoopyDoo.png",
    imageAlt: "Scoopy Doo commerce app preview",
    liveUrl: "https://github.com/anushajindal2046",
    sourceUrl: "https://github.com/anushajindal2046",
    palette: {
      from: "#c084fc",
      to: "#f472b6",
      soft: "rgba(255, 255, 255, 0.18)",
      border: "rgba(255, 255, 255, 0.22)",
      text: "#fff",
    },
  },
  {
    id: "fitness-point",
    title: "Fitness Point",
    subtitle: "Smart Workout and Nutrition Tracker",
    year: "2024",
    description:
      "Progress-focused fitness platform with role-aware dashboards, schedule workflows, and personalized recommendations across a service-oriented backend.",
    techStack: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    image: "/images/projects/fitnessPoint.png",
    imageAlt: "Fitness Point dashboard preview",
    sourceUrl: "https://github.com/anushajindal2046",
    palette: {
      from: "#f89820",
      to: "#b45309",
      soft: "rgba(235, 127, 39, 0.35)",
      border: "rgba(251, 146, 60, 0.32)",
      text: "#fff",
    },
  },
  {
    id: "quizzard",
    title: "Quizzard",
    subtitle: "Interactive Quiz Experience",
    year: "2024",
    description:
      "Fast and lightweight quiz platform with instant feedback, score tracking, and clean interactive state handling.",
    techStack: ["JavaScript", "HTML", "CSS"],
    image: "/images/projects/quiz.png",
    imageAlt: "Quizzard app preview",
    liveUrl: "https://github.com/anushajindal2046",
    sourceUrl: "https://github.com/anushajindal2046",
    palette: {
      from: "#f87171",
      to: "#fde68a",
      soft: "rgba(248, 113, 113, 0.18)",
      border: "rgba(255, 255, 255, 0.15)",
      text: "#fff",
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "REST APIs", "Socket.IO", "JWT"],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"],
  },
  {
    id: "devops-cloud",
    title: "DevOps / Cloud",
    items: ["Docker", "AWS", "CI/CD", "Linux", "Vercel"],
  },
  {
    id: "tools",
    title: "Tools / Platforms",
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma"],
  },
  {
    id: "concepts",
    title: "Concepts",
    items: [
      "System Design",
      "Microservices",
      "Authentication",
      "Caching",
      "Problem Solving",
      "Performance Tuning",
    ],
  },
];

export const certificateData: CertificateItem[] = [
  {
    id: "microsoft-gen-ai-agents",
    title: "Microsoft - Introduction to Generative AI and Agents",
    issuer: "Microsoft",
    year: "2026",
    subtitle: "Introduction to generative AI and agents",
    image: "/certificates/",
  },
  {
    id: "google-cloud-gen-ai",
    title: "Google Cloud - Introduction to Generative AI",
    issuer: "Google Cloud",
    year: "2026",
    subtitle: "Generative AI completion badge",
    image: "/certificates/generative-ai.png",
  },
  {
    id: "thingqbator",
    title: "ThingQbator Certificate",
    issuer: "ThingQbator",
    year: "2025",
    subtitle: "MERN stack training and project completion",
    image: "/certificates/thingQbator.png",
  },
  {
    id: "python-cn",
    title: "Introduction to Python",
    issuer: "Coding Ninjas",
    year: "2023",
    subtitle: "Python fundamentals and problem solving",
    image: "/certificates/python-cn.png",
  },
  {
    id: "cloud-eng",
    title: "Cloud Computing",
    issuer: "Duke University",
    year: "2025",
    subtitle: "Cloud concepts and distributed systems basics",
    image: "/certificates/cloud-eng.png",
  },
  {
    id: "cyber",
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    subtitle: "Security fundamentals and threat awareness",
    image: "/certificates/cyber-cisco.png",
  },
  {
    id: "networking",
    title: "Networking Fundamentals",
    issuer: "Akamai / Coursera",
    year: "2024",
    subtitle: "Core networking protocols and architecture",
    image: "/certificates/Network_Academy_Certificate.png",
  },
  {
    id: "c-programming",
    title: "Introductory C Programming",
    issuer: "Duke University",
    year: "2024",
    subtitle: "Core C language foundations",
    image: "/certificates/c-prog.png",
  },
  {
    id: "communication",
    title: "Communication Skills for Engineers",
    issuer: "Rice University",
    year: "2023",
    subtitle: "Professional communication and presentation",
    image: "/certificates/communication-skill.png",
  },
];

export const contactInfo = {
  sectionLabel: sectionContent.contact.sectionLabel,
  heading: "Let us build something together.",
  availabilityLine:
    "I am available for backend-heavy full stack roles and collaborative product work. I typically respond within 24 hours.",
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
  github: "https://github.com/anushajindal2046",
  linkedin: "https://www.linkedin.com/in/anusha-jindal-36959028a",
  form: {
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Tell me about your project, product, or role...",
    submitLabel: "Send Message",
  },
};

export const resumeData = {
  sectionLabel: sectionContent.resume.sectionLabel,
  title: "Resume",
  filePath: "/resume/Anusha_Jindal_Resume.pdf",
  downloadLabel: "Download Resume",
  openLabel: "Open in Browser",
};

// Backward-compatible exports used by current components
export const RESUME_PDF_PATH = resumeData.filePath;
export const RESUME_PREVIEW_IMAGE_PATH = "/images/resume/resume.png";
export const NAV_LINKS = navLinks
  .filter(({ id }) => id !== "education" && id !== "resume")
  .map(({ id, label, href }) => {
  const formattedLabel =
    id === "certificates"
      ? "ACHIEVEMENTS"
      : id === "skills"
        ? "TECH STACK"
        : label;

  return { label: formattedLabel, href };
});
export const HERO_ROLES = heroContent.roles;

export const ABOUT_HIGHLIGHTS = [
  { iconKey: "Code2", title: "Full Stack Development", desc: "End-to-end product development from backend services to polished frontend experiences." },
  { iconKey: "Server", title: "Backend Systems", desc: "Modular backend architecture using layered services and robust domain boundaries." },
  { iconKey: "Shield", title: "Authentication / Security", desc: "JWT, RBAC, and secure authorization flows for protected enterprise-ready applications." },
  { iconKey: "Zap", title: "Performance Optimization", desc: "Query optimization, caching strategies, and tuning for predictable system performance." },
] as const;

export const EDUCATION_ITEMS = educationData.map((item) => ({
  degree: item.degree,
  institution: item.institution,
  year: item.duration,
  score: item.score || "",
}));

export const EXPERIENCE_ITEMS = experienceData.map((item) => ({
  title: item.role,
  subtitle: `${item.company} | ${item.duration}`,
  tag: item.location,
  bullets: item.highlights,
}));

export const SKILL_CATEGORIES = skillCategories.map((category) => ({ title: category.title, skills: category.items }));

export type PortfolioProject = {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  palette: ProjectPalette;
};

export const PROJECTS: PortfolioProject[] = projectData.map((project) => ({
  id: project.id,
  name: project.title,
  subtitle: project.subtitle,
  year: project.year,
  image: project.image,
  desc: project.description,
  tech: project.techStack,
  github: project.sourceUrl,
  live: project.liveUrl,
  palette: project.palette,
}));

export const CONTACT_LINKS = [
  { iconKey: "Phone", label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { iconKey: "Mail", label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { iconKey: "Linkedin", label: "LinkedIn", href: socialLinks.find((link) => link.id === "linkedin")?.href || "#" },
  { iconKey: "Github", label: "GitHub", href: socialLinks.find((link) => link.id === "github")?.href || "#" },
] as const;
