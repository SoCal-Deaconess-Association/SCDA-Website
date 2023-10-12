// Import React features
import YouTube from 'react-youtube';

export const VideoPlayer = ({ videoID }) => {

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
            <YouTube videoId={videoID} opts={opts} className="youtube-player" />
        </div>
    );
};
