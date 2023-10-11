import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Import components
import { TableRow } from '../components/TableRow';
import BackIcon from '../assets/icons/BackIcon';
import ContinueIcon from '../assets/icons/ContinueIcon';
import { Greeting } from '../components/Greeting';

import { Greeters } from '../utils/greeters.utils';

export const GreetingsPage = () => {
    const [isGreetingVisible, setIsGreetingVisible] = useState(false);

    const showGreetingPopup = () => {
        setIsGreetingVisible(true);
    };

    const isMobile = useMediaQuery({ maxWidth: 590 });

    return (
        <div className='content-container shadow greetings'>
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
                        <TableRow key={greeter.id} greeter={greeter} onPlayClick={showGreetingPopup} />
                    ))}
                </div>
                <div className='table-footer shadow'>
                    <div className='table-cell'>
                        {isMobile && (
                            <Link to='/' className='button-part1'>Part I<BackIcon /></Link>
                        )}
                        {!isMobile && (
                            <Link to='/' className='button-back-part1'>Back to Part I<BackIcon /></Link>
                        )}
                    </div>
                    <div className='table-cell'>
                        {isMobile && (
                            <Link to='/anthem' className='button-part3'>Part III<ContinueIcon /></Link>
                        )}
                        {!isMobile && (
                            <Link to='/anthem' className='button-continue-part3'>Continue to Part III<ContinueIcon /></Link>
                        )}
                    </div>
                </div>

                {isGreetingVisible && <Greeting />}
            </div>
        </div>
    );
}