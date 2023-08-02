import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/Counter">Counter</NavLink>
      <NavLink to="/HideText">Hide Text</NavLink>
      <NavLink to="/ToggleGreeting">Toggle Greeting</NavLink>
      <NavLink to="/FontSize">Font Size</NavLink>
      <NavLink to="/FontSize">Something</NavLink>
      <NavLink to="/FontSize">Something</NavLink>
    </div>
  );
};

export default NavBar;
