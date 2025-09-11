import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
type optionsType =
    {     autoplay: boolean;     controls: boolean;     responsive: boolean;     fluid: boolean;     sources: {         src: string;         type: string;     }[]; }
export const VideoJS = (props: { options: optionsType; onReady: (player: never) => void ; }) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const {options, onReady} = props;

    React.useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            videoRef.current.appendChild(videoElement);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                // @ts-expect-error asd
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onReady && onReady(player);
            });

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            player.autoplay(options.autoplay);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            player.src(options.sources);
        }
    }, [onReady, options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (player && !player.isDisposed()) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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