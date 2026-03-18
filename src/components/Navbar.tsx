import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => void;
};

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleThemeToggle = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const root = document.documentElement;

    root.style.setProperty("--vt-x", `${x}px`);
    root.style.setProperty("--vt-y", `${y}px`);

    const nextThemeIsDark = !isDark;
    const doc = document as ViewTransitionDocument;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !reducedMotion) {
      doc.startViewTransition(() => {
        setIsDark(nextThemeIsDark);
      });
      return;
    }

    setIsDark(nextThemeIsDark);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-dark" : "bg-transparent"
        }`}
    >
      <div className="layout-shell">
        <div className="flex h-16 items-center justify-between sm:h-18">
          <a href="#home" className="font-display text-lg tracking-wide text-foreground">
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleThemeToggle}
              className="relative w-14 h-7 rounded-full bg-secondary border border-border text-foreground flex items-center px-1 cursor-pointer transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center"
                animate={{ x: isDark ? 0 : 24 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? "moon" : "sun"}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.16, ease: "easeInOut" }}
                  >
                    {isDark ? <Moon size={12} className="text-primary-foreground" /> : <Sun size={12} className="text-primary-foreground" />}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.button>
            <a
              href="/Anusha_Jindal_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 border border-foreground/20 text-[11px] font-medium tracking-[0.15em] text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-500"
            >
              <Download size={13} /> RESUME
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleThemeToggle}
              className="relative w-12 h-6 rounded-full bg-secondary border border-border text-foreground flex items-center px-0.5 cursor-pointer transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center"
                animate={{ x: isDark ? 0 : 20 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? "moon-mobile" : "sun-mobile"}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.16, ease: "easeInOut" }}
                  >
                    {isDark ? <Moon size={10} className="text-primary-foreground" /> : <Sun size={10} className="text-primary-foreground" />}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 sm:px-5 sm:py-7 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/Anusha_Jindal_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground/20 text-[11px] font-medium tracking-[0.15em] text-foreground w-fit"
              >
                <Download size={13} /> RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
