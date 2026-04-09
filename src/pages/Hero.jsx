import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const images = ["/1.jpeg", "/2.webp", "/3.jpg"]; // 👉 add images in public folder

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden bg-white">

      {/* Carousel Background */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000
            ${index === current 
              ? "opacity-50 scale-100" 
              : "opacity-0 scale-110"}`}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-accent opacity-20 blur-[140px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 mb-6 text-sm font-medium rounded-full 
        bg-accent-bg text-accent border border-accent-border shadow-md">
          🚀 <span>New: Smarter Workflow Automation</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          Build, automate and scale{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            workflows effortlessly
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-text max-w-xl mx-auto">
          A powerful platform to streamline your processes, automate repetitive
          tasks, and grow faster — without complexity.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* Button 1 */}
            <button
      onClick={() => navigate("/contact")}
      className="relative overflow-hidden border border-border px-7 py-3 rounded-xl font-medium group transition-all duration-500 ease-out"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="relative z-10 group-hover:text-white transition-colors duration-500">
        Get Started
      </span>
    </button>

        
        </div>

        {/* Bottom Note */}
        <p className="mt-6 text-sm text-text opacity-70">
          No credit card required • Free 14-day trial
        </p>

      </div>
    </section>
  );
}