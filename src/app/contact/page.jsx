   "use client";
import React from 'react'
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export default function ContactPage() {
  return (
    <div className="w-full font-sans text-gray-800">
      
      {/* ================= HERO ================= */}
      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Contact Us
          </h1>
          <p className="text-sm opacity-80">
            Emmazin / Contact
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-3xl mx-auto text-center py-20 px-6">
        <p className="text-lg font-semibold mb-3">
          Reach out to us — we’d love to hear from you.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Whether you have a project in mind, need technical support,
          or just want to ask a question, our team is ready to help
          you with software development, IT systems, websites, digital
          growth, and corporate documentation.
        </p>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-16 h-50">
        {/* LEFT CARD */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-2xl">
          <p className="text-xs uppercase tracking-widest opacity-80 mb-3">
            Let’s Talk
          </p>
          <h2 className="text-2xl font-bold mb-10">
            Speak With Expert.
          </h2>

          <div className="space-y-8 text-sm">
            <div>
              <p className="font-semibold mb-1">Email</p>
              <p className="opacity-90">emmazinitsolutions@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Phone</p>
              <p className="opacity-90">+234 903 543 2081</p>
              <p className="opacity-90">+234 703 570 0146</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Address</p>
              <p className="opacity-90">
                Location junction, No 24 off location junction, opposite Ej-jodarm hospital, portharcourt, river State, Nigeria.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-xl p-8 text-black max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-bold mb-2">
              Schedule Your Appointment
            </h2>
            <p className="text-gray-500 mb-6">
              We are here to help you 24/7 with experts
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="E-Mail"
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your Message Here"
                rows="4"
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition">
                Submit Now
              </button>
            </form>
          </div>
      </section>
       
    </div>
     
  );
}
    
