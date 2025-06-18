import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="navContainer">
        <li>
          <Link to="/Recipes">Home</Link>
        </li>
        <li>
          <Link to="/Recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/homeessentials">Home Essentials</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
