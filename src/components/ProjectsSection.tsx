import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    num: "01",
    title: "Fitness Point",
    subtitle: "Fitness Tracking Platform",
    tech: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    description: "Full-stack application for workout and diet management with RESTful APIs using Controller-Service-Repository architecture.",
    highlights: ["Microservices with API Gateway & Eureka Server", "Responsive Thymeleaf UI", "Complete CRUD operations"],
    github: "https://github.com/anushajindal2046",
  },
  {
    num: "02",
    title: "Quizzard",
    subtitle: "Interactive Quiz App",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Dynamic quiz platform with real-time score calculation, instant feedback, and answer validation.",
    highlights: ["Dynamic question rendering", "Cross-browser compatible", "Responsive design"],
    github: "https://github.com/anushajindal2046",
  },
  {
    num: "03",
    title: "Scoopy Doo",
    subtitle: "Scoop Into Happiness",
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "EJS"],
    description: "Production-ready MVC architecture with JWT auth, bcrypt hashing, role-based authorization, and real-time communication.",
    highlights: ["Socket.IO real-time features", "Redis caching layer", "Jest & Puppeteer testing"],
    github: "https://github.com/anushajindal2046",
  },
  {
    num: "04",
    title: "AI Resume Analyzer + Company Fit Predictor",
    subtitle: "AI-powered Resume & Fit Analysis",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "NLP"],
    description: "Automated resume analysis and candidate evaluation system supporting multiple document formats (PDF, DOCX).",
    highlights: [
      "Resume parsing for PDF/DOCX",
      "Skill gap analysis engine (50+ parameters)",
      "Company fit prediction model (+25% accuracy)",
      "Weighted scoring for candidate evaluation",
      "Responsive React interface for usability"
    ],
    github: "https://github.com/anushajindal2046",
  },
  {
    num: "05",
    title: "B-ware: AI-Powered Claim Verification Platform",
    subtitle: "AI-driven Claim Detection & Verification",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Redis", "Python (NLP)", "Docker"],
    description: "Real-time claim detection, analysis, and verification platform with advanced NLP microservices.",
    highlights: [
      "NLP microservices for evidence extraction",
      "Credibility scoring & trending analytics",
      "Scalable backend API with secure auth",
      "Responsive React dashboard",
      "Dockerized services for deployment",
      "Automated testing pipelines (frontend & NLP)"
    ],
    github: "https://github.com/anushajindal2046",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-16 lg:py-20 border-t border-border relative">
    <div className="absolute top-8 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
    <div className="absolute top-8 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="mb-10 lg:mb-14 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
              02 — Featured Projects
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Real-World
              <br />
              <span>Applications</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
            A selection of backend-heavy and full stack projects. More projects and live previews can be added later
            with images as the portfolio grows.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="group h-full rounded-lg border border-border bg-card/60 hover:bg-card/90 overflow-hidden flex flex-col"
            >
              <div className="px-5 pt-5 pb-4 flex items-center justify-between gap-2 border-b border-border/60">
                <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                  {project.num.padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  <span className="h-1 w-8 rounded-full bg-accent/70 group-hover:w-10 transition-all duration-500" />
                  <span className="h-1 w-4 rounded-full bg-accent/30 group-hover:w-6 transition-all duration-500" />
                </div>
              </div>

              <div className="px-5 pt-4 pb-5 flex-1 flex flex-col gap-3">
                <div>
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-[0.18em]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mt-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-[11px] text-muted-foreground/80 flex items-start gap-2">
                      <span className="mt-1 h-[5px] w-[5px] rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-5 pb-4 pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-[10px] tracking-[0.14em] border border-border/70 text-secondary-foreground uppercase group-hover:border-accent/70 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Github size={14} strokeWidth={1.5} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/80 cursor-default"
                  >
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                    <span className="hidden sm:inline">Preview soon</span>
                  </button>
                </div>
              </div>
            </motion.article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
