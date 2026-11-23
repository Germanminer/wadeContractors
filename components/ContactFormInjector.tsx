'use client';

import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import ContactForm from './ContactForm';

export default function ContactFormInjector() {
    const mountRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<ReturnType<typeof createRoot> | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Reuse existing root if it already exists (e.g., during HMR).
        // This prevents the "createRoot() on a container that has already been passed to createRoot()" warning.
        if (!rootRef.current) {
            rootRef.current = createRoot(mountRef.current);
        }
        rootRef.current.render(<ContactForm />);

        return () => {
            // Defer unmount to avoid "synchronously unmount a root while React was already rendering" warning.
            // The cleanup runs during React's render cycle; unmounting immediately causes a race condition.
            // Scheduling it in a microtask ensures it runs after React finishes rendering.
            queueMicrotask(() => {
                rootRef.current?.unmount();
                rootRef.current = null;
            });
        };
    }, []);

    return <div ref={mountRef} />;
}
