import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Components
import { VideoPlayer } from '../components/VideoPlayer';

// Images
import BackIcon from '../assets/icons/BackIcon';

export const AnthemPage = () => {

    //useEffect(() => {
    //    navigate('/history');
    //}, []);

    return (
        <div className='content-container shadow'>
            <h1>Part III: Anthem</h1>
            <div className='divider'></div>
            <VideoPlayer videoID={'ZPeF3wIwuUw'} />
            <Link to='/greetings' className='button-back-part2'>Back to Part II<BackIcon /></Link>
        </div>
    );
}