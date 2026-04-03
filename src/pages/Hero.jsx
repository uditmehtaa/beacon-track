export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden bg-white">
      
      {/* Background Image */}
      <img
        src="/1.jpeg"   // 👉 put image in public folder
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Glow Effect */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-accent opacity-20 blur-[140px] rounded-full"></div>

     

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 mb-6 text-sm font-medium rounded-full 
        bg-accent-bg text-accent border border-accent-border 
        shadow-md">
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
           <button className="border border-border px-7 py-3 rounded-xl hover:bg-accent-bg transition">
            Get Started
          </button>

          <button className="border border-border px-7 py-3 rounded-xl hover:bg-accent-bg transition">
            Learn More →
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