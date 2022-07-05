import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">
         <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}


export default App;
