import React from "react";
import { Link } from "react-router-dom";
export const ProductCard = ({
  product
}) => {
  return <Link to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-lg font-bold mt-2">{product.price} ETH</p>
      </div>
    </Link>;
};