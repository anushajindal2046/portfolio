import AnimatedSection from "./AnimatedSection";
import { certificateData, sectionContent } from "@/data/data";

const CertificatesSection = () => (
  <section id="certificates" className="py-14 lg:py-16 border-t border-border relative">

    <div className="layout-shell">
      <AnimatedSection>
        <div className="mb-8 flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-5">
          <span className="font-mono text-xs font-semibold tracking-[0.26em] text-muted-foreground">06</span>
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {sectionContent.certificates.title}
          </h2>
          <span className="hidden h-px min-w-[90px] flex-1 bg-border/60 lg:block" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.06}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certificateData.map((certificate) => (
            <article
              key={certificate.id}
              className="overflow-hidden rounded-md border border-border/70 bg-card/45 transition-all duration-300 hover:-translate-y-0.5 hover:border-border"
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-border/70 bg-background/70">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{certificate.year}</p>
                <h3 className="mt-1 text-[13px] font-semibold text-foreground leading-tight">{certificate.title}</h3>
                <p className="mt-1 text-[11px] text-muted-foreground">{certificate.issuer}</p>
                {certificate.subtitle ? <p className="mt-1.5 text-[11px] text-muted-foreground/85 leading-snug">{certificate.subtitle}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CertificatesSection;
