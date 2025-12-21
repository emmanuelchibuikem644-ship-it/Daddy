"use client"
// ...existing code...
import React, { useState } from "react";

export default function Project() {
  const [siteName, setSiteName] = useState("");
  const [created, setCreated] = useState(null);

  function handleCreate(e) {
    e.preventDefault();
    if (!siteName.trim()) return;
    // fake creation flow
    setCreated({ name: siteName.trim(), url: `${siteName.trim().toLowerCase().replace(/\s+/g, "-")}.wish` });
    setSiteName("");
    setTimeout(() => setCreated(null), 6000); // clear message after a bit
  }

  return (
    <main className="min-h-screen font-sans text-slate-900 bg-white">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">W</div>
          <span className="font-semibold">WishCreate</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Templates</a>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Docs</a>
          <div className="flex items-center gap-2">
            <button className="text-sm px-3 py-2 rounded-md">DE</button>
            <button className="text-sm px-4 py-2 bg-slate-900 text-white rounded-md shadow">Sign up</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-cyan-400 to-sky-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
              Create a beautiful landing page — fast
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              AI-assisted templates, one-click publishing and built-in analytics. Launch a site in minutes — no code required.
            </p>

            <form onSubmit={handleCreate} className="mt-6 flex gap-3 max-w-md">
              <label htmlFor="site" className="sr-only">Site name</label>
              <input
                id="site"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="Your site name (eg. my-coach)"
                className="flex-1 px-4 py-3 rounded-md border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button type="submit" className="px-4 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800">Create</button>
            </form>

            {created && (
              <div className="mt-4 inline-flex items-center gap-3 rounded-md bg-white/80 px-4 py-2 text-sm shadow">
                <strong className="text-slate-900">Created:</strong>
                <span className="text-slate-600">{created.name}</span>
                <a className="ml-2 text-cyan-600 underline" href={`https://${created.url}`}>
                  {created.url}
                </a>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full" />
                <span>Free templates</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-3 h-3 bg-indigo-400 rounded-full" />
                <span>Fast hosting</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-3 h-3 bg-rose-400 rounded-full" />
                <span>Built-in analytics</span>
              </div>
            </div>
          </div>

          {/* Hero preview / features */}
          <div className="rounded-xl overflow-hidden bg-white shadow-lg">
            <div className="p-6">
              <div className="h-48 bg-gradient-to-br from-sky-50 to-white rounded-md border border-slate-100 flex items-center justify-center text-slate-400">
                Live preview
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 border rounded-md text-sm">
                  <strong className="block">Templates</strong>
                  <span className="text-slate-500 text-xs">20+ categories</span>
                </div>
                <div className="p-3 border rounded-md text-sm">
                  <strong className="block">Custom domain</strong>
                  <span className="text-slate-500 text-xs">Connect in 2 clicks</span>
                </div>
                <div className="p-3 border rounded-md text-sm">
                  <strong className="block">SEO</strong>
                  <span className="text-slate-500 text-xs">Fast & indexable</span>
                </div>
                <div className="p-3 border rounded-md text-sm">
                  <strong className="block">Analytics</strong>
                  <span className="text-slate-500 text-xs">Simple insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center">Everything you need to launch</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "AI Templates", desc: "Generate starting content & layout" },
            { title: "One-click Publish", desc: "Instant hosting & SSL" },
            { title: "Custom Domain", desc: "Bring your own domain" },
            { title: "Analytics", desc: "Visitor stats at a glance" }
          ].map((f) => (
            <div key={f.title} className="p-5 bg-white rounded-lg shadow text-sm">
              <h3 className="font-medium">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates gallery */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Popular templates</h3>
            <a className="text-sm text-cyan-600 hover:underline" href="#">View all templates</a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Portfolio", "Startup Landing", "Product", "Agency", "Event", "Blog"].map((t) => (
              <div key={t} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 bg-gradient-to-tr from-pink-50 to-indigo-50 flex items-end p-4">
                  <span className="bg-white/70 px-3 py-1 rounded text-sm">{t}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-medium">{t}</h4>
                  <p className="mt-2 text-sm text-slate-600">A clean, responsive template to get you started.</p>
                  <div className="mt-4 flex gap-2">
                    <button className="text-sm px-3 py-2 border rounded text-slate-700">Preview</button>
                    <button className="text-sm px-3 py-2 bg-slate-900 text-white rounded">Use</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-8 flex items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Ready to build?</h4>
            <p className="mt-1 text-sm opacity-90">Start for free — no credit card required.</p>
          </div>
          <div>
            <a href="#" className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium">Get started</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} WishCreate — All rights reserved</div>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
// ...existing code...