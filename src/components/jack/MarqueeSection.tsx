"use client";

import React, { useEffect, useRef, useState } from "react";

import { PROJECTS } from "./ProjectsSection";
import { ShimmerImage } from "./ShimmerImage";

const PROJECT_IMAGES = PROJECTS.flatMap((p) => [
  p.images.main,
  ...(p.images.sub1 ? [p.images.sub1] : []),
  ...(p.images.sub2 ? [p.images.sub2] : []),
]).filter((img): img is string => Boolean(img));

const midpoint = Math.ceil(PROJECT_IMAGES.length / 2);
const ROW1_IMAGES = [
  ...PROJECT_IMAGES.slice(0, midpoint),
  ...PROJECT_IMAGES.slice(0, midpoint),
  ...PROJECT_IMAGES.slice(0, midpoint),
];
const ROW2_IMAGES = [
  ...PROJECT_IMAGES.slice(midpoint),
  ...PROJECT_IMAGES.slice(midpoint),
  ...PROJECT_IMAGES.slice(midpoint),
];

function AutoScrollRow({
  images,
  speed = 1,
  direction = "left",
}: {
  images: string[];
  speed?: number;
  direction?: "left" | "right";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (containerRef.current && !isPaused && !isDraggingRef.current) {
        const container = containerRef.current;
        const maxScroll = container.scrollWidth / 2;

        if (direction === "left") {
          container.scrollLeft += speed;
          if (container.scrollLeft >= maxScroll) {
            container.scrollLeft -= maxScroll;
          }
        } else {
          container.scrollLeft -= speed;
          if (container.scrollLeft <= 0) {
            container.scrollLeft += maxScroll;
          }
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, speed, direction]);

  useEffect(() => {
    if (containerRef.current && direction === "right") {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth / 4;
    }
  }, [direction]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDraggingRef.current = true;
    setIsPaused(true);
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="flex gap-4 overflow-x-auto select-none no-scrollbar cursor-grab active:cursor-grabbing w-full py-2"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex gap-4 flex-nowrap shrink-0 px-4 sm:px-6">
        {images.map((src, idx) => (
          <div
            key={`img-${idx}`}
            className="w-[320px] sm:w-[420px] md:w-[480px] h-[220px] sm:h-[280px] md:h-[320px] flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-md hover:border-white/20 transition-colors"
          >
            <ShimmerImage src={src} alt="Project Preview" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden w-full select-none">
      <div className="flex flex-col gap-4 w-full">
        {/* Row 1 - Auto-scrolls LEFT & Draggable */}
        <AutoScrollRow images={ROW1_IMAGES} speed={1.2} direction="left" />

        {/* Row 2 - Auto-scrolls RIGHT & Draggable */}
        <AutoScrollRow images={ROW2_IMAGES} speed={1.2} direction="right" />
      </div>
    </section>
  );
}
