"use client";
import Link from "next/link";
import {
  Code, Globe, Smartphone, TrendingUp, Brush, ShieldCheck,
  Store, Cloud, Settings, Search, ClipboardList, Rocket,
  CheckCircle, ArrowRight,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";



const services = [
  { icon: Code,        title: "Software Development",             desc: "We build secure and scalable software tailored to your business needs, from internal tools to full-scale enterprise applications." },
  { icon: Globe,       title: "Web Development",                  desc: "Fast, responsive, and modern websites designed to convert visitors into customers and represent your brand professionally online." },
  { icon: Smartphone,  title: "Mobile App Development",           desc: "Cross-platform mobile apps that deliver smooth, intuitive experiences on both iOS and Android devices." },
  { icon: TrendingUp,  title: "Digital Growth & Online Presence", desc: "We help businesses grow online through smart digital strategies, improved visibility, SEO, Google Ads, and Meta Ads." },
  { icon: Brush,       title: "Graphic Design & Branding",        desc: "Professional branding, UI/UX design, and creative visual identities that make your business stand out and be remembered." },
  { icon: ShieldCheck, title: "Cybersecurity",                    desc: "Proactive security audits, threat detection, and robust protection to keep your digital infrastructure safe and compliant." },
  { icon: Store,       title: "POS & Inventory Software",         desc: "Complete hotel, restaurant, and retail management solutions including POS systems, QR code menus, and inventory tracking." },
  { icon: Cloud,       title: "Cloud Solutions (AWS)",            desc: "Cloud infrastructure setup, migration, and management for reliable, scalable, and cost-efficient business operations." },
  { icon: Settings,    title: "IT Consulting",                    desc: "Expert IT consulting to help you choose the right technologies, optimise workflows, and scale your business efficiently." },
];

const process = [
  { num: "01", icon: Search,        title: "Discovery", desc: "Understanding your goals, requirements, and business vision in depth." },
  { num: "02", icon: ClipboardList, title: "Planning",   desc: "Strategic planning, solution design, and clear timeline creation." },
  { num: "03", icon: Rocket,        title: "Execute",    desc: "Development, testing, and quality implementation by our expert team." },
  { num: "04", icon: CheckCircle,   title: "Deliver",    desc: "Launch, ongoing support, and continuous improvement for your product." },
];

export default function Services() {
  return (
    <>
      <PageBanner title="Our" highlight="Services" crumb="Services" />

      {/* ── Services grid ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="font-syne font-black text-3xl md:text-4xl"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Professional IT <span style={{ color: "var(--cyan)" }}>Solutions</span>
            </h2>
            <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,.5)", maxWidth: 500, margin: "12px auto 0" }}>
              We provide <em>modern digital services</em> tailored to help businesses <em>grow, scale, and succeed</em> online.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="card-hover p-8 rounded-2xl"
                style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,.3)";
                  e.currentTarget.style.background = "rgba(26,95,212,.07)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,.04)";
                }}
              >
                <div className="flex items-center justify-center rounded-xl mb-5"
                  style={{ width: 52, height: 52, background: "rgba(26,95,212,.15)" }}>
                  <Icon size={24} style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="font-syne font-bold text-base mb-3 text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.5)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24" style={{ background: "rgba(255,255,255,.015)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Left card */}
          <div className="p-8 rounded-2xl" style={{ background: "var(--blue)" }}>
            <span className="section-tag" style={{ color: "rgba(255,255,255,.6)" }}>Working Process</span>
            <h3 className="font-syne font-black text-xl leading-snug mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Our Working Process: How We Deliver For Customers
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,.7)" }}>
              We follow a <em>structured, transparent process</em> to deliver high-quality digital solutions that meet your goals <em>on time</em>.
            </p>
            <Link href="/contact" className="btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>
              Contact Us
            </Link>
          </div>

          {/* Steps */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {process.map(({ num, icon: Icon, title, desc }) => (
              <div key={num}>
                <div className="font-syne font-black text-4xl mb-3"
                  style={{ fontFamily: "'Syne', sans-serif", color: "var(--cyan)", opacity: .35 }}>{num}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} style={{ color: "var(--cyan)" }} />
                  <h4 className="font-syne font-bold text-base"
                    style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h4>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.5)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-20 text-center"
        style={{ background: "linear-gradient(135deg,rgba(26,95,212,.15),rgba(0,212,255,.04))", borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-syne font-black text-3xl mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Grow Your Business With Emmazin
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,.55)" }}>
            Build your website, software, or digital platform with a team that truly cares about your success.
          </p>
          <Link href="/contact" className="btn-primary">
            <ArrowRight size={14} /> Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
