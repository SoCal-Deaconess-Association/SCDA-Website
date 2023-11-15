// Import React features
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import utils
import { Greeters } from '../utils/greeters.utils';

import Arrow from '../assets/icons/ArrowIcon';

export const StoryPage = () => {
    // Gets greeter ID from route parameters
    const { id } = useParams();

    // Convert id to an integer with a default value of 0
    const greeterId = parseInt(id || "0", 10);

    // Finds greeter with matching ID
    const greeter = Greeters.find((greeter) => greeter.id === greeterId);

    // If no greeter with matching ID is found:
    if (!greeter) {
        return <div>No Story found for this ID.</div>;
    }

    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, greeter.story.length - 1));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const navigate = useNavigate();

    const greeterPage = () => {
        navigate(`/greetings/${greeter.id}`);
    };

    // If greeter with matching ID is found:
    return (
        <div className='story-page card shadow'>
            <h1>{greeter.name}'s Story</h1>

            <div className="story custom-scrollbar">
                <img src={greeter.story[currentPage]} alt={`Page ${currentPage + 1}`} />
            </div>

            <div className='story-navigation'>
                <button
                    className={`button no-highlight ${currentPage === 0 ? 'greyed-out' : ''}`}
                    onClick={prevPage}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <button
                    className={`button no-highlight ${currentPage === greeter.story.length - 1 ? 'greyed-out' : ''}`}
                    onClick={nextPage}
                    disabled={currentPage === greeter.story.length - 1}
                >
                    Next
                </button>
            </div>

            <button
                onClick={greeterPage}
                className='button back no-highlight'
            >
                <Arrow />
                <span className='spacer'></span>
                Back to Greeter
            </button>
        </div >
    );
};
