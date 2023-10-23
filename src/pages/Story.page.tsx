// Import React features
import { useParams, Link } from 'react-router-dom';

// Import utils
import { Greeters } from '../utils/greeters.utils';

export const StoryPage = () => {
    // Gets greeter ID from route parameters
    const { id } = useParams();

    // Finds greeter with matching ID
    const greeter = Greeters.find(greeter => greeter.id === parseInt(id, 10));

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

            <Link to={`/greetings/${greeter.id}`} className='button'>Back</Link>
        </div >
    );
};
