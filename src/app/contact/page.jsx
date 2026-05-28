"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const contactInfo = [
  { icon: Mail,   label: "Email",        value: ["emmazinitsolutions@gmail.com", "emmanuelchibuikem644@gmail.com"] },
  { icon: Phone,  label: "Phone",        value: ["+234 903 543 2081", "+234 703 570 0146"] },
  { icon: MapPin, label: "Address",      value: ["No 24 off Location Junction,", "Opposite Ej-Jodarm Hospital,", "Port Harcourt, Rivers State, Nigeria"] },
  { icon: Clock,  label: "Availability", value: ["24 / 7 — We never sleep on your success"] },
];

const services = [
  "Web Development", "Software Development", "Mobile App",
  "Graphics & Branding", "Cybersecurity", "SEO & Google Ads",
  "IT Consulting", "POS / Inventory System", "Cloud Solutions", "Other",
];

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus]   = useState("idle"); // idle | sending | done

  const handle = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("done"), 1800);
  };

  return (
    <>
      <PageBanner title="Contact" highlight="Us" crumb="Contact" />

      {/* Intro */}
      <section className="py-12 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="max-w-xl mx-auto px-6">
          <p className="text-base font-medium mb-2">Reach out — we'd love to hear from you.</p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.5)" }}>
            Whether you have a <em>project in mind</em>, need technical support, or just want to ask a question, our team is ready to help with <em>software development, IT systems, websites, digital growth</em>, and more.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — contact info */}
          <div>
            <span className="section-tag">Let's Talk</span>
            <h2 className="font-syne font-black text-3xl mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Speak With <span style={{ color: "var(--cyan)" }}>Our Experts</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,.5)" }}>
              Our team is available around the clock. We respond quickly and help you get started with whatever you need.
            </p>

            {/* Big phone */}
            <div className="p-8 rounded-2xl mb-8"
              style={{ background: "linear-gradient(135deg,rgba(26,95,212,.2),rgba(0,212,255,.05))", border: "1px solid rgba(26,95,212,.3)" }}>
              <div className="flex items-center gap-3 mb-3">
                <Phone size={18} style={{ color: "var(--cyan)" }} />
                <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,.5)" }}>Call us now</span>
              </div>
              <p className="font-syne font-black text-2xl mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                +234 903 543 2081
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,.45)" }}>
                Available 24/7 — We never sleep on your success
              </p>
            </div>

            {/* Info items */}
            <div className="flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ width: 42, height: 42, background: "rgba(26,95,212,.15)" }}>
                    <Icon size={17} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "rgba(255,255,255,.35)", letterSpacing: ".08em" }}>{label}</div>
                    {value.map((v, i) => (
                      <div key={i} className="text-sm" style={{ color: "rgba(255,255,255,.78)" }}>{v}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 rounded-2xl"
            style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
            <h3 className="font-syne font-black text-xl mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}>Schedule Your Appointment</h3>
            <p className="text-sm mb-7" style={{ color: "rgba(255,255,255,.4)" }}>
              We are here to help you 24/7 with experts
            </p>

            {status === "done" ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="flex items-center justify-center rounded-full"
                  style={{ width: 64, height: 64, background: "rgba(5,150,105,.2)", border: "2px solid #059669" }}>
                  <CheckCircle size={28} style={{ color: "#10b981" }} />
                </div>
                <h4 className="font-syne font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>Message Sent!</h4>
                <p className="text-sm text-center" style={{ color: "rgba(255,255,255,.5)", maxWidth: 260 }}>
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  className="btn-outline mt-2"
                  style={{ fontSize: 13, padding: "10px 22px" }}
                  onClick={() => { setStatus("idle"); setForm({ name:"",email:"",phone:"",service:"",message:"" }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { name: "name",  placeholder: "Full Name",     type: "text" },
                    { name: "email", placeholder: "Email Address", type: "email" },
                    { name: "phone", placeholder: "Phone Number",  type: "tel" },
                  ].map(({ name, placeholder, type }) => (
                    <div key={name} className={name === "phone" ? "sm:col-span-2 sm:w-1/2" : ""}>
                      <label className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "rgba(255,255,255,.4)", letterSpacing: ".08em" }}>
                        {placeholder}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handle}
                        placeholder={placeholder}
                        required={name !== "phone"}
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,.05)",
                          border: "1px solid rgba(255,255,255,.1)",
                          borderRadius: 10,
                          padding: "11px 14px",
                          color: "#fff",
                          fontSize: 13,
                          fontFamily: "'Inter', sans-serif",
                          outline: "none",
                        }}
                        onFocus={e => e.target.style.borderColor = "var(--blue)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,.1)"}
                      />
                    </div>
                  ))}
                </div>

                {/* Service select */}
                <div className="mb-4">
                  <label className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,.4)", letterSpacing: ".08em" }}>Service Needed</label>
                  <select name="service" value={form.service} onChange={handle}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,.05)",
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: 10,
                      padding: "11px 14px",
                      color: form.service ? "#fff" : "rgba(255,255,255,.3)",
                      fontSize: 13,
                      fontFamily: "'Inter', sans-serif",
                      outline: "none",
                    }}>
                    <option value="" style={{ background: "#0b1740" }}>Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ background: "#0b1740", color: "#fff" }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,.4)", letterSpacing: ".08em" }}>Your Message</label>
                  <textarea name="message" value={form.message} onChange={handle}
                    rows={4} placeholder="Tell us about your project or question..."
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,.05)",
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: 10,
                      padding: "11px 14px",
                      color: "#fff",
                      fontSize: 13,
                      fontFamily: "'Inter', sans-serif",
                      outline: "none",
                      resize: "vertical",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--blue)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,.1)"}
                  />
                </div>

                <button type="submit" disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-syne font-bold text-base transition-all"
                  style={{
                    background: "linear-gradient(135deg, var(--blue), #0ea5e9)",
                    fontFamily: "'Syne', sans-serif",
                    border: "none",
                    color: "#fff",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    opacity: status === "sending" ? .7 : 1,
                  }}>
                  {status === "sending" ? (
                    <><span className="animate-spin inline-block border-2 border-white/30 border-t-white rounded-full w-4 h-4" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
