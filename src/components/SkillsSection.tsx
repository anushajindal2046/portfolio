import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  HardDrive,
  Layers,
  MessageSquare,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  TerminalSquare,
  Users,
  Wrench,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SKILL_CATEGORIES, sectionContent } from "@/data/data";

const skillIconMap: Record<string, LucideIcon> = {
  Java: Code2,
  "C++": Braces,
  Python: TerminalSquare,
  SQL: Database,
  JavaScript: Braces,
  "HTML/CSS": Globe,
  "Node.js": Server,
  Express: Layers,
  "Spring Boot": Cpu,
  React: Monitor,
  MySQL: Database,
  MongoDB: HardDrive,
  Redis: Database,
  "AWS EC2": Cloud,
  "AWS S3": Cloud,
  Git: GitBranch,
  Postman: Wrench,
  "VS Code": Monitor,
  "Socket.IO": Network,
  DSA: Braces,
  OOP: Layers,
  DBMS: Database,
  OS: Cpu,
  Networks: Network,
  "System Design": Server,
  Communication: MessageSquare,
  Leadership: ShieldCheck,
  "Team Management": Users,
  "Problem Solving": Wrench,
};

const SkillsSection = () => (
  <section id="skills" className="py-16 lg:py-20 border-t border-border relative overflow-hidden">

    <div className="layout-shell">
      <AnimatedSection>
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
          {sectionContent.skills.sectionLabel}
        </p>
        <h2 className="font-display mb-10 text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
          Tools &amp;
          <br />
          <span>Technologies</span>
        </h2>
      </AnimatedSection>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="h-full rounded-xl border border-[var(--color-surface-strong-border)] bg-[var(--color-surface-strong)] p-5 sm:p-6 group backdrop-blur-[8px] hover:bg-[var(--color-surface-strong-hover)] transition-all duration-300"
          >
            <motion.div
              aria-hidden="true"
              className="mb-4 h-[2px] w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--accent)) 0%, transparent 100%)" }}
              animate={{ x: [0, 22, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            />

            <h3 className="mb-4 text-[10px] tracking-[0.2em] text-accent font-medium uppercase">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => {
                const Icon = skillIconMap[skill] ?? Wrench;
                return (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92, y: 8 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.03 + i * 0.05 }}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border/75 bg-background/35 px-2.5 py-1 text-[11px] text-secondary-foreground hover:border-foreground/30 hover:text-foreground transition-all duration-300 cursor-default"
                  >
                    <Icon size={12} strokeWidth={1.8} />
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
