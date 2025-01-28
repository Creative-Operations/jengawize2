import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import products from "../data/items.json";
const Cart = () => {
  const {
    items,
    removeFromCart
  } = useCart();
  const cartItems = items.map(item => ({
    ...item,
    product: products.products.find(p => p.id === item.id)!
  }));
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : <>
          {cartItems.map(item => <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4">
              <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">
                  {item.quantity} x {item.product.price} ETH
                </p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>)}
          <div className="mt-6 bg-white p-4 rounded-lg">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">{total.toFixed(3)} ETH</span>
            </div>
            <Link to="/checkout" className="block w-full bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600">
              Proceed to Checkout
            </Link>
          </div>
        </>}
    </div>;
};
export default Cart;