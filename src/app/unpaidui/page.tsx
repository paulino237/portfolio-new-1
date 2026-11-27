"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { motion } from "motion/react";
import { FadeIn } from "@/components/jack/FadeIn";
import { AnimatedText } from "@/components/jack/AnimatedText";
import { ContactButton } from "@/components/jack/ContactButton";
import { Github, Code2, Sparkles, ArrowUpRight } from "lucide-react";

// Load Glock Grotesque Medium font
const glockGrotesque = localFont({
  src: "../../../public/fonts/glock-grotesk/glockgrotesque-medium.otf",
  variable: "--font-glock",
  display: "swap",
});

const SHOWCASE_TEMPLATES = [
  {
    id: "turnout",
    title: "Turnout Experiences",
    category: "Events & Brand Studio",
    tag: "Experiential",
    image: "/unpaidui/showcase-turnout.webp",
  },
  {
    id: "sentinel",
    title: "Sentinel Cyber",
    category: "Cybersecurity & AI",
    tag: "Enterprise",
    image: "/unpaidui/showcase-sentinel.webp",
  },
  {
    id: "circular",
    title: "Circular Platform",
    category: "Analytics & SaaS",
    tag: "High Performance",
    image: "/unpaidui/showcase-circular.webp",
  },
  {
    id: "arclight",
    title: "Arclight Workspace",
    category: "Productivity & SaaS",
    tag: "Collaboration",
    image: "/unpaidui/showcase-arclight.webp",
  },
  {
    id: "aldena",
    title: "Aldena Studio",
    category: "Creative Agency",
    tag: "Brand Identity",
    image: "/unpaidui/showcase-aldena.webp",
  },
  {
    id: "pixelpush",
    title: "Pixelpush Studio",
    category: "AI Video & Creator",
    tag: "Studio Grade",
    image: "/unpaidui/showcase-pixelpush.webp",
  },
  {
    id: "ostra",
    title: "Studio Ostra",
    category: "Editorial & Luxury",
    tag: "Awwwards SOTD",
    image: "/unpaidui/showcase-ostra.webp",
  },
  {
    id: "kraft",
    title: "KRAFT AI",
    category: "AI & SaaS Studio",
    tag: "Trending 2026",
    image: "/unpaidui/showcase-kraft.webp",
  },
  {
    id: "kora",
    title: "Kora Growth",
    category: "Fintech & Venture",
    tag: "High Conversion",
    image: "/unpaidui/showcase-kora.webp",
  },
  {
    id: "mindscript",
    title: "MindScript",
    category: "Health & Wellbeing",
    tag: "Minimalist",
    image: "/unpaidui/showcase-mindscript.webp",
  },
  {
    id: "wellnest",
    title: "Wellnest Health",
    category: "Mobile & Telehealth",
    tag: "Dark & Vibrant",
    image: "/unpaidui/showcase-wellnest.webp",
  },
  {
    id: "nexbot",
    title: "Nexbot Cortex",
    category: "Deep Tech & Robotics",
    tag: "Web3 & Compute",
    image: "/unpaidui/template-1.webp",
  },
  {
    id: "carousel",
    title: "3D Kinetic Carousel",
    category: "Interactive Agency",
    tag: "WebGL & 3D",
    image: "/unpaidui/template-2.webp",
  },
  {
    id: "tldr",
    title: "TLDR Digest",
    category: "Productivity AI",
    tag: "Dark Mode",
    image: "/unpaidui/template-3.webp",
  },
  {
    id: "lumen",
    title: "Lumen Scale",
    category: "Developer Platform",
    tag: "Clean Architecture",
    image: "/unpaidui/template-4.webp",
  },
  {
    id: "skyagent",
    title: "SkyAgent",
    category: "Workflow Assistant",
    tag: "Glassmorphism",
    image: "/unpaidui/showcase-skyagent.webp",
  },
];

const WHAT_IS_UNPAIDUI_TEXT =
  "UnpaidUI is the open-source rebellion against overpriced template marketplaces. We deconstruct the web's most prestigious, award-winning landing pages and rebuild them from pure scratch with Next.js, Tailwind CSS, and Framer Motion. Zero paywalls, zero vendor lock-in, and 100% free forever for every builder, hacker, and creator. Copy the code, customize the vision, and ship without permission.";

export default function UnpaidUIPage() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("npx unpaid-ui@latest add hero");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`${glockGrotesque.variable} min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black overflow-x-hidden font-sans`}
      style={{ fontFamily: "var(--font-glock), sans-serif" }}
    >
      {/* ============================================================== */}
      {/* HERO SECTION — FULLSCREEN WITH MOTION ENTRANCE                 */}
      {/* ============================================================== */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden select-none bg-[#000000]">

        {/* Background — fades in first */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src="/unpaidui/red-fabric-bg-hd.webp"
            alt="Hero Background"
            fill
            priority
            unoptimized
            className="object-cover object-center pointer-events-none select-none contrast-[1.02]"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(circle at center, transparent 65%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </motion.div>

        {/* ----------------- TOP NAVBAR — slides down ----------------- */}
        <motion.header
          className="relative z-30 w-full px-6 sm:px-12 md:px-16 pt-7 sm:pt-9 flex items-center justify-between"
          initial={{ y: -32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <Link href="/unpaidui" className="group">
            <div className="relative h-8 sm:h-10 md:h-11 w-36 sm:w-48 md:w-56 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/unpaidui/logo-white-transparent.png"
                alt="UnpaidUI Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden sm:flex items-center gap-7 md:gap-10 text-sm md:text-base font-normal text-white/90">
            <Link href="#templates" className="hover:text-white transition-colors">Templates</Link>
          </nav>

          <div className="flex items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-black/85 hover:bg-black text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Contribute</span>
            </a>
          </div>
        </motion.header>

        {/* ----------------- CENTER STAGE & SURROUNDING CARDS ----------------- */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4">

          {/* LEFT CARDS — slide in from left with stagger (all 5 always visible) */}
          {[
            { top: "8%", left: "3%", src: "/unpaidui/showcase-ostra.webp", alt: "Studio Ostra", delay: 0.4 },
            { top: "29%", left: "1.5%", src: "/unpaidui/template-1.webp", alt: "Nexbot Cortex", delay: 0.55 },
            { top: "50%", left: "2.5%", src: "/unpaidui/showcase-wellnest.webp", alt: "Wellnest Health", delay: 0.7 },
            { top: undefined, bottom: "7%", left: "3%", src: "/unpaidui/showcase-kraft.webp", alt: "KRAFT AI", delay: 0.85 },
            { top: undefined, bottom: "16%", left: "15%", src: "/unpaidui/template-4.webp", alt: "Lumen Scale", delay: 1.0 },
          ].map(({ top, bottom, left, src, alt, delay }) => (
            <motion.div
              key={alt}
              className="absolute z-10 block"
              style={{ top, bottom, left }}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
            >
              <div className="relative w-20 sm:w-28 md:w-36 lg:w-44 xl:w-48 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-white/20 transition-all duration-300 hover:scale-110 hover:z-30 cursor-pointer">
                <Image src={src} alt={alt} fill className="object-cover object-center" />
              </div>
            </motion.div>
          ))}

          {/* RIGHT CARDS — slide in from right with stagger (all 5 always visible) */}
          {[
            { top: "8%", right: "3%", src: "/unpaidui/showcase-kora.webp", alt: "Kora Growth", delay: 0.4 },
            { top: "29%", right: "1.5%", src: "/unpaidui/template-2.webp", alt: "3D Kinetic Carousel", delay: 0.55 },
            { top: "50%", right: "2.5%", src: "/unpaidui/template-3.webp", alt: "TLDR Digest", delay: 0.7 },
            { top: undefined, bottom: "7%", right: "3%", src: "/unpaidui/showcase-mindscript.webp", alt: "MindScript Health", delay: 0.85 },
            { top: undefined, bottom: "16%", right: "15%", src: "/unpaidui/showcase-skyagent.webp", alt: "SkyAgent Assistant", delay: 1.0 },
          ].map(({ top, bottom, right, src, alt, delay }) => (
            <motion.div
              key={alt}
              className="absolute z-10 block"
              style={{ top, bottom, right }}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
            >
              <div className="relative w-20 sm:w-28 md:w-36 lg:w-44 xl:w-48 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-white/20 transition-all duration-300 hover:scale-110 hover:z-30 cursor-pointer">
                <Image src={src} alt={alt} fill className="object-cover object-center" />
              </div>
            </motion.div>
          ))}

          {/* ================= MAIN CENTRAL HEADLINE & CTA ================= */}
          <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4 my-auto">

            {/* H1 — slides up */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white leading-[1.08] drop-shadow-md"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
            >
              Stop{" "}
              <span
                className="relative inline-block"
                style={{ WebkitTextStroke: "2px white", color: "transparent" }}
              >
                Paying
              </span>{" "}
              for Templates.<br />
              Start{" "}
              <span
                className="relative inline-block rounded-md"
                style={{ background: "white", color: "#000", paddingLeft: "0.4em", paddingRight: "0.4em" }}
              >
                Shipping.
              </span>
            </motion.h1>

            {/* Description — slides up with more delay */}
            <motion.p
              className="text-white/80 text-xs sm:text-sm md:text-[15px] font-normal max-w-lg text-center mt-6 drop-shadow leading-[1.75]"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
            >
              Premium templates. Rebuilt from scratch. Free forever. No license, no paywall. Just production-ready code you can copy and ship in minutes.
            </motion.p>

            {/* CTA button — pops in last */}
            <motion.button
              type="button"
              onClick={copyInstall}
              className="mt-8 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-sm shadow-2xl hover:bg-neutral-100 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
            >
              {copied ? "Copied install command!" : "Get Started"}
            </motion.button>
          </div>
        </div>

        <div className="relative z-30 w-full pb-4" />
      </section>

      {/* ============================================================== */}
      {/* WHAT IS UNPAIDUI (INSPIRED BY PORTFOLIO ABOUT SECTION)         */}
      {/* ============================================================== */}
      <section
        id="what-is-unpaidui"
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 bg-[#08080A] overflow-hidden select-none"
      >
        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
          {/* Heading */}
          <FadeIn delay={0.1} y={40} duration={0.8}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#E50914] italic leading-tight text-center">
              What is it&apos;s
            </h2>
          </FadeIn>

          {/* Animated Text Block (scroll-driven word-by-word highlight) */}
          <div className="mt-10 sm:mt-14 md:mt-16 flex justify-center px-4">
            <AnimatedText text={WHAT_IS_UNPAIDUI_TEXT} />
          </div>

          {/* Action Button */}
          <div className="mt-14 sm:mt-18 md:mt-20">
            <FadeIn delay={0.25} y={20} duration={0.7}>
              <ContactButton href="#templates" label="Explore Templates" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* TEMPLATE SHOWCASE GALLERY                                      */}
      {/* ============================================================== */}
      <section
        id="templates"
        className="relative z-20 -mt-10 sm:-mt-14 bg-[#08080A] py-24 sm:py-32 px-6 sm:px-12 rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[64px] border-t border-[#E50914]/25 shadow-[0_-25px_60px_rgba(229,9,20,0.22)]"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E50914] italic leading-tight">
                Re-engineered Classics.<br />
                Ready to Ship.
              </h2>
            </motion.div>
            <motion.p
              className="max-w-md text-sm text-neutral-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              Every template is rebuilt with clean, modular TypeScript, Tailwind CSS, and Framer Motion. Zero dependencies lock-in.
            </motion.p>
          </div>

          {/* Grid of Templates */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SHOWCASE_TEMPLATES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (index % 3) * 0.12,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/25 hover:shadow-[0_15px_35px_rgba(229,9,20,0.12)] overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-white group-hover:text-[#E50914] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {item.category}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={copyInstall}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* CTA SECTION (FIGMA CANVAS COLLABORATION DESIGN - UNPAIDUI)     */}
      {/* ============================================================== */}
      <section className="relative z-10 py-16 sm:py-24 px-3 sm:px-6 md:px-8 lg:px-10 bg-[#050507]">
        <div className="w-full max-w-[1550px] mx-auto">
          <div
            className="relative w-full rounded-[32px] sm:rounded-[44px] md:rounded-[56px] p-8 sm:p-14 md:p-20 lg:p-24 overflow-hidden border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)]"
            style={{
              backgroundColor: "#070709",
              backgroundImage: `
                radial-gradient(circle at 15% 20%, rgba(229, 9, 20, 0.12) 0%, transparent 48%),
                radial-gradient(circle at 85% 60%, rgba(180, 10, 30, 0.07) 0%, transparent 52%),
                radial-gradient(circle at 50% 90%, rgba(229, 9, 20, 0.04) 0%, transparent 60%)
              `,
            }}
          >
            {/* Ambient noise / subtle lighting overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04),_transparent_70%)]" />

            {/* Content left */}
            <div className="relative z-10 max-w-3xl">
              {/* Figma Selection Bounding Box around Title */}
              <div className="relative inline-block border border-white/60 p-5 sm:p-7 md:p-9 mb-7 sm:mb-9">
                {/* 4 Corner Figma Handles (white squares with border) */}
                <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-black/50 rounded-[2px]" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-black/50 rounded-[2px]" />
                <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-black/50 rounded-[2px]" />
                <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-black/50 rounded-[2px]" />

                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-white leading-[1.08]">
                  Let&apos;s Create Something<br />
                  Remarkable{" "}
                  <span className="text-white/35 font-normal">
                    Together
                  </span>
                </h2>
              </div>

              {/* Description Paragraph */}
              <p className="text-white/75 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-lg mb-8 sm:mb-10">
                Let&apos;s turn your ideas into a brand that connects and converts. Our expert team is ready to craft a unique identity that reflects your vision and drives results.
              </p>

              {/* Action Button: Crimson Pill "Let's Connect" */}
              <div className="inline-block">
                <Link
                  href="mailto:cocdog11@gmail.com"
                  className="px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#E50914] hover:bg-[#c70811] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-[0_10px_30px_rgba(229,9,20,0.35)] hover:scale-105 active:scale-95 inline-flex items-center justify-center cursor-pointer"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>

            {/* Collaborative Figma Cursors */}
            {/* 1. Red UnpaidUI Cursor: "Building Your Brand" */}
            <div className="absolute top-[42%] right-[6%] sm:right-[10%] md:right-[14%] z-20 pointer-events-none select-none flex items-start gap-1.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4 text-[#E50914] drop-shadow-md -mt-1 -mr-0.5 transform -rotate-12"
              >
                <path
                  d="M1 1L6 15L8.5 9L15 6.5L1 1Z"
                  fill="#E50914"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="px-3.5 py-1.5 rounded-full bg-[#E50914] text-white text-[11px] sm:text-xs font-medium shadow-md tracking-tight whitespace-nowrap">
                Building Your Brand
              </div>
            </div>

            {/* 2. White/Dark Contrast Cursor: "Vision" */}
            <div className="absolute bottom-[20%] left-[44%] sm:left-[48%] md:left-[52%] z-20 pointer-events-none select-none flex items-start gap-1.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4 text-white drop-shadow-md -mt-1 -mr-0.5 transform -rotate-12"
              >
                <path
                  d="M1 1L6 15L8.5 9L15 6.5L1 1Z"
                  fill="#FFFFFF"
                  stroke="#111111"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="px-3 py-1 rounded-full bg-white text-neutral-950 text-[11px] sm:text-xs font-semibold shadow-md tracking-tight whitespace-nowrap">
                Vision
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- FRAMER-STYLE MASSIVE FOOTER ----------------- */}
      <footer className="relative bg-[#060608] text-white pt-12 sm:pt-16 md:pt-20 pb-10 overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[4rem] md:rounded-t-[5rem] border-t border-white/[0.12] shadow-[0_-30px_70px_rgba(0,0,0,0.9)]">
        {/* UnpaidUI Signature ambient red glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[360px] bg-gradient-to-t from-[#E50914]/25 via-[#E50914]/08 to-transparent blur-3xl rounded-full"
        />

        {/* MASSIVE UNPAIDUI LOGO IN FOOTER */}
        <div className="relative w-full select-none px-4 sm:px-6 md:px-8 z-10 my-8 sm:my-14 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-24 sm:h-36 md:h-48 lg:h-56 transition-transform hover:scale-[1.02] duration-500">
            <Image
              src="/unpaidui/logo-white-transparent.png"
              alt="UnpaidUI Logo"
              fill
              className="object-contain object-center drop-shadow-[0_20px_50px_rgba(229,9,20,0.35)]"
              priority
            />
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-2 flex items-center justify-center text-xs text-white/35 tracking-wider z-10">
          <p>© {new Date().getFullYear()} UnpaidUI. All rights reversed. Built for builders.</p>
        </div>
      </footer>
    </div>
  );
}
