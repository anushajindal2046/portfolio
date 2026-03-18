import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "RedHat Club — Outreach Team Member",
    subtitle: "Chitkara University | Ex-Member",
    bullets: [
      "Served as an active member of the Outreach Team.",
      "Led event promotions through digital campaigns and on-campus marketing initiatives.",
      "Hosted and anchored multiple technical and community-driven events.",
      "Contributed to the design and development of event websites and promotional materials.",
      "Collaborated with cross-functional teams to enhance event participation and audience engagement.",
    ],
  },
  {
    title: "C2S2 Reflection Club — Core Member",
    subtitle: "Chitkara University | Ex-Member",
    bullets: [
      "Designed creative artwork and branding materials for club events.",
      "Contributed to event ideation, planning, and conceptual development.",
      "Hosted and coordinated cultural and technical events.",
      "Worked collaboratively with team members to ensure smooth and successful event execution.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-16 lg:py-20 border-t border-border relative">
    <div className="layout-shell">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase size={18} className="text-accent" strokeWidth={1.5} />
          <h3 className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase">Experience</h3>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="space-y-0 border-t border-border">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="py-6 border-b border-border group hover:bg-card/50 transition-colors duration-300 px-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">{exp.title}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">{exp.subtitle}</p>
                </div>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {index === 0 ? "Outreach" : "Core Member"}
                </span>
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

