"use client"
import React,{useContext} from 'react';
import { CartContext } from './Components/CartContext';


const Products = () => {
  const obj =  useContext(CartContext);

  const products = [
    { id: 1, name: 'The Catalyzer', price: 16 },
    { id: 2, name: 'The Catalyzer', price: 16 },
    { id: 3, name: 'The Catalyzer', price: 16 }
    // Add more products here...
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <p>Product id:{product.id}</p>
              <p>Product Name:{product.name}</p>
              <p>Product Price:{product.price}</p>
              <button
                className="bg-black text-white font-semibold p-4 rounded-xl mt-11"
                onClick={() =>obj?.addToCart && obj?.addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
