import { useRef } from 'react';
import YouTube from 'react-youtube';

type VideoPlayerProps = {
    videoID: string;
    onToggleFullscreen: () => void;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoID }) => {
    const playerRef = useRef<any>(null);

    const opts = {
        width: '100%',
        playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
            showinfo: 0,
        },
    };

    const onPlayerReady = (event: { target: any }) => {
        const player = event.target;
        playerRef.current = player;
    };

    return (
        <div className="video-player-container">
            <YouTube videoId={videoID} opts={opts} className="youtube-player" onReady={onPlayerReady} />
        </div>
    );
};

export default VideoPlayer;
