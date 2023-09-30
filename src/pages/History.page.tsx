import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { VideoPlayer } from '../components/VideoPlayer';

export const HistoryPage = () => {
    const navigate = useNavigate();

    //useEffect(() => {
    //    navigate('/history');
    //}, []);

    return (
        <div>
            History
            <VideoPlayer />
        </div>
    );
}