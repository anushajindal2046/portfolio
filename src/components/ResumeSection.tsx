import { Download, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { resumeData } from "@/data/data";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 lg:py-20 border-t border-border relative">

      <div className="layout-shell">
        <AnimatedSection>
          <div className="mb-10 flex flex-col justify-between gap-7 lg:mb-12 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
                {resumeData.sectionLabel}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
                <span>{resumeData.title}</span>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3">
              
              <div className="flex flex-wrap gap-2">
                <a
                  href={resumeData.filePath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download size={13} /> {resumeData.downloadLabel}
                </a>
                <a
                  href={resumeData.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border/70 bg-card/55 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-card/85"
                >
                  <ExternalLink size={13} /> {resumeData.openLabel}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <article className="border border-border bg-card/60 rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-border">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Resume PDF Preview</p>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mx-auto w-full max-w-[980px] border border-border bg-background/70 overflow-hidden">
                <iframe
                  title="Resume PDF preview"
                  src={resumeData.filePath}
                  className="h-[62vh] min-h-[420px] w-full"
                />
              </div>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResumeSection;

