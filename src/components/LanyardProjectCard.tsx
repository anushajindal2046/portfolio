import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  desc: string;
  tech: string[];
  github: string;
  live: string;
};

type LanyardProjectCardProps = {
  project: Project;
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

const accentFromName = (name: string) => {
  const hash = Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = hash % 360;

  return {
    accent: `hsl(${hue} 88% 58%)`,
    accentSoft: `hsl(${hue} 85% 55% / 0.24)`,
  };
};

const LanyardProjectCard = ({ project, direction }: LanyardProjectCardProps) => {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = useMemo(() => toInitials(project.name), [project.name]);
  const colors = useMemo(() => accentFromName(project.name), [project.name]);
  const showFallback = !project.image || imgFailed;

  return (
    <div className="projects-shell mx-auto w-full max-w-[500px] lg:mx-0" style={{ "--project-accent": colors.accent, "--project-accent-soft": colors.accentSoft } as CSSProperties}>
      <div className="lanyard-clip" aria-hidden="true" />
      <div className="lanyard-strap" aria-hidden="true" />

      <motion.article
        key={project.id}
        initial={{ opacity: 0, rotate: direction >= 0 ? -7 : 7, y: -24, x: direction >= 0 ? -14 : 14 }}
        animate={{ opacity: 1, rotate: 0, y: 0, x: 0 }}
        exit={{ opacity: 0, rotate: direction >= 0 ? 5 : -5, y: 18, x: direction >= 0 ? 22 : -22 }}
        transition={{ type: "spring", stiffness: 165, damping: 18, mass: 0.95 }}
        whileHover={{ y: -6, scale: 1.015, boxShadow: `0 28px 70px -26px ${colors.accentSoft}` }}
        className="lanyard-card"
      >
        <div className="lanyard-accent" />

        <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70 bg-card/60">
          {showFallback ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card via-muted/35 to-card">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-border/70 bg-card text-3xl font-bold tracking-[0.12em] text-foreground/90 shadow-xl">
                {initials}
              </div>
            </div>
          ) : (
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
              onError={() => setImgFailed(true)}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <footer className="flex items-center justify-between gap-2.5 bg-black/45 px-3.5 py-3 sm:px-4 sm:py-3.5">
          <h3 className="truncate font-display text-[30px] leading-none hidden" aria-hidden="true" />
          <h3 className="truncate font-display text-3xl hidden" aria-hidden="true" />
          <h3 className="truncate font-display text-sm sm:text-base font-semibold tracking-tight text-foreground">{project.name}</h3>
          <span className="font-semibold text-[12px] tracking-[0.08em]" style={{ color: colors.accent }}>
            {project.year}
          </span>
        </footer>
      </motion.article>
    </div>
  );
};

export default LanyardProjectCard;
