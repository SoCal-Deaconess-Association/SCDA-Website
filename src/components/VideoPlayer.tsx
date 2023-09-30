import React from 'react';
import YouTube from 'react-youtube';

export const VideoPlayer = () => {
    const videoId = 'ih3YX4Abh4g';

    const opts = {
        width: '100%',
        playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
            showinfo: 0,
        },
    };

    return (
        <div className="video-player-container">
            <YouTube videoId={videoId} opts={opts} className="youtube-player" />
        </div>
    );
};
