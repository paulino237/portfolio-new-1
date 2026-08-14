"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Quote } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function TestimonialsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <h2 className="text-xl font-bold">Client Testimonials</h2>
        <p className="text-sm text-muted-foreground mt-1">
          What my clients say about my work
        </p>
      </BlurFade>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATA.testimonials.map((testimonial, index) => (
          <BlurFade
            key={testimonial.name}
            delay={BLUR_FADE_DELAY * 14 + index * 0.08}
          >
            <div className="flex flex-col gap-4 p-5 rounded-xl border bg-card h-full relative overflow-hidden">
              <Quote className="absolute top-3 right-3 size-6 text-muted-foreground/20" />
              <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex flex-col gap-0.5 border-t pt-3 mt-auto">
                <span className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {testimonial.title}
                </span>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
