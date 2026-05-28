"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#040c21", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-syne text-2xl font-black mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
              Emmazin<span style={{ color: "var(--cyan)" }}>.</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,.4)", maxWidth: 220 }}>
              Building <em>modern digital solutions</em> that help businesses grow, scale, and succeed in competitive markets.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={15} />, href: "#" },
                { icon: <Twitter    size={15} />, href: "#" },
                { icon: <Linkedin   size={15} />, href: "#" },
                { icon: <Github     size={15} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="flex items-center justify-center rounded-full transition-all"
                  style={{
                    width: 34, height: 34,
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.08)",
                    color: "rgba(255,255,255,.45)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--blue2)";
                    e.currentTarget.style.borderColor = "var(--blue2)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,.45)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne text-xs font-bold uppercase tracking-widest mb-5 text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}>Services</h4>
            <ul className="flex flex-col gap-3">
              {["Web Development", "Software Development", "Mobile Apps", "UI/UX Design", "Cybersecurity", "SEO & Ads"].map(s => (
                <li key={s}>
                  <Link href="/services" className="text-sm no-underline transition-colors"
                    style={{ color: "rgba(255,255,255,.4)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.4)"}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-syne text-xs font-bold uppercase tracking-widest mb-5 text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}>Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us",  href: "/about" },
                { label: "Projects",  href: "/projects" },
                { label: "Services",  href: "/services" },
                { label: "Contact",   href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm no-underline transition-colors"
                    style={{ color: "rgba(255,255,255,.4)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.4)"}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne text-xs font-bold uppercase tracking-widest mb-5 text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}>Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <Mail size={14} style={{ color: "var(--cyan)", marginTop: 2, flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,.4)" }}>
                  emmazinitsolutions@gmail.com
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={14} style={{ color: "var(--cyan)", marginTop: 2, flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,.4)" }}>
                  +234 903 543 2081<br />+234 703 570 0146
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={14} style={{ color: "var(--cyan)", marginTop: 2, flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,.4)" }}>
                  No 24 off Location Junction,<br />Port Harcourt, Rivers State
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,.25)" }}>
            © {new Date().getFullYear()} Emmazin IT Solutions. All rights reserved.
          </p>
          <nav className="flex gap-6">
            {["Home", "About", "Projects", "Contact"].map(l => (
              <Link key={l} href={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="text-xs no-underline transition-colors"
                style={{ color: "rgba(255,255,255,.3)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.3)"}>
                {l}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
