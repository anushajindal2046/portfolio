import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { educationData, sectionContent } from "@/data/data";

const EducationSection = () => (
  <section id="education" className="py-16 lg:py-20 border-t border-border relative">

    <div className="layout-shell">
      <AnimatedSection>
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4 flex items-center gap-2">
          <GraduationCap size={14} className="text-accent" strokeWidth={1.5} />
          {sectionContent.education.sectionLabel}
        </p>
        <h2 className="font-display mb-8 text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
          Academic
          <br />
          <span>Background</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="space-y-3">
          {educationData.map((edu) => (
            <article
              key={edu.id}
              className="rounded-xl border border-[var(--color-surface-strong-border)] bg-[var(--color-surface-strong)] p-5 sm:p-6 backdrop-blur-[8px] transition-all duration-300 hover:bg-[var(--color-surface-strong-hover)]"
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[15px] sm:text-base font-semibold text-foreground leading-snug">{edu.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="mt-1 text-xs text-muted-foreground/70 font-mono">{edu.duration}</p>
                </div>
                {edu.score ? (
                  <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent font-mono whitespace-nowrap">
                    {edu.score}
                  </span>
                ) : null}
              </div>

              {edu.highlights && edu.highlights.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 text-[13px] text-muted-foreground/90">
                  {edu.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;
