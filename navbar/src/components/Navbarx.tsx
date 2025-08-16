import { useState } from "react";

export default function Navabarx() {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-white shadow-md sticky mt- z-50 ">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex h-16 justify-between ">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <a href="#" className=" flex items-center gap-3 ">
                            <div className="font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-500 h-8 w-8 rounded-md  flex justify-center items-center ">N</div>
                            <span className="text-lg font-semibold text-slate-800 ">NitNav</span>
                        </a>
                    </div>
                    {/* Center: Links (hidden on mobile) */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-6 ">
                        <a href="#" className=" text-slate-700 hover:text-slate-900 py-1 px-2 ">Home</a>
                        <a href="#" className="text-slate-700 hover:text-slate-900 py-1 px-2 ">Docs</a>
                        <div className="group relative ">
                            <button className="flex items-center gap-1 text-slate-700 hover:text-slate-900 py-1 px-2 "
                            aria-haspopup="true"
                            aria-expanded="false"
                            >
                                Products
                                <svg className=" h-4 w-4 opacity-70 " viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-1 w-40 bg-white shadow-md rounded-md ring-1 ring-black opacity-0 group-hover:opacity-100 pointer-events-none  group-hover:pointer-events-auto transform scale-50 group-hover:scale-100 transition-all origin-top-right ">
                                <ul className="py-1">
                                    <li className="text-sm px-4 py-2 hover:bg-slate-50">Analytics</li>
                                    <li className="text-sm px-4 py-2 hover:bg-slate-50">Integrations</li>
                                    <li className="text-sm px-4 py-2 hover:bg-slate-50">Pricing</li>
                                </ul>
                            </div>

                        </div>
                        <a href="#" className="text-slate-700 hover:text-slate-900 py-1 px-2 rounded-md">Blog</a>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden sm:flex sm:items-center sm:gap-3">
                            <a href="#" className="border hover:bg-slate-50 border-slate-200 rounded-md px-3 py-1.5 text-sm ">Sign in</a>
                            <a href="#" className="border rounded-md bg-indigo-600 px-3 py-1.5 text-white text-sm hover:opacity-95 shadow-sm ">Get Started</a>
                        </div>
                        <button
                            className="sm:hidden p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                            aria-label="Toggle menu"
                            onClick={() => setOpen(!open)}
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
            <div className={`sm:hidden ${open ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 border-t border-slate-100 bg-white space-y-1 ">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Home</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Docs</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Analytics</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Blog</a>
                    <div className="border-t border-slate-100  pt-2">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 ">Sign In</a>
                        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base bg-indigo-600 text-slate-50 ">Get started </a>
                    </div>
                </div>
            </div>

        </header>

    )
}