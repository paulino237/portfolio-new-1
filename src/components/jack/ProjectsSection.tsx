"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";
import { ShimmerImage } from "./ShimmerImage";

interface ProjectItem {
  number: string;
  category: string;
  name: string;
  href?: string;
  images: {
    main: string;
    sub1?: string;
    sub2?: string;
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    number: "01",
    category: "Fashion Contest & Voting",
    name: "Master Couturier RDC",
    href: "https://vote.mastercouturerdc.com/",
    images: {
      main: "/mastercourutrerdc.png",
    },
  },
  {
    number: "02",
    category: "Digital Studio & Ecosystem",
    name: "Onixe",
    href: "https://onixe.app",
    images: {
      main: "/onixe.png",
    },
  },
  {
    number: "03",
    category: "Mobile & Fintech",
    name: "Mayo App Mobile",
    href: "https://play.google.com/store/apps/details?id=com.mayocustomer.app&hl=fr",
    images: {
      main: "/mayoappmobile.png",
    },
  },
  {
    number: "04",
    category: "Fintech & Rewards",
    name: "Mission Million",
    href: "https://app.mayooapp.com/mission-million/login",
    images: {
      main: "/missionmillion.png",
    },
  },
  {
    number: "05",
    category: "Fintech & Online Voting",
    name: "CAN Miss & Mister",
    href: "https://canmissmister.com/",
    images: {
      main: "/cannmister.png",
    },
  },
  {
    number: "06",
    category: "Cultural Event & Experience",
    name: "Cerveau d'Afrique",
    href: "https://cerveaudafrique.com/",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fcerveau-afrique.png&w=3840&q=75",
    },
  },
  {
    number: "07",
    category: "Reality Web & Voting",
    name: "La Villa des Immatures",
    href: "https://lmi.escrutin.live/",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Flvi.png&w=3840&q=75",
    },
  },
  {
    number: "08",
    category: "Reality Web-Magazine",
    name: "House of Challenge",
    href: "https://houseofchallenge.org/en",
    images: {
      main: "/houseofchallenge.png",
    },
  },
  {
    number: "09",
    category: "Online Voting Platform",
    name: "eScrutin",
    href: "https://www.escrutin.net/",
    images: {
      main: "/escrutin.png",
    },
  },
  {
    number: "10",
    category: "Event Ticketing SaaS",
    name: "Ongoo Billet",
    href: "https://ongoo.cm",
    images: {
      main: "/ongoo.png",
    },
  },
  {
    number: "11",
    category: "Connected Health",
    name: "SoSan Health",
    href: "https://play.google.com/store/search?q=sosan&c=apps&hl=fr",
    images: {
      main: "/sosan.png",
    },
  },
  {
    number: "12",
    category: "AI & Legal Tech",
    name: "KLAVIS AI",
    href: "https://klavis.app",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fklavis-ai.png&w=3840&q=75",
    },
  },
  {
    number: "13",
    category: "3D Animation & WebGL",
    name: "3AXIS Engine",
    href: "https://www.npmjs.com/package/3axis",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2F3axis.png&w=3840&q=75",
    },
  },
  {
    number: "14",
    category: "Workflow & Collaboration",
    name: "NexusFlow",
    href: "#",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fnexusflow.png&w=3840&q=75",
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
  const hasSubImages = Boolean(project.images.sub1 && project.images.sub2);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] flex items-start justify-center sticky top-20 sm:top-24 md:top-28"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 24}px)`,
        }}
        className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col gap-5 sm:gap-7 shadow-2xl origin-top"
      >
        {/* Top Row: Number, Category, Name, and Live Project Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-white/10">
          <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
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

        {/* Main Photo Banner on Top - Generous Height with Shimmer */}
        <div
          className={`w-full overflow-hidden rounded-lg bg-neutral-900 border border-white/10 ${
            hasSubImages
              ? "h-[260px] sm:h-[360px] md:h-[440px]"
              : "h-[320px] sm:h-[440px] md:h-[540px]"
          }`}
        >
          <ShimmerImage
            src={project.images.main}
            alt={`${project.name} main preview`}
          />
        </div>

        {/* Optional Sub-Images at Bottom if available */}
        {hasSubImages && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <div className="w-full overflow-hidden rounded-lg bg-neutral-900 border border-white/10 h-[160px] sm:h-[220px] md:h-[260px]">
              <ShimmerImage
                src={project.images.sub1!}
                alt={`${project.name} preview 1`}
              />
            </div>

            <div className="w-full overflow-hidden rounded-lg bg-neutral-900 border border-white/10 h-[160px] sm:h-[220px] md:h-[260px]">
              <ShimmerImage
                src={project.images.sub2!}
                alt={`${project.name} preview 2`}
              />
            </div>
          </div>
        )}
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
                range={[i * (1 / PROJECTS.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
