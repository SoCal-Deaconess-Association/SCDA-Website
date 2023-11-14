// import React features
import { Link, useNavigate } from "react-router-dom";

// import Components
import { VideoPlayer } from '../components/VideoPlayer';

// import Images
import Arrow from '../assets/icons/ArrowIcon';

export const AnthemPage = () => {
    const navigate = useNavigate();

    const greetingsPage = () => {
        navigate('/greetings');
    };

    return (
        <div className='anthem-page card shadow'>
            <h1>Part III: Anthem</h1>
            <div className='divider'></div>
            <VideoPlayer videoID={'ZPeF3wIwuUw'} />
            <button
                onClick={greetingsPage}
                className='button bg-teal no-highlight'
            >
                <Arrow />
                <span className='spacer'></span>
                Back to Part II
            </button>
        </div>
    );
}