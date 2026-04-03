import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import CTA from "./pages/CTA";
import Solutions from "./pages/Solution";
import Whybeakontrack from "./pages/Whybeacontrack";

export default function App() {
  return (
    <div className="bg-bg text-text">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Whybeakontrack />
      <CTA />
      <Footer />
    </div>
  );
}