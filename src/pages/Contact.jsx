import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // 👉 connect API here
    alert("Message sent!");
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-white">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Have questions or need help? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left - Contact Info */}
        <div className="space-y-6">

          <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50">
            <FaEnvelope className="text-primary text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 text-sm">support@beacontrack.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50">
            <FaPhone className="text-primary text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600 text-sm">+91 99999 99999</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50">
            <FaMapMarkerAlt className="text-primary text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Office</h3>
              <p className="text-gray-600 text-sm">
                Bahadurgarh, Haryana, India
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100">
            <h3 className="font-semibold mb-2">Need instant help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Chat with us directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="inline-block bg-primary text-white px-5 py-2 rounded-lg"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-5 border"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Send a Message
          </h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:scale-[1.02] transition"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}