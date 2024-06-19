import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="flex pl-6">
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          className=" left-1/2 transform -translate-x-1/2 bg-red-400  p-3 text-white rounded-xl shadow-lg hover:bg-orange-600 transition-colors"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
