                        import { useState } from "react";

                        export default function Pricing() {
                          const [billing, setBilling] = useState("quarterly");

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

                          return (
                            <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-6 md:px-16">
                              
                              {/* Heading */}
                              <div className="text-center max-w-2xl mx-auto mb-12">
                                <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
                                <p className="text-gray-600">
                                  Choose the perfect plan for your needs. Flexible billing options available.
                                </p>
                              </div>

                              {/* Toggle */}
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

                              {/* Pricing Cards */}
                              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {plans.map((plan, i) => (
                                  <div
                                    key={i}
                                    className={`relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition ${
                                      plan.popular ? "border-2 border-blue-600 scale-105" : ""
                                    }`}
                                  >
                                    {/* Popular Badge */}
                                    {plan.popular && (
                                      <span className="absolute top-4 right-4 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                        Most Popular
                                      </span>
                                    )}

                                    {/* Plan Name */}
                                    <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>

                                    {/* Price */}
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

                                    {/* Savings */}
                                    {billing === "yearly" && (
                                      <span className="text-green-500 text-xs mb-4 inline-block">
                                        Save up to 30%
                                      </span>
                                    )}

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6 text-gray-600 text-sm">
                                      {plan.features.map((feature, idx) => (
                                        <li key={idx}>• {feature}</li>
                                      ))}
                                    </ul>

                                    {/* Button */}
                                    <button
                                      className={`w-full py-3 rounded-xl transition ${
                                        plan.popular
                                          ? "bg-blue-600 text-white hover:bg-blue-700"
                                          : "bg-gray-100 hover:bg-gray-200"
                                      }`}
                                    >
                                      Choose Plan
                                    </button>
                                  </div>
                                ))}
                              </div>

                              {/* FAQ Section */}
                              <div className="max-w-3xl mx-auto mt-20">
                                <h2 className="text-2xl font-semibold mb-6 text-center">
                                  Frequently Asked Questions
                                </h2>

                                {[
                                  {
                                    q: "Can I upgrade my plan later?",
                                    a: "Yes, you can upgrade anytime from your dashboard.",
                                  },
                                  {
                                    q: "Do you offer refunds?",
                                    a: "We offer a 7-day refund policy on all plans.",
                                  },
                                  {
                                    q: "Is there any free trial?",
                                    a: "Yes, we offer a limited free trial for new users.",
                                  },
                                ].map((faq, i) => (
                                  <div key={i} className="mb-4">
                                    <h3 className="font-medium">{faq.q}</h3>
                                    <p className="text-gray-600 text-sm">{faq.a}</p>
                                  </div>
                                ))}
                              </div>

                              {/* Footer */}
                              <p className="text-center text-gray-400 text-xs mt-12">
                                © 2026 Your Company. All rights reserved.
                              </p>
                            </div>
                          );
                        }