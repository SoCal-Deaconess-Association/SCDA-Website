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
    // Button Arrangements
    const buttonsSizeSmall = useMediaQuery({ maxWidth: 450 });
    const buttonsSizeMedium = useMediaQuery({ maxWidth: 600 });

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
                    <div className='bg'>
                        {/* Small Button Arrangement */}
                        {buttonsSizeSmall && (
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
                        )}

                        {/* Medium Button Arrangement */}
                        {buttonsSizeMedium && !buttonsSizeSmall && (
                            <div className='buttons'>
                                <div className='row'>
                                    <Link to='/greetings' className="back button bg-teal-dark no-highlight">
                                        <Arrow /><span className='spacer'></span>Greeters
                                    </Link>
                                    <Link to={`/greetings/${greeter.id}/story`} className='story button bg-pink-dark no-highlight'>
                                        <Story /><span className='spacer'></span>Story
                                    </Link>
                                </div>

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
                            </div>
                        )}

                        {/* Large Button Arrangement */}
                        {!buttonsSizeMedium && !buttonsSizeSmall && (
                            <div className='buttons'>
                                <div className='row'>
                                    <Link to='/greetings' className="back button bg-teal-dark no-highlight">
                                        <Arrow /><span className='spacer'></span>Greeters
                                    </Link>

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

                                    <Link to={`/greetings/${greeter.id}/story`} className='story button bg-pink-dark no-highlight'>
                                        <Story /><span className='spacer'></span>Story
                                    </Link>
                                </div>
                            </div>
                        )}
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
