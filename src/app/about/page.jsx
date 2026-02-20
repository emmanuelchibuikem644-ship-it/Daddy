   import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

export default function About() {
  return (
    <div>
      
    <main className="w-full overflow-hidden">

      {/* ===== HERO / ABOUT HEADER ===== */}
      <section
        className="h-[50vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/headway-5QgIuuBxKwM-unsplash.jpg')" }}
      >
        <div className="text-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold">About</h1>
          <p className="mt-2 text-sm opacity-80">Emmazin / About</p>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
              alt="About"
              className="rounded-full w-[320px] h-[320px] object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <span className="text-xs uppercase text-blue-500 font-semibold">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              We Are Increasing Business Success With Technology
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
             We are a forward-thinking software development company committed to delivering innovative digital solutions that help businesses thrive in an increasingly competitive and technology-driven world. Our focus is on designing and building modern, high-performance software applications and mobile solutions tailored to meet the unique needs of each client.

At Emmanzin, we combine technical expertise with a deep understanding of business processes to create scalable, reliable, and user-focused digital products. From concept and design to development and deployment, we work closely with our clients to ensure every solution aligns with their goals, enhances operational efficiency, and delivers real, measurable value.

Our approach is driven by quality, creativity, and continuous improvement. We leverage modern technologies, clean architecture, and best development practices to build secure and flexible systems that can grow alongside our clients’ businesses. Whether it’s a startup looking to establish a strong digital presence or an established organization seeking to optimize its operations, we provide solutions that are both innovative and practical.

We believe that successful digital products are built through collaboration, transparency, and attention to detail. By understanding our clients’ challenges and vision, we are able to transform ideas into powerful digital experiences that engage users, strengthen brands, and support long-term growth.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* ===== MEET OUR EXPERTS ===== */}
      <section className="bg-gradient-to-r from-[#0a0f3d] to-[#0a0f3d] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-xs uppercase tracking-widest text-blue-300">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-14">
            Meet Our Expert
          </h2>

          <div className="">

            {/* 🔥 YOU */}
            <div className="flex flex-col items-center ">
              <img
                src="/IMG-20260208-WA0025.jpg"
                className="w-90 h-90  object-cover border-4 border-blue-400 shadow-xl"
              />
              <h3 className="mt-4 font-semibold text-blue-300">
                Emmanuel Chibuikem
              </h3>
              <p className="text-sm text-gray-300">
Emmanuel Chibuikem is the President and Founder of Emmanzin, a software development company focused on delivering innovative digital solutions that help businesses grow, scale, and succeed in competitive markets.

With hands-on experience in IT services, Emmanuel has worked on building modern software applications and mobile solutions for a wide range of clients. He is passionate about using technology to solve real business problems and create efficient, scalable digital products.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
    d
    
    {/* ===== project ===== */}
    <div className="bg-white text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-xs uppercase tracking-widest bg-gradient-to-r from-[#0a0f3d] to-[#0a0f3d] text-white rounded-80 text-4xl font-bold ">
            Project
          </span>
          <section className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        Our Recent Projects
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        A selection of projects showcasing our expertise in building modern,
        scalable, and user-focused digital solutions.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

      {/* Project 1 */}
      <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/Captu.PNG"
          alt="Project One"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold">Business Website</h3>
          <p className="text-sm text-gray-600 mt-2">
            A modern corporate website designed to improve brand visibility
            and customer engagement.
          </p>

          <a
            href="www.maracre.com.ng"
            className="inline-block mt-5 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/bbbbb.PNG"
          alt="Project Two"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold">E-commerce Platform</h3>
          <p className="text-sm text-gray-600 mt-2">
            A scalable online store with secure payments and smooth user
            experience.
          </p>

          <a
            href="www.leelderahotel.com.ng"
            className="inline-block mt-5 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/Capture.PNG"
          alt="Project Three"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold">Web Application</h3>
          <p className="text-sm text-gray-600 mt-2">
            A custom web application built to streamline operations and
            improve productivity.
          </p>
           <div
            className="inline-block mt-5 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
          <a href="www.gameparadise.com.ng"> View Project</a>  
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

       
    </div> 
        </div>
        {/* <Footer/> */}
    </div>
  )
}
