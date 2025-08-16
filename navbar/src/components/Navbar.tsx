import  { useState } from "react";

// Simple, responsive Navbar using Tailwind CSS
// - Default export React component
// - Mobile hamburger menu
// - Accessible buttons and links
// - Easy to drop into a Next.js or CRA project

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-semibold text-lg text-slate-800">NitNav</span>
            </a>
          </div>

          {/* Center: Links (hidden on mobile) */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6 ">
            <a href="#" className="text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md">Home</a>
            <a href="#" className="text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md">Docs</a>

            <div className=" relative group">
              <button
                className="flex items-center gap-1 text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
                <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Simple dropdown on hover */}
              <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all origin-top-left pointer-events-none group-hover:pointer-events-auto">
                <ul className="py-1">
                  <li><a href="#" className="block px-4 py-2 text-sm hover:bg-slate-50">Analytics</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm hover:bg-slate-50">Integrations</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm hover:bg-slate-50">Pricing</a></li>
                </ul>
              </div>
            </div>

            <a href="#" className="text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md">Blog</a>
          </div>
   
          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex sm:items-center sm:gap-3">
              <a href="#" className="px-3 py-1.5 border border-slate-200 rounded-md text-sm hover:bg-slate-50">Sign in</a>
              <a href="#" className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm shadow-sm hover:opacity-95">Get Started</a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg className={`h-6 w-6 transition-transform ${open ? "transform rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu (slide down) */}
      <div className={`sm:hidden ${open ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-100">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Docs</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Analytics</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Blog</a>
          <div className="pt-2 border-t border-slate-100">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700">Sign in</a>
            <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
