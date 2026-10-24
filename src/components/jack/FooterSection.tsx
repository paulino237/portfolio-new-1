"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { ContactButton } from "./ContactButton";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070709] text-[#D7E2EA] pt-16 md:pt-24 pb-8 overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[3.5rem] md:rounded-t-[4.5rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      {/* Framer signature ambient purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[340px] bg-gradient-to-t from-[#7621B0]/25 via-[#B600A8]/10 to-transparent blur-3xl rounded-full"
      />

      {/* Top bar: Contact button & Social links */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 sm:pb-16">
          {/* Contact Button */}
          <ContactButton
            href={`mailto:${DATA.contact.email}`}
            label="Contact Me"
          />

          {/* Social Links: LinkedIn & GitHub */}
          <div className="flex items-center gap-3.5">
            <motion.a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-sm font-medium text-[#D7E2EA] hover:text-white transition-all group shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-[#D7E2EA]/70 group-hover:text-white transition-colors" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

            <motion.a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-sm font-medium text-[#D7E2EA] hover:text-white transition-all group shadow-sm"
            >
              <Github className="w-4 h-4 text-[#D7E2EA]/70 group-hover:text-white transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Massive FOSSO Typography taking the ENTIRE footer width edge-to-edge */}
      <div className="relative w-full overflow-hidden select-none px-2 sm:px-4 z-10">
        <h1
          className="text-[22vw] font-black uppercase tracking-[-0.04em] leading-[0.74] text-center select-none whitespace-nowrap bg-gradient-to-b from-white via-white/70 to-white/15 bg-clip-text text-transparent hover:from-white hover:via-[#BBCCD7] hover:to-[#7621B0] transition-all duration-700 cursor-default"
          style={{
            fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
            textShadow: "0 20px 60px rgba(118, 33, 176, 0.25)",
          }}
        >
          FOSSO
        </h1>
      </div>

      {/* Minimal bottom copyright */}
      <div className="relative max-w-6xl mx-auto px-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35 tracking-wider z-10">
        <p>© {currentYear} Miguel Fosso. All rights reserved.</p>
        <p className="font-mono text-white/25">Full-Stack Architect & Tech Lead</p>
      </div>
    </footer>
  );
}
