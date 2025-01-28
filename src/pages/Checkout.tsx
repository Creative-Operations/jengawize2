import React from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3 } from "../contexts/Web3Context";
import { useCart } from "../contexts/CartContext";
import products from "../data/items.json";
const Checkout = () => {
  const navigate = useNavigate();
  const {
    account,
    connect,
    provider
  } = useWeb3();
  const {
    items,
    clearCart
  } = useCart();
  const cartItems = items.map(item => ({
    ...item,
    product: products.products.find(p => p.id === item.id)!
  }));
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const handleCheckout = async () => {
    if (!account) {
      await connect();
      return;
    }
    try {
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        // Example address
        value: ethers.utils.parseEther(total.toString())
      });
      await tx.wait();
      clearCart();
      navigate("/");
      alert("Purchase successful!");
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Error during checkout. Please try again.");
    }
  };
  return <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.map(item => <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>{(item.product.price * item.quantity).toFixed(3)} ETH</span>
            </div>)}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{total.toFixed(3)} ETH</span>
            </div>
          </div>
        </div>
        <button onClick={handleCheckout} className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          {account ? "Complete Purchase" : "Connect Wallet to Purchase"}
        </button>
      </div>
    </div>;
};
export default Checkout;