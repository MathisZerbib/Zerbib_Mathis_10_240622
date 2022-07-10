import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/Navbar';
import Location from './pages/Location';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div className="App">
         <NavBar></NavBar>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}


export default App;
