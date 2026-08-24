"use client";

import React, { useState } from "react";

interface ShimmerImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function ShimmerImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  ...props
}: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#141414] ${containerClassName}`}>
      {/* Shimmer Placeholder with particle & beam animation */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 overflow-hidden bg-[#151515]">
          <div className="absolute inset-0 bg-neutral-900/90 animate-pulse" />
          <div className="absolute inset-0 -inset-x-full animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />
        </div>
      )}

      {/* Real Image with smooth fade & scale reveal */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.02] blur-sm"
        } ${className}`}
        draggable={false}
        {...props}
      />
    </div>
  );
}
