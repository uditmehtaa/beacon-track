import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phone = "919999999999";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp redirect instead of API
    const msg = `Hi, I'm ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50">

      {/* HERO */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Let’s Talk 👋
        </h1>
        <p className="text-gray-600">
          Have questions or need help? We’re here for you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
            <FaEnvelope className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600 text-sm">support@beacontrack.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
            <FaPhone className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600 text-sm">+91 99999 99999</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Office</h3>
              <p className="text-gray-600 text-sm">
                Bahadurgarh, Haryana, India
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-6 p-6 rounded-2xl bg-green-50 border border-green-100">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              Instant Support
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Get quick help directly on WhatsApp.
            </p>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition shadow"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
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
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl hover:shadow-lg hover:scale-[1.02] transition"
          >
            Send via WhatsApp →
          </button>
        </form>
      </div>

      {/* MAP SECTION */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Find Us Here
        </h2>

        <div className="w-full h-80 rounded-2xl overflow-hidden shadow">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Bahadurgarh%20Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </section>
  );
}