import React, { useEffect } from "react";
import { FaShoppingBag, FaGift, FaBuilding } from "react-icons/fa";

export default function Solutions1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      title: "Ecommerce Solutions",
      desc: "Build scalable, modern online stores with seamless checkout and integrations.",
      icon: <FaShoppingBag />,
    },
    {
      title: "Custom Gifting",
      desc: "Create personalized gifting experiences with custom packaging and messages.",
      icon: <FaGift />,
    },
    {
      title: "Bulk Orders",
      desc: "Simplify corporate gifting with bulk order management and automation.",
      icon: <FaBuilding />,
    },
  ];

  return (
     <div className="bg-light min-h-screen pt-20 px-6 md:px-16 pb-16">

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
          Powerful Solutions for Every Need
        </h1>
        <p className="text-gray-600">
          Whether you're an individual, startup, or enterprise — we provide
          scalable solutions to simplify gifting and ecommerce.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition relative overflow-hidden"
          >
            {/* Icon */}
            <div className="text-3xl text-primary mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
              {item.title}
            </h2>

            {/* Desc */}
            <p className="text-gray-600 text-sm mb-4">
              {item.desc}
            </p>

            {/* CTA */}
            <button className="text-primary text-sm font-medium group-hover:underline">
              Learn More →
            </button>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition"></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-white p-10 rounded-2xl shadow-soft">
        <h2 className="text-2xl font-semibold mb-3">
          Need a Custom Solution?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact our team to build a tailored solution for your business.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}