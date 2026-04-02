import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight">
          roapp
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex gap-10 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-black">Product</a>
          <a href="#" className="hover:text-black">Solutions</a>
          <a href="#" className="hover:text-black">Pricing</a>
          <a href="#" className="hover:text-black">Docs</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="text-gray-600 hover:text-black">
            Login
          </button>
          <button className="bg-primary text-white px-5 py-2 rounded-lg shadow-soft hover:opacity-90">
            Get Started
          </button>
        </div>

        {/* Mobile */}
        <FaBars className="md:hidden text-xl" />
      </div>
    </header>
  );
}