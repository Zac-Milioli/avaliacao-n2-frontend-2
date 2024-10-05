import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Evaluation from './pages/Evaluation';
import Development from './pages/Development';

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/development" element={<Development />} />
        </Routes>
    </Router>
);

export default App;