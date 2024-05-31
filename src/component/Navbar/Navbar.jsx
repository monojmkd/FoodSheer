import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const isOnline = useOnline();
  // <h1>{isOnline ? "✔✔" : "❌"}</h1>;

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="navbar">
      <h1>Food Sheer</h1>
      {/* <h1>{isOnline ? "✔✔" : "❌"}</h1> */}
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <li>Cart - {cartItems.length}</li>
        </Link>{" "}
        <div>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Login</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Log Out</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
