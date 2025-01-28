import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useWeb3 } from "../contexts/Web3Context";
import { useCart } from "../contexts/CartContext";
const categories = ["steel", "cement", "concrete", "Binding Wire", "Wood", "Stone", "Brick"];
const Navbar = () => {
  const {
    connect,
    account
  } = useWeb3();
  const {
    items
  } = useCart();
  return <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/assets/logo.svg" alt="Jengawize" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold">Jengawize</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>}
            </Link>
            <button onClick={connect} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect"}
            </button>
          </div>
        </div>
        <div className="flex space-x-4 py-2 overflow-x-auto">
          {categories.map(category => <Link key={category} to={`/?category=${category.toLowerCase()}`} className="text-gray-600 hover:text-orange-500 whitespace-nowrap">
              {category}
            </Link>)}
        </div>
      </div>
    </nav>;
};
export default Navbar;