import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold font-cookie mb-2">Food Sheer.</h2>
          <p className="text-sm">Fastest Delivery & Easy Pickup</p>
        </div>
        <div className="items-center mt-4 mr-24 md:mt-0 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Food Sheer. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
