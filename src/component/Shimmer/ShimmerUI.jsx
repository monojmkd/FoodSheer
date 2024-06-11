// ShimmerUI.jsx
import React from "react";

const ShimmerUI = () => {
  return (
    <div className="space-y-6 p-4 md:p-8 lg:p-16">
      {/* Hero Section Shimmer */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-2/3 bg-gray-200 h-64 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        <div className="space-y-3 w-full md:w-1/3">
          <div className="bg-gray-200 h-8 w-3/4 rounded"></div>
          <div className="bg-gray-200 h-8 w-2/4 rounded"></div>
          <div className="bg-gray-200 h-8 w-2/3 rounded"></div>
        </div>
      </div>

      {/* Search Section Shimmer */}
      <div className="bg-gray-200 h-12 rounded-full w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
      </div>

      {/* Restaurant Cards Shimmer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg overflow-hidden relative"
          >
            <div className="w-full h-40 bg-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-gray-300 h-6 rounded w-3/4"></div>
              <div className="bg-gray-300 h-6 rounded w-2/4"></div>
              <div className="bg-gray-300 h-6 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerUI;
