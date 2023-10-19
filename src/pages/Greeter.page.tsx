// Import React features
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Import components
import { VideoPlayer } from '../components/VideoPlayer';
import StoryIcon from '../assets/icons/StoryIcon';

// Import utils
import { Greeters } from '../utils/greeters.utils';



export const GreeterPage = () => {
    // Responsive breakpoints
    const isMobile = useMediaQuery({ maxWidth: 767 });

    // Gets greeter ID from route parameters
    const { id } = useParams();

    // Convert id to an integer
    const greeterId = parseInt(id, 10);

    // Finds greeter with matching ID
    const greeter = Greeters.find(greeter => greeter.id === parseInt(id, 10));

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
                    <div>
                        <Link to='/greetings'>
                            Back to Greeters
                        </Link>

                        {prevGreeterId !== null ? (
                            <Link to={`/greetings/${prevGreeterId}`} className="previous">
                                Previous
                            </Link>
                        ) : (
                            <span className='previous'>
                                Previous
                            </span>
                        )}

                        {nextGreeterId !== null ? (
                            <Link to={`/greetings/${nextGreeterId}`} className="next">
                                Next
                            </Link>
                        ) : (
                            <span className='previous'>
                                Next
                            </span>
                        )}
                    </div>
                    <span className='story'>
                        <StoryIcon />Story
                    </span>
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
