import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">
                <a href="/selection-screen">BallGorithm</a>
            </h1>
            <div className="navbar-section first">
                <a href="/the-pedia">The 'Pedia</a>
            </div>
            <div className="navbar-section">
                <a href="/era-compare">Era Compare</a>
            </div>
            <div className="navbar-section">
                <a href="/team-fit-calculator">Team Fit Calculator</a>
            </div>
            <div className="navbar-section">
                <a href="/player-progress">Player Progress</a>
            </div>
            <div className="navbar-section">
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default NavBar;