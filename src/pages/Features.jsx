import { 
  FaBolt, FaChartLine, FaPlug, FaShieldAlt, 
  FaCloud, FaUsers, FaCogs, FaMobileAlt 
} from "react-icons/fa";

export default function Features() {
  const data = [
    {
      title: "Automation",
      desc: "Automate repetitive tasks and focus on what matters most.",
      icon: <FaBolt />,
      tag: "Popular",
    },
    {
      title: "Analytics",
      desc: "Get real-time insights and make data-driven decisions.",
      icon: <FaChartLine />,
      tag: "",
    },
    {
      title: "Integrations",
      desc: "Seamlessly connect with tools you already use.",
      icon: <FaPlug />,
      tag: "",
    },
    {
      title: "Security",
      desc: "Enterprise-grade security to keep your data safe.",
      icon: <FaShieldAlt />,
      tag: "New",
    },
    {
      title: "Cloud Sync",
      desc: "Access your data anytime, anywhere with cloud backup.",
      icon: <FaCloud />,
      tag: "",
    },
    {
      title: "Team Collaboration",
      desc: "Work together with your team in real-time.",
      icon: <FaUsers />,
      tag: "",
    },
    {
      title: "Custom Workflows",
      desc: "Build workflows tailored to your business needs.",
      icon: <FaCogs />,
      tag: "",
    },
    {
      title: "Mobile Friendly",
      desc: "Optimized experience across all devices.",
      icon: <FaMobileAlt />,
      tag: "Coming Soon",
    },
  ];

  return (
    <section className="relative py-20 px-6 border-t border-border overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent opacity-10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-border bg-gray-200 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 "
            >

              {/* Tag */}
              {item.tag && (
                <span className="absolute top-4 right-4 text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                  {item.tag}
                </span>
              )}

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-accent-bg text-accent text-xl mb-4 
              group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-heading text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-text">
                {item.desc}
              </p>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}