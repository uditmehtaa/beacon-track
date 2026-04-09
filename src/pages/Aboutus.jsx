import { useEffect } from "react";
import { FaBullseye, FaEye, FaWhatsapp } from "react-icons/fa";

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phone = "919999999999";
  const msg = "Hi, I want to know more about Beacon Track";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="py-28 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Empowering Businesses with <span className="text-primary">Smart Automation</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Beacon Track helps businesses streamline operations, increase efficiency,
          and scale faster with powerful digital solutions.
        </p>
      </section>

      {/* MISSION / VISION */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 mb-24">
        
        <div className="p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-xl transition">
          <FaBullseye className="text-primary text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To simplify business operations through smart automation tools that
            save time, reduce effort, and improve productivity.
          </p>
        </div>

        <div className="p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-xl transition">
          <FaEye className="text-primary text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become a trusted platform for businesses worldwide seeking
            digital transformation and growth.
          </p>
        </div>

      </section>

      {/* WHY US */}
      <section className="bg-light py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-3">Why Choose Us?</h2>
          <p className="text-gray-600">
            Everything you need to run your business smarter 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Simple & Intuitive UI",
            "Lightning Fast Performance",
            "Affordable Pricing",
            "Instant WhatsApp Support",
            "Secure & Scalable",
            "Regular Feature Updates",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
            >
              <p className="font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-primary/5 to-transparent">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { number: "500+", label: "Businesses Served" },
            { number: "1K+", label: "Active Users" },
            { number: "99%", label: "Customer Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-primary mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

{/* TRUST SECTION */}
<section className="py-24 px-6 text-center max-w-5xl mx-auto">
  <h2 className="text-3xl font-semibold mb-4">
    Trusted by Growing Businesses
  </h2>
  <p className="text-gray-600 mb-12">
    Helping service businesses streamline operations across industries.
  </p>

  <div className="flex justify-center gap-8 flex-wrap items-center opacity-80">
    {[
      "Garage Co.",
      "Repair Pro",
      "Service Hub",
      "Retail Mart",
      "FixIt Center",
    ].map((name, i) => (
      <div
        key={i}
        className="bg-gray-100 px-6 py-3 rounded-lg text-gray-500 font-medium"
      >
        {name}
      </div>
    ))}
  </div>
</section>
      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-green-50 to-white">
        <h2 className="text-4xl font-semibold mb-4">
          Let’s Grow Your Business 🚀
        </h2>
        <p className="text-gray-600 mb-8">
          Have questions? Talk directly with us on WhatsApp.
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-md hover:shadow-xl transition"
        >
          <FaWhatsapp />
          Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}