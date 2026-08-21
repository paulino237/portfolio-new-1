"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

interface ProjectItem {
  number: string;
  category: string;
  name: string;
  href?: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

const PROJECTS: ProjectItem[] = [
  {
    number: "01",
    category: "Client",
    name: "Nextlevel Studio",
    href: "#",
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    number: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    href: "#",
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    number: "03",
    category: "Client",
    name: "Solaris Digital",
    href: "#",
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
];

function Card({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
}: {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[560px] flex items-start justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 28}px)`,
        }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 shadow-2xl origin-top"
      >
        {/* Top Row: Number, Category, Name, and Live Project Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-white/10">
          <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] uppercase font-medium text-base sm:text-xl md:text-2xl tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.href} />
        </div>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-neutral-900 border border-white/10"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                loading="lazy"
                draggable={false}
              />
            </div>

            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-neutral-900 border border-white/10"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="w-full md:w-[60%] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-neutral-900 border border-white/10 min-h-[260px] sm:min-h-[340px] md:min-h-[460px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.images.col2}
              alt={`${project.name} full preview`}
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-28 md:pt-36 pb-24 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight leading-none mb-16 sm:mb-24 md:mb-32"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards */}
        <div className="flex flex-col w-full relative">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
            return (
              <Card
                key={project.number}
                project={project}
                index={i}
                totalCards={PROJECTS.length}
                progress={scrollYProgress}
                range={[i * 0.33, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
