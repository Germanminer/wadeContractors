import React from 'react';

interface ResponsiveImageProps {
    alt: string;
    baseName: string; // 'hero-image'
    formats?: string[]; // ['webp', 'jpg']
    widths?: number[]; // [480, 800, 1200]
    aspectRatio?: string; // Tailwind aspect ratio class e.g. 'aspect-[16/9]'
    className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
    alt,
    baseName,
    formats = ['webp', 'jpg'],
    widths = [480, 800, 1200],
    aspectRatio = 'aspect-[16/9]',
    className = '',
    }) => {
    return (
        <div className={`relative w-full ${aspectRatio} ${className}`}>
            <picture className="absolute inset-0 w-full h-full">
                {formats.map((format) => (
                    <source
                        key={format}
                        type={`image/${format}`}
                        srcSet={widths.map((w) => `/optimizedImages/${baseName}-${w}.${format} ${w}w`).join(', ')}
                        sizes="(max-width: 640px) 480px,
                   (max-width: 1024px) 800px,
                   1200px"
                    />
                ))}
                {/*fallBack*/}
                <img
                    src={`/images/${baseName}-${widths[1]}.jpg`}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </picture>
        </div>
    );
};
export default ResponsiveImage;
