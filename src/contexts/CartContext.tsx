import React, { useState, createContext, useContext } from "react";
interface CartItem {
  id: number;
  quantity: number;
}
interface CartContextType {
  items: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}
});
export const CartProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const addToCart = (id: number) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? {
          ...item,
          quantity: item.quantity + 1
        } : item);
      }
      return [...prev, {
        id,
        quantity: 1
      }];
    });
  };
  const removeFromCart = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  const clearCart = () => {
    setItems([]);
  };
  return <CartContext.Provider value={{
    items,
    addToCart,
    removeFromCart,
    clearCart
  }}>
      {children}
    </CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);