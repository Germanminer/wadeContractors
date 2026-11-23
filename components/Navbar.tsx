'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const lastFocusedRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!mobileOpen) return;

        lastFocusedRef.current = document.activeElement as HTMLElement;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMobileOpen(false);
                return;
            }

            if (e.key === 'Tab') {
                const menu = menuRef.current;
                if (!menu) return;

                const focusable = menu.querySelectorAll<HTMLButtonElement | HTMLAnchorElement>(
                    'button, a, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last?.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first?.focus();
                    }
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            const closeBtn = menuRef.current?.querySelector('button[aria-label="Close mobile menu"]') as HTMLElement | null;
            closeBtn?.focus();
        });

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            lastFocusedRef.current?.focus();
        };
    }, [mobileOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full bg-base" style={{transitionProperty: 'background-color, box-shadow', transitionDuration: '300ms'}}>
                <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <img className="h-16 w-auto" src="/darkLogo.png" alt="Wade contractors" width="64" height="64" />
                        </Link>

                        {/* Desktop menu links */}
                        <div className="hidden lg:flex space-x-6">
                            <Link href="/" className="font-semibold text-white transition hover:text-gray">Home</Link>
                            <Link href="/about" className="font-semibold text-white transition hover:text-gray">About us</Link>
                            <Link href="/services" className="font-semibold text-white transition hover:text-gray">Services</Link>
                            <Link href="/hire" className="font-semibold text-white transition hover:text-gray">Equipment Hire</Link>
                        </div>

                        {/* Contact info */}
                        <div className="flex items-center space-x-6">
                            {/* Phone */}
                            <a href="tel:0277250250" className="hidden sm:inline-block font-semibold text-white">
                                Call us 0277 250 250
                            </a>

                            {/* Email */}
                            <a href="mailto:office@wadecontractors.co.nz" className="hidden md:inline-block font-semibold text-white">
                                office@wadecontractors.co.nz
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <div className="flex lg:hidden">
                            <button
                                title='Mobile menu button'
                                aria-label="Open mobile menu"
                                className="z-50 cursor-pointer text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
                <button
                    type="button"
                    aria-label="Close mobile menu"
                    className={`fixed inset-0 z-40 ${mobileOpen ? "bg-black/50 opacity-100" : "opacity-0 pointer-events-none"}`}
                    onClick={() => setMobileOpen(false)}
                />

                {/* Mobile menu panel */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 right-0 h-full w-64 bg-base transform transition-transform duration-300 lg:hidden z-50 overscroll-contain ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                    style={{overscrollBehavior: 'contain'}}
                >
                    <div className="flex justify-end p-4">
                        <button
                            aria-label="Close mobile menu"
                            className="cursor-pointer text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
                        <Link href="/" onClick={() => setMobileOpen(false)} className="font-semibold text-white transition hover:text-gray">Home</Link>
                        <Link href="/about" onClick={() => setMobileOpen(false)} className="font-semibold text-white transition hover:text-gray">About us</Link>
                        <Link href="/services" onClick={() => setMobileOpen(false)} className="font-semibold text-white transition hover:text-gray">Services</Link>
                        <Link href="/hire" onClick={() => setMobileOpen(false)} className="font-semibold text-white transition hover:text-gray">Equipment Hire</Link>
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
