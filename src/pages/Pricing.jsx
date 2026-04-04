import { useEffect } from "react";
import { FaCheck, FaCrown } from "react-icons/fa";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "₹499",
      desc: "For individuals getting started",
      features: ["1 User", "Basic Support", "Limited Access"],
    },
    {
      name: "Pro",
      price: "₹999",
      desc: "Best for growing teams",
      features: ["5 Users", "Priority Support", "Full Access"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹1999",
      desc: "For large scale businesses",
      features: ["Unlimited Users", "24/7 Support", "Custom Features"],
    },
  ];

  return (
    <div className="bg-light min-h-screen pt-20 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-dark mb-3">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-600">
          Choose the plan that fits your needs
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative bg-white p-8 rounded-2xl shadow-soft text-center transition hover:shadow-lg ${
              plan.popular ? "border-2 border-primary scale-105" : ""
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <FaCrown /> Most Popular
              </span>
            )}

            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{plan.desc}</p>

            <p className="text-4xl text-primary font-bold mb-6">
              {plan.price}
              <span className="text-sm text-gray-500"> /month</span>
            </p>

            <ul className="text-gray-600 mb-6 space-y-3 text-sm">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  <FaCheck className="text-green-500" /> {f}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-medium transition ${
                plan.popular
                  ? "bg-primary text-white hover:opacity-90"
                  : "border border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Billing Info Section */}
      <div className="max-w-4xl mx-auto mt-20 bg-white p-6 rounded-2xl shadow-soft text-center">
        <h3 className="text-lg font-semibold mb-2">Secure Billing</h3>
        <p className="text-gray-600 text-sm">
          All payments are encrypted and securely processed. Cancel anytime.
        </p>
      </div>
    </div>
  );
}