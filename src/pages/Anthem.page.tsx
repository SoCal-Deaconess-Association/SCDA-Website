// import React features
import { Link } from "react-router-dom";

// import Components
import { VideoPlayer } from '../components/VideoPlayer';

// import Images
import Arrow from '../assets/icons/ArrowIcon';

export const AnthemPage = () => {
    return (
        <div className='card shadow'>
            <h1>Part III: Anthem</h1>
            <div className='divider'></div>
            <VideoPlayer videoID={'ZPeF3wIwuUw'} />
            <Link to='/greetings' className='button bg-teal no-highlight'><Arrow /><span className='spacer'></span>Back to Part II</Link>
        </div>
    );
}