import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import DownloadOurApp from "../Body/DownloadOurApp";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4 sm:px-8 pt-24 lg:px-16">
      <div className="container mx-auto">
        {/* <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1> */}
        <div className="flex flex-col justify-items-center ">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <p className="text-lg mb-8">
            Feel free to reach out to us on LinkedIn or GitHub!
          </p>
          <div className="flex space-x-8">
            <Link
              to="https://www.linkedin.com/in/monoj-kumar-das-019340a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition"
            >
              <FaLinkedin size={40} />
            </Link>
            <Link
              to="https://github.com/monojmkd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition"
            >
              <FaGithub size={40} />
            </Link>
          </div>
        </div>
      </div>
      <DownloadOurApp />
    </div>
  );
};

export default Contact;
