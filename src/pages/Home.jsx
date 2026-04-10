import CTA from "./CTA";
import FAQ from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import MobilePreview from "./Mobileview";
import Solutions from "./Solution";
import HomePage from "./Vyaparstyle";
import Whybeakontrack from "./Whybeacontrack";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 300) setShowTop(true);
      else setShowTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Hero />
      <Features />
      <HomePage />
      <Solutions />
      <Whybeakontrack />  
      <MobilePreview/>
      <FAQ />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9254147455" // 👉 replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-primary hover:opacity-90 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
