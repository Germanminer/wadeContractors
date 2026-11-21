'use client';

import  { useState, useEffect } from "react";

export default function Slideshow({ images }: { images: string[] }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
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
                    alt={`Slide ${current}`}
                    className="h-full w-full object-cover md:object-contain"
                />
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 overflow-x-auto scrollbar">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`flex-shrink-0 border-2 overflow-hidden rounded-md p-1 transition ${
                            index === current ? "border-blue-500" : "border-transparent"
                        }`}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${index}`}
                            className="h-20 w-28 sm:h-16 sm:w-24 object-cover"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
