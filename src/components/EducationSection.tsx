import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const education = [
  { degree: "Bachelor of Engineering", institution: "Chitkara University", year: "2023–Present", score: "CGPA: 8.62" },
  { degree: "Class XII", institution: "GMSSS Sec-16D, Chandigarh", year: "2023", score: "82.2%" },
  { degree: "Class X", institution: "Amravati Vidyalaya, Panchkula", year: "2021", score: "94.6%" },
];

const EducationSection = () => (
  <section id="education" className="py-16 lg:py-20 border-t border-border relative">
    <div className="layout-shell">
      <AnimatedSection>
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4 flex items-center gap-2">
          <GraduationCap size={14} className="text-accent" strokeWidth={1.5} />
          05 — Education
        </p>
        <h2 className="font-display mb-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Academic<br /><span>Background</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="space-y-0 border-t border-border">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-7 border-b border-border group hover:bg-card/50 transition-colors duration-300 px-3 gap-3"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground leading-snug">{edu.degree}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{edu.institution}</p>
                <p className="text-[11px] text-muted-foreground/70 mt-0.5 font-mono">{edu.year}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm text-accent font-bold font-mono bg-accent/10 border border-accent/30 rounded-full whitespace-nowrap">
                {edu.score}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;
