'use client';

import { useEffect, useRef, useState } from "react";
import ContactEmailSetup from "./ContactEmailSetup";

export default function ContactForm() {
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const lastFocusedRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!open) return;

        lastFocusedRef.current = document.activeElement as HTMLElement;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false);
                return;
            }

            if (e.key === 'Tab') {
                const panel = panelRef.current;
                if (!panel) return;

                const focusable = panel.querySelectorAll<HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement>(
                    'button, input, textarea, [tabindex]:not([tabindex="-1"])'
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
            const closeBtn = panelRef.current?.querySelector('button[aria-label="Close contact form"]') as HTMLElement | null;
            closeBtn?.focus();
        });

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            lastFocusedRef.current?.focus();
        };
    }, [open]);

    return (
        <>
            {/* Floating button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed right-4 bottom-4 z-50 rounded-full bg-blue-600 px-4 py-4 text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
                Contact Us
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
                    open ? "bg-black/50 opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setOpen(false)}
            >
                {/* Slide-in Panel */}
                <div
                    ref={panelRef}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-96 bg-white h-full p-6 shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out overscroll-contain ${
                        open ? "translate-x-0" : "translate-x-full"
                    }`}
                    style={{overscrollBehavior: 'contain'}}
                >
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Contact Us</h2>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close contact form"
                            className="text-2xl leading-none text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            \u00D7
                        </button>
                    </div>

                    {/* Form */}
                   <ContactEmailSetup/>
                    <a
                        href="tel:0277250250"
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-xl font-bold text-white shadow-lg transition-all hover:from-blue-600 hover:to-indigo-700"
                    >
                        <img className="mr-3 h-8 w-8" src="/phone.svg" alt="" aria-hidden="true"/>
                        <span>Call us 0277 250 250</span>
                    </a>
                </div>
            </div>
        </>
    );
}
