import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const isOnline = useOnline();
  // <h1>{isOnline ? "✔✔" : "❌"}</h1>;

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center mx-28 py-5 pl-4 bg-black shadow-md rounded-b-3xl ">
      <div>
        <a className="text-5xl font-bold text-white font-cookie">
          Food Sheer<span className="text-3xl text-red-600"> .</span>
        </a>
      </div>

      <ul className="flex list-none font-sans">
        <li className="ml-8 rounded-2xl hover:bg-orange-300 h-11 w-16 flex justify-center items-center ">
          {" "}
          <Link className="text-white  text-lg hover:text-red-600  " to="/">
            Home
          </Link>
        </li>
        <li className="ml-8 rounded-2xl hover:bg-orange-300 h-11 w-16 flex justify-center items-center ">
          {" "}
          <Link
            className="text-white  text-lg hover:text-red-600 "
            to="/offers"
          >
            Offers
          </Link>
        </li>
        <li className="ml-8 rounded-2xl hover:bg-orange-300 h-11 w-16 flex justify-center items-center ">
          <Link className="text-white  text-lg hover:text-red-600 " to="/about">
            About
          </Link>
        </li>
        <li className="ml-8 rounded-2xl hover:bg-orange-300 h-11 w-20 flex justify-center items-center ">
          <Link
            className="text-white  text-lg hover:text-red-600 "
            to="/services"
          >
            Services
          </Link>
        </li>
      </ul>
      <div className="flex items-center mr-6">
        <div className="flex items-center bg-white p-1 rounded-2xl shadow-md">
          <FaSearch size={15} />
          <input
            className="border-none outline-none pl-2 rounded-xl text-lg"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="relative text-white ml-1  mr-3">
          <FaShoppingCart size={25} />
          <div className="absolute top-[-10px] right-[-18px] bg-orange-500 rounded-full px-2 py-1 text-xs ">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
