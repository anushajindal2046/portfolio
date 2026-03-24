import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { EXPERIENCE_ITEMS, sectionContent } from "@/data/data";

const ExperienceSection = () => (
  <section id="experience" className="py-16 lg:py-20 border-t border-border relative">

    <div className="layout-shell">
      <AnimatedSection>
        <div className="mb-8 flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-5">
          <span className="font-mono text-xs font-semibold tracking-[0.26em] text-muted-foreground inline-flex items-center gap-2">
            <Briefcase size={14} className="text-accent" strokeWidth={1.7} /> 02
          </span>
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {sectionContent.experience.title}
          </h2>
          <span className="hidden h-px min-w-[90px] flex-1 bg-border/60 lg:block" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="space-y-0 border-t border-border">
          {EXPERIENCE_ITEMS.map((exp) => (
            <div
              key={exp.title}
              className="py-6 border-b border-border group hover:bg-card/50 transition-colors duration-300 px-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">{exp.title}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">{exp.subtitle}</p>
                </div>
                {exp.tag ? (
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    {exp.tag}
                  </span>
                ) : null}
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;

