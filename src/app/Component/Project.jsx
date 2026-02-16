 "use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/app/Component/ui/card";
import { Button } from "@/app/Component/ui/button";
import { Star } from "lucide-react";

export default function Project() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Emmazin</h2>
        <ul className="space-y-4 text-gray-700">
          <li><Link href="#home" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="#about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="#shop" className="hover:text-blue-600">Shop</Link></li>
          <li><Link href="#faqs" className="hover:text-blue-600">FAQs</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navbar */}
        <nav className="flex justify-between items-center bg-white shadow px-8 py-4 sticky top-0 z-50">
          <h1 className="text-xl font-bold">Emmazin IT Solutions</h1>
          <ul className="flex space-x-6 text-gray-700">
            <li><Link href="#home" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="#about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="#services" className="hover:text-blue-600">Services</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="p-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Skilled Web & App Developer, Graphic Designer & Cybersecurity Specialist
          </motion.h2>
          <p className="max-w-2xl mb-6">
            Led by Emmazin, Senior Director, we deliver secure, scalable and visually stunning digital solutions.
          </p>
          <Button className="bg-white text-blue-700">Schedule Your Appointment</Button>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-12 text-center">
          <Card><CardContent><h3 className="text-3xl font-bold">1K+</h3><p>Happy Clients</p></CardContent></Card>
          <Card><CardContent><h3 className="text-3xl font-bold">50+</h3><p>Projects Done</p></CardContent></Card>
          <Card><CardContent><h3 className="text-3xl font-bold">20+</h3><p>Companies</p></CardContent></Card>
          <Card><CardContent><h3 className="text-3xl font-bold">24/7</h3><p>Support</p></CardContent></Card>
        </section>

        {/* Services */}
        <section className="p-12">
          <h2 className="text-3xl font-bold mb-8">IT Solutions & Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Web Development",
              "Software Development",
              "Mobile App Development",
              "Graphic Design",
              "Cybersecurity",
              "UI/UX Design",
              "Cloud Solutions",
              "Google Ads & SEO",
            ].map((service) => (
              <Card key={service} className="hover:shadow-xl transition">
                <CardContent className="p-6">{service}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skill Ratings */}
        <section className="p-12 bg-gray-100">
          <h2 className="text-3xl font-bold mb-6">Expertise Rating</h2>
          {[
            ["Software Development", 95],
            ["Web Development", 98],
            ["Cybersecurity", 90],
            ["Graphic Design", 92],
            ["Google Ads", 88],
          ].map(([skill, rate]) => (
            <div key={skill} className="mb-4">
              <p className="mb-1">{skill}</p>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${rate}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="p-12">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <p>"Outstanding service, professional delivery and great support."</p>
                  <div className="flex mt-3">{Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 text-yellow-500" />)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Booking & Contact */}
        <section className="p-12 bg-blue-700 text-white">
          <h2 className="text-3xl font-bold mb-4">We’re Here to Help You 24/7</h2>
          <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <input className="p-3 rounded text-black" placeholder="Name" />
            <input className="p-3 rounded text-black" placeholder="E-mail" />
            <input className="p-3 rounded text-black" placeholder="Phone Number" />
            <textarea className="p-3 rounded text-black md:col-span-2" placeholder="Message"></textarea>
            <Button className="md:col-span-2 bg-white text-blue-700">Book Appointment</Button>
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 p-6 text-center">
          © {new Date().getFullYear()} Emmazin IT Solutions. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}









