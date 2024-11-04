import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
