'use client';

import React, { useEffect, useState } from 'react';
import VideoJS from './VideoJs';

function videoToThumbnail(path: string) {
    return path
        .replace("/videos/", "/thumbnails/")
        .replace(/\.[^/.]+$/, ".webp");
}

export default function VideoPlayer({src, type}: {src: string; type: string}) {
    const playerRef = React.useRef(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        poster: videoToThumbnail(src),
        sources: [{
            src: src,
            type: type
        }]
    };

    // @ts-expect-error
    const handlePlayerReady = (player) => {
        playerRef.current = player;
        player.on('waiting', () => {
        });
        player.on('dispose', () => {
        });
    };

    return (
        <>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </>
    );
}
