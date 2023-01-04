import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About/About";
import List from "./pages/listpage/List";
import StyleComlponent from "./pages/StyleComponent/StyleComlponent";
import Auth from "./pages/auth/Auth";
import Accodian from "./pages/accodian/Accodian";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/style" element={<StyleComlponent />} />
        <Route path="/Accodian" element={<Accodian />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
