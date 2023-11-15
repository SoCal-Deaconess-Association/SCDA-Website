// React features
import { useNavigate } from "react-router";

// Components
import { VideoPlayer } from '../components/VideoPlayer';

// Images
import Arrow from '../assets/icons/ArrowIcon';

export const HistoryPage = () => {
    const navigate = useNavigate();

    const greetingsPage = () => {
        navigate('/greetings');
    };

    return (
        <div className='history-page card shadow'>
            <h1>Part I: History</h1>
            <div className='divider'></div>
            <VideoPlayer videoID={'ih3YX4Abh4g'} />
            <button className='button bg-teal no-highlight' onClick={greetingsPage}>
                Continue to Part II
                <span className='spacer'></span>
                <Arrow className='flip-horizontally' />
            </button>
        </div>
    );
}