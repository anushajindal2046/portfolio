import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ScrambleText from "./ScrambleText";
import { HERO_ROLES, personalInfo, socialLinks } from "@/data/data";

const ROLE_CHANGE_MS = 3200;

const roleLineVariants: Variants = {
    initial: { opacity: 0, y: 8 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.11, delayChildren: 0.02, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: { staggerChildren: 0.08, staggerDirection: -1, ease: "easeInOut" },
    },
};

const roleWordVariants: Variants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: "easeInOut" } },
};

const HeroSection = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
        }, ROLE_CHANGE_MS);

        return () => window.clearInterval(intervalId);
    }, []);

    const activeRole = HERO_ROLES[roleIndex];

    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border py-24 sm:py-28"
        >
        {/* Corner marks */}

        {/* Subtle grid background */}
        <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
                backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "60px 60px",
            }}
        />

        <div className="layout-shell w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                aria-live="polite"
                aria-atomic="true"
            >
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    <span>00 — </span>
                    <span className="sr-only">{activeRole}</span>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={activeRole}
                            aria-hidden="true"
                            variants={prefersReducedMotion ? undefined : roleLineVariants}
                            initial={prefersReducedMotion ? { opacity: 1 } : "initial"}
                            animate={prefersReducedMotion ? { opacity: 1 } : "animate"}
                            exit={prefersReducedMotion ? { opacity: 1 } : "exit"}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: "easeOut" }}
                            className="inline-block font-accent"
                        >
                            {activeRole.split(" ").map((word, idx) => (
                                <motion.span
                                    key={`${word}-${idx}`}
                                    variants={prefersReducedMotion ? undefined : roleWordVariants}
                                    initial={prefersReducedMotion ? { opacity: 1 } : "initial"}
                                    animate={prefersReducedMotion ? { opacity: 1 } : "animate"}
                                    exit={prefersReducedMotion ? { opacity: 1 } : "exit"}
                                    className="mr-1.5 inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.span>
                    </AnimatePresence>
                </p>
            </motion.div>

            <div className="mb-8 sm:mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1] tracking-tight text-foreground"
                >
                    <ScrambleText text="Anusha" startDelay={400} />
                    <br />
                    <ScrambleText text="Jindal" startDelay={700} />
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="flex max-w-4xl flex-col justify-between gap-6 sm:flex-row sm:items-end"
            >
                <p className="max-w-md text-xs sm:text-sm text-muted-foreground leading-[1.8]">
                    Building scalable backend systems with Spring Boot &amp; Node.js. Passionate about
                    microservices, clean architecture, and real-time applications.
                </p>

                <div className="flex items-center gap-4 shrink-0">
                    <a
                        href={socialLinks.find((link) => link.id === "github")?.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-border hover:border-foreground/30 text-muted-foreground hover:text-foreground transition-all duration-500"
                        aria-label="GitHub"
                    >
                        <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anusha-jindal-36959028a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-border hover:border-foreground/30 text-muted-foreground hover:text-foreground transition-all duration-500"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="p-2.5 border border-border hover:border-foreground/30 text-muted-foreground hover:text-foreground transition-all duration-500"
                        aria-label="Email"
                    >
                        <Mail size={16} strokeWidth={1.5} />
                    </a>
                    <a
                        href="#about"
                        className="inline-flex items-center gap-2 bg-foreground px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        View Work
                    </a>
                </div>
            </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
                <ArrowDown size={16} className="text-muted-foreground/40" strokeWidth={1.5} />
            </motion.div>
        </motion.div>
        </section>
    );
};

export default HeroSection;
