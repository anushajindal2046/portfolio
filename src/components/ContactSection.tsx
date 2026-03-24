import { useState } from "react";
import { Phone, Mail, Linkedin, Github, ArrowUpRight, Clock3, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_LINKS, RESUME_PDF_PATH, contactInfo } from "@/data/data";

const contactIconMap = {
  Phone,
  Mail,
  Linkedin,
  Github,
};

const isExternalHttp = (href: string) => /^https?:\/\//i.test(href);

const buildMailtoFallback = (name: string, email: string, message: string) => {
  const recipient = contactInfo.email;
  const subject = `Portfolio contact from ${name || "Website visitor"}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  return `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        let backendMessage = "";
        try {
          const data = await response.json();
          backendMessage = data?.error || "";
        } catch {
          backendMessage = "";
        }
        throw new Error(backendMessage || "Failed to send message");
      }

      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I will get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Please try again later.";
      const fallbackHref = buildMailtoFallback(form.name, form.email, form.message);
      toast({
        title: "Email app fallback",
        description: `Could not send from website (${errorMessage}). Opening your email app with a pre-filled draft.`,
      });
      window.location.href = fallbackHref;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="font-contact relative overflow-hidden border-t border-border py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -left-16 top-8 h-44 w-44 rounded-full blur-3xl"
          style={{ background: "rgba(34, 197, 94, 0.07)" }}
        />
        <div
          className="absolute -right-20 bottom-8 h-52 w-52 rounded-full blur-3xl"
          style={{ background: "rgba(56, 189, 248, 0.52)" }}
        />
      </div>


      <div className="layout-shell relative">
        <AnimatedSection>
          <div className="mb-8 lg:mb-10">
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{contactInfo.sectionLabel}</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Build Something
              <br />
              <span className="text-muted-foreground">Meaningful Together</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_1fr] lg:gap-8 lg:items-stretch">
          <AnimatedSection delay={0.06} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6" style={{ boxShadow: "0 10px 32px var(--color-shadow-soft)" }}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Open For Work
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ background: "rgba(34, 197, 94, 0.07)", border: "1px solid rgba(34, 197, 94, 0.2)", color: "var(--color-success)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-success-bright)" }} />
                  Available
                </span>
              </div>

              <p className="mb-6 text-[13px] leading-relaxed text-muted-foreground">{contactInfo.availabilityLine}</p>

              <div className="mb-6 space-y-2">
                {CONTACT_LINKS.map(({ iconKey, label, href }) => {
                  const Icon = contactIconMap[iconKey];
                  const external = isExternalHttp(href);
                  return (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between rounded-xl border border-border px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-hover)] hover:bg-background"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <Icon size={15} strokeWidth={1.7} className="shrink-0 text-accent" />
                        <span className="truncate text-[13px] text-foreground">{label}</span>
                      </span>
                      <ArrowUpRight size={14} className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  );
                })}
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-border px-3 py-3">
                  <p className="mb-1 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <MapPin size={12} /> Location
                  </p>
                  <p className="text-[13px] text-foreground">{contactInfo.location}</p>
                </div>
                <div className="rounded-xl border border-border px-3 py-3">
                  <p className="mb-1 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <Clock3 size={12} /> Response
                  </p>
                  <p className="text-[13px] text-foreground">Usually within 24 hours</p>
                </div>
              </div>

              <a
                href={RESUME_PDF_PATH}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 8px 24px var(--btn-primary-active-shadow)" }}
              >
                Download Resume
              </a>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="h-full">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 sm:p-6"
              style={{ boxShadow: "0 10px 32px var(--color-shadow-soft)" }}
            >
              <div className="mb-5 h-[3px] w-full rounded-full" style={{ background: "linear-gradient(90deg, #2563eb 0%, #16a34a 45%, #b45309 100%)" }} />

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300 focus:border-[var(--color-border-active)] focus:outline-none"
                    placeholder={contactInfo.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300 focus:border-[var(--color-border-active)] focus:outline-none"
                    placeholder={contactInfo.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none border-b border-border bg-transparent py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300 focus:border-[var(--color-border-active)] focus:outline-none"
                    placeholder={contactInfo.form.messagePlaceholder}
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-xl bg-foreground py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                style={{ boxShadow: "0 8px 24px var(--btn-primary-active-shadow)" }}
              >
                {isSubmitting ? "Sending..." : contactInfo.form.submitLabel}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
