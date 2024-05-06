import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="navbar">
      <h1>Food Sheer</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {" "}
            <div>
              {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Login</button>
              ) : (
                <button onClick={() => setIsLoggedIn(true)}>Log Out</button>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
