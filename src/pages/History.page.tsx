// React features
import { Link } from "react-router-dom";

// Components
import { VideoPlayer } from '../components/VideoPlayer';

// Images
import Arrow from '../assets/icons/ArrowIcon';

export const HistoryPage = () => {
    return (
        <div className='card shadow'>
            <h1>Part I: History</h1>
            <div className='divider'></div>
            <VideoPlayer videoID={'ih3YX4Abh4g'} />
            <Link to='/greetings' className='button bg-teal no-highlight'>Continue to Part II<span className='spacer'></span><Arrow className='flip-horizontally' /></Link>
        </div>
    );
}