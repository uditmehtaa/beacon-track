import { useNavigate } from "react-router-dom";
import { FaCar, FaTools, FaWater, FaStore, FaUserCog, FaWrench } from "react-icons/fa";

export default function Solutions() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Garage & Automotive Services",
      icon: <FaCar />,
      route: "/garage",
      items: ["Garage Management Software", "Car Repair Workshops", "Tyre Services", "Car Detailing", "HGV Repair", "Motorcycle Repair"],
    },
    {
      title: "Technical Repair Businesses",
      icon: <FaTools />,
      route: "/technical",
      items: ["Repair Shops", "Phone Repair Shops", "Computer Repair Services", "Appliance Repair", "Power Tool Repair Workshops", "Small Engine Repair", "Watch Repair", "Bicycle Repair", "Marine Repair"],
    },
    {
      title: "Field Service Businesses",
      icon: <FaWater />,
      route: "/field",
      items: ["Mobile Service Companies", "Cleaning Services", "Window Cleaning", "Pest Control Business", "Restoration Services", "Handyman Services", "Landscaping Services", "Snow Removal Business"],
    },
    {
      title: "Trade & Contractor Services",
      icon: <FaWrench />,
      route: "/trade",
      items: ["HVAC & Heating Engineers", "Plumbing Services", "Electricians", "Painting & Decorating", "Window & Door Installers"],
    },
    {
      title: "Service Businesses",
      icon: <FaUserCog />,
      route: "/service",
      items: ["Beauty Salons & Spas", "Tailors & Alterations", "Funeral Services", "Pet Sitting & Dog Walking", "Property Management"],
    },
    {
      title: "Retail & Trade Stores",
      icon: <FaStore />,
      route: "/retail",
      items: ["Auto Parts Stores", "Builders' Merchants", "Cosmetic Stores", "Jewellery Shops", "Florists"],
    },
  ];

  return (
    <section className="min-h-screen pt-16 pb-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Heading */}   
        <div className="md:col-span-2 lg:col-span-3 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Solutions Tailored for Your Industry
          </h1>
          <p className="text-gray-600">
            Whether you're a garage, repair shop, field service, or retail business — we have powerful solutions designed to streamline your operations and boost growth.
          </p>
        </div>
        {sections.map((section, i) => (
          <div
            key={i}
            onClick={() => navigate(section.route)}
            className="cursor-pointer bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-lg">
                {section.icon}
              </div>

              <h2 className="font-semibold text-gray-800">
                {section.title}
              </h2>
            </div>

            <ul className="space-y-2 text-sm text-gray-600">
              {section.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
}