import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import NavBar from "./components/navigation/NavBar";
import HideText from "./components/pages/HideText";
import Counter from "./components/pages/Counter";
import ToggleGreeting from "./components/pages/ToggleGreeting";
import FontSize from "./components/pages/FontSize";
import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Counter" Component={Counter} />
          <Route path="/HideText" Component={HideText} />
          <Route path="/ToggleGreeting" Component={ToggleGreeting} />
          <Route path="/FontSize" Component={FontSize} />
        </Routes>
      </Router>
    </div>
  );
}
