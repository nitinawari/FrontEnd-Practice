import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border border-slate-100 top-0 z-40  ">
      <nav className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16" >
        <div className=" h-16 flex justify-between">
          <div className="flex items-center p-3">
            <a href="/" className=""><img src="https://zerodha.com/static/images/logo.svg" alt="" className="h-4 w-32 flex-shrink-0" /></a>
          </div>
          <div className="flex items-center">
            <div className=" hidden sm:flex sm:items-center">
              <a href="#" className="p-5 text-base text-slate-600 hover:text-blue-400">Signup</a>
              <a href="#" className="p-5 text-base text-slate-500 hover:text-blue-400">About</a>
              <a href="#" className="p-5 text-base text-slate-500 hover:text-blue-400">Products</a>
              <a href="#" className="p-5 text-base text-slate-500 hover:text-blue-400">Pricing</a>
              <a href="#" className="p-5 text-base text-slate-500 hover:text-blue-400">Support</a>
            </div>
            <button
              onClick={() => setOpen(!open) }
              aria-label="Toggle menu"
              className={`sm:hidden focus:ouline-none focus:ring-2 focus:ring-blue-400 rounded-md  inline-flex  items-center transition-transform ${open ? "transform rotate" : ""}`}
            >
              <svg className={`h-8 w-8 opacity-60`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

            </button>
          </div>
        </div>
        {/* Mobile Menu Popup */} 
      { open && ( 
        <div className=" bg-white absolute inset-x-0 top-0 mt-2 mx-2 p-2 shadow-2xl ">
          <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="focus:ouline-none focus:ring-2 focus:ring-blue-400 rounded-md top-0 p-2 inline-flex  items-center absolute right-4"
            >
              <svg className={`h-8 w-8 opacity-60`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>
        <div className="grid grid-cols-2 px-3 py-4">
          <div className="flex flex-col gap-5">
            <a href="#" className="text-neutral-700 text-sm font-medium">Signup</a>
            <a href="#" className="text-neutral-700 text-sm font-medium">Products</a>
            <a href="#" className="text-neutral-700 text-sm font-medium">Support</a>
          </div>
          <div className="flex flex-col gap-5">
            <a href="#">About</a>
            <a href="#">Pricing</a>
            <a href="#"></a>
          </div>
        </div>  
      </div>)}
      </nav>

    </header>
  )
}