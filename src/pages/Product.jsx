import React from "react";
import { FaStar, FaShoppingCart, FaLock } from "react-icons/fa";
import { useEffect } from "react";

export default function ProductPage() {
   useEffect(() => {
            window.scrollTo(0, 0); 
          }, []);
  return (
   
    
    <div className="bg-light min-h-screen pt-20 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* LEFT: Product Info */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-soft p-6">
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image */}
            <img
              src="/1.jpeg"
              alt=""
              className="w-full h-[350px] object-cover rounded-xl"
            />

            {/* Details */}
            <div>
              <h1 className="text-2xl font-bold text-dark mb-2">
                Premium Gift Box
              </h1>

              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {Array(5).fill(0).map((_, i) => <FaStar key={i} />)}
                <span className="text-gray-500 text-sm ml-2">(120 reviews)</span>
              </div>

              <p className="text-gray-600 mb-4 text-sm">
                Perfect for birthdays, anniversaries & special occasions.
              </p>

              <p className="text-2xl font-semibold text-primary mb-4">
                ₹1,499
              </p>

              {/* Options */}
              <div className="mb-4">
                <label className="text-sm font-medium">Size</label>
                <select className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-primary">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-full mt-1 border rounded-lg p-2"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 border-t pt-6">
            <h2 className="font-semibold text-lg mb-2">Product Details</h2>
            <p className="text-gray-600 text-sm">
              This premium gift box includes curated items designed to impress.
              High-quality packaging, customizable options, and perfect for gifting.
            </p>
          </div>
        </div>

        {/* RIGHT: Billing Summary */}
        <div className="bg-white rounded-2xl shadow-soft p-6 h-fit sticky top-20">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          {/* Item */}
          <div className="flex justify-between text-sm mb-2">
            <span>Premium Gift Box</span>
            <span>₹1,499</span>
          </div>

          <div className="flex justify-between text-sm mb-2 text-gray-500">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-sm mb-4 text-gray-500">
            <span>Tax</span>
            <span>₹99</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold text-lg mb-6">
            <span>Total</span>
            <span>₹1,598</span>
          </div>

          {/* Buttons */}
          <button className="w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2 mb-3 hover:opacity-90">
            <FaShoppingCart /> Checkout
          </button>

          <button className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100">
            Add to Cart
          </button>

          {/* Security */}
          <p className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
            <FaLock /> Secure Payment
          </p>
        </div>
      </div>

      {/* Related */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-xl font-semibold mb-6">You may also like</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 1, 1].map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl shadow-soft">
              <img
                src={`/${item}.jpeg`}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-sm font-medium">Gift Item {item}</h3>
              <p className="text-primary text-sm">₹999</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}