import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import products from "../data/items.json";
const Home = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const filteredProducts = category ? products.products.filter(p => p.category.toLowerCase() === category.toLowerCase()) : products.products;
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-orange-500 font-bold mt-2">
              {product.price} ETH
            </p>
          </div>
        </Link>)}
    </div>;
};
export default Home;