"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
// export const useCart= () => {
//         const context = useContext(CartContext);
//         if (!context) {
//           throw new Error('useCart must be used within a CartProvider');
//         }
//         return context;
//       };
     
export const CartProvider= ({
    children,
  }: {
    children: React.ReactNode
  })=> {
const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) =>(setCart([...cart, product]))
    
  

  return (
    <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
  );
};
 
