import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import type { PortfolioProject } from "@/data/data";

type LanyardProjectCardProps = {
  project: PortfolioProject;
  direction: number;
};

const toInitials = (name: string) => {
  const parts = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0]?.toUpperCase() || "");

  return parts.join("") || "PR";
};

const LanyardProjectCard = ({ project, direction }: LanyardProjectCardProps) => {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = useMemo(() => toInitials(project.name), [project.name]);
  const showFallback = !project.image || imgFailed;

  return (
    <div
      className="projects-shell mx-auto w-full max-w-[500px] lg:mx-0"
      style={{ "--project-accent": project.palette.from, "--project-accent-soft": project.palette.soft } as CSSProperties}
    >
      <div className="lanyard-clip" aria-hidden="true" />
      <div className="lanyard-strap" aria-hidden="true" />

      <motion.article
        key={project.id}
        initial={{ opacity: 0, rotate: direction >= 0 ? -7 : 7, y: -24, x: direction >= 0 ? -14 : 14 }}
        animate={{ opacity: 1, rotate: 0, y: 0, x: 0 }}
        exit={{ opacity: 0, rotate: direction >= 0 ? 5 : -5, y: 18, x: direction >= 0 ? 22 : -22 }}
        transition={{ type: "spring", stiffness: 165, damping: 18, mass: 0.95 }}
        whileHover={{ y: -6, scale: 1.015, boxShadow: `0 28px 70px -26px ${project.palette.soft}` }}
        className="lanyard-card"
      >
        <div className="lanyard-accent" />

        <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70 bg-[var(--color-project-media-bg)]">
          {showFallback ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-project-media-bg)] via-[var(--color-surface-strong)] to-[var(--card)]">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-border/70 bg-[var(--color-surface-strong)] text-3xl font-bold tracking-[0.12em] text-foreground/90 shadow-xl">
                {initials}
              </div>
            </div>
          ) : (
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-contain p-2"
              onError={() => setImgFailed(true)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
            style={{ background: `linear-gradient(180deg, transparent 0%, ${project.palette.soft} 100%)` }}
          />
        </div>

        <footer className="flex items-center justify-between gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3.5" style={{ background: "var(--color-project-footer-bg)" }}>
          <h3 className="truncate font-display text-sm sm:text-base font-semibold tracking-tight text-foreground">{project.name}</h3>
          <span className="font-semibold text-[12px] tracking-[0.08em]" style={{ color: project.palette.text }}>
            {project.year}
          </span>
        </footer>
      </motion.article>
    </div>
  );
};

export default LanyardProjectCard;
