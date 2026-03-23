import { useState } from "react";
import PropTypes from "prop-types";

const offers = [
  {
    title: "50% Off on Your First Order",
    description:
      "Get 50% off on your first order. Maximum discount up to ₹100. New users only.",
    code: "FIRST50",
    validTill: "Valid till 31st Dec 2026",
    gradient: "from-orange-500 to-red-500",
    icon: "🎉",
  },
  {
    title: "Free Delivery on Orders Above ₹200",
    description:
      "Get free delivery on all orders above ₹200. No minimum items required.",
    code: "FREEDEL",
    validTill: "Valid till 31st Dec 2026",
    gradient: "from-green-500 to-teal-500",
    icon: "🛵",
  },
  {
    title: "Buy 1 Get 1 Free on Pizza",
    description:
      "Order any pizza and get another one absolutely free! Valid on selected restaurants.",
    code: "PIZZA4TWO",
    validTill: "Valid till 31st Dec 2026",
    gradient: "from-yellow-400 to-orange-400",
    icon: "🍕",
  },
  {
    title: "20% Off for Students",
    description:
      "Students get 20% off on all orders. Upload a valid student ID to unlock this offer.",
    code: "STUDENT20",
    validTill: "Valid till 31st Dec 2026",
    gradient: "from-blue-500 to-indigo-500",
    icon: "🎓",
  },
  {
    title: "Flat ₹50 Off on Orders Above ₹300",
    description:
      "Get a flat ₹50 discount on all orders above ₹300. Can be combined with restaurant offers.",
    code: "SAVE50",
    validTill: "Valid till 31st Dec 2026",
    gradient: "from-purple-500 to-pink-500",
    icon: "💸",
  },
  {
    title: "Weekend Special — 30% Off",
    description:
      "Every Saturday and Sunday, enjoy 30% off on orders above ₹250. Auto-applied at checkout.",
    code: "WEEKEND30",
    validTill: "Valid every weekend in 2026",
    gradient: "from-rose-500 to-red-600",
    icon: "🎊",
  },
];

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault(); // don't navigate if inside a link
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-4 flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/40 text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 active:scale-95"
    >
      <span className="font-mono tracking-widest">{code}</span>
      <span className="text-xs">{copied ? "✓ Copied!" : "Copy"}</span>
    </button>
  );
};

CopyButton.propTypes = {
  code: PropTypes.string.isRequired,
};

const Offers = () => {
  return (
    <div className="bg-red-50 min-h-screen pt-20 pb-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-ptserif text-gray-800 mb-2">
            Exclusive Offers
          </h1>
          <p className="text-gray-500 text-lg">
            Use these codes at checkout to save big 🎁
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${offer.gradient} p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden`}
            >
              {/* Background icon watermark */}
              <span className="absolute -right-3 -bottom-3 text-7xl opacity-20 select-none pointer-events-none">
                {offer.icon}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-3xl mb-3 block">{offer.icon}</span>
                <h2 className="text-xl text-white font-ptserif font-bold mb-2 leading-snug">
                  {offer.title}
                </h2>
                <p className="text-sm text-white/85 mb-1 leading-relaxed">
                  {offer.description}
                </p>
                <p className="text-xs text-white/60 mb-2">{offer.validTill}</p>

                {/* Copy code button */}
                <CopyButton code={offer.code} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          * Offers are subject to availability. T&amp;C apply. Cannot be
          combined unless stated.
        </p>
      </div>
    </div>
  );
};

export default Offers;
