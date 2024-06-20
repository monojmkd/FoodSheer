import React from "react";

const offers = [
  {
    title: "50% Off on Your First Order",
    description:
      "Use code FIRST50 to get 50% off on your first order. Maximum discount up to Rs.100.",
    validTill: "Valid till 31st Dec 2024",
  },
  {
    title: "Free Delivery on Orders Above Rs.200",
    description:
      "Get free delivery on all orders above Rs.200. No code required.",
    validTill: "Valid till 31st Dec 2024",
  },
  {
    title: "Buy 1 Get 1 Free",
    description:
      "Order any pizza and get another one absolutely free! Use code PIZZA4TWO.",
    validTill: "Valid till 31st Dec 2024",
  },
  {
    title: "20% Off for Students",
    description:
      "Students get 20% off on all orders. Use code STUDENT20 and upload a valid student ID.",
    validTill: "Valid till 31st Dec 2024",
  },
  {
    title: "Flat Rs.5 Off on Orders Above Rs.300",
    description:
      "Get a flat Rs.50 discount on all orders above Rs.300. Use code SAVE50.",
    validTill: "Valid till 31st Dec 2024",
  },
];

const Offers = () => {
  return (
    <div className="bg-red-50 pt-24 text-gray-800 py-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold font-ptserif text-center mb-8">
          Exclusive Offers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-red-600 p-6 rounded-lg shadow-lg shadow-rose-300 transform transition-all duration-300 hover:scale-105"
            >
              <h2 className="text-2xl text-white font-ptserif font-semibold mb-2">
                {offer.title}
              </h2>
              <p className="text-lg text-white  mb-4">{offer.description}</p>
              <p className="text-sm text-gray-100">{offer.validTill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
