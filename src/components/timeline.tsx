"use client";
import { useEffect, useRef, useState } from "react";

export type TimelineEntry = {
  period: string;
  title: string;
  org?: string;
  body: string;
  /** Drop an image in /public/about/ and set the path here, e.g. "/about/internship.jpg" */
  img?: string;
};

function ImageSlot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-(--color-line)">
      {/* Replace this placeholder with:
          <img src={src} alt={alt} className="w-full object-cover" />
          once you've added the image file to /public/about/ */}
      <div
        aria-label={alt}
        className="flex aspect-video w-full items-center justify-center bg-(--color-surface)"
      >
        <span className="font-mono text-xs text-(--color-muted)">{src}</span>
      </div>
    </div>
  );
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerHeightRef = useRef(0);
  const [ballY, setBallY] = useState(0);

  useEffect(() => {
    function update() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      containerHeightRef.current = rect.height;
      const vh = window.innerHeight;
      // Ball tracks a reading line at 60% down the viewport
      const fraction = (vh * 0.5 - rect.top) / rect.height;
      setBallY(Math.max(0, Math.min(1, fraction)) * (rect.height - 12));
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = "y proximity";
    return () => {
      html.style.scrollSnapType = "";
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Blue gradient above ball — fades from transparent to blue at ball center */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          left: "5px",
          width: "2px",
          top: `${Math.max(0, ballY - 94)}px`,
          height: `${Math.min(100, ballY + 6)}px`,
          background: "linear-gradient(to bottom, transparent, rgba(235, 72, 136, 1))",
        }}
      />
      {/* Blue gradient below ball — fades from blue at ball center to transparent */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          left: "5px",
          width: "2px",
          top: `${ballY + 6}px`,
          height: `${Math.min(100, ballY + 6)}px`,
          background: "linear-gradient(to bottom, rgba(235, 72, 136, 1), transparent)",
        }}
      />

      {/* Moving ball — rides along the line as you scroll */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 z-50 h-3 w-3 rounded-full bg-(--color-accent) shadow-md ring-4 ring-(--color-bg)"
        style={{ top: `${ballY}px` }}
      />

      <ol className="space-y-12">
        {entries.map((entry) => (
          <li key={entry.period} className="grid grid-cols-[12px_1fr] gap-x-6 snap-center">
            {/* Left column: dot centered vertically, lines extending through the gap */}
            <div className="relative flex items-center justify-center">
              {/* Line from top of row up to dot center */}
              <div
                className="absolute left-1/2 w-px -translate-x-1/2 bg-(--color-line)"
                style={{ top: 0, bottom: "50%" }}
              />
              {/* Line from dot center down through the space-y-12 gap to next entry */}
              <div
                className="absolute left-1/2 w-px -translate-x-1/2 bg-(--color-line)"
                style={{ top: "50%", height: "calc(50% + 3rem)" }}
              />
              <div className="relative z-10 h-2 w-2 rounded-full bg-(--color-line)" />
            </div>

            {/* Right column: content */}
            <div>
              <time className="font-mono text-xs uppercase tracking-wider text-(--color-accent)">
                {entry.period}
              </time>
              <h3 className="mt-1 font-serif text-lg font-semibold">
                {entry.title}
              </h3>
              {entry.org && (
                <p className="text-sm text-(--color-muted)">{entry.org}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">
                {entry.body}
              </p>
              {entry.img && <ImageSlot src={entry.img} alt={entry.title} />}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
