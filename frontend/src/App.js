import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/other/HomePage/HomePage';
import './App.css';
import SelectionScreen from './pages/other/SelectionScreen/SelectionScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selection-screen" element={<SelectionScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
