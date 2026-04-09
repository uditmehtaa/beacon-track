import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const faqs = [
    {
      category: "Billing",
      q: "How does Beacon Track billing work?",
      a: "Beacon Track offers flexible subscription-based billing. You can choose monthly or yearly plans depending on your business needs.",
    },
    {
      category: "Billing",
      q: "Can I upgrade or downgrade my plan?",
      a: "Yes, you can upgrade or downgrade anytime. Changes will reflect in your next billing cycle.",
    },
    {
      category: "Billing",
      q: "Do you offer refunds?",
      a: "We provide a 7-day refund policy for all new subscriptions.",
    },
    {
      category: "Account",
      q: "How do I create an account?",
      a: "Simply sign up using your email and start using Beacon Track instantly.",
    },
    {
      category: "Account",
      q: "Can multiple users access my account?",
      a: "Yes, depending on your plan, you can add multiple users to your account.",
    },
    {
      category: "Security",
      q: "Is my data secure?",
      a: "Absolutely. We use advanced encryption and secure servers to protect your data.",
    },
    {
      category: "Security",
      q: "Do you support data backups?",
      a: "Yes, regular automated backups ensure your data is always safe.",
    },
  ];

  return (
    <div className="min-h-screen bg-light pt-24 px-6 md:px-16 pb-16">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Everything you need to know about Beacon Track
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left font-medium"
            >
              <span>{item.q}</span>
              <FaChevronDown
                className={`transition-transform ${
                  active === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`px-5 text-gray-600 text-sm transition-all duration-300 ${
                active === index
                  ? "max-h-40 pb-5"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto mt-20 text-center bg-white p-8 rounded-2xl shadow-soft">
        <h3 className="text-xl font-semibold mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-4">
          Our team is here to help you 24/7.
        </p>
        <button       onClick={() => navigate("/contact")} className="bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90">
          Contact Support
        </button>
      </div>
    </div>
  );
}