import { useState } from "react";
export default function YoutubeEmbed({ videoId }: { videoId:string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    const thumbnail = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;

    return (
        <div className="relative w-full aspect-video overflow-hidden">
            {!isLoaded ? (
                <button
                    className="w-full h-full relative group"
                    onClick={() => setIsLoaded(true)}
                >
                    {/* Thumbnail */}
                    <img
                        src={thumbnail}
                        alt="YouTube video thumbnail"
                        className="w-full h-full object-cover group-hover:brightness-90 transition"
                    />

                    {/* Play button */}
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
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}
