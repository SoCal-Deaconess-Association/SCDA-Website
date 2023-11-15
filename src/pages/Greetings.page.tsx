// Import React features
import { useNavigate } from "react-router";

// Import components
import TableRow from '../components/TableRow';
import Arrow from '../assets/icons/ArrowIcon';

// Import utils
import { Greeters } from '../utils/greeters.utils';

export const GreetingsPage = () => {
    const navigate = useNavigate();

    const historyPage = () => {
        navigate('/');
    };

    const anthemPage = () => {
        navigate('/anthem');
    }

    return (
        <div className='card shadow greetings'>
            <h1>Part II: Greetings & Stories</h1>
            <div className='divider'></div>
            <div className='table'>
                <div className='table-header shadow'>
                    <div className='table-cell'>
                        <h3>Name</h3>
                    </div>
                    <div className='table-cell'>
                        <h3>Year Graduate</h3>
                    </div>
                    <div className='table-cell'>
                        <h3>Province of Origin</h3>
                    </div>
                    <div className='table-cell'>
                        <h3>View Greeting & Story</h3>
                    </div>
                </div>

                <div className='table-rows custom-scrollbar'>
                    {Greeters.map((greeter) => (
                        <TableRow key={greeter.id} greeter={greeter} />
                    ))}
                </div>

                <div className='table-footer shadow'>
                    <div className='table-cell'>
                        <button
                            onClick={historyPage}
                            className='button bg-teal no-highlight'
                        >
                            <Arrow />
                            <span className='spacer'></span>
                            Part I
                        </button>
                    </div>
                    <div className='table-cell'>
                        <button
                            onClick={anthemPage}
                            className='button bg-teal no-highlight'
                        >
                            Part III
                            <span className='spacer'></span>
                            <Arrow className='flip-horizontally' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}