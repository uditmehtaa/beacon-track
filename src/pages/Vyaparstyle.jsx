/* ================= HERO 1 ================= */
function HeroOne() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-gray-900">Smart GST Billing</span>{" "}
            <span className="text-blue-600">Made Simple</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Create professional invoices, manage sales, and handle your business
            seamlessly with <span className="text-blue-600 font-medium">Beacon Track</span>.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            ⚡ Instant setup • 🚀 Fast performance • 📊 Business ready
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/gqpk1bdvr/ChatGPT%20Image%20Apr%2010,%202026,%2004_17_34%20PM.png"
            className="w-[90%] max-w-md rounded-xl shadow-lg hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  );
}

/* ================= HERO 2 ================= */
function HeroTwo() {
  return (
    <section className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="relative flex justify-center">
          <div className="absolute w-[320px] h-[320px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>

          <img
            src="https://ik.imagekit.io/gqpk1bdvr/ChatGPT%20Image%20Apr%2010,%202026,%2004_17_40%20PM.png"
            className="relative z-10 w-[85%] rounded-xl shadow-xl hover:scale-105 transition"
          />
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-gray-900">Share Bills on</span>{" "}
            <span className="text-green-500">WhatsApp</span>{" "}
            <span className="text-gray-900">& Email</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Instantly send invoices to customers and get paid faster with
            seamless sharing features built into Beacon Track.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            📲 One-click sharing • 🔒 Secure • ⚡ Real-time delivery
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= HERO 3 ================= */
function HeroThree() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-gray-900">Grow Faster with</span>{" "}
            <span className="bg-gradient-to-r from-orange-200 to-orange-300 bg-clip-text text-transparent">
              Smart Automation
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Track inventory, manage payments, and automate billing workflows —
            everything your business needs in one powerful platform.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            📈 Insights • 🤖 Automation • 💼 Business Growth
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/gqpk1bdvr/ChatGPT%20Image%20Apr%2010,%202026,%2004_17_46%20PM.png"
            className="w-[90%] max-w-md rounded-xl shadow-2xl hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  );
}

/* ================= MAIN PAGE ================= */
export default function HomePage() {
  return (
    <div>
      <HeroOne />
      <HeroTwo />
      <HeroThree />
    </div>
  );
}