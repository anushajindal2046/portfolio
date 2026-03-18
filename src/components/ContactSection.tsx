import { useState } from "react";
import { Phone, Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  { icon: Phone, label: "+91-9588575578", href: "tel:+919588575578" },
  { icon: Mail, label: "anushajindal1940@gmail.com", href: "mailto:anushajindal1940@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anusha-jindal-36959028a" },
  { icon: Github, label: "GitHub", href: "https://github.com/anushajindal2046" },
];

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
        description: "Thank you for reaching out. I’ll get back to you soon.",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Please try again later.";
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: `${errorMessage}. If the issue persists, email anushajindal1940@gmail.com directly.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 border-t border-border relative">
      <div className="absolute top-8 left-6 lg:left-12 text-muted-foreground/20 text-xs font-mono">+</div>
      <div className="absolute top-8 right-6 lg:right-12 text-muted-foreground/20 text-xs font-mono">+</div>

      <div className="layout-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <AnimatedSection>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-medium uppercase mb-4">
                04 — Get In Touch
              </p>
              <h2 className="font-display mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Let’s Connect &
                <br />
                <span>Collaborate</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="mb-8 max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-0 border-t border-border mb-10">
                {contactLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-4 border-b border-border group hover:bg-card/50 transition-colors duration-300 px-2"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} strokeWidth={1.5} className="text-accent" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{label}</span>
                    </div>
                    <ArrowUpRight size={14} className="text-muted-foreground/50 group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Download Resume
              </a>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-6 lg:pt-16">
              <div>
                <label className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-500"
                  placeholder="What's your name?"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-foreground text-primary-foreground text-[11px] font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
