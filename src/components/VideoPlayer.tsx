import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './VideoJs.tsx'
export default function VideoPlayer({src,type}:{src:string,type:string}  )  {
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: false,
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

        //handle player events here, example:
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