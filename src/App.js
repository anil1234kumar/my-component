import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About/About";
import List from "./pages/listpage/List";
import StyleComlponent from "./component/StyleComponent/StyleComlponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/style" element={<StyleComlponent />} />
      </Routes>
    </div>
  );
}

export default App;
