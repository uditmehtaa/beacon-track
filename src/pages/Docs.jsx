import { useEffect, useState } from "react";
import { FaBook, FaCode, FaRocket, FaSearch } from "react-icons/fa";

export default function Docs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const docs = [
    {
      title: "Getting Started",
      desc: "Learn how to set up and run the project quickly.",
      category: "Basics",
      tag: "Popular",
      content: "Install dependencies using npm install and start with npm run dev.",
      icon: <FaBook />,
    },
    {
      title: "Project Structure",
      desc: "Understand folder organization.",
      category: "Basics",
      tag: "",
      content: "Components, pages, hooks, and utils are separated for scalability.",
      icon: <FaBook />,
    },
    {
      title: "Authentication",
      desc: "Implement login and signup securely.",
      category: "Development",
      tag: "Important",
      content: "Use JWT or OAuth for secure authentication.",
      icon: <FaCode />,
    },
    {
      title: "State Management",
      desc: "Manage app state efficiently.",
      category: "Development",
      tag: "",
      content: "Use Context API or Redux depending on complexity.",
      icon: <FaCode />,
    },
    {
      title: "API Integration",
      desc: "Connect backend APIs.",
      category: "Development",
      tag: "New",
      content: "Use axios or fetch with async/await.",
      icon: <FaCode />,
    },
    {
      title: "Testing",
      desc: "Ensure your app works correctly.",
      category: "Development",
      tag: "",
      content: "Use Jest and React Testing Library.",
      icon: <FaCode />,
    },
    {
      title: "Deployment",
      desc: "Deploy your app smoothly.",
      category: "DevOps",
      tag: "",
      content: "Deploy using Vercel, Netlify, or Docker.",
      icon: <FaRocket />,
    },
    {
      title: "CI/CD Pipeline",
      desc: "Automate builds and deployments.",
      category: "DevOps",
      tag: "",
      content: "Use GitHub Actions for CI/CD workflows.",
      icon: <FaRocket />,
    },
  ];

  const categories = ["All", "Basics", "Development", "DevOps"];

  const filteredDocs = docs.filter((doc) => {
    return (
      (activeCategory === "All" || doc.category === activeCategory) &&
      doc.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-light min-h-screen pt-20 px-6 md:px-16 pb-16">

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
          Documentation
        </h1>
        <p className="text-gray-600">
          Everything you need to build, integrate, and deploy your project.
        </p>

        {/* Search */}
        <div className="mt-6 flex items-center bg-white shadow-soft rounded-xl px-4 py-3 max-w-xl mx-auto">
          <FaSearch className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

    

      {/* Layout with Sidebar */}
      <div className="flex max-w-7xl mx-auto gap-10">

     

        {/* Docs Grid */}
        <div className="flex-1 grid md:grid-cols-2 gap-8">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-2xl shadow-soft hover:shadow-xl transition relative"
              >
                {doc.tag && (
                  <span className="absolute top-4 right-4 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {doc.tag}
                  </span>
                )}

                <div className="text-2xl text-primary mb-3">
                  {doc.icon}
                </div>

                <h2 className="text-lg font-semibold mb-1 group-hover:text-primary">
                  {doc.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  {doc.desc}
                </p>

                {openIndex === i && (
                  <p className="text-sm text-gray-500 mb-3">
                    {doc.content}
                  </p>
                )}

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="text-primary text-sm font-medium hover:underline"
                >
                  {openIndex === i ? "Hide" : "Read Docs →"}
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No results found 
            </div>
          )}
        </div>
      </div>

      {/* Code Example */}
      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Example Usage</h2>
        <div className="bg-black text-green-400 p-6 rounded-xl overflow-x-auto text-sm">
{`import axios from "axios";

const fetchData = async () => {
  const res = await axios.get("/api/data");
  console.log(res.data);
};`}
        </div>
      </div>

      

      {/* Help Section */}
      <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-primary/10 to-purple-100 p-8 rounded-2xl text-center">
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? Our team is here to help.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-xl hover:scale-105 transition">
          Contact Support
        </button>
      </div>

      {/* Footer Info */}
      <p className="text-xs text-gray-400 text-center mt-10">
        Documentation v1.0 • Last updated: March 2026
      </p>
    </div>
  );
}