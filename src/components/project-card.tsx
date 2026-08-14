/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { VideoModal } from "@/components/video-modal";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200 group bg-card",
          className
        )}
      >
        <div className="relative shrink-0 overflow-hidden">
          {video ? (
            <div
              className="relative cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsVideoOpen(true);
              }}
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="size-11 rounded-full bg-background/90 text-foreground flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="size-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ) : (
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {image ? (
                <ProjectImage src={image} alt={title} />
              ) : (
                <div className="w-full h-48 bg-muted" />
              )}
            </Link>
          )}

          {/* Badges / Links / See Demo button */}
          <div className="absolute top-2 right-2 flex flex-wrap gap-1.5">
            {video && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsVideoOpen(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-md shadow transition-colors cursor-pointer"
              >
                <Play className="size-3 fill-current" />
                See Demo
              </button>
            )}

            {links &&
              links.length > 0 &&
              links.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge
                    className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                    variant="default"
                  >
                    {item.icon}
                    {item.type}
                  </Badge>
                </Link>
              ))}
          </div>
        </div>

        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{title}</h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {video && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl={video}
          title={title}
        />
      )}
    </>
  );
}
