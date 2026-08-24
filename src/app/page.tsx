"use client";

import React from "react";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { SkillsSection } from "@/components/jack/SkillsSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { FooterSection } from "@/components/jack/FooterSection";

export default function Page() {
  return (
    <main className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen w-full overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
