import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav-links">
        <img
          src="images/logo.png"
          alt="img cannot be displayed"
          className="logo"
        ></img>
        <Link to="/" className="nav-style">
          <li>Home</li>
        </Link>
        <Link to="/about" className="nav-style">
          <li>About</li>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
