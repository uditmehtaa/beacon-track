import { FaBolt, FaChartLine, FaPlug } from "react-icons/fa";

export default function Features() {
  const data = [
    {
      title: "Automation",
      desc: "Automate repetitive tasks and focus on what matters most.",
      icon: <FaBolt />,
    },
    {
      title: "Analytics",
      desc: "Get real-time insights and make data-driven decisions.",
      icon: <FaChartLine />,
    },
    {
      title: "Integrations",
      desc: "Seamlessly connect with tools you already use.",
      icon: <FaPlug />,
    },
  ];

  return (
    <section className="relative py-24 px-6 border-t border-border overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent opacity-10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Powerful features to{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              scale faster
            </span>
          </h2>

          <p className="mt-4 text-text text-lg">
            Everything you need to automate workflows, analyze performance, and grow your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-border bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-bg text-accent text-xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-heading text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-text">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}