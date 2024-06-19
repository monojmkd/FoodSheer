import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiShoppingCartLight, PiMapPinLine } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { toggleLocationSidebar } from "../../Store/toggleSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.location.userLocation);
  const cartItems = useSelector((store) => store.cart.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocationSidebar = () => {
    dispatch(toggleLocationSidebar());
    document.body.classList.add("overflow-hidden");
  };

  const truncateStr = (str) => {
    return str.length > 35 ? str.slice(0, 35) + "..." : str;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center mx-6 lg:mx-28 py-3 pl-6 lg:pl-10 bg-black shadow-md rounded-b-3xl">
      <div>
        <Link
          to="/"
          className="text-3xl lg:text-5xl font-bold text-white font-cookie"
        >
          Food Sheer<span className="text-3xl text-red-600"> .</span>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-1  ">
        <button
          onClick={handleLocationSidebar}
          type="button"
          className=" text-white"
        >
          <PiMapPinLine size={30} />{" "}
        </button>
        <p className="text-xs">
          {" "}
          {userLocation ? (
            <span className="block text-slate-400 text-[11px] lg:text-xs ">
              {truncateStr(userLocation?.address)}
            </span>
          ) : (
            <></>
          )}
        </p>
      </div>

      <div className="lg:hidden flex items-center">
        <Link to="/cart">
          <div className="relative text-white mr-4">
            <PiShoppingCartLight size={25} />
            <div className="absolute top-[-8px] right-[-8px] bg-orange-500 rounded-full px-2 py-1 text-xs">
              {cartItems.length}
            </div>
          </div>
        </Link>
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <ul
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:flex lg:w-1/2 lg:ml-18 list-none font-sans absolute lg:static top-16 left-0 lg:top-0 bg-black lg:bg-transparent w-full rounded-xl p-5 lg:p-0`}
      >
        <li className="ml-4 my-4 lg:my-0 lg:px-2 rounded-2xl hover:bg-orange-300 h-11 flex justify-center items-center">
          <Link
            className="text-white text-base hover:text-red-600"
            to="/"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
        </li>
        <li className="ml-4  my-4 lg:my-0 lg:px-2 rounded-2xl hover:bg-orange-300 h-11 flex justify-center items-center">
          <Link
            className="text-white text-base hover:text-red-600"
            to="/offers"
            onClick={toggleMobileMenu}
          >
            Offers
          </Link>
        </li>
        <li className="ml-4 my-4 lg:my-0 lg:px-2 rounded-2xl hover:bg-orange-300 h-11 flex justify-center items-center">
          <Link
            className="text-white text-base hover:text-red-600"
            to="/about"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
        </li>
        <li className="ml-4  my-4 lg:my-0 lg:px-2 rounded-2xl hover:bg-orange-300 h-11 flex justify-center items-center">
          <Link
            className="text-white text-base hover:text-red-600"
            to="/services"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
        </li>
        <li className="ml-4  my-4 lg:my-0  lg:px-2 rounded-2xl hover:bg-orange-300 h-11 flex justify-center items-center">
          <Link
            className="text-white text-base hover:text-red-600"
            to="/contact"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </li>
        <li className="hidden ml-4 lg:ml-8 my-4 lg:my-0 lg:hidden justify-center items-center">
          <Link to="/cart" onClick={toggleMobileMenu}>
            <div className="relative text-white">
              <PiShoppingCartLight size={24} />
              <div className="absolute top-[-8px] right-[-8px] bg-orange-500 rounded-full px-2 py-1 text-xs">
                {cartItems.length}
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex items-center pr-4 lg:pr-10">
        <Link to="/cart">
          <div className="relative text-white">
            <PiShoppingCartLight size={35} />
            <div className="absolute top-[-10px] right-[-10px] bg-orange-500 rounded-full px-2 py-1 text-xs">
              {cartItems.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
