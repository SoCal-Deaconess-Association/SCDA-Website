import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const GreetingsPage = () => {
    return (
        <div className='content-container shadow'>
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
                <div className='table-row'>
                    <div className='table-cell'>
                        <p className='name'>John Smith</p>
                    </div>
                    <div className='table-cell'>
                        <p>2019</p>
                    </div>
                    <div className='table-cell'>
                        <p>Ontario</p>
                    </div>
                    <div className='table-cell'>
                        <p>Play Button</p>
                    </div>
                </div>
                <div className='table-row'>
                    <div className='table-cell'>
                        <p className='name'>John Smith</p>
                    </div>
                    <div className='table-cell'>
                        <p>2019</p>
                    </div>
                    <div className='table-cell'>
                        <p>Ontario</p>
                    </div>
                    <div className='table-cell'>
                        <p>Play Button</p>
                    </div>
                </div>
            </div>
        </div>
    );
}