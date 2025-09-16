import {useEffect,useState} from "react";
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
    const [showText] = useState(true);
    useEffect(() => {
        /*
        let textOutTimer: number | undefined;

        //Main timer
        const intervalTimer = setInterval(()=>{
            //Time for text to leave, make as much less than the next one as you want difference
            textOutTimer = setTimeout(()=>{
                setShowText(false);
            },3000)
            setIndex((prev) => (prev + 1) % slides.length);
        },4000)
        //TextTimer
        //Time before animating text
        const textInTimer = setTimeout(()=>{
            setShowText(true);
        },1000)
        return()=>{
            clearInterval(intervalTimer)
            clearTimeout(textOutTimer)
            clearTimeout(textInTimer)
        }

         */

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 2500);
        return () => clearInterval(timer);

    }, [index]);

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
                                fetchPriority='high'
                            />

                            {/* Text overlay */}
                            {/*Add  bg-black/20 to the div for */}
                            <div
                                key={isActive ? `text-${i}-${index}` : `text-${i}`}
                                className={`slide-text absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 ${
                                    showText && isActive ? "fade-in-up" : "fade-out-down"
                                }`}
                            >
                                {/*Swap "" for slide.title to add text back*/}
                                <h2 className="mb-2 text-4xl font-bold text-shadow-lg md:text-6xl">{""}</h2>
                                <p className="text-lg">{slide.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}
/*
<div className="relative w-full overflow-hidden h-[500px] md:h-[700px]">
            <div className="relative h-full w-full">
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
    key={isActive||wasActive ? `img-${i}-active` : `img-${i}`}
    src={slide.src}
    className="h-full w-full object-cover zoom-slow"
    alt={slide.title}
/>
<div
    key={isActive ? `text-${i}-${index}` : `text-${i}`}
    className={`slide-text absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center text-white p-4 ${
        showText&&isActive ? "fade-in-up" : "fade-out-down"
    }`}
>
    <h2 className="mb-2 text-4xl font-bold text-shadow-lg md:text-6xl">{slide.title}</h2>
    <p className="text-lg">{slide.text}</p>
</div>
</div>
);
})}
</div>
</div>
 */