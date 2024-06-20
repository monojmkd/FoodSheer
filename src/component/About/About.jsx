import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4 sm:px-8 lg:px-16 pt-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center font-ptserif mb-8">
          About Food Sheer
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-12">
          <h2 className="text-2xl font-semibold font-ptserif  mb-4">
            Our Mission
          </h2>
          <p className="mb-6">
            Food Sheer is a food delivery frontend web application built to
            provide users with the best and fastest food delivery experience.
            Using the latest technologies, our aim is to create a seamless and
            enjoyable platform for users to discover and order food from their
            favorite restaurants.
          </p>
          <h2 className="text-2xl font-semibold font-ptserif mb-4">
            Technologies Used
          </h2>
          <p className="mb-6">
            This project is built using React and Tailwind CSS within a Vite
            environment. It fetches real-time data from the Swiggy API to
            provide up-to-date restaurant information.
          </p>
          <h2 className="text-2xl font-semibold font-ptserif mb-4">
            About the Developer
          </h2>
          <p className="mb-6">
            Hello! I'm the developer behind Food Sheer. I'm passionate about web
            development and always eager to learn new technologies. You can find
            more about my work and connect with me on GitHub and LinkedIn.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="https://github.com/monojmkd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/monoj-kumar-das-019340a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition"
            >
              <FaLinkedin size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
