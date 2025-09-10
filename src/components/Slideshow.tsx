import {useState } from "react";
const images = [
    "/culvert.png",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.png",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.png",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.png",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.png",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.png",
    "/digger.png",
    "/excavator.jpg",

]
export default function Slideshow() {
    const [current,setCurrent] = useState(0);
    return (
        <>
            <div className="max-w-4xl mx-auto p-4">
                {/* Main image */}
                <div className="mb-4">
                    <img
                        src={images[current]}
                        alt={`Slide ${current}`}
                        className="w-full h-96 object-cover rounded-sm shadow-lg"
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
                                className="w-24 h-16 object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

        </>
    )
}