import { useEffect } from "react";
import { FaBook, FaCode, FaRocket, FaSearch } from "react-icons/fa";

export default function Docs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const docs = [
    {
      title: "Getting Started",
      desc: "Learn how to set up and run the project quickly.",
      icon: <FaBook />,
    },
    {
      title: "API Integration",
      desc: "Connect your backend APIs and manage data efficiently.",
      icon: <FaCode />,
    },
    {
      title: "Deployment",
      desc: "Deploy your app smoothly to production.",
      icon: <FaRocket />,
    },
  ];

  return (
    <div className="bg-light min-h-screen pt-20 px-6 md:px-16">

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
          Documentation
        </h1>
        <p className="text-gray-600">
          Everything you need to build, integrate, and deploy your project.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex items-center bg-white shadow-soft rounded-xl px-4 py-3 max-w-xl mx-auto">
          <FaSearch className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* Docs Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {docs.map((doc, i) => (
          <div
            key={i}
            className="group bg-white p-6 rounded-2xl shadow-soft hover:shadow-lg transition relative"
          >
            {/* Icon */}
            <div className="text-2xl text-primary mb-3">
              {doc.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-1 group-hover:text-primary transition">
              {doc.title}
            </h2>

            {/* Desc */}
            <p className="text-gray-600 text-sm mb-4">
              {doc.desc}
            </p>

            {/* CTA */}
            <button className="text-primary text-sm font-medium group-hover:underline">
              Read Docs →
            </button>
          </div>
        ))}
      </div>

      {/* Quick Help Section */}
      <div className="max-w-4xl mx-auto mt-20 bg-white p-8 rounded-2xl shadow-soft text-center">
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? Our team is here to help.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
          Contact Support
        </button>
      </div>
    </div>
  );
}