import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home/Index";
function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar"></nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
