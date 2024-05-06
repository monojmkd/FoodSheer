import React from "react";
import "./ShimmerUI.css";

const ShimmerUI = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerUI;
