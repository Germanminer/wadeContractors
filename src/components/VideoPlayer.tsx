import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './VideoJs.tsx'
import videojs from "video.js";
export default function VideoPlayer({src,type}:{src:string,type:string}  )  {
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: src,
            type: type
        }]
    };
//@ts-expect-error asd
    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };
    return (
        <>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </>
    );
}