export default function CTA() {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-accent opacity-20 blur-[120px] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Start building{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            today
          </span>
        </h2>

        <p className="mt-4 text-text text-lg">
          Join thousands of teams already automating workflows and scaling faster.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          <button className="border border-border px-8 py-3 rounded-xl hover:bg-accent-bg transition">
            Get Started Free
          </button>

          <button className="border border-border px-8 py-3 rounded-xl hover:bg-accent-bg transition">
            Book Demo
          </button>
        </div>

        {/* Trust Line */}
        <p className="mt-5 text-sm text-text opacity-70">
          No credit card required • Free 14-day trial
        </p>

      </div>
    </section>
  );
}