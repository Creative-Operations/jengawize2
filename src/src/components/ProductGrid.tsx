import React from "react";
import { ProductCard } from "./ProductCard";
export const ProductGrid = ({
  products
}) => {
  return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>;
};