import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Components
import { VideoPlayer } from '../components/VideoPlayer';

// Images
import ContinueIcon from '../assets/icons/ContinueIcon';

export const HistoryPage = () => {
    return (
        <div className='card shadow'>
            <h1>Part I: History</h1>
            <div className='divider'></div>
            <VideoPlayer videoID={'ih3YX4Abh4g'} />
            <Link to='/greetings' className='button-continue-part2'>Continue to Part II<ContinueIcon /></Link>
        </div>
    );
}