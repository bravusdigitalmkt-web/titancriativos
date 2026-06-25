import { useEffect, useRef } from "react";

/**
 * Global futuristic blue background:
 * - mesh gradient blobs
 * - animated grid
 * - light streaks
 * - drifting particles
 * - scanline beam
 * Sits fixed behind all content with pointer-events:none.
 */
export default function FuturisticBg() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const root = particlesRef.current;
    if (!root) return;
    const count = 22;
    const nodes = [];
    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      el.className = "particle";
      const size = 1 + Math.random() * 2.5;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.bottom = `-${Math.random() * 30}vh`;
      el.style.animationDuration = `${12 + Math.random() * 14}s`;
      el.style.animationDelay = `${Math.random() * 12}s`;
      el.style.opacity = `${0.4 + Math.random() * 0.6}`;
      root.appendChild(el);
      nodes.push(el);
    }
    return () => nodes.forEach((n) => n.remove());
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      data-testid="futuristic-bg"
    >
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#09090B]" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid-animated [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Conic gradient wash */}
      <div className="absolute inset-0 bg-conic-blue opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Mesh blobs */}
      <div
        className="mesh-blob"
        style={{
          width: "40rem",
          height: "40rem",
          top: "-10rem",
          left: "-10rem",
          background: "radial-gradient(circle, rgba(37,99,235,0.35), transparent 60%)",
          animation: "blob-1 16s ease-in-out infinite",
        }}
      />
      <div
        className="mesh-blob"
        style={{
          width: "36rem",
          height: "36rem",
          bottom: "-8rem",
          right: "-8rem",
          background: "radial-gradient(circle, rgba(59,130,246,0.28), transparent 60%)",
          animation: "blob-2 20s ease-in-out infinite",
        }}
      />
      <div
        className="mesh-blob"
        style={{
          width: "30rem",
          height: "30rem",
          top: "40%",
          left: "30%",
          background: "radial-gradient(circle, rgba(96,165,250,0.18), transparent 60%)",
          animation: "blob-1 24s ease-in-out infinite reverse",
        }}
      />

      {/* Light streaks */}
      <div className="light-streak s1" />
      <div className="light-streak s2" />
      <div className="light-streak s3" />

      {/* Scan beam */}
      <div className="scan-beam" />

      {/* Floating particles container */}
      <div ref={particlesRef} className="absolute inset-0" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090B]/40" />
    </div>
  );
}
