import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">
                <a href="/selection-screen">BallGorithm</a>
            </h1>
            <div className="navbar-section first">
                <a href="/players">The 'Pedia</a>
            </div>
            <div className="navbar-section">
                <a href="/teams">Era Compare</a>
            </div>
            <div className="navbar-section">
                <a href="/teams">Team Fit Calculator</a>
            </div>
            <div className="navbar-section">
                <a href="/teams">Player Progress</a>
            </div>
            <div className="navbar-section">
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default NavBar;