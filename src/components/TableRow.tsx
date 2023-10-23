import React from 'react';
import { Link } from 'react-router-dom';

// Images
import PlayIcon from '../assets/icons/PlayIcon';

type Greeter = {
    id: number;
    name: string;
    year: number | null;
    province: string;
};

type TableRowProps = {
    greeter: Greeter;
};

const TableRow: React.FC<TableRowProps> = ({ greeter }) => {
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

export default TableRow;
