'use client';

import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

type optionsType = {
    autoplay: boolean;
    controls: boolean;
    responsive: boolean;
    fluid: boolean;
    sources: {
        src: string;
        type: string;
    }[];
}

export const VideoJS = (props: { options: optionsType; onReady: (player: never) => void; }) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const {options, onReady} = props;

    React.useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");
            videoElement.classList.add('vjs-big-play-centered');
            // @ts-expect-error
            videoRef.current.appendChild(videoElement);
            // @ts-expect-error
            const player = playerRef.current = videojs(videoElement, options, () => {
                // @ts-expect-error
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onReady && onReady(player);
            });
        } else {
            const player = playerRef.current;
            // @ts-expect-error
            player.autoplay(options.autoplay);
            // @ts-expect-error
            player.src(options.sources);
        }
    }, [onReady, options, videoRef]);

    React.useEffect(() => {
        const player = playerRef.current;
        return () => {
            // @ts-expect-error
            if (player && !player.isDisposed()) {
                // @ts-expect-error
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player="">
            <div ref={videoRef} />
        </div>
    );
}

export default VideoJS;
