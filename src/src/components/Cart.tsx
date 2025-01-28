import React from "react";
import { Trash2 } from "lucide-react";
export const Cart = ({
  items,
  removeFromCart,
  checkout
}) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? <p>Your cart is empty</p> : <>
          <div className="space-y-4">
            {items.map(item => <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>{item.price} ETH</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>)}
          </div>
          <div className="mt-6">
            <p className="text-xl font-bold">Total: {total.toFixed(3)} ETH</p>
            <button onClick={checkout} className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Checkout with MetaMask
            </button>
          </div>
        </>}
    </div>;
};