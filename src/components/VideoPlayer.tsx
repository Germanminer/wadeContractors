import React from 'react';
import VideoJS from './VideoJs.tsx'
function videoToThumbnail(path:string) {
    return path
        .replace("/videos/", "/thumbnails/")
        .replace(/\.[^/.]+$/, ".webp");
}
export default function VideoPlayer({src,type}:{src:string,type:string}  )  {
    const playerRef = React.useRef(null);

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