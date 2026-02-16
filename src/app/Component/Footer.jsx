 import React from 'react'
 
 export default function Footer() {
   return (
     <div>
         {/* Footer (no map) */}
      <footer className=" border-t border-slate-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold tracking-tight">Emmazin</h3>
            <p className="mt-3 text-sm text-slate-600">
              We build modern websites and web applications with performance, scalability, and clean UI at the core.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Web Development</li>
              <li>Web Apps & Dashboards</li>
              <li>UI/UX Design</li>
              <li>API Integration</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Email: <a className="text-indigo-600 hover:underline" href="mailto:emmanuelchibuikemy644@gmail.com">emmanuelchibuikemy644@gmail.com</a></li>
              <li>Brand: Emmazin</li>
              <li>Availability: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Emmazin. All rights reserved.</p>
            <nav className="flex gap-6 text-sm text-slate-600">
              <a className="hover:text-indigo-600" href="#">Home</a>
              <a className="hover:text-indigo-600" href="#">About</a>
              <a className="hover:text-indigo-600" href="#">Projects</a>
              <a className="hover:text-indigo-600" href="#">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
     </div>
   )
 }
 
 
 
 
 
 
