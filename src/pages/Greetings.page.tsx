import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Import components
import { TableRow } from '../components/TableRow';


import { Greeters } from '../utils/greeters.utils';

export const GreetingsPage = () => {
    return (
        <div className='content-container shadow greetings'>
            <h1>Part II: Greetings & Stories</h1>
            <div className='divider'></div>
            <div className='table'>
                <div className='table-header'>
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
            </div>
        </div>
    );
}