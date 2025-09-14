import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)
    return (
        <>
            <nav id="navbar" className="fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-base">
                <div className="mx-auto px-4 max-w-7x1 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/*Logo and Location*/}

                        <div className="flex items-center space-x-3">
                            <Link to="/" className="flex-shrink-0">
                                <img className="h-16 w-auto" src="/darkLogo.png" alt="Wade contractors"/>
                            </Link>
                            <div className="flex items-center space-x-3">
                                <img className="h-7 w-auto" src="/mapPin.svg" alt="Map icon"/>
                                <h2 className="text-xl font-semibold text-white">
                                    Waikato
                                </h2>
                            </div>
                        </div>
                        {/*Desktop menu*/}
                        <div className="hidden space-x-6 md:flex">
                            <Link to="/" className="font-semibold text-white transition hover:text-gray">Home</Link>
                            <Link to="/about" className="font-semibold text-white transition hover:text-gray">About
                                us</Link>
                            <Link to="/services"
                                  className="font-semibold text-white transition hover:text-gray">Services</Link>
                            <Link to="/hire" className="font-semibold text-white transition hover:text-gray">Equipment
                                Hire</Link>
                        </div>
                        {/*Desktop Phone*/}
                        <a className="hidden sm:flex" href="tel:0277250250">
                            <div className="block font-semibold text-white">
                                <p>Call us 0277 250 250
                                </p>
                            </div>
                        </a>
                        {/*Mobile Menu button*/}
                        <div className="md:hidden">
                            <button id="menu-btn" className="z-50 cursor-pointer text-white focus:outline-none"
                                    onClick={() => setMobileOpen(true)}
                            >
                                {/*Hamburger*/}
                                <svg id="menu-open" xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/*Mobile overlay*/}
                <div id="mobile-menu-overlay"
                     className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                     onClick={() => setMobileOpen(false)}
                >
                </div>
                {/* Mobile menu panel */}
                <div id="mobile-menu"
                     className={`fixed top-0 right-0 h-full w-64 bg-base transform transition-transform duration-300 md:hidden z-50 ${
                         mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex justify-end p-4">
                        <button id="menu-close-btn" className="cursor-pointer text-white"
                                onClick={() => setMobileOpen(false)}
                                name='Menu open and close'
                        >
                            {/*Close*/}
                            <svg id="menu-close" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col p-6 space-y-4 bg-base">
                        <Link to="/" className="font-semibold text-white transition hover:text-gray">Home</Link>
                        <Link to="/about" className="font-semibold text-white transition hover:text-gray">About
                            us</Link>
                        <Link to="/services"
                              className="font-semibold text-white transition hover:text-gray">Services</Link>
                        <Link to="/hire" className="font-semibold text-white transition hover:text-gray">Equipment
                            Hire</Link>
                    </div>
                </div>
            </nav>
            {/*NavbarSpacer*/}
            <div className="h-16 w-full"></div>
        </>
    )
}