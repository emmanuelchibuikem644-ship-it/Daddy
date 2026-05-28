"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Menu, X, Phone, Mail, MapPin, Instagram,
  Twitter, Linkedin,
} from "lucide-react";

const links = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* ── TOP INFO BAR ── */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 text-xs"
        style={{ background: "rgba(4,19,43,.95)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="flex items-center gap-6 text-gray-400">
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-cyan-400" />
            No 24 off Location Junction, Port Harcourt, Rivers State
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={12} className="text-cyan-400" />
            +234 903 543 2081
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={12} className="text-cyan-400" />
            emmazinitsolutions@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <Instagram size={13} className="cursor-pointer hover:text-cyan-400 transition" />
          <Twitter    size={13} className="cursor-pointer hover:text-cyan-400 transition" />
          <Linkedin   size={13} className="cursor-pointer hover:text-cyan-400 transition" />
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(6,14,43,.96)"
            : "rgba(6,14,43,.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,.07)",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span
              className="font-syne text-xl font-black tracking-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Emmazin
              <span style={{ color: "var(--cyan)" }}>.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="px-4 py-2 rounded-full text-sm transition-all duration-200 no-underline"
                    style={{
                      color: active ? "#fff" : "rgba(255,255,255,.6)",
                      background: active ? "rgba(255,255,255,.08)" : "transparent",
                      fontWeight: active ? 500 : 400,
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden lg:block btn-primary" style={{ padding: "10px 22px", fontSize: "13px" }}>
            <Phone size={13} /> Get in Touch
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg"
            style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)" }}
            aria-label="Open menu"
          >
            <Menu size={20} className="text-white" />
          </button>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: "rgba(0,0,0,.5)" }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── MOBILE SIDEBAR ── */}
      <aside
        className="fixed top-0 left-0 h-full z-50 transition-transform duration-300 flex flex-col"
        style={{
          width: 280,
          background: "var(--navy2)",
          borderRight: "1px solid rgba(255,255,255,.08)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="flex justify-between items-center px-6 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,.08)" }}>
          <span className="font-syne font-black text-lg text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Emmazin<span style={{ color: "var(--cyan)" }}>.</span>
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-2">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="py-3 px-4 rounded-xl text-sm font-medium transition-all no-underline"
                style={{
                  color: active ? "#fff" : "rgba(255,255,255,.6)",
                  background: active ? "rgba(34,114,255,.15)" : "transparent",
                  borderLeft: active ? "3px solid var(--cyan)" : "3px solid transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto px-6 pb-8">
          <Link href="/contact" className="btn-primary w-full justify-center">
            <Phone size={14} /> Book Consultation
          </Link>
          <div className="mt-6 flex flex-col gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-2"><Phone size={12} className="text-cyan-400" />+234 903 543 2081</span>
            <span className="flex items-center gap-2"><Mail  size={12} className="text-cyan-400" />emmazinitsolutions@gmail.com</span>
          </div>
        </div>
      </aside>
    </>
  );
}
