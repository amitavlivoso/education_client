import React from "react";

const plans = [
  {
    name: "Basic Plan",
    price: "₹9,999",
    duration: "/1 Month",
    description: "This is a Basic Plan Where minimal Support Contains",
    features: [
      "Basic Call is Available",
      "Message Support Available",
      "10 days Free Trail is Available",
      "Tech Support Available",
    ],
    popular: false,
  },
  {
    name: "Standard Plan",
    price: "₹19,999",
    duration: "/1 Month",
    description:
      "This is a Basic Plan Where Standard Support Contains",
    features: [
      "10 days Free Trail is Available",
      "Tech Support Available",
      "Full Call Support is Available",
      "Message Support Available Fully",
    ],
    popular: true,
  },
  {
    name: "Advanced Plan",
    price: "₹29,999",
    duration: "/1 Month",
    description:
      "This is a Basic Plan Where Advanced Support Contains",
    features: [
      "10 days Free Trail is Available",
      "Tech Support Available Fully",
      "Fully Call is Available",
      "Message Support Available Fully",
    ],
    popular: false,
  },
];

const Price = () => {
  return (
    <section className="bg-[#f7f9ff] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Pricing Plan</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between ${
                plan.popular ? "border-t-8 border-orange-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-black mb-2">
                  {plan.price}{" "}
                  <span className="text-sm font-medium text-gray-500">{plan.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <ul className="text-left text-sm text-gray-700 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 w-full bg-white border border-gray-300 text-black py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
