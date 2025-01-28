import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
const categories = ["steel", "cement", "concrete", "Binding Wire", "Wood", "Stone", "Brick"];
export const Navbar = ({
  onConnect,
  isConnected
}) => {
  return <nav className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/assets/logo.png" alt="Jengawize" className="h-8" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="p-2">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button onClick={onConnect} className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md">
              {isConnected ? "Connected" : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4 py-2">
            {categories.map(category => <Link key={category} to={`/category/${category.toLowerCase()}`} className="text-gray-300 hover:text-white px-3 py-2 text-sm">
                {category}
              </Link>)}
          </div>
        </div>
      </div>
    </nav>;
};