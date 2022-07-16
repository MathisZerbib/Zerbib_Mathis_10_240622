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
  return (
    <div className="App">

<div className="main-container">
    <NavBar></NavBar>          

      <Routes>
        <Route path="https://mathiszerbib.github.io/Zerbib_Mathis_10_24062022/*" element={<NotFound />} />
        <Route path="https://mathiszerbib.github.io/Zerbib_Mathis_10_24062022/" element={<Home />} />
        <Route path="https://mathiszerbib.github.io/Zerbib_Mathis_10_24062022/about" element={<About />} />
        <Route path="https://mathiszerbib.github.io/Zerbib_Mathis_10_24062022/location/:id" element={<Location />} />
      </Routes>     
    </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
