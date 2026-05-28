"use client";

import Link from "next/link";
import {
  Building, ShoppingCart, UtensilsCrossed, Newspaper,
  Home, BedDouble, Gift, BarChart3, Gamepad2,
  ExternalLink, ArrowRight, Plus,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";

/* ─── ADD YOUR PROJECTS HERE ─────────────────────────────────────────── */
const projects = [
  {
    icon: Building,
    tags: ["Web Design", "Branding"],
    name: "Maracre Business Website",
    desc: "Corporate website improving brand visibility and customer engagement across the web.",
    link: "http://www.maracre.com.ng",
    linkLabel: "View Live Project",
  },
  {
    icon: ShoppingCart,
    tags: ["E-commerce", "Full Stack"],
    name: "Grand Vegas Mall",
    desc: "Scalable online store with secure payments, product management, and smooth user experience.",
    link: null,
    linkLabel: "View Live Project",
  },
  {
    icon: UtensilsCrossed,
    tags: ["POS System", "Branding"],
    name: "The Culinary Restaurant",
    desc: "Point-of-sale system, QR code menu, and complete brand identity for a top restaurant.",
    link: null,
    linkLabel: "View Case Study",
  },
  {
    icon: Newspaper,
    tags: ["News Portal", "Backend"],
    name: "Leaked News Portal",
    desc: "Full-featured news publishing platform with real-time updates, categories, and admin dashboard.",
    link: null,
    linkLabel: "View Live Project",
  },
  {
    icon: Home,
    tags: ["Real Estate", "Branding"],
    name: "Legacy Estates",
    desc: "Full brand identity, marketing materials, and digital presence for a real estate firm.",
    link: null,
    linkLabel: "View Case Study",
  },
  {
    icon: BedDouble,
    tags: ["Hospitality", "Web App"],
    name: "Leeldera Hotel",
    desc: "Hotel management web app with booking system, POS integration, and staff dashboard.",
    link: "http://www.leelderahotel.com.ng",
    linkLabel: "View Live Project",
  },
  {
    icon: Gift,
    tags: ["Web App", "E-commerce"],
    name: "Christmas Gift App",
    desc: "Luxury gifting platform that lets clients send physical and digital gifts with a festive experience.",
    link: null,
    linkLabel: "View Case Study",
  },
  {
    icon: BarChart3,
    tags: ["Branding", "Social Media"],
    name: "GrandMark Branding",
    desc: "Complete business branding package including logo, brand guide, and social media campaign.",
    link: null,
    linkLabel: "View Case Study",
  },
  {
    icon: Gamepad2,
    tags: ["Web App", "Gaming"],
    name: "Game Paradise",
    desc: "Gaming platform and digital storefront with user accounts, game listings, and payment integration.",
    link: "http://www.gameparadise.com.ng",
    linkLabel: "View Live Project",
  },
];

export default function Projects() {
  return (
    <>
      <PageBanner title="Our" highlight="Projects" crumb="Projects" />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-tag">Recent Work</span>

              <h2
                className="font-syne font-black text-3xl md:text-4xl"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Launched{" "}
                <span style={{ color: "var(--cyan)" }}>
                  Projects
                </span>
              </h2>

              <p
                className="mt-2 text-sm"
                style={{ color: "rgba(255,255,255,.5)" }}
              >
                Modern, scalable, user-focused digital solutions.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-outline"
              style={{ flexShrink: 0 }}
            >
              Start Your Project <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(
              ({ icon: Icon, tags, name, desc, link, linkLabel }, i) => (
                <div
                  key={i}
                  className="card-hover rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.07)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(0,212,255,.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,.07)")
                  }
                >
                  {/* Thumbnail */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      height: 160,
                      background:
                        "linear-gradient(135deg,rgba(26,95,212,.2),rgba(0,212,255,.07))",
                      borderBottom:
                        "1px solid rgba(255,255,255,.06)",
                    }}
                  >
                    <Icon
                      size={56}
                      style={{ color: "rgba(0,212,255,.45)" }}
                      strokeWidth={1.2}
                    />
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                          style={{
                            background:
                              "rgba(26,95,212,.15)",
                            color: "var(--cyan)",
                            letterSpacing: ".06em",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3
                      className="font-syne font-bold text-base mb-1.5 text-white"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      {name}
                    </h3>

                    <p
                      className="text-xs leading-relaxed mb-4"
                      style={{
                        color: "rgba(255,255,255,.45)",
                      }}
                    >
                      {desc}
                    </p>

                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium transition-all"
                        style={{ color: "var(--cyan)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.gap = "8px")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.gap = "6px")
                        }
                      >
                        <ExternalLink size={13} /> {linkLabel}
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      >
                        <ExternalLink size={13} /> {linkLabel}
                      </span>
                    )}
                  </div>
                </div>
              )
            )}

            {/* Add project card */}
            <div
              className="rounded-2xl flex flex-col items-center justify-center p-8 text-center cursor-default"
              style={{
                border: "2px dashed rgba(255,255,255,.1)",
                minHeight: 280,
                background: "rgba(255,255,255,.02)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full mb-4"
                style={{
                  width: 52,
                  height: 52,
                  background: "rgba(0,212,255,.08)",
                  border:
                    "1px solid rgba(0,212,255,.15)",
                }}
              >
                <Plus
                  size={22}
                  style={{ color: "var(--cyan)" }}
                />
              </div>

              <p className="text-sm font-medium mb-1 text-white">
                Add Your Next Project
              </p>

              <p
                className="text-xs leading-relaxed"
                style={{
                  color: "rgba(255,255,255,.35)",
                  maxWidth: 200,
                }}
              >
                Copy a project block inside the{" "}
                <code
                  style={{
                    background: "rgba(255,255,255,.07)",
                    padding: "1px 6px",
                    borderRadius: 4,
                  }}
                >
                  projects
                </code>{" "}
                array in{" "}
                <code
                  style={{
                    background: "rgba(255,255,255,.07)",
                    padding: "1px 6px",
                    borderRadius: 4,
                  }}
                >
                  projects/page.jsx
                </code>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}