"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

export function AboutSection() {
  const aboutText =
    "With more than four years of engineering experience, i specialize in architecting distributed backends with Node.js, NestJS and .NET, building high-performance web applications with React and Vue.js, and crafting cross-platform mobile apps with Flutter and React Native. I have built fintech platforms powering over 15,000 users and integrated multi-operator payment gateways across Africa and globally. Let's engineer something extraordinary together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Decorative 3D Corner Elements */}
      {/* Top-Left Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative 3D Moon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-2xl"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Bottom-Left 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D Shape"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-2xl"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Top-Right Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative 3D Lego"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-2xl"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Bottom-Right 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D Composition"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-2xl"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated Text Block */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex justify-center px-4">
          <AnimatedText text={aboutText} />
        </div>

        {/* Contact Button */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20} duration={0.7}>
            <ContactButton href="#contact" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
