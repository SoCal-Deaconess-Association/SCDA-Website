// Import images
import PlayIcon from '../assets/icons/PlayIcon';

export const TableRow = ({ greeter, onPlayClick }) => {
    const handlePlayClick = () => {
        onPlayClick();
    };

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
                <PlayIcon onClick={handlePlayClick} />
            </div>
        </div>
    );
};
