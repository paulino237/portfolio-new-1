"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { ShimmerImage } from "./ShimmerImage";

export interface ProjectItem {
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
    category: "Streaming Media & VOD",
    name: "NBIKO TV",
    href: "https://nbiko.escrutin.live/",
    images: {
      main: "/nbiko-tv.png",
    },
  },
  {
    number: "02",
    category: "Fashion Contest & Voting",
    name: "Master Couturier RDC",
    href: "https://vote.mastercouturerdc.com/",
    images: {
      main: "/mastercourutrerdc.webp",
    },
  },
  {
    number: "03",
    category: "Digital Studio & Ecosystem",
    name: "Onixe",
    href: "https://onixe.app",
    images: {
      main: "/onixe.webp",
    },
  },
  {
    number: "04",
    category: "Mobile & Fintech",
    name: "Mayo App Mobile",
    href: "https://play.google.com/store/apps/details?id=com.mayocustomer.app&hl=fr",
    images: {
      main: "/mayoappmobile.webp",
    },
  },
  {
    number: "05",
    category: "Fintech & Rewards",
    name: "Mission Million",
    href: "https://app.mayooapp.com/mission-million/login",
    images: {
      main: "/missionmillion.webp",
    },
  },
  {
    number: "06",
    category: "Fintech & Online Voting",
    name: "CAN Miss & Mister",
    href: "https://canmissmister.com/",
    images: {
      main: "/cannmister.webp",
    },
  },
  {
    number: "07",
    category: "Cultural Event & Experience",
    name: "Cerveau d'Afrique",
    href: "https://cerveaudafrique.com/",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fcerveau-afrique.png&w=3840&q=75",
    },
  },
  {
    number: "08",
    category: "Reality Web & Voting",
    name: "La Villa des Immatures",
    href: "https://lmi.escrutin.live/",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Flvi.png&w=3840&q=75",
    },
  },
  {
    number: "09",
    category: "Reality Web-Magazine",
    name: "House of Challenge",
    href: "https://houseofchallenge.org/en",
    images: {
      main: "/houseofchallenge.webp",
    },
  },
  {
    number: "10",
    category: "Online Voting Platform",
    name: "eScrutin",
    href: "https://www.escrutin.net/",
    images: {
      main: "/escrutin.webp",
    },
  },
  {
    number: "11",
    category: "Event Ticketing SaaS",
    name: "Ongoo Billet",
    href: "https://ongoo.cm",
    images: {
      main: "/ongoo.webp",
    },
  },
  {
    number: "12",
    category: "Connected Health",
    name: "SoSan Health",
    href: "https://play.google.com/store/search?q=sosan&c=apps&hl=fr",
    images: {
      main: "/sosan.webp",
    },
  },
  {
    number: "13",
    category: "AI & Legal Tech",
    name: "KLAVIS AI",
    href: "https://klavis.app",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fklavis-ai.png&w=3840&q=75",
    },
  },
  {
    number: "14",
    category: "3D Animation & WebGL",
    name: "3AXIS Engine",
    href: "https://www.npmjs.com/package/3axis",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2F3axis.png&w=3840&q=75",
    },
  },
  {
    number: "15",
    category: "Workflow & Collaboration",
    name: "NexusFlow",
    href: "#",
    images: {
      main: "https://myportfolio-tan-zeta.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fnexusflow.png&w=3840&q=75",
    },
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] z-10 relative pt-20 sm:pt-28 md:pt-36 pb-28 sm:pb-36 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <FadeIn delay={0.1} y={24} duration={0.6}>
          <h2
            className="text-white font-black uppercase text-center tracking-tight leading-[0.94] sm:leading-[0.92]"
            style={{ fontSize: "clamp(2.5rem, 8.5vw, 130px)" }}
          >
            Design That<br />
            Drives Results
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} y={20} duration={0.6}>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg text-center mt-5 max-w-xl mx-auto leading-relaxed">
            Hand-picked projects built for real brands, real goals, real growth.
          </p>
        </FadeIn>

        {/* Structured 3-Column Grid with 1px border dividers */}
        <div className="mt-14 sm:mt-18 md:mt-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.12] bg-[#0C0C0C]">
            {displayedProjects.map((project, idx) => {
              const CardContent = (
                <div className="group h-full flex flex-col justify-between bg-[#0A0A0A]/40 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer">
                  {/* Top Image Preview Container */}
                  <div className="p-5 sm:p-7 md:p-8 pb-4">
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-[#141414] border border-white/[0.06]">
                      <ShimmerImage
                        src={project.images.main}
                        alt={`${project.name} preview`}
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>

                  {/* Bottom Metadata & Arrow Action */}
                  <div className="px-5 sm:px-7 md:px-8 pb-5 sm:pb-7 md:pb-8 pt-2 flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-medium text-base sm:text-lg tracking-tight truncate group-hover:text-white transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm font-normal mt-0.5 truncate">
                        {project.category}
                      </p>
                    </div>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/[0.12] bg-white/[0.03] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              );

              return (
                <FadeIn
                  key={project.number}
                  delay={0.05 * (idx % 6)}
                  y={20}
                  duration={0.5}
                  className="border-r border-b border-white/[0.12]"
                >
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full focus:outline-none"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* View All / View Less Toggle Button */}
        {PROJECTS.length > 6 && (
          <FadeIn delay={0.2} y={20} duration={0.5}>
            <div className="mt-12 sm:mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 rounded-full border border-white/[0.15] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>
                  {showAll
                    ? "Show Less"
                    : `View All Projects (${PROJECTS.length})`}
                </span>
                <ArrowUpRight
                  className={`w-4 h-4 text-neutral-400 group-hover:text-white transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
