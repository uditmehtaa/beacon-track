import { useNavigate } from "react-router-dom";
import {
  FaCar,
  FaTools,
  FaWater,
  FaStore,
  FaUserCog,
  FaWrench,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import { useEffect } from "react";

export default function Solutions() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Garage & Automotive Services",
      icon: <FaCar />,
      route: "/garage",
      items: ["Garage Management", "Car Repair", "Tyre Services", "Detailing"],
    },
    {
      title: "Technical Repair Businesses",
      icon: <FaTools />,
      route: "/technical",
      items: ["Phone Repair", "Computer Repair", "Appliance Repair"],
    },
    {
      title: "Field Service Businesses",
      icon: <FaWater />,
      route: "/field",
      items: ["Cleaning", "Pest Control", "Handyman"],
    },
    {
      title: "Trade & Contractor Services",
      icon: <FaWrench />,
      route: "/trade",
      items: ["HVAC", "Plumbing", "Electricians"],
    },
    {
      title: "Service Businesses",
      icon: <FaUserCog />,
      route: "/service",
      items: ["Salons", "Tailors", "Pet Services"],
    },
    {
      title: "Retail & Trade Stores",
      icon: <FaStore />,
      route: "/retail",
      items: ["Auto Parts", "Cosmetics", "Jewellery"],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">

     {/* HERO */}
<section className="relative text-center py-28 px-6 overflow-hidden">

  {/* Background Image */}
  <img
    src="/2.webp" // 👉 put image in public folder
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-white">
    
    <span className="inline-block mb-4 px-4 py-1 text-sm bg-white/20 rounded-full backdrop-blur">
      All-in-One Business Solutions
    </span>

    <h1 className="text-5xl font-bold mb-6 leading-tight">
      Powerful Tools for <span className="text-primary">Every Industry</span>
    </h1>

    <p className="text-gray-200 text-lg mb-8">
      Simplify operations, automate workflows, and grow your business faster with Beacon Track.
    </p>

  </div>
</section>

      {/* STATS */}
      <section className="py-16 px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { number: "500+", label: "Businesses" },
            { number: "1K+", label: "Users" },
            { number: "99%", label: "Satisfaction" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-primary">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION CARDS */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-24">
        {sections.map((section, i) => (
          <div
            key={i}
            onClick={() => navigate(section.route)}
            className="group cursor-pointer bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl group-hover:scale-110 transition">
                {section.icon}
              </div>

              <h2 className="font-semibold text-gray-800 group-hover:text-primary transition">
                {section.title}
              </h2>
            </div>

            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              {section.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>

            <div className="flex items-center text-primary font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 transition">
              Explore <FaArrowRight />
            </div>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaCogs />,
              text: "Choose your business type",
            },
            {
              icon: <FaRocket />,
              text: "Set up in minutes",
            },
            {
              icon: <FaChartLine />,
              text: "Grow & scale effortlessly",
            },
          ].map((step, i) => (
            <div key={i}>
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-lg">
                {step.icon}
              </div>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Why Choose Beacon Track
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            "Automate repetitive tasks",
            "Centralized dashboard",
            "Boost revenue growth",
            "Live tracking system",
            "User-friendly interface",
            "Affordable pricing",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-primary/10 to-transparent">
        <h2 className="text-4xl font-semibold mb-4">
          Ready to Grow Your Business? 🚀
        </h2>
        <p className="text-gray-600 mb-8">
          Join hundreds of businesses already using Beacon Track.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-primary text-white px-10 py-4 rounded-xl font-medium hover:shadow-xl transition"
        >
          Get Started Now
        </button>
      </section>

    </div>
  );
}