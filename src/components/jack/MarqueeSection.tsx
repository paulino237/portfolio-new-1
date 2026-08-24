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

function DraggableRow({
  images,
  initialScroll = 0,
}: {
  images: string[];
  initialScroll?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (containerRef.current && initialScroll > 0) {
      containerRef.current.scrollLeft = initialScroll;
    }
  }, [initialScroll]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="flex gap-4 overflow-x-auto select-none no-scrollbar cursor-grab active:cursor-grabbing w-full py-2 scroll-smooth"
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
        {/* Row 1 - Interactive Drag & Scroll */}
        <DraggableRow images={ROW1_IMAGES} initialScroll={80} />

        {/* Row 2 - Interactive Drag & Scroll */}
        <DraggableRow images={ROW2_IMAGES} initialScroll={500} />
      </div>
    </section>
  );
}
