import React from 'react';
import './SelectionScreen.css';
import NavBar from '../../../components/NavBar/NavBar';

const SelectionScreen = () => {
    return (
        <div>
            <NavBar />
            <div className="content">
                <p>Features</p>
                <div className="rectangle">
                    <p className="title">The 'Pedia</p>
                    <p className="description">A comprehensive guide to every NBA player in history</p>
                </div>
                <div className="rectangle">
                    <p className="title">Era Compare</p>
                    <p className="description">Find players spanning the league's history with similar playstyles and tendencies.</p>
                </div>
                <div className="rectangle">
                    <p className="title">Team Fit Calculator</p>
                    <p className="description">Give us a player and a current team and you'll be provided a score determining how well the player fits within the current team's system.</p>
                </div>
                <div className="rectangle">
                    <p className="title">Player Progress</p>
                    <p className="description">A model outlining a player's career trajectory based on their current state.</p>
                </div>
            </div>
        </div>
    );
};

export default SelectionScreen;