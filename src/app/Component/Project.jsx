// ...existing code...
export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-20 sm:py-28 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-5xl font-bold">Hi, I'm Emmanuel 👋</h1>
        <p className="text-lg sm:text-xl text-gray-300 mt-4 mx-auto max-w-xl">
          I build modern & responsive websites for businesses.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
          <a href="#projects" className="w-full sm:w-auto text-center px-6 py-2 bg-blue-600 rounded hover:bg-blue-700">
            View Projects
          </a>
          <a href="#contact" className="w-full sm:w-auto text-center px-6 py-2 border border-white rounded hover:bg-white hover:text-black">
            Hire Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 text-base sm:text-lg">
          I'm a web developer who creates fast, responsive and professional websites.
          I specialize in Next.js, React, and modern UI designs. I work with business
          owners, brands, and individuals to build a strong online presence.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[1,2,3].map((project)=>(
          <div key={project} className="bg-gray-800 p-4 sm:p-6 rounded shadow hover:scale-105 transition transform">
            <div className="h-40 sm:h-48 md:h-56 bg-gray-700 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-400">Project Screenshot</span>
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Project Title</h3>
            <p className="text-gray-400 text-sm sm:text-base">Short description here...</p>
          </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-gray-800 py-12 sm:py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">Skills</h2>
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap px-4 sm:px-0">
          {["Next.js","React","Tailwind","JavaScript","HTML","CSS", "Python with django"].map((skill)=>(
            <span key={skill} className="bg-gray-700 px-3 sm:px-4 py-2 rounded text-sm sm:text-base">{skill}</span>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gray-800 p-6 rounded text-center">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="text-blue-400 text-2xl font-bold">$100+</p>
            <p className="text-gray-400 text-sm mt-2">Landing page website</p>
          </div>

          <div className="bg-gray-800 p-6 rounded text-center border border-blue-500">
            <h3 className="text-xl font-bold mb-2">Standard</h3>
            <p className="text-blue-400 text-2xl font-bold">$200+</p>
            <p className="text-gray-400 text-sm mt-2">Full website (3-5 pages)</p>
          </div>

          <div className="bg-gray-800 p-6 rounded text-center">
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="text-blue-400 text-2xl font-bold">$500+</p>
            <p className="text-gray-400 text-sm mt-2">E-commerce / advanced features</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-12 sm:py-20 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-6">Want a website? Let's work together.</p>
        
        <a href="https://wa.me/2349035432081"
           className="w-full sm:w-auto inline-block px-8 py-3 bg-green-600 rounded hover:bg-green-700 text-center">
          WhatsApp Me
        </a>
      </section>

    </div>
  );
}
