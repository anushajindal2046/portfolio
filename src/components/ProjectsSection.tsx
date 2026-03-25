import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import LanyardProjectCard from "./LanyardProjectCard";
import { PROJECTS, sectionContent } from "@/data/data";

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

  const goTo = useCallback((nextIndex: number, nextDirection: number) => {
    setIndexDirection([wrapIndex(nextIndex), nextDirection]);
  }, []);

  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  return (
    <section id="projects" className="projects-stage py-16 lg:py-20 border-t border-border relative overflow-hidden">

      <div className="layout-shell">
        <AnimatedSection>
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3 lg:mb-8">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-5">
              <span className="font-mono text-xs font-semibold tracking-[0.26em] text-muted-foreground">04</span>
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{sectionContent.projects.title}</h2>
              <span className="hidden h-px min-w-[120px] flex-1 bg-border/60 lg:block" />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-9 min-w-[86px] items-center justify-center rounded-lg border border-border/70 bg-card/55 px-3 text-xs font-semibold tracking-[0.08em] text-muted-foreground transition-all duration-300 hover:bg-card/80 hover:text-foreground"
                aria-label="Previous project"
              >
                <ArrowLeft size={12} className="mr-1.5" /> Prev
              </button>

              <div className="inline-flex h-9 min-w-[78px] items-center justify-center rounded-lg border border-border/70 bg-card/55 px-2.5 font-mono text-sm tracking-[0.12em] text-muted-foreground">
                {projectNumber} / {totalCount}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-9 min-w-[86px] items-center justify-center rounded-lg border border-border/70 bg-card/55 px-3 text-xs font-semibold tracking-[0.08em] text-muted-foreground transition-all duration-300 hover:bg-card/80 hover:text-foreground"
                aria-label="Next project"
              >
                Next <ArrowRight size={12} className="ml-1.5" />
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
                  className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(270px,42%),1fr] lg:items-start lg:gap-6"
                >
                  <LanyardProjectCard project={project} direction={direction} />

                  <motion.aside
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, duration: 0.45 }}
                    className="relative overflow-hidden rounded-xl border p-4 sm:p-5"
                    style={{
                      borderColor: project.palette.border,
                      background: `linear-gradient(135deg, ${project.palette.soft} 0%, var(--color-surface-strong) 48%, var(--card) 100%)`,
                    }}
                  >
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground">
                        PROJECT {projectNumber}
                      </span>
                      <span className="rounded-lg border bg-card/75 px-3 py-1 text-[12px] font-medium tracking-[0.08em] text-muted-foreground" style={{ borderColor: project.palette.border }}>
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-semibold leading-tight text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[12px] sm:text-[13px] text-muted-foreground">{project.subtitle}</p>

                    <div className="my-4 h-px w-full bg-border/55" />

                    <p className="text-[13px] sm:text-[14px] leading-[1.8] text-muted-foreground/88">{project.desc}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border bg-card/75 px-3 py-1 text-[11px] font-medium text-secondary-foreground"
                          style={{ borderColor: project.palette.border }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card"
                        >
                          <ArrowUpRight size={16} /> Website
                        </a>
                      ) : null}
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
                          className={`h-2.5 rounded-full transition-all duration-300 ${dotIndex === index ? "w-8" : "w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/70"}`}
                          style={dotIndex === index ? { background: `linear-gradient(90deg, ${project.palette.from}, ${project.palette.to})` } : undefined}
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
