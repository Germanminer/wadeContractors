'use client';

import { useState } from "react";
import Image from 'next/image';

interface YoutubeEmbedProps {
    videoId: string;
    isShort?: boolean;
}

export default function YoutubeEmbed({ videoId, isShort = false }: YoutubeEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const thumbnail = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;

    const aspectClass = isShort ? "aspect-[9/16]" : "aspect-video";

    return (
        <div className={`relative w-full ${aspectClass} overflow-hidden`}>
            {!isLoaded ? (
                <button
                    className="w-full h-full relative group"
                    onClick={() => setIsLoaded(true)}
                    aria-label={`Play video ${videoId}`}
                >
                    <Image
                        src={thumbnail}
                        alt={`Video ${videoId} thumbnail`}
                        className="w-full h-full object-cover group-hover:brightness-90 transition"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 p-4 rounded-full group-hover:bg-red-600 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </button>
            ) : (
                <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0&playsinline=1`}
                    title={`YouTube video player: ${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
}
