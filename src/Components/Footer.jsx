export default function Footer() {
  return (
    <footer className="bg-[#0f0f14] text-gray-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4 tracking-tight">
            Beacon Track
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Build, automate and scale your workflows faster with a modern platform designed for growth.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white mb-4 text-sm font-semibold uppercase tracking-wide">
            Product
          </h3>
          <ul className="space-y-3 text-sm">
            {["Features", "Integrations", "API"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-white transition duration-300 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white mb-4 text-sm font-semibold uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            {["About", "Careers", "Blog"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-white transition duration-300 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white mb-4 text-sm font-semibold uppercase tracking-wide">
            Legal
          </h3>
          <ul className="space-y-3 text-sm">
            {["Privacy", "Terms"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-white transition duration-300 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

        <p className="text-gray-500">
          © 2026 Beacon Track. All rights reserved.
        </p>

        {/* Optional Links */}
        <div className="flex gap-6 text-gray-500">
          <span className="hover:text-white cursor-pointer transition">Privacy</span>
          <span className="hover:text-white cursor-pointer transition">Terms</span>
          <span className="hover:text-white cursor-pointer transition">Contact</span>
        </div>

      </div>
    </footer>
  );
}