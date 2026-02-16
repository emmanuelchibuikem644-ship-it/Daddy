 "use client";
import { CheckCircle, ClipboardList, Phone, Rocket, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import Footer from './Footer';

export default function Emma() {
  return (
    <>
    
    <main className="min-h-screen">

     
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-10 px-10 py-20 text-white">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Technology Solutions <br /> For Your Business
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              Emmazin Technologies delivers reliable technology solutions to help
              businesses operate efficiently and grow. We specialize in
              software development, mobile apps, web design, IT systems, and
              digital growth services.
            </p>
          </div>

          {/* Right Form */}
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
        </div>
      </section>
    </main>
    {/* About & Services Section */}

    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Images */}
          <div className="relative">
            <img
              src="/austin-distel-mpN7xjKQ_Ns-unsplash.jpg"
              alt="Team working"
              className="rounded-3xl shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
              alt="Developers"
              className="absolute -bottom-10 -right-10 hidden w-64 rounded-2xl border-8 border-white shadow-2xl lg:block"
            />
          </div>

          {/* Text Content */}
          <div>
            <span className="text-sm font-semibold tracking-wide text-blue-600">
              ABOUT US
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900">
              We Help Businesses Grow
              <span className="block text-blue-600">With Smart Technology</span>
            </h2>
            <p className="mt-4 text-slate-600">
              We design and build modern digital solutions that help companies
              scale faster, work smarter, and stay competitive.
            </p>

            {/* Progress Bars */}
            <div className="mt-8 space-y-5">
              {[
                { name: "Software Development", value: "92%" },
                { name: "Cyber Security", value: "67%" },
                { name: "Graphics Design, UI/UX", value: "95%" },
                { name: "Web Developmemt and gesign", value: "90%" },
                { name: "seo Google & Meta Ads", value: "85%" },
              
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm font-medium text-slate-700">
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-28 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Our Professional IT Services
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We provide high-quality digital services tailored to your business
            needs.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {["Software Development", "Web Development", "Digital growth and onlie presence", "QR Code Menu Solutions", "graphics degisn and branding", "IT Consulting", "Hotel Management, POS & Inventory Software"].map(
            (service) => (
              <div
                key={service}
                className="group rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  ⚙️
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  {service}
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  Reliable, scalable, and modern solutions built to help your
                  business succeed.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>


    <main className="bg-white text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 "></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-600/20 text-white ">
              Trusted Digital Solutions
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
              We Build <span className="text-blue-500">Powerful</span><br />
              Digital Experiences
            </h1>

            <p className="mt-6  max-w-xl text-black">
              We help businesses grow with modern websites, mobile apps, and
              enterprise software built for performance and scalability.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
                View Our Work
              </button>
            </div>

           
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute rounded-3xl "></div>
            <Image
              src="/annie-spratt-QckxruozjRg-unsplash.jpg"
              alt="Professional Consultant"
              width={800}
              height={900}
              className="relative rounded-3xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  

    <main className="bg-[#050b2e] text-white overflow-hidden h-auto">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1e40af,transparent_40%),radial-gradient(circle_at_bottom_right,#020617,transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 grid lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/IMG-20260208-WA0025.jpg"
              alt="Business Consultant"
              className="w-full max-w-md  rounded-3xl shadow-2xl"
            />
          </div>

          {/* TEXT */}
          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <div className="p-2 rounded-full bg-blue-600/20">
                <Phone size={16} />
              </div>
              <span className="uppercase text-sm">Call us up</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold">
              +234 903 543 2081          </h1>

            <p className="mt-4 text-gray-300 max-w-xl">
              Have a project in mind? Call now to schedule an appointment.
              Our team is ready to take your business to success.
            </p>

            <button className="mt-6 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="relative max-w-6xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">

            <div className="py-6 text-center border-r border-white/20">
              <h3 className="text-3xl font-bold text-blue-400">500</h3>
              <p className="text-sm text-gray-200">Happy Clients</p>
            </div>

            <div className="py-6 text-center border-r border-white/20">
              <h3 className="text-3xl font-bold text-blue-400">20+</h3>
              <p className="text-sm text-gray-200">Companies</p>
            </div>

            <div className="py-6 text-center">
              <h3 className="text-3xl font-bold text-blue-400">50+</h3>
              <p className="text-sm text-gray-200">Projects Done</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-transparent text-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">

          {/* LEFT CARD */}
          <div className="bg-blue-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="font-bold text-lg leading-snug">
              Our Working Process:<br />
              How We Work For<br />
              Our Customers
            </h3>

            <button className="mt-6 px-4 py-2 bg-white text-blue-700 rounded-md">
              Contact Us
            </button>
          </div>

          {/* 1 */}
          
          <div>
            <Search className="text-blue-600 mb-2" />
            <h4 className="font-bold">Discovery</h4>
            <p className="text-sm text-gray-600 mt-1">
              We study your business, goals, and audience deeply.
            </p>
          </div>

          {/* 2 */}
          <div>
            <ClipboardList className="text-blue-600 mb-2 " />
            <h4 className="font-bold">Planning</h4>
            <p className="text-sm text-gray-600 mt-1">
              We create a strategic plan tailored to your needs.
            </p>
          </div>

          {/* 3 */}
          <div>
            <Rocket className="text-blue-600 mb-2" />
            <h4 className="font-bold">Execute</h4>
            <p className="text-sm text-gray-600 mt-1">
              Our team builds and launches your solution.
            </p>
          </div>

          {/* 4 */}
          <div>
            <CheckCircle className="text-blue-600 mb-2" />
            <h4 className="font-bold">Deliver</h4>
            <p className="text-sm text-gray-600 mt-1">
              We deliver quality results and provide support.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center text-blue-400 uppercase text-sm">
            Recent Work
          </p>
          <h2 className="text-center text-3xl font-extrabold mt-2">
            Our Recent Launched Projects
          </h2>
          <p className="text-center text-gray-400 mt-2">
            Available Into Market
          </p>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="project-card">
              <h4 className="font-semibold">Matin Mock</h4>
              <p className="text-sm text-gray-400 mt-2">
                Social Media Campaign
              </p>
            </div>

            <div className="project-card">
              <h4 className="font-semibold">GrandMark</h4>
              <p className="text-sm text-gray-400 mt-2">
                Business Branding
              </p>
            </div>

            <div className="project-card">
              <h4 className="font-semibold">Grand Vegas Mall</h4>
              <p className="text-sm text-gray-400 mt-2">
                Ecommerce Website
              </p>
            </div>

            <div className="project-card">
              <h4 className="font-semibold">Leaked News</h4>
              <p className="text-sm text-gray-400 mt-2">
                News Portal Development
              </p>
            </div>

            <div className="project-card">
              <h4 className="font-semibold">The Culinary Restaurant</h4>
              <p className="text-sm text-gray-400 mt-2">
                POS & Branding
              </p>
            </div>

            <div className="project-card">
              <h4 className="font-semibold">Legacy Estates</h4>
              <p className="text-sm text-gray-400 mt-2">
                Real Estate Branding
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CARD STYLE */}
      <style jsx>{`
        .project-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: 0.3s;
        }
        .project-card:hover {
          background: rgba(255,255,255,0.1);
        }
      `}</style>

    </main>
    <main className="bg-slate-50 text-slate-900">
      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">Testimonials</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">What Clients Say About Emmazin</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Real feedback from partners who trust Emmazin to deliver clean design, solid engineering, and measurable results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[{
            quote:
              "Emmazin transformed our operations with a fast, reliable system that wishes our client merry6 christmas with different5 luxary gift which can also be physical and online gift",
            name: "Management Team",
            role: "christmas app",
          },
          {
            quote:
              "The platform is intuitive and powerful. Our staff adopted it quickly, and customer experience improved almost immediately.",
             name: "Caretaker",
             role: "Legacy Estate",
          },
          {
            quote:
              "From concept to launch, Emmazin delivered a polished product on time. The attention to detail truly stands out.",
            name: "Founder",
            role: "The Journey",
          }].map((t, i) => (
            <article key={i} className="relative bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-xl">“</span>
              <p className="mt-4 text-slate-700 leading-relaxed">{t.quote}</p>
              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
     {/* <Footer/> */}
    </>
  );
}



