import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import LanyardProjectCard from "./LanyardProjectCard";

const PROJECTS = [
  {
    id: "b-ware-claims",
    name: "B-ware: AI-Powered Claim Verification Platform",
    subtitle: "Claim Detection, Analysis, and Verification",
    year: "2025",
    image: "./bware.png",
    desc: "Built an AI-driven platform for real-time claim verification with NLP microservices for evidence extraction, credibility scoring, secure APIs, and Dockerized deployment.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Redis", "Python (NLP)", "Docker"],
    github: "https://github.com/anushajindal2046",
    live: "https://github.com/anushajindal2046",
  },
  {
    id: "resume-analyzer",
    name: "AI Resume Analyzer + Company Fit Predictor",
    subtitle: "AI-powered Resume & Fit Analysis",
    year: "2025",
    image: "./resume-ai.png",
    desc: "Developed an AI-powered system for automated resume analysis and candidate evaluation with PDF and DOCX parsing, weighted skill-gap scoring, and company-fit prediction.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "NLP"],
    github: "https://github.com/anushajindal2046",
    live: "https://github.com/anushajindal2046",
  },
  {
    id: "scoopy-doo",
    name: "Scoopy Doo",
    subtitle: "Real-Time Dessert Commerce Suite",
    year: "2024",
    image: "",
    desc: "Production-ready e-commerce build with JWT auth, role-based admin flows, and Socket.IO updates. Added Redis caching and test automation for consistent checkout reliability.",
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "EJS"],
    github: "https://github.com/anushajindal2046",
    live: "https://github.com/anushajindal2046",
  },
  {
    id: "fitness-point",
    name: "Fitness Point",
    subtitle: "Smart Fitness Tracking Platform",
    year: "2024",
    image: "",
    desc: "End-to-end workout and nutrition tracking app with role-based dashboarding, goal progression, and personalized reminders over a modular service architecture.",
    tech: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    github: "https://github.com/anushajindal2046",
    live: "https://github.com/anushajindal2046",
  },
  {
    id: "quizzard",
    name: "Quizzard",
    subtitle: "Interactive Quiz App",
    year: "2024",
    image: "/quiz.png",
    desc: "Dynamic quiz platform with real-time score calculation, instant feedback, and answer validation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/anushajindal2046",
    live: "https://github.com/anushajindal2046",
  },
];

const wrapIndex = (next: number) => (next + PROJECTS.length) % PROJECTS.length;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? 72 : -72,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? -72 : 72,
    opacity: 0,
  }),
};

const ProjectsSection = () => {
  const [[index, direction], setIndexDirection] = useState<[number, number]>([0, 1]);
  const project = PROJECTS[index];
  const projectNumber = useMemo(() => `${index + 1}`.padStart(2, "0"), [index]);
  const totalCount = useMemo(() => `${PROJECTS.length}`.padStart(2, "0"), []);

  const goTo = (nextIndex: number, nextDirection: number) => {
    setIndexDirection([wrapIndex(nextIndex), nextDirection]);
  };

  const goNext = () => goTo(index + 1, 1);
  const goPrev = () => goTo(index - 1, -1);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index]);

  return (
    <section id="projects" className="projects-stage py-16 lg:py-20 border-t border-border relative overflow-hidden">
      <div className="absolute top-8 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
      <div className="absolute top-8 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>
      <div className="projects-orb projects-orb-left" aria-hidden="true" />
      <div className="projects-orb projects-orb-right" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 lg:mb-10">
            <div className="flex min-w-0 items-center gap-4 lg:gap-5">
              <span className="font-mono text-sm font-semibold tracking-[0.3em] text-muted-foreground">04</span>
              <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Projects</h2>
              <span className="hidden h-px min-w-[120px] flex-1 bg-border/60 lg:block" />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-11 min-w-[112px] items-center justify-center rounded-xl border border-border/70 bg-card/55 px-4 text-sm font-semibold tracking-[0.1em] text-muted-foreground transition-all duration-300 hover:bg-card/80 hover:text-foreground"
                aria-label="Previous project"
              >
                <ArrowLeft size={14} className="mr-2" /> Prev
              </button>

              <div className="inline-flex h-11 min-w-[92px] items-center justify-center rounded-xl border border-border/70 bg-card/55 px-3 font-mono text-base tracking-[0.16em] text-muted-foreground">
                {projectNumber} / {totalCount}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-11 min-w-[112px] items-center justify-center rounded-xl border border-border/70 bg-card/55 px-4 text-sm font-semibold tracking-[0.1em] text-muted-foreground transition-all duration-300 hover:bg-card/80 hover:text-foreground"
                aria-label="Next project"
              >
                Next <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="relative">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.88}
              onDragEnd={(_, info) => {
                if (info.offset.x < -90 || info.velocity.x < -420) goNext();
                if (info.offset.x > 90 || info.velocity.x > 420) goPrev();
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(330px,48%),1fr] lg:items-start lg:gap-8"
                >
                  <LanyardProjectCard project={project} direction={direction} />

                  <motion.aside
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, duration: 0.45 }}
                    className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/70 p-6 sm:p-7"
                  >
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground">
                        PROJECT {projectNumber}
                      </span>
                      <span className="rounded-lg border border-border/70 bg-card/70 px-3 py-1 text-[12px] font-medium tracking-[0.08em] text-muted-foreground">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-4xl font-semibold leading-tight text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[14px] text-muted-foreground">{project.subtitle}</p>

                    <div className="my-5 h-px w-full bg-border/55" />

                    <p className="text-[15px] leading-[1.9] text-muted-foreground/88">{project.desc}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/70 bg-card/75 px-3 py-1 text-[11px] font-medium text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card"
                      >
                        <ArrowUpRight size={16} /> Website
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                      >
                        <Github size={16} /> Source
                      </a>
                    </div>

                    <div className="mt-5 flex items-center gap-2">
                      {PROJECTS.map((item, dotIndex) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${dotIndex === index ? "w-8 bg-foreground" : "w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/70"}`}
                          aria-label={`Go to ${item.name}`}
                        />
                      ))}
                    </div>
                  </motion.aside>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
