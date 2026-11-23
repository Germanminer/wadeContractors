'use client';

import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import ContactForm from './ContactForm';

export default function ContactFormInjector() {
    const mountRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<ReturnType<typeof createRoot> | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Create the root only once.
        if (!rootRef.current) {
            rootRef.current = createRoot(mountRef.current);
            rootRef.current.render(<ContactForm />);
        }

        return () => {
            // Do NOT unmount here - the ContactForm should persist for the lifetime of the app.
            // Only unmount if the root element is actually removed from the DOM.
        };
    }, []);

    return <div ref={mountRef} />;
}
