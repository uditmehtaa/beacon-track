import { useState,useEffect } from "react";
import {
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { Check, X } from "lucide-react";

 

export default function Pricing() {
  const [billing, setBilling] = useState("quarterly");
  const [open, setOpen] = useState(null);

  const phone = "919999999999";

  const plans = [
    {
      name: "Starter",
      price: {
        quarterly: "₹999",
        halfYearly: "₹1799",
        yearly: "₹2999",
      },
      features: ["Basic Access", "Email Support", "Limited Features"],
    },
    {
      name: "Pro",
      price: {
        quarterly: "₹1999",
        halfYearly: "₹3499",
        yearly: "₹5999",
      },
      features: ["All Features", "Priority Support", "API Access"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: {
        quarterly: "₹4999",
        halfYearly: "₹8999",
        yearly: "₹15999",
      },
      features: [
        "Dedicated Support",
        "Custom Solutions",
        "Unlimited Access",
      ],
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-6 md:px-16">

      {/* HERO */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-gray-600">
          Simple, transparent pricing. Choose what works best for your business.
        </p>
      </div>

     

      {/* TOGGLE */}
      <div className="flex justify-center gap-3 mb-12">
        {["quarterly", "halfYearly", "yearly"].map((type) => (
          <button
            key={type}
            onClick={() => setBilling(type)}
            className={`px-5 py-2 rounded-full text-sm capitalize transition ${
              billing === type
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            {type === "halfYearly" ? "Half-Yearly" : type}
          </button>
        ))}
      </div>

      {/* PRICING CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition ${
              plan.popular ? "border-2 border-blue-600 scale-105" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>

            <h3 className="text-4xl font-bold mb-2">
              {plan.price[billing]}
            </h3>

            <p className="text-sm text-gray-500 mb-4 capitalize">
              per{" "}
              {billing === "quarterly"
                ? "3 months"
                : billing === "halfYearly"
                ? "6 months"
                : "year"}
            </p>

            {billing === "yearly" && (
              <span className="text-green-500 text-xs mb-4 inline-block">
                Save up to 30%
              </span>
            )}

            <ul className="space-y-2 mb-6 text-gray-600 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center w-full py-3 rounded-xl transition ${
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>

     {/* COMPARISON TABLE */}
<div className="max-w-6xl mx-auto mt-24 bg-blue-50 p-8 rounded-2xl">
  <h2 className="text-3xl font-bold text-center mb-10">
    Compare Plans
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white">
      
      {/* HEADER */}
      <thead className="bg-blue-100 text-sm">
        <tr>
          <th className="p-5 text-left font-semibold">Features</th>
          <th className="p-5">Starter</th>
          
          {/* Highlighted Plan */}
          <th className="p-5 bg-blue-200 text-blue-700 font-bold relative">
            Pro
            <span className="absolute top-2 right-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
              Popular
            </span>
          </th>
          
          <th className="p-5">Enterprise</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody className="text-sm text-gray-700">
        {[
          ["Users", "1", "5", "Unlimited"],
          ["Support", "Email", "Priority", "Dedicated"],
          ["API Access", false, true, true],
          ["Custom Solutions", false, false, true],
          ["Automation", "Basic", "Advanced", "Full"],
        ].map((row, i) => (
          <tr
            key={i}
            className="border-t hover:bg-blue-50 transition"
          >
            <td className="p-5 font-medium text-left">
              {row[0]}
            </td>

            {[1, 2, 3].map((colIndex) => (
              <td key={colIndex} className="p-5 text-center">
                {typeof row[colIndex] === "boolean" ? (
                  row[colIndex] ? (
                    <Check className="mx-auto text-green-500" size={18} />
                  ) : (
                    <X className="mx-auto text-red-400" size={18} />
                  )
                ) : (
                  row[colIndex]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      {/* TESTIMONIALS */}
      <div className="py-24 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Rahul Sharma",
              text: "Beacon Track saved us hours daily!",
            },
            {
              name: "Priya Verma",
              text: "Very easy and powerful system.",
            },
            {
              name: "Amit Kumar",
              text: "Best investment for business growth.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">“{item.text}”</p>
              <h4 className="font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "Can I upgrade my plan later?",
            a: "Yes, anytime from dashboard.",
          },
          {
            q: "Do you offer refunds?",
            a: "7-day refund policy available.",
          },
          {
            q: "Is there a free trial?",
            a: "Yes, limited free trial available.",
          },
        ].map((faq, i) => (
          <div
            key={i}
            className="border-b py-4 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3 className="font-medium flex justify-between">
              {faq.q}
              <span>{open === i ? "-" : "+"}</span>
            </h3>

            {open === i && (
              <p className="text-gray-600 text-sm mt-2">{faq.a}</p>
            )}
          </div>
        ))}
      </div>

    {/* CTA */}
<div className="py-14 text-center bg-green-50">
  <h2 className="text-4xl font-semibold mb-4">
    Still Confused? 
  </h2>
  <p className="text-gray-600 mb-8">
    Chat with us and find the perfect plan.
  </p>

  <a
    href={`https://wa.me/${phone}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1ebe5d] transition shadow-md"
  >
    <FaWhatsapp size={20} />
    Chat on WhatsApp
  </a>
</div>
    </div>
  );
}