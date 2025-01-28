import React from "react";
import { useParams } from "react-router-dom";
export const ProductDetail = ({
  addToCart,
  products
}) => {
  const {
    id
  } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <div>Product not found</div>;
  return <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Specifications</h2>
            {Object.entries(product.specifications).map(([key, value]) => <div key={key} className="mt-2">
                <span className="font-medium">{key}: </span>
                <span>{value}</span>
              </div>)}
          </div>
          <div className="mt-6">
            <p className="text-2xl font-bold">{product.price} ETH</p>
            <button onClick={() => addToCart(product)} className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>;
};