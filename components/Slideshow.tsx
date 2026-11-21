'use client';

import  { useState, useEffect } from "react";

export default function Slideshow({ images }: { images: string[] }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="mx-auto max-w-4xl md:p-4">
            {/* Main image */}
            <div className="mb-4 aspect-video w-full overflow-hidden rounded-sm shadow-lg">
                <img
                    src={images[current]}
                    alt={`Image ${current + 1} of ${images.length}`}
                    className="h-full w-full object-cover md:object-contain"
                />
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 overflow-x-auto scrollbar">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        aria-label={`View image ${index + 1}`}
                        className={`flex-shrink-0 border-2 overflow-hidden rounded-md p-1 transition ${
                            index === current ? "border-blue-500" : "border-transparent"
                        }`}
                    >
                        <img
                            src={img}
                            alt=""
                            aria-hidden="true"
                            className="h-20 w-28 sm:h-16 sm:w-24 object-cover"
                            width="112"
                            height="80"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
