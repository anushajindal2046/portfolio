import { useState } from "react";
import { Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ResumeSection = () => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="resume" className="py-16 lg:py-20 border-t border-border relative">
      <div className="absolute top-8 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
      <div className="absolute top-8 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-14">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
                04 — Resume
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">

                <span>Resume</span>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3">
              <p className="max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Resume image preview for better browser compatibility, with full PDF download available below.
              </p>
              <a
                href="/Anusha_Jindal_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-foreground text-primary-foreground text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-90 transition-opacity"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <article className="border border-border bg-card/60 rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-border">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Resume Preview Image</p>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mx-auto w-full max-w-[980px] border border-border bg-background/70 overflow-hidden">
                {imageFailed ? (
                  <div className="min-h-[320px] sm:min-h-[520px] flex flex-col items-center justify-center px-6 text-center text-muted-foreground gap-3">
                    <p className="text-sm">Resume image not found.</p>
                    <p className="text-xs">Add your image as public/resume.png to show preview here.</p>
                  </div>
                ) : (
                  <img
                    src="/resume.png"
                    alt="Resume preview"
                    className="w-full h-auto object-contain"
                    onError={() => setImageFailed(true)}
                  />
                )}
              </div>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResumeSection;

