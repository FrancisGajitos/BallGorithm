import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import basketball from '../../../assets/images/spinning-basketball.png.webp';

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/selection-screen'); // Navigate to the new page
    };

    return (
        <div>
            <p>Welcome to the...</p>
            <h1>BallGorithm</h1>
            <img src={basketball} alt="Spinning Basketball" className="basketball" />
            <p>Your one stat shop for everything basketball!</p>
            <button className="start-button" onClick={handleStartClick}>Start</button>
        </div>
    );
};

export default HomePage;