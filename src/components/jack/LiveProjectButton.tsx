"use client";

import React from "react";
import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function LiveProjectButton({
  href = "#",
  onClick,
  className = "",
  label = "Live Project",
}: LiveProjectButtonProps) {
  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base px-8 py-3 sm:px-10 sm:py-3.5 hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer ${className}`}
    >
      <span>{label}</span>
    </motion.button>
  );

  if (href && href !== "#") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block no-underline"
      >
        {content}
      </a>
    );
  }

  return content;
}
