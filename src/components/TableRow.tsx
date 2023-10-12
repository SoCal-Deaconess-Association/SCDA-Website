// Import React features
import { Link } from 'react-router-dom';

// Import images
import PlayIcon from '../assets/icons/PlayIcon';

export const TableRow = ({ greeter }) => {
    return (
        <div className='table-row'>
            <div className='table-cell'>
                <p className='name'>{greeter.name}</p>
            </div>
            <div className='table-cell'>
                <p>{greeter.year !== null ? greeter.year : ''}</p>
            </div>
            <div className='table-cell'>
                <p>{greeter.province}</p>
            </div>
            <div className='table-cell'>
                <Link to={`/greetings/${greeter.id}`}>
                    <PlayIcon />
                </Link>
            </div>
        </div>
    );
};
