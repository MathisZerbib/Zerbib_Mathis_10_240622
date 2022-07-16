import "./App.css";
import "./utils/style/responsive.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/Navbar";
import Location from "./pages/Location";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";

function App() {
  const pathName = window.location.pathname
  console.log("pathname", pathName)
  return (
    <div className="App">

<div className="main-container">
    <NavBar></NavBar>          

      <Routes>
        <Route path={pathName+"*" }element={<NotFound />} />
        <Route path={pathName} element={<Home />} />
        <Route path={pathName+"about"} element={<About />} />
        <Route path={pathName+"location/:id"} element={<Location />} />
      </Routes>     
    </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
