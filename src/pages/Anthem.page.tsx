// React features
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

// Components
import { VideoPlayer } from '../components/VideoPlayer';

// Images
import Arrow from '../assets/icons/ArrowIcon';
import FullscreenIcon from '../assets/icons/FullscreenIcon';

export const AnthemPage = () => {
    const navigate = useNavigate();
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const greetingsPage = () => {
        navigate('/greetings');
    };

    useEffect(() => {
        const updateOrientation = () => {
            setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
        };

        updateOrientation();

        window.addEventListener('resize', updateOrientation);

        return () => {
            window.removeEventListener('resize', updateOrientation);
        };
    }, []);

    return (
        <div className='anthem-page history-anthem card shadow'>
            <h1>Part III: Anthem</h1>
            <div className='divider'></div>
            <div className='content-container'>
                <VideoPlayer videoID={'ZPeF3wIwuUw'} onToggleFullscreen={toggleFullscreen} />
                <div className='button-container'>
                    <button className='button-fullscreen' onClick={toggleFullscreen}>
                        Fullscreen <FullscreenIcon color1='#e66489' color2='#eff8f9' />
                    </button>
                    <button
                        onClick={greetingsPage}
                        className='button bg-teal no-highlight'
                    >
                        <Arrow />
                        <span className='spacer'></span>
                        {isLandscape ? 'Part II' : 'Back to Part II'}
                    </button>
                </div>
            </div>
        </div>
    );
}