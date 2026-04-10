export default function MobilePreview() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mobile Experience
            </span>
          </h2>

          <p className="text-gray-600 mb-6">
            Manage your business on the go with a fully responsive and optimized mobile interface.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Smooth mobile UI</li>
            <li>✔ Fast performance</li>
            <li>✔ Real-time sync</li>
          </ul>
        </div>

        {/* Right - Phone Mockup */}
        <div className="flex justify-center">
          <div className="relative w-[260px] h-[520px] rounded-[40px] border-[10px] border-black shadow-2xl overflow-hidden">

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-2xl z-10"></div>

            {/* Video inside phone */}
            <video
              src="/WhatsApp Video 2026-04-10 at 17.08.46.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
}