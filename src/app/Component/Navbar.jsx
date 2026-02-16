 "use client";

import {
  Menu,
  X,
  LocationEdit,
  PhoneCall,
  Mail,
  Search,
  LucideInstagram,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* TOP INFO BAR — DESKTOP ONLY */}
      <nav className="hidden lg:flex justify-between items-center shadow px-4 py-3 bg-white">
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 object-contain" src="/images.jpeg" alt="" />
          <h1 className="text-xl font-cursive">Emmazin IT Solutions</h1>
        </div>

        <div className="text-blue-400 flex gap-8">
          <div className="flex flex-col text-sm">
            <LocationEdit size={18} />
            No 24 off location junction <br /> opposite Ej-jodarm hospital
          </div>

          <div className="flex flex-col text-sm">
            <PhoneCall size={18} />
            call:+2349035432081 <br /> or +2347035700146
          </div>

          <div className="flex flex-col text-sm">
            <Mail size={18} />
            Email us at: <br /> emmanuelchibuikem644@gmail.com
          </div>
        </div>
      </nav>

      {/* MAIN NAVBAR */}
      <nav className="w-full bg-gradient-to-r from-blue-900 to-blue-600 px-4 lg:px-10 py-4 flex items-center justify-between text-white">

        {/* DESKTOP LINKS — LEFT */}
        <div className="hidden lg:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services +</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* DESKTOP ICONS — RIGHT */}
        <div className="hidden lg:flex items-center gap-6">
          <Search className="cursor-pointer" />
          <LucideInstagram className="cursor-pointer" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col px-5 py-6 gap-6 text-gray-800 font-medium">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>
          <Link onClick={() => setOpen(false)} href="/services">Services</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
        </div>
      </aside>
    </div>
  );
}
