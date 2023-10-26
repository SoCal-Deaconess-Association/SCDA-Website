// import React features
import { Link } from "react-router-dom";

// import Components
import { VideoPlayer } from '../components/VideoPlayer';

// import Images
import BackIcon from '../assets/icons/BackIcon';

export const AnthemPage = () => {
    return (
        <div className='card shadow'>
            <h1>Part III: Anthem</h1>
            <div className='divider'></div>
            <VideoPlayer videoID={'ZPeF3wIwuUw'} />
            <Link to='/greetings' className='button-back-part2 no-highlight'>Back to Part II<BackIcon /></Link>
        </div>
    );
}