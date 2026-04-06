import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function Field() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    if (!email) return;
    console.log(email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-6">

      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 animate-[gradient_8s_ease_infinite]" />

      {/* ✨ Floating Glow Blobs */}
      <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-300 opacity-30 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* 🧊 Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl rounded-3xl px-10 py-12 text-center max-w-xl"
      >

        {/* 🔄 Animated Icon */}
        <motion.div
          animate={{ rotate: 360, y: [0, -8, 0] }}
          transition={{
            rotate: { repeat: Infinity, duration: 6, ease: "linear" },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-white/70 text-gray-700 shadow">
          🚀 Field Module
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Coming soon.
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-lg">
          A next-gen experience is on the way —{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-semibold">
            fast, smart, and seamless.
          </span>
        </p>

        {/* Input */}
        {!submitted ? (
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-auto bg-white/80 backdrop-blur"
            />

            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition"
            >
              Notify Me
            </motion.button>
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-green-600 font-semibold"
          >
            ✅ You're on the list!
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}