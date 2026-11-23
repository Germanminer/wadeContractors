'use client';

import { useEffect, useState } from "react";

const slides = [
    {src:"/team.jpg",title: "Family Business",text:""},
    {src:"/culvert.webp",title:"Culverts and Bridges",text:""},
    {src:'motorGraderWDriver.webp',title:"Motor Graders",text:""},
    {src:"/mainHeroSlideshowTractorWTrailer.jpg",title:"Earth moving and site works",text:""},
    {src:"/truck.webp",title:"Track and Race Repairs",text:""},
    {src:"/digger.webp",title:"Effluent pond construction",text:""},
]

export default function HeroSlideshow() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) return;
        
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden md:h-[500px] xl:h-[700px]">
            <div className="relative w-full pt-[56.25%] md:h-full md:pt-0">
                {slides.map((slide, i) => {
                    const isActive = i === index;
                    const prevIndex = (index - 1 + slides.length) % slides.length;
                    const wasActive = i === prevIndex;

                    return (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                isActive ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <img
                                key={isActive || wasActive ? `img-${i}-active` : `img-${i}`}
                                src={slide.src}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                                width="1920"
                                height="1080"
                                fetchPriority={i===0?'high':'auto'}
                                loading={i===0? 'eager':'lazy'}
                            />
                        </div>
                    );
                })}
            </div>
        </div>

    );
}
