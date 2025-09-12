import React, {useState } from "react";
export default function Slideshow({images}: {images: string[]}) {
    const [current,setCurrent] = useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    });


    return (
        <>
            <div className="max-w-4xl mx-auto p-4">
                {/* Main image */}
                <div className="mb-4 w-full aspect-video rounded-sm shadow-lg overflow-hidden">
                    <img
                        src={images[current]}
                        alt={`Slide ${current}`}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 justify-center overflow-x-auto scrollbar">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`flex-shrink-0 border-2 overflow-hidden ${
                                index === current ? "border-blue-500" : "border-transparent"
                            }`}
                        >
                            <img
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className="w-24 h-16 object-contain"
                                loading='lazy'
                            />
                        </button>
                    ))}
                </div>
            </div>

        </>
    )
}