"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function FooterSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/miguel-fosso/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/paulino237",
      icon: Github,
    },
    {
      name: "Email",
      href: "mailto:cocdog11@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-[#0C0C0C] text-[#D7E2EA] py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-xs sm:text-sm text-[#D7E2EA]/50 tracking-wider">
          © {new Date().getFullYear()} Miguel Fosso. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
