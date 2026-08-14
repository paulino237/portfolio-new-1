"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Play, Pause, Volume2, VolumeX, Maximize, Loader2 } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setIsLoading(true);
    }
  }, [isOpen, videoUrl]);

  if (!mounted || !isOpen || !videoUrl) return null;

  const isEmbed =
    videoUrl.includes("youtube.com") ||
    videoUrl.includes("youtu.be") ||
    videoUrl.includes("vimeo.com") ||
    videoUrl.includes("loom.com");

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/") + "?autoplay=1&rel=0";
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes("loom.com/share/")) {
      return url.replace("/share/", "/embed/");
    }
    return url;
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-[96vw] max-w-[1400px] bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40 shrink-0">
          <h3
            id="video-modal-title"
            className="text-base sm:text-lg font-semibold text-foreground truncate"
          >
            {title}: Demo Preview
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Video Container (Cinema Aspect Ratio & Huge Size) */}
        <div className="relative aspect-video w-full max-h-[82vh] bg-black flex items-center justify-center overflow-hidden">
          {isLoading && !isEmbed && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
              <Loader2 className="size-10 animate-spin text-primary" />
            </div>
          )}

          {isEmbed ? (
            <iframe
              src={getEmbedUrl(videoUrl)}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                src={videoUrl}
                autoPlay
                playsInline
                loop
                onLoadedData={() => setIsLoading(false)}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Custom Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white opacity-0 hover:opacity-100 transition-opacity duration-200">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="size-5" />
                    ) : (
                      <Play className="size-5" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="size-5" />
                    ) : (
                      <Volume2 className="size-5" />
                    )}
                  </button>
                </div>
                <button
                  onClick={handleFullscreen}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Fullscreen"
                >
                  <Maximize className="size-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
