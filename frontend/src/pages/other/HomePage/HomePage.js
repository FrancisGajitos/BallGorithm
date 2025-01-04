import React from 'react';
import './HomePage.css'
import basketball from '../../../assets/images/spinning-basketball.png.webp';

const HomePage = () => {
    return (
        <div>
            <p>Welcome to...</p>
            <h1>BallGorithm</h1>
            <img src={basketball} alt="Spinning Basketball" className="basketball" />
            <p>Your one stop shop for everything basketball!</p>
            <button className="start-button"><p>Start</p></button>
        </div>
    );
};

export default HomePage;