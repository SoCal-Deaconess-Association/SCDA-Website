// Import React features
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Import components
import { VideoPlayer } from '../components/VideoPlayer';

import StoryIcon from '../assets/icons/StoryIcon';
import BackIcon from '../assets/icons/BackIcon2';

// Import utils
import { Greeters } from '../utils/greeters.utils';

export const GreeterPage = () => {
    // Responsive breakpoints
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const flexBreak = useMediaQuery({ maxWidth: 830 });

    const { id } = useParams();

    // Convert id to an integer with a default value of 0
    const greeterId = parseInt(id || "0", 10);

    // Finds greeter with matching ID
    const greeter = Greeters.find((greeter) => greeter.id === greeterId);

    // If no greeter with matching ID is found:
    if (!greeter) {
        return <div>No greeter found for this ID.</div>;
    }

    // Total number of greeters
    const totalGreeters = Greeters.length;

    // Calculate IDs for "Previous" and "Next" greeters
    const prevGreeterId = greeterId > 1 ? greeterId - 1 : null;
    const nextGreeterId = greeterId < totalGreeters ? greeterId + 1 : null;




    // If greeter with matching ID is found:
    return (
        <div className='greeter-page card shadow'>
            <h1>{greeter.name}</h1>
            <h2>{greeter.id + '/18'}</h2>
            <div className='divider'></div>
            <div className='content' >
                {/* Content Left */}
                <div className='content-left'>
                    <VideoPlayer videoID={greeter.video} />
                    <div className='buttons'>
                        <div className='row'>
                            <Link to='/greetings no-highlight' className="back">
                                <BackIcon />Back to Greeters
                            </Link>

                            {flexBreak && (
                                <div className='flex-break'></div>
                            )}

                            {prevGreeterId !== null ? (
                                <Link to={`/greetings/${prevGreeterId}`} className="previous no-highlight">
                                    Previous
                                </Link>
                            ) : (
                                <span className='previous greyed-out'>
                                    Previous
                                </span>
                            )}

                            {nextGreeterId !== null ? (
                                <Link to={`/greetings/${nextGreeterId}`} className="next no-highlight">
                                    Next
                                </Link>
                            ) : (
                                <span className='previous greyed-out'>
                                    Next
                                </span>
                            )}
                        </div>
                        <Link to={`/greetings/${greeter.id}/story`} className='story no-highlight'>
                            <StoryIcon />Story
                        </Link>
                    </div>
                </div>

                {!isMobile && (
                    /* Content Right */
                    <div className='content-right'>
                        <h2>Deaconess Concentration of Work</h2>
                        {greeter.map && <img src={greeter.map} alt={`Map for ${greeter.name}`} />}
                    </div>
                )}
            </div >
        </div >
    );
};
