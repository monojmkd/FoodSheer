import React from "react";
import { FaShippingFast, FaUtensils, FaConciergeBell } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-red-50 text-gray-800 px-4 py-28 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center font-ptserif mb-8">
          Our Services
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4 text-green-500">
              <FaShippingFast size={50} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Fast Delivery</h2>
            <p>
              Get your favorite meals delivered to your doorstep quickly and
              efficiently. We prioritize speed and convenience in our delivery
              services.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4 text-green-500">
              <FaUtensils size={50} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Wide Selection</h2>
            <p>
              Choose from a wide variety of restaurants and cuisines. Whether
              you're craving pizza, sushi, or a gourmet meal, we've got you
              covered.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4 text-green-500">
              <FaConciergeBell size={50} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Customer Support</h2>
            <p>
              Our customer support team is here to assist you with any questions
              or issues you may have. We are dedicated to ensuring a smooth and
              enjoyable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
