"use client";

import React from "react";
import { FadeIn } from "./FadeIn";

const SKILLS = [
  {
    number: "01",
    name: "Backend Engineering",
    description:
      "Node.js, NestJS, Express, .NET (C#), REST & GraphQL APIs, microservices architectures, background task queues, and high-throughput server backends.",
  },
  {
    number: "02",
    name: "Frontend Development",
    description:
      "React, Next.js, Vue.js, TypeScript, Tailwind CSS, modern state management, server-side rendering, and ultra-fast conversion-driven interfaces.",
  },
  {
    number: "03",
    name: "Mobile Development",
    description:
      "Flutter (Dart) and React Native for production iOS & Android applications with native bridges, offline persistence, and seamless store deployments.",
  },
  {
    number: "04",
    name: "Databases & ORMs",
    description:
      "PostgreSQL, MySQL, Firebase Firestore, Supabase, Redis, Prisma ORM, Entity Framework, schema design, query optimization, and data security.",
  },
  {
    number: "05",
    name: "Cloud & DevOps",
    description:
      "AWS (EC2, S3, RDS, Lambda), Google Cloud Platform (GCP), Docker containerization, CI/CD automated workflows, and high-availability infrastructure.",
  },
  {
    number: "06",
    name: "Payment Gateways & Integrations",
    description:
      "Pan-African mobile money aggregations (Monetbil, CinetPay, Maviance, PawaPay, InTouch, Serdipay) and global processors (Stripe, PayPal, Google Pay).",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Skills List */}
        <div className="flex flex-col w-full">
          {SKILLS.map((skill, index) => (
            <FadeIn
              key={skill.number}
              delay={index * 0.08}
              y={30}
              duration={0.7}
              className="border-b border-[#0C0C0C]/15 last:border-b-0 py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {skill.number}
                </div>

                {/* Name & Description */}
                <div className="flex flex-col gap-2 md:gap-3 flex-1">
                  <h3
                    className="text-[#0C0C0C] font-medium uppercase leading-snug tracking-tight"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    className="text-[#0C0C0C]/70 font-light leading-relaxed max-w-2xl"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
