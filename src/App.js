import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter from "./learn-useState/Counter";
import Effect from "./learn-useEffect/Index";
import Context from "./learn-useContext/Index";
import New from "./new-page/Index";
function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Use State</Link>
              <Link to="effect">Use Effect</Link>
              <Link to="context">Use Context</Link>
              <Link to="new">New Page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Counter />} />
          <Route path="effect" exact element={<Effect />} />
          <Route path="context" exact element={<Context />} />
          <Route path="new" exact element={<New />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
