"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";

const HERO_PHRASES = [
  "Hi, i'm miguel",
  "Full-Stack Architect",
  "Backend & Mobile Lead",
  "Scalable Systems Dev",
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rotate between the 4 phrases based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.25) {
        setActivePhraseIndex(0);
      } else if (latest < 0.5) {
        setActivePhraseIndex(1);
      } else if (latest < 0.75) {
        setActivePhraseIndex(2);
      } else {
        setActivePhraseIndex(3);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "mailto:cocdog11@gmail.com" },
  ];

  const currentPhrase = HERO_PHRASES[activePhraseIndex];
  const words = currentPhrase.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Delai ultra-rapide et fluide entre chaque lettre
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut" as const,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      y: -16,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#0C0C0C]">
      {/* Sticky Hero Screen */}
      <section className="sticky top-0 h-screen min-h-[580px] max-h-[1200px] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
        {/* Navbar */}
        <FadeIn delay={0} y={-20} duration={0.6}>
          <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-30 relative">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </FadeIn>

        {/* Dynamic Changing Headline Area with Letter-by-Letter Reveal */}
        <div className="w-full min-h-[180px] sm:min-h-[220px] md:min-h-[280px] overflow-hidden z-0 pointer-events-none select-none flex items-center justify-center flex-1 my-auto px-4 sm:px-6 md:px-10">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activePhraseIndex}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="hero-heading font-black uppercase tracking-tight leading-[1.05] text-center w-full max-w-7xl mx-auto flex flex-wrap items-center justify-center"
              style={{
                fontSize: "clamp(2.2rem, 7vw, 7.5rem)",
              }}
            >
              {words.map((word, wordIndex) => (
                <span
                  key={`word-${wordIndex}`}
                  className="inline-flex whitespace-nowrap mr-[0.25em] last:mr-0"
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`char-${wordIndex}-${charIndex}`}
                      variants={letterVariants}
                      className="inline-block hero-heading"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative gap-4">
          <FadeIn delay={0.35} y={20} duration={0.7}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[150px] sm:max-w-[200px] md:max-w-[260px]"
              style={{ fontSize: "clamp(0.7rem, 1.2vw, 1.25rem)" }}
            >
              a senior fullstack developer driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20} duration={0.7}>
            <ContactButton href="mailto:cocdog11@gmail.com" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
