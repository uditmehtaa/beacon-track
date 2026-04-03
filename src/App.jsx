import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Garage from "./pages/Garage";
import Technical from "./pages/Techincal";
import Field from "./pages/Field";
import Trade from "./pages/Trade";
import Service from "./pages/Service";
import Retail from "./pages/Retail";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-bg text-text">
      <Header />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/garage" element={<Garage />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/field" element={<Field />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/service" element={<Service />} />
      <Route path="/retail" element={<Retail />} />
     </Routes>

     <Footer />

    </div>
  );
}