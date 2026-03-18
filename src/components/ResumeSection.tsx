import { Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ResumeSection = () => (
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
              Professional
              <br />
              <span>Resume</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
              View a high-level snapshot of my experience, education, and technical skills, or download the full PDF
              resume for detailed review.
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

      <AnimatedSection delay={0.1}>
        <div className="border border-border bg-card/60 rounded-lg overflow-hidden">
          <div className="hidden md:block h-[520px]">
            <object
              data="/Anusha_Jindal_Resume.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="h-full flex items-center justify-center px-6 py-10 text-sm text-muted-foreground">
                PDF preview is not available in this browser. Please use the download button above to view the resume.
              </div>
            </object>
          </div>
          <div className="md:hidden px-6 py-10 text-xs text-muted-foreground leading-relaxed space-y-3 flex flex-col items-center">
            <p className="mb-4 text-center">
              PDF preview is not available on mobile.<br />
              Tap below to download and view the resume in your preferred app.
            </p>
            <a
              href="/Anusha_Jindal_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-foreground text-primary-foreground text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-90 transition-opacity mb-4"
            >
              <Download size={14} /> Download Resume
            </a>
            <p className="text-center">
              The resume includes a detailed breakdown of my technical skills, academic background, and project experience in Java, MERN stack, system design, and backend engineering.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ResumeSection;

