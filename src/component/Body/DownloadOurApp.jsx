import React from "react";

const googlePlayBadge =
  "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png";
const appStoreBadge =
  "https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png";
const appScreenshot = "path_to_your_app_screenshot.png"; // Replace with the correct path

const DownloadOurApp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-r from-yellow-100 to-red-300 p-8 rounded-lg shadow-lg mt-8 mx-4">
      {/* Left Section - App Screenshot */}
      <div className="md:w-1/3">
        <img
          src={appScreenshot}
          alt="App Screenshot"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Section - Download Badges */}
      <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Download our Mobile App
        </h2>
        <div className="flex gap-4 mb-4">
          <img
            src={googlePlayBadge}
            alt="Google Play Store"
            className="w-32 h-auto"
          />
          <img
            src={appStoreBadge}
            alt="Apple App Store"
            className="w-32 h-auto"
          />
        </div>
        <div className="flex justify-center md:justify-start gap-4">
          <img
            src={googlePlayBadge}
            alt="User 1"
            className="w-8 h-8 rounded-full"
          />
          <img
            src={appStoreBadge}
            alt="User 2"
            className="w-8 h-8 rounded-full"
          />
          <img
            src={googlePlayBadge}
            alt="User 3"
            className="w-8 h-8 rounded-full"
          />
          <img
            src={appStoreBadge}
            alt="User 4"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadOurApp;
