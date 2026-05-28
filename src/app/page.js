"use client";
import Link from "next/link";
import {
  Phone, LayoutGrid, ArrowRight,
  Search, ClipboardList, Rocket, CheckCircle,
  Star, Globe, Code, Smartphone, TrendingUp,
  Brush, ShieldCheck, Store, Cloud, Settings,
} from "lucide-react";
import StatCard from "@/components/StatCard";
import SkillBars from "@/components/SkillBars";


/* ─── DATA ─── */
const services = [
  { icon: Code,        title: "Software Development",    desc: "Secure, scalable software built for your exact business needs." },
  { icon: Globe,       title: "Web Development",         desc: "Modern, responsive websites that convert visitors and grow brands." },
  { icon: Smartphone,  title: "Mobile App Development",  desc: "Cross-platform apps delivering smooth experiences on iOS and Android." },
  { icon: TrendingUp,  title: "SEO & Digital Growth",    desc: "Google Ads, Meta Ads, and SEO to grow your online visibility." },
  { icon: Brush,       title: "Graphics & Branding",     desc: "Creative visual identities that make your business unforgettable." },
  { icon: ShieldCheck, title: "Cybersecurity",           desc: "Proactive protection and threat detection for your digital assets." },
];

const testimonials = [
  { quote: "Emmazin transformed our operations with a fast, reliable system. The team understood exactly what we needed and delivered beyond expectations.", name: "Management Team", role: "Christmas App — Luxury Gifting" },
  { quote: "The platform is intuitive and powerful. Our staff adopted it quickly, and customer experience improved almost immediately after launch.", name: "Caretaker", role: "Legacy Estates — Real Estate" },
  { quote: "From concept to launch, Emmazin delivered a polished product on time. The attention to detail and commitment to quality truly stands out.", name: "Founder", role: "The Culinary — Restaurant" },
];

const process = [
  { num: "01", icon: Search,        title: "Discovery", desc: "We study your business, goals, and audience in depth." },
  { num: "02", icon: ClipboardList, title: "Planning",   desc: "A strategic plan with timelines and clear deliverables." },
  { num: "03", icon: Rocket,        title: "Execute",    desc: "We build and test with precision and speed." },
  { num: "04", icon: CheckCircle,   title: "Deliver",    desc: "Launch and ongoing support for long-term success." },
];

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: 60, paddingBottom: 60 }}>
        {/* Glow blobs */}
        <div className="blob" style={{ width: 700, height: 700, background: "radial-gradient(circle,rgba(26,95,212,.18),transparent 70%)", top: -200, right: -100 }} />
        <div className="blob" style={{ width: 500, height: 500, background: "radial-gradient(circle,rgba(0,212,255,.1),transparent 70%)", bottom: 0, left: -150 }} />
        {/* Decorative ring */}
        <div className="animate-spin-slow hidden lg:block" style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", width: 400, height: 400, border: "1px solid rgba(0,212,255,.08)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", width: 300, height: 300, border: "1px solid rgba(0,212,255,.05)", borderRadius: "50%" }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl animate-fadeUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs"
              style={{ background: "rgba(0,212,255,.07)", border: "1px solid rgba(0,212,255,.18)", color: "var(--cyan)" }}>
              <span className="pulse-dot" />
              Available for new projects
            </div>

            <h1 className="font-syne font-black leading-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}>
              Technology That<br />
              <span style={{ color: "var(--cyan)" }}>Drives Business Growth</span>
            </h1>

            <p className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,.6)", maxWidth: 520 }}>
              Emmazin IT Solutions builds <em>modern software</em>, <em>web platforms</em>, and <em>digital experiences</em> that help businesses scale, compete, and succeed in today's world.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                <Phone size={14} /> Book Consultation
              </Link>
              <Link href="/projects" className="btn-outline">
                <LayoutGrid size={14} /> View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "1px", background: "rgba(255,255,255,.07)" }}>
          <StatCard count={500} suffix="+"   label="Happy Clients"   />
          <StatCard count={50}  suffix="+"   label="Projects Done"   />
          <StatCard count={20}  suffix="+"   label="Companies Served"/>
          <StatCard count={24}  suffix="/7"  label="Support"         />
        </div>
      </div>

      {/* ════════ MARQUEE ════════ */}
      <div className="overflow-hidden py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="marquee-track">
          {["Web Development","Software Engineering","UI/UX Design","Mobile Apps","Cybersecurity","Google Ads & SEO","Cloud Solutions","Graphic Design","IT Consulting","POS Systems",
            "Web Development","Software Engineering","UI/UX Design","Mobile Apps","Cybersecurity","Google Ads & SEO","Cloud Solutions","Graphic Design","IT Consulting","POS Systems",
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap"
              style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>
              <span style={{ color: "var(--cyan)", fontSize: 7 }}>◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ════════ ABOUT SNIPPET ════════ */}
      <section className="py-24" style={{ background: "rgba(255,255,255,.015)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">About Emmazin</span>
            <h2 className="font-syne font-black text-3xl md:text-4xl leading-tight mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              We Help Businesses Grow<br />
              <span style={{ color: "var(--cyan)" }}>With Smart Technology</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,.55)" }}>
              We are a <em>forward-thinking</em> software development company committed to delivering <em>innovative digital solutions</em>. From concept and design to development and deployment, we work closely with clients to ensure every solution aligns with their goals, enhances operational efficiency, and delivers <em>real, measurable value</em>.
            </p>
            <Link href="/about" className="btn-primary">
              <ArrowRight size={14} /> Learn More
            </Link>
          </div>
          <SkillBars subset={5} />
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="font-syne font-black text-3xl md:text-4xl"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Our Professional <span style={{ color: "var(--cyan)" }}>IT Services</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,.5)", maxWidth: 480, margin: "12px auto 0" }}>
              High-quality digital services tailored to your business needs — from websites to enterprise software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="card-hover p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(26,95,212,.4)";
                  e.currentTarget.style.background  = "rgba(26,95,212,.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,.07)";
                  e.currentTarget.style.background  = "rgba(255,255,255,.04)";
                }}
              >
                <div className="flex items-center justify-center rounded-xl mb-5"
                  style={{ width: 48, height: 48, background: "rgba(26,95,212,.15)" }}>
                  <Icon size={22} style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="font-syne font-bold text-base mb-2 text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,.5)" }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="py-24" style={{ background: "rgba(255,255,255,.015)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-syne font-black text-3xl md:text-4xl"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Our Working <span style={{ color: "var(--cyan)" }}>Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* connector line desktop */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg,var(--blue2),var(--cyan),var(--blue2))" }} />

            {process.map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="text-center relative">
                <div className="flex items-center justify-center rounded-full mx-auto mb-5 font-syne font-black text-base relative z-10"
                  style={{ width: 52, height: 52, background: "linear-gradient(135deg,var(--blue),var(--cyan))", fontFamily: "'Syne', sans-serif" }}>
                  {num}
                </div>
                <div className="flex justify-center mb-3">
                  <Icon size={20} style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="font-syne font-bold text-base mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,.5)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-syne font-black text-3xl md:text-4xl"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              What Clients Say <span style={{ color: "var(--cyan)" }}>About Emmazin</span>
            </h2>
            <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,.5)", maxWidth: 500, margin: "12px auto 0" }}>
              Real feedback from partners who trust Emmazin to deliver clean design, solid engineering, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role }, i) => (
              <article key={i} className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#f0a500" stroke="none" />)}
                </div>
                <div className="font-syne text-3xl font-black leading-none mb-2"
                  style={{ color: "var(--blue2)", opacity: .6, fontFamily: "'Syne', sans-serif" }}>"</div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,.7)" }}>{quote}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-full font-syne font-bold text-xs"
                    style={{ width: 38, height: 38, background: "linear-gradient(135deg,var(--blue),var(--cyan))", fontFamily: "'Syne', sans-serif" }}>
                    {name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-syne font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>{name}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,.4)" }}>{role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA BANNER ════════ */}
      <section className="py-20 text-center"
        style={{ background: "linear-gradient(135deg,rgba(26,95,212,.15),rgba(0,212,255,.05))", borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-syne font-black text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Ready to Grow Your Business?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,.55)" }}>
            Let's build something <em>powerful</em> together — <em>on time, every time</em>, with quality at the core.
          </p>
          <Link href="/contact" className="btn-primary">
            <Phone size={14} /> Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
