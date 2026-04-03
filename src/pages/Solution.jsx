import { FaCar, FaTools, FaWater, FaStore, FaUserCog, FaWrench } from "react-icons/fa";

export default function Solutions() {
  const sections = [
    {
      title: "Garage & Automotive Services",
      icon: <FaCar />,
      items: [
        "Garage Management Software",
        "Car Repair Workshops",
        "Tyre Services",
        "Car Detailing",
        "HGV Repair",
        "Motorcycle Repair",
      ],
    },
    {
      title: "Technical Repair Businesses",
      icon: <FaTools />,
      items: [
        "Repair Shops",
        "Phone Repair Shops",
        "Computer Repair Services",
        "Appliance Repair",
        "Power Tool Repair Workshops",
        "Small Engine Repair",
        "Watch Repair",
        "Bicycle Repair",
        "Marine Repair",
      ],
    },
    {
      title: "Field Service Businesses",
      icon: <FaWater />,
      items: [
        "Mobile Service Companies",
        "Cleaning Services",
        "Window Cleaning",
        "Pest Control Business",
        "Restoration Services",
        "Handyman Services",
        "Landscaping Services",
        "Snow Removal Business",
      ],
    },
    {
      title: "Trade & Contractor Services",
      icon: <FaWrench />,
      items: [
        "HVAC & Heating Engineers",
        "Plumbing Services",
        "Electricians",
        "Painting & Decorating",
        "Window & Door Installers",
      ],
    },
    {
      title: "Service Businesses",
      icon: <FaUserCog />,
      items: [
        "Beauty Salons & Spas",
        "Tailors & Alterations",
        "Funeral Services",
        "Pet Sitting & Dog Walking",
        "Property Management",
      ],
    },
    {
      title: "Retail & Trade Stores",
      icon: <FaStore />,
      items: [
        "Auto Parts Stores",
        "Builders' Merchants",
        "Cosmetic Stores",
        "Jewellery Shops",
        "Florists",
      ],
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          End-to-end software for your service business
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Manage your repair, maintenance or service business with one powerful platform.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-lg">
                {section.icon}
              </div>

              <h2 className="font-semibold text-gray-800">
                {section.title}
              </h2>
            </div>

            {/* Static List (NOT clickable) */}
            <ul className="space-y-2 text-sm text-gray-600">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}