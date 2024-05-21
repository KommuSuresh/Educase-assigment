import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Login from './components/loginPage';
import Profile from './components/profile';
import Navbar from './components/navbar';
import Home from './components/homePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes> 
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
