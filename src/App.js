import "./App.css";
import "./utils/style/responsive.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import{ Home, About, Location, NotFound} from "./pages";
import { Footer, Navbar} from "./components";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Navbar></Navbar>

        <Routes>
          <Route path={"*"} element={<NotFound />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"about"} element={<About />} />
          <Route path={"location/:id"} element={<Location />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
