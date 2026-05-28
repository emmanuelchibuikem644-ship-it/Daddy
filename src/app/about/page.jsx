"use client";
import Link from "next/link";
import { User, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SkillBars  from "@/components/SkillBars";
import StatCard   from "@/components/StatCard";



const info = [
  { icon: MapPin, label: "Address",      value: "No 24 off Location Junction, Opposite Ej-Jodarm Hospital, Port Harcourt, Rivers State, Nigeria" },
  { icon: Phone,  label: "Phone",        value: "+234 903 543 2081  •  +234 703 570 0146" },
  { icon: Mail,   label: "Email",        value: "emmanuelchibuikem644@gmail.com"},
  { icon: Clock,  label: "Availability", value: "24 / 7 — We never sleep on your success" },
];

const tags = ["Full-Stack Dev", "UI/UX Design", "AWS Cloud", "Cybersecurity", "Mobile Apps", "Google Ads"];

export default function About() {
  return (
    <>
      <PageBanner title="About" highlight="Emmazin" crumb="About" />

      {/* ── Story ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual card */}
          <div className="p-10 rounded-3xl text-center"
            style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
            <img src="/IMG-20260208-WA0025.jpg" alt="" />
            <h2 className="font-syne font-black text-2xl mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}>Emmanuel Chibuikem</h2>
            <p className="text-sm mb-5" style={{ color: "var(--cyan)" }}>President & Founder</p>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,.55)", textAlign: "left" }}>
              Emmanuel Chibuikem is the <em>President and Founder</em> of Emmazin IT Solutions, a software development company focused on delivering 
              <em>innovative digital solutions</em> that help businesses grow, scale, and succeed in competitive markets. With hands-on experience in IT services, Emmanuel has worked on building 
              <em>modern software applications</em> and mobile solutions for a wide range of clients. He is passionate about using technology to solve <em>real business problems
                </em> and create efficient, scalable digital products.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {tags.map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-full"
                  style={{ background: "rgba(26,95,212,.18)", color: "var(--cyan)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="section-tag">Our Story</span>
            <h2 className="font-syne font-black text-3xl md:text-4xl leading-tight mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              We Are Increasing Business<br />
              <span style={{ color: "var(--cyan)" }}>Success With Technology</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,.55)" }}>
              We are a <em>forward-thinking</em> software development company committed to delivering <em>innovative digital solutions</em> that help businesses thrive in an increasingly competitive and technology-driven world.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,.55)" }}>
              Our approach is driven by <em>quality, creativity, and continuous improvement</em>. We leverage modern technologies, clean architecture, and best development practices to build secure and flexible systems that grow alongside our clients' businesses.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,.55)" }}>
              Whether it's a startup looking to establish a <em>strong digital presence</em> or an established organization seeking to optimize its operations, we provide solutions that are both <em>innovative and practical</em>.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ width: 38, height: 38, background: "rgba(26,95,212,.15)" }}>
                    <Icon size={16} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "rgba(255,255,255,.35)", letterSpacing: ".08em" }}>{label}</div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,.8)" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-24" style={{ background: "rgba(255,255,255,.015)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-tag">Expertise</span>
            <h2 className="font-syne font-black text-3xl"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Our <span style={{ color: "var(--cyan)" }}>Skill Levels</span>
            </h2>
          </div>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <SkillBars />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-tag">By the Numbers</span>
            <h2 className="font-syne font-black text-3xl"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Emmazin <span style={{ color: "var(--cyan)" }}>At a Glance</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
            style={{ gap: "1px", background: "rgba(255,255,255,.07)" }}>
            <StatCard count={500} suffix="+" label="Happy Clients"     />
            <StatCard count={50}  suffix="+" label="Projects Delivered" />
            <StatCard count={20}  suffix="+" label="Companies Served"   />
            <StatCard count={5}   suffix="+" label="Years Experience"   />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 text-center"
        style={{ background: "rgba(255,255,255,.015)", borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <h2 className="font-syne font-black text-2xl md:text-3xl mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          Let's Build Something Amazing Together
        </h2>
        <p className="text-sm mb-7" style={{ color: "rgba(255,255,255,.5)" }}>
          Ready to turn your idea into a powerful digital product?
        </p>
        <Link href="/contact" className="btn-primary">
          <ArrowRight size={14} /> Start a Project
        </Link>
      </section>
    </>
  );
}
