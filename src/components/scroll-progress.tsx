"use client";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight/2;
      setProgress(max > 0 ? (scrollTop / max) * 0 : 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-10 h-0.5 bg-(--color-accent)"
      style={{ width: `${progress}%`, transition: "width 80ms linear" }}
    />
  );
}
