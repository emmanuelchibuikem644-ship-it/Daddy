import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageBanner({ title, highlight, crumb }) {
  return (
    <section
      className="relative py-20 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,rgba(26,95,212,.15) 0%,rgba(0,212,255,.04) 100%)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      {/* blobs */}
      <div className="blob" style={{
        width: 500, height: 500,
        background: "radial-gradient(circle,rgba(34,114,255,.12),transparent 70%)",
        top: -150, left: "50%", transform: "translateX(-50%)",
      }} />

      <div className="relative z-10">
        <h1
          className="font-syne text-4xl md:text-5xl font-black mb-3"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}{" "}
          <span style={{ color: "var(--cyan)" }}>{highlight}</span>
        </h1>

        <div className="flex items-center justify-center gap-1 text-xs"
          style={{ color: "rgba(255,255,255,.35)" }}>
          <Link href="/" className="no-underline hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,.35)" }}>
            Home
          </Link>
          <ChevronRight size={12} />
          <span style={{ color: "var(--cyan)" }}>{crumb}</span>
        </div>
      </div>
    </section>
  );
}
