import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Profile/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/experience/:companyName" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
