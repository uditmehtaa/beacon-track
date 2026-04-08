import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
       <Link to="/">
  <h1 className="text-xl font-semibold tracking-tight cursor-pointer">
    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      Beacon Track
    </span>
  </h1>
</Link>

        {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 text-gray-300 text-sm font-medium">
  {[
    { name: "Product", path: "/product" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Docs", path: "/docs" },
    { name: "Contact", path: "/contact" },
  ].map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className="relative group hover:text-white transition"
    >
      {item.name}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
    </Link>
  ))}
</nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-4 items-center">
         

          <button className="bg-white text-black px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition duration-200">
            Get Started
          </button>
        </div>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 bg-black border-t border-gray-800 animate-fadeIn">
          <nav className="flex flex-col gap-4 text-gray-300 font-medium">
            <a href="#" onClick={() => setOpen(false)}>Product</a>
            <a href="#" onClick={() => setOpen(false)}>Solutions</a>
            <a href="#" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#" onClick={() => setOpen(false)}>Docs</a>
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <button className="text-gray-300 text-left">Login</button>
            <button className="bg-white text-black py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}