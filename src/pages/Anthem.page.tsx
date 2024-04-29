// React features
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

// Components
import { VideoPlayer } from '../components/VideoPlayer';

// Images
import Arrow from '../assets/icons/ArrowIcon';

export const AnthemPage = () => {
    const navigate = useNavigate();
    const [isLandscape, setIsLandscape] = useState(false);

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
                <VideoPlayer videoID={'ZPeF3wIwuUw'} />
                <div className='button-container'>
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