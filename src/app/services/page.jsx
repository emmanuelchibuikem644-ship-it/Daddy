  import React from "react";
import {
  FiCode,
  FiGlobe,
  FiTrendingUp,
  FiGrid,
  FiPenTool,
  FiSettings,
  FiHome,
} from "react-icons/fi";

export default function Page() {
  return (
    <div className="w-full overflow-x-hidden">
      <main>

        {/* Hero Section */}
        <section
          className="h-[400px] sm:h-[500px] w-full bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: "url('/istockphoto-1777722488-612x612.webp')" }}
        >
          <div className="text-center text-black px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Services</h1>
            <p className="mt-2 text-sm sm:text-base opacity-80">Emmazin / services</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We provide modern digital solutions designed to help businesses grow,
                scale, and succeed online.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service Cards */}
              {[
                {
                  icon: <FiCode className="text-green-500 text-4xl mb-4" />,
                  title: "Software Development",
                  desc: "We build secure and scalable software tailored to your business needs, from internal tools to full-scale applications."
                },
                {
                  icon: <FiGlobe className="text-green-500 text-4xl mb-4" />,
                  title: "Web Development",
                  desc: "Fast, responsive, and modern websites designed to convert visitors into customers and represent your brand professionally."
                },
                {
                  icon: <FiTrendingUp className="text-green-500 text-4xl mb-4" />,
                  title: "Digital Growth & Online Presence",
                  desc: "We help businesses grow online through smart digital strategies, improved visibility, and strong brand positioning."
                },
                {
                  icon: <FiGrid className="text-green-500 text-4xl mb-4" />,
                  title: "QR Code Menu Solutions",
                  desc: "Smart QR menu systems that allow customers to view menus instantly on their phones while improving speed and hygiene."
                },
                {
                  icon: <FiPenTool className="text-green-500 text-4xl mb-4" />,
                  title: "Graphic Design & Branding",
                  desc: "Professional branding and design services that create strong, memorable, and consistent visual identities."
                },
                {
                  icon: <FiSettings className="text-green-500 text-4xl mb-4" />,
                  title: "IT Consulting",
                  desc: "Expert IT consulting to help you choose the right technologies, optimize workflows, and scale efficiently."
                },
                {
                  icon: <FiHome className="text-green-500 text-4xl mb-4" />,
                  title: "Hotel Management, POS & Inventory Software",
                  desc: "Complete hotel and business management solutions including POS systems and inventory tracking for smooth daily operations."
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-green-500 transition">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working Process Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Card */}
            <div className="bg-gray-950 rounded-2xl p-6 sm:p-10 border border-neutral-800">
              <span className="text-white text-sm font-semibold uppercase">Working Process</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-4 sm:mb-6">
                Our Working Process – How We Work For Our Customers
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8">
                We follow a structured and transparent process to deliver high-quality digital solutions that meet your business goals.
              </p>
              <button className="bg-blue-800 hover:bg-emerald-600 text-black font-medium px-6 py-3 rounded-full transition w-full sm:w-auto">
                Contact Us
              </button>
            </div>

            {/* Steps */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-black-600">
              {[
                ["01", "Discovery", "Understanding your goals, requirements, and vision."],
                ["02", "Planning", "Strategic planning and solution design."],
                ["03", "Execute", "Development, testing, and implementation."],
                ["04", "Deliver", "Launch, support, and continuous improvement."]
              ].map(([num, title, desc]) => (
                <div key={num} className="space-y-2 sm:space-y-3">
                  <span className="text-black text-3xl sm:text-4xl font-bold">{num}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">{title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/team.jpg"
                alt="Team working"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-emerald-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  ▶
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-950 rounded-2xl p-6 sm:p-10 text-white">
              <span className="text-white text-sm font-semibold uppercase">Get in Touch</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-6 sm:mb-8">
                Request a Free Quote
              </h2>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="input w-full p-3 rounded border border-gray-700 bg-gray-800 text-white" placeholder="Your Name" />
                <input className="input w-full p-3 rounded border border-gray-700 bg-gray-800 text-white" placeholder="Email" />
                <input className="input w-full p-3 rounded border border-gray-700 bg-gray-800 text-white" placeholder="Phone Number" />
                <input className="input w-full p-3 rounded border border-gray-700 bg-gray-800 text-white" placeholder="Your Website" />
                <textarea
                  className="input sm:col-span-2 h-28 resize-none p-3 rounded border border-gray-700 bg-gray-800 text-white"
                  placeholder="Your Message"
                />
                <button className="bg-white hover:bg-blue-600 text-black font-medium py-3 rounded-full sm:col-span-2 transition w-full sm:w-auto">
                  Submit Now
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-950 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center md:text-left">
              Grow Your Business and Build Your Website or Software With Us.
            </h3>
            <button className="bg-blue-500 hover:bg-emerald-600 text-black font-medium px-6 sm:px-8 py-3 rounded-full transition w-full md:w-auto">
              Get in Touch
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
