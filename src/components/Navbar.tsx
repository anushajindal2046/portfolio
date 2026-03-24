import { useState, useEffect, useMemo } from "react";
import type { MouseEvent } from "react";
import { Menu, X, Sun, Moon, Download, Sunrise, Sunset } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, RESUME_PDF_PATH } from "@/data/data";

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => {
    finished: Promise<void>;
  };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [themeRotation, setThemeRotation] = useState(0);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  const greeting = useMemo(() => {
    if (currentHour >= 5 && currentHour < 12) {
      return { text: "Good morning", Icon: Sunrise };
    }
    if (currentHour >= 12 && currentHour < 17) {
      return { text: "Good afternoon", Icon: Sun };
    }
    if (currentHour >= 17 && currentHour < 21) {
      return { text: "Good evening", Icon: Sunset };
    }
    return { text: "Good night", Icon: Moon };
  }, [currentHour]);

  const applyTheme = (nextIsDark: boolean) => {
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  const handleThemeToggle = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const root = document.documentElement;

    root.style.setProperty("--vt-x", `${x}px`);
    root.style.setProperty("--vt-y", `${y}px`);
    setThemeRotation((prev) => prev + 180);

    const nextThemeIsDark = !isDark;
    const doc = document as ViewTransitionDocument;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.setAttribute("data-theme-transition", nextThemeIsDark ? "to-dark" : "to-light");

    if (doc.startViewTransition && !reducedMotion) {
      const transition = doc.startViewTransition(() => {
        applyTheme(nextThemeIsDark);
      });
      transition.finished.finally(() => {
        root.removeAttribute("data-theme-transition");
      });
      return;
    }

    applyTheme(nextThemeIsDark);
    root.removeAttribute("data-theme-transition");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);

    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;
    applyTheme(shouldUseDark);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-500 ${scrolled ? "glass-dark border-border/70" : "bg-background/75 backdrop-blur-xl"
        }`}
    >
      <div className="layout-shell">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-display text-lg tracking-wide text-foreground">
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[11px] font-semibold tracking-[0.06em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1.5 font-body text-xs text-muted-foreground">
              <greeting.Icon size={14} className="text-accent" />
              <span>{greeting.text}</span>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleThemeToggle}
              animate={{ rotate: themeRotation }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-card/55 text-foreground transition-colors duration-300 hover:bg-card"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? "moon" : "sun"}
                  initial={{ rotate: -50, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 50, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {isDark ? <Moon size={15} className="text-foreground" /> : <Sun size={15} className="text-foreground" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <a
              href={RESUME_PDF_PATH}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-1.5 text-[11px] font-semibold tracking-[0.03em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download size={12} /> Resume
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleThemeToggle}
              animate={{ rotate: themeRotation }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-card/55 text-foreground transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? "moon-mobile" : "sun-mobile"}
                  initial={{ rotate: -50, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 50, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {isDark ? <Moon size={14} className="text-foreground" /> : <Sun size={14} className="text-foreground" />}
                </motion.div>
              </AnimatePresence>
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
              {NAV_LINKS.map((link, i) => (
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
                href={RESUME_PDF_PATH}
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
