import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)
    return (
        <>
            <nav id="navbar" className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-base">
                <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/*Logo and Location*/}

                        <div className="flex items-center space-x-3">
                            <Link to="/" className="flex-shrink-0">
                                <img className="h-16 w-auto " src="/darkLogo.png" alt="Wade contractors"/>
                            </Link>
                            <div className="flex items-center space-x-3">
                                <img className="h-7 w-auto " src="/mapPin.svg" alt="Map icon"/>
                                <h2 className="text-white font-semibold text-xl">
                                    Waikato
                                </h2>
                            </div>
                        </div>
                        {/*Desktop menu*/}
                        <div className="hidden md:flex space-x-6">
                            <Link to="/" className="text-white font-semibold hover:text-gray transition">Home</Link>
                            <Link to="/about" className="text-white font-semibold hover:text-gray transition">About
                                us</Link>
                            <Link to="/services"
                                  className="text-white font-semibold hover:text-gray transition">Services</Link>
                            <Link to="/hire" className="text-white font-semibold hover:text-gray transition">Equipment
                                Hire</Link>
                        </div>
                        {/*Desktop Phone*/}
                        <a className="hidden sm:flex" href="tel:0277250250">
                            <div className="block text-white font-semibold">
                                <p>Call us 0277 250 250
                                </p>
                            </div>
                        </a>
                        {/*Mobile Menu button*/}
                        <div className="md:hidden">
                            <button id="menu-btn" className="text-white focus:outline-none cursor-pointer"
                                    onClick={() => setMobileOpen(true)}
                            >
                                {/*Hamburger*/}
                                <svg id="menu-open" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block"
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
                        <button id="menu-close-btn" className="text-white cursor-pointer"
                                onClick={() => setMobileOpen(false)}
                        >
                            {/*Close*/}
                            <svg id="menu-close" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-4 p-6 bg-base">
                        <Link to="/" className="text-white font-semibold hover:text-gray transition">Home</Link>
                        <Link to="/about" className="text-white font-semibold hover:text-gray transition">About
                            us</Link>
                        <Link to="/services"
                              className="text-white font-semibold hover:text-gray transition">Services</Link>
                        <Link to="/hire" className="text-white font-semibold hover:text-gray transition">Equipment
                            Hire</Link>
                    </div>
                </div>
            </nav>
            {/*NavbarSpacer*/}
            <div className="h-16 w-full"></div>
        </>
    )
}