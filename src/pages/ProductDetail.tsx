import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import products from "../data/items.json";
const ProductDetail = () => {
  const {
    id
  } = useParams();
  const {
    addToCart
  } = useCart();
  const product = products.products.find(p => p.id === Number(id));
  if (!product) {
    return <div>Product not found</div>;
  }
  return <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-96" src={product.image} alt={product.name} />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4">
            <span className="text-orange-500 text-xl font-bold">
              {product.price} ETH
            </span>
          </div>
          <button onClick={() => addToCart(product.id)} className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>;
};
export default ProductDetail;