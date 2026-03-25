import { Code2, Server, Shield, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ABOUT_HIGHLIGHTS, aboutContent } from "@/data/data";

const highlightIconMap = {
  Code2,
  Server,
  Shield,
  Zap,
};

const AboutSection = () => (
  <section id="about" className="py-16 lg:py-20 relative">

    <div className="layout-shell">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
              {aboutContent.sectionLabel}
            </p>
            <h2 className="font-display mb-6 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] text-foreground">
              Full Stack Developer
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mb-5 text-xs sm:text-sm text-muted-foreground leading-[1.8]">
              I&apos;m a results-driven Full Stack Developer with strong expertise in web development, Java, system design, and database management. With a solid foundation in Data Structures &amp; Algorithms, DBMS, OS, and Computer Networks, I build production-ready applications that scale.
            </p>
            <p className="mb-5 text-xs sm:text-sm text-muted-foreground leading-[1.8]">
              My passion lies in microservices architecture, MVC patterns, RESTful APIs, and creating secure authentication systems. I specialize in Spring Boot backend development, real-time applications with Node.js, and building efficient systems that prioritize performance and security.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-[1.8]">
              Whether architecting complex systems or optimizing database queries, I&apos;m committed to delivering solutions that solve real-world problems with clean, maintainable code.
            </p>
          </AnimatedSection>
        </div>

        <div className="lg:col-span-7">
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {ABOUT_HIGHLIGHTS.map(({ iconKey, title, desc }) => {
                const Icon = highlightIconMap[iconKey];
                return (
                  <div
                    key={title}
                    className="rounded-xl p-6 bg-card border border-border hover:border-foreground/20 transition-all duration-500 group hover-lift"
                  >
                    <Icon size={20} className="text-accent mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-foreground tracking-wide mb-1">{title}</h4>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
