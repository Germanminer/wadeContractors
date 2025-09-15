import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-base">
                <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-6">
                            {/* Logo */}
                            <Link to="/" className="flex-shrink-0">
                                <img className="h-16 w-auto" src="/darkLogo.png" alt="Wade contractors" />
                            </Link>

                            {/* Phone */}
                            <a href="tel:0277250250" className="hidden sm:inline-block font-semibold text-white">
                                Call us 0277 250 250
                            </a>
                        </div>

                        {/* Desktop menu links */}
                        <div className="hidden lg:flex space-x-6">
                            <Link to="/" className="font-semibold text-white transition hover:text-gray">Home</Link>
                            <Link to="/about" className="font-semibold text-white transition hover:text-gray">About us</Link>
                            <Link to="/services" className="font-semibold text-white transition hover:text-gray">Services</Link>
                            <Link to="/hire" className="font-semibold text-white transition hover:text-gray">Equipment Hire</Link>
                        </div>

                        {/* Email */}
                        <div className="hidden md:flex">
                            <a href="mailto:office@wadecontractors.co.nz" className="font-semibold text-white">
                                office@wadecontractors.co.nz
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <div className="flex lg:hidden">
                            <button
                                title='Mobile menu button'
                                className="z-50 cursor-pointer text-white focus:outline-none"
                                onClick={() => setMobileOpen(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile overlay */}
                <div
                    className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    onClick={() => setMobileOpen(false)}
                ></div>

                {/* Mobile menu panel */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-base transform transition-transform duration-300 lg:hidden z-50 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex justify-end p-4">
                        <button
                            className="cursor-pointer text-white"
                            onClick={() => setMobileOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col p-6 space-y-4 bg-base">
                        <Link to="/" className="font-semibold text-white transition hover:text-gray">Home</Link>
                        <Link to="/about" className="font-semibold text-white transition hover:text-gray">About us</Link>
                        <Link to="/services" className="font-semibold text-white transition hover:text-gray">Services</Link>
                        <Link to="/hire" className="font-semibold text-white transition hover:text-gray">Equipment Hire</Link>
                        <a href="tel:0277250250" className="font-semibold text-white">Call us 0277 250 250</a>
                        <a href="mailto:office@wadecontractors.co.nz" className="font-semibold text-white">office@wadecontractors.co.nz</a>
                    </div>
                </div>
            </nav>

            {/* Navbar spacer */}
            <div className="h-16 w-full"></div>
        </>
    );
}
