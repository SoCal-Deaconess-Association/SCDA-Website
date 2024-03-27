import { useRef } from 'react';
import YouTube from 'react-youtube';
import FullscreenIcon from '../assets/icons/FullscreenIcon';

type VideoPlayerProps = {
    videoID: string;
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

    const toggleFullscreen = () => {
        const player = playerRef.current;
        if (player) {
            const playerElement = player.getIframe();
            if (playerElement.requestFullscreen) {
                playerElement.requestFullscreen();
            } else if (playerElement.mozRequestFullScreen) { /* Firefox */
                playerElement.mozRequestFullScreen();
            } else if (playerElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                playerElement.webkitRequestFullscreen();
            } else if (playerElement.msRequestFullscreen) { /* IE/Edge */
                playerElement.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="video-player-container">
            <YouTube videoId={videoID} opts={opts} className="youtube-player" onReady={onPlayerReady} />
            <button onClick={toggleFullscreen}>Fullscreen <FullscreenIcon color1='#e66489' color2='#eff8f9' /></button>
        </div>
    );
};

export default VideoPlayer;
