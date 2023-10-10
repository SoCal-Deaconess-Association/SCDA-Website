export const TableRow = ({ greeter }) => {
    return (
        <div className='table-row'>
            <div className='table-cell'>
                <p className='name'>{greeter.name}</p>
            </div>
            <div className='table-cell'>
                <p>{greeter.year !== null ? greeter.year : 'N/A'}</p>
            </div>
            <div className='table-cell'>
                <p>{greeter.province}</p>
            </div>
            <div className='table-cell'>
                <p>Play Button</p>
            </div>
        </div>
    );
};
