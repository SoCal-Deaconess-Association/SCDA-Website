// Import React features
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Import components
import { VideoPlayer } from '../components/VideoPlayer';

import Story from '../assets/icons/StoryIcon';
import Arrow from '../assets/icons/ArrowIcon';

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

    // Bypass hover for touch devices
    const bypassHover = () => {
        if ('ontouchstart' in document.documentElement) {
            document.documentElement.classList.add('bypass-hover');
        }

        // Add the "no-hover" class to buttons when a touch screen device is detected
        const buttons = document.querySelectorAll('.back, .previous, .next, .story');
        buttons.forEach((button) => {
            button.classList.add('no-hover');
        });
    };

    // Calls bypassHover function when the component is mounted
    useEffect(() => {
        bypassHover();
    }, []);

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
                        <Link to='/greetings' className="back button bg-teal-dark no-highlight">
                            <Arrow /><span className='spacer'></span>Greeters
                        </Link>

                        <div className='row'>
                            {prevGreeterId !== null ? (
                                <Link to={`/greetings/${prevGreeterId}`} className="prev-next button no-highlight">
                                    Previous
                                </Link>
                            ) : (
                                <span className='prev-next button greyed-out'>
                                    Previous
                                </span>
                            )}

                            {nextGreeterId !== null ? (
                                <Link to={`/greetings/${nextGreeterId}`} className="prev-next button no-highlight">
                                    Next
                                </Link>
                            ) : (
                                <span className='prev-next button greyed-out'>
                                    Next
                                </span>
                            )}
                        </div>

                        <Link to={`/greetings/${greeter.id}/story`} className='story button bg-pink-dark no-highlight'>
                            <Story /><span className='spacer'></span>Story
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
