"use client";

import React from "react";
import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "Backend Architecture & APIs",
    description:
      "Designing high-throughput, fault-tolerant REST and GraphQL APIs, event-driven microservices, and real-time systems using Node.js, NestJS, and .NET (C#).",
  },
  {
    number: "02",
    name: "Frontend Engineering",
    description:
      "Building ultra-responsive, accessible, and conversion-focused web applications with React, Next.js, Vue.js, TypeScript, and modern state architectures.",
  },
  {
    number: "03",
    name: "Cross-Platform Mobile Apps",
    description:
      "Developing production-ready mobile applications for iOS and Android using Flutter and React Native with native bridge integrations, offline sync, and push notifications.",
  },
  {
    number: "04",
    name: "Databases & Data Modeling",
    description:
      "Architecting optimized relational and NoSQL databases with PostgreSQL, MySQL, Firebase Firestore, Prisma ORM, indexing strategies, and high-concurrency scaling.",
  },
  {
    number: "05",
    name: "Cloud, DevOps & Payment Integrations",
    description:
      "Deploying scalable cloud infrastructures on AWS and GCP with Docker containerization, CI/CD pipelines, and integrating African and global payment aggregators (Mobile Money, Stripe, FlexiPay).",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services &amp; Stack
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
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
                  {service.number}
                </div>

                {/* Name & Description */}
                <div className="flex flex-col gap-2 md:gap-3 flex-1">
                  <h3
                    className="text-[#0C0C0C] font-medium uppercase leading-snug tracking-tight"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-[#0C0C0C]/60 font-light leading-relaxed max-w-2xl"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.description}
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
