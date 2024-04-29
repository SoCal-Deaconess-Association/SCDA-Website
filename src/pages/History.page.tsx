// React features
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

// Components
import { VideoPlayer } from '../components/VideoPlayer';

// Images
import Arrow from '../assets/icons/ArrowIcon';

export const HistoryPage = () => {
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
        <div className='history-page history-anthem card shadow'>
            <h1>Part I: History</h1>
            <div className='divider'></div>
            <div className='content-container'>
                <VideoPlayer videoID={'ih3YX4Abh4g'} />
                <div className='button-container'>
                    <button className='button bg-teal no-highlight' onClick={greetingsPage}>
                        {isLandscape ? 'Part II' : 'Continue to Part II'}
                        <span className='spacer'></span>
                        <Arrow className='flip-horizontally' />
                    </button>
                </div>
            </div>
        </div>
    );
}