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
  const gitPath = "/Zerbib_Mathis_10_24062022";
  const localPath = "/"
  console.log(localPath)
  return (
    <div className="App">

<div className="main-container">
    <NavBar></NavBar>          

      <Routes>
        <Route path={gitPath+"/*" }element={<NotFound />} />
        <Route path={gitPath+"/"} element={<Home />} />
        <Route path={gitPath+"/about"} element={<About />} />
        <Route path={gitPath+"/location/:id"} element={<Location />} />
      </Routes>     
    </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
