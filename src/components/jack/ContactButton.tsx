"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function ContactButton({
  href = "mailto:cocdog11@gmail.com",
  onClick,
  className = "",
  label = "Contact Me",
}: ContactButtonProps) {
  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-all duration-300 cursor-pointer select-none ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid #FFFFFF",
        outlineOffset: "-3px",
      }}
    >
      <span>{label}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block no-underline">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
