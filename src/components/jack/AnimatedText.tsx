"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

function Character({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const characters = word.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="inline-block whitespace-nowrap">
      {characters.map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Character
            key={i}
            char={char}
            progress={progress}
            range={[start, end]}
          />
        );
      })}
    </span>
  );
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={elementRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] ${className}`}
      style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <React.Fragment key={i}>
            <Word word={word} progress={scrollYProgress} range={[start, end]} />
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </React.Fragment>
        );
      })}
    </p>
  );
}
