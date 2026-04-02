export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",   // Indigo (roapp type)
        dark: "#0B0F19",      // deep dark
        light: "#F9FAFB",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};