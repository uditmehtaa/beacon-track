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
import ProductPage from "./pages/Product";
import Solutions1 from "./pages/Solutions1";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-bg text-text">
      <Header />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/solutions" element={<Solutions1 />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/garage" element={<Garage />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/field" element={<Field />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/service" element={<Service />} />
      <Route path="/retail" element={<Retail />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>

     <Footer />

    </div>
  );
}