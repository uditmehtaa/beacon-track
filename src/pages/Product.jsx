import React, { useEffect } from "react";
import {
  FaFileInvoice,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

export default function BillingSoftwarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-white relative">
        <h1 className="text-4xl font-bold text-gray-800">
          Smart Billing Software for Modern Businesses
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Create invoices, manage GST, track sales, and grow your business —
          all in one powerful platform.
        </p>

        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-xl shadow hover:opacity-90">
          Start Free Trial
        </button>

        {/* Dashboard Preview */}
        <img
          src="/3.jpg"
          alt="dashboard"
          className="mt-12 mx-auto rounded-xl shadow-2xl border"
        />
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaFileInvoice />,
            title: "GST Invoicing",
            desc: "Generate invoices instantly with GST compliance.",
          },
          {
            icon: <FaChartLine />,
            title: "Analytics",
            desc: "Track revenue with smart dashboards.",
          },
          {
            icon: <FaUsers />,
            title: "Customers",
            desc: "Manage clients and billing history easily.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Secure",
            desc: "Enterprise-grade data protection.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-primary text-2xl mb-3">{item.icon}</div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </section>
      
{/* PRODUCT DEMO VIDEO */}
<section className="py-20 px-6 bg-gray-50 text-center">
  <h2 className="text-2xl font-semibold mb-4">
    See How It Works
  </h2>
  <p className="text-gray-600 mb-10">
    Watch how our billing software simplifies your workflow in minutes.
  </p>

  <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
    <video
      src="/Recording 2026-04-06 162505.mp4"  
      controls
      autoPlay
      muted
      loop
      className="w-full h-full"
    />
  </div>
</section>
      {/* FEATURE SECTION 1 */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/3.jpg"
          alt=""
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Create Professional Invoices in Seconds
          </h2>
          <p className="text-gray-600 mb-4">
            Generate branded GST invoices with automatic tax calculations,
            downloadable PDFs, and real-time sharing.
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><FaCheckCircle className="text-green-500"/> GST Ready</li>
            <li className="flex gap-2"><FaCheckCircle className="text-green-500"/> Auto Calculations</li>
            <li className="flex gap-2"><FaCheckCircle className="text-green-500"/> PDF Export</li>
          </ul>
        </div>
      </section>

      {/* FEATURE SECTION 2 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Powerful Analytics Dashboard
            </h2>
            <p className="text-gray-600 mb-4">
              Get insights into your business performance with real-time charts,
              revenue tracking, and detailed reports.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500"/> Revenue Reports</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500"/> Growth Tracking</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500"/> Smart Insights</li>
            </ul>
          </div>

          <img
            src="/3.jpg"
            alt=""
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Businesses Love Us
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "Super easy to use",
            "Fast invoice generation",
            "Cloud-based access",
            "Multi-user support",
            "Affordable pricing",
            "24/7 support",
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Simple Pricing
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "₹499/mo",
              features: ["Invoices", "GST Reports"],
            },
            {
              name: "Pro",
              price: "₹999/mo",
              features: ["Analytics", "Multi-user"],
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: ["All Features", "Support"],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow ${
                plan.highlight ? "border-2 border-primary" : ""
              }`}
            >
              <h3 className="font-semibold">{plan.name}</h3>
              <p className="text-2xl font-bold mt-2">{plan.price}</p>

              <ul className="mt-4 text-sm space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>

              <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold">
          Ready to Simplify Your Billing? 🚀
        </h2>
        <p className="text-gray-600 mt-3">
          Start your free trial today. No credit card required.
        </p>

        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-xl">
          Get Started Free
        </button>
      </section>
    </div>
  );
}