// Import React features
import { useParams, Link } from 'react-router-dom';

// Import utils
import { Greeters } from '../utils/greeters.utils';

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

    // If greeter with matching ID is found:
    return (
        <div className='story-page card shadow'>
            <h1>{greeter.name}'s Story</h1>

            <iframe
                src={greeter.story + '#toolbar=0'}
                width="100%"
                height="100%"
                title="Embedded PDF"
            ></iframe>

            <Link to={`/greetings/${greeter.id}`} className='button no-highlight'>Back</Link>
        </div >
    );
};
