// src/components/CartPage.js
import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const removeFromCart = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        // If the item's quantity is greater than 1, decrease it
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          // If quantity is 1, remove the item
          return null;
        }
      }
      return item;
    }).filter(item => item !== null); // Remove any null values

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  return (
    <div className="bg-[#001F3F] text-[#EAD8B1] p-3">
      <h1 className="text-3xl font-bold text-center text-[#EAD8B1] mb-6">Cart Page</h1>
      {cart.length === 0 ? (
        <p className="text-center text-[#EAD8B1]">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 border border-[#EAD8B1] rounded-md">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-auto object-cover mr-4" />
                <div>
                  <h2 className="text-xl font-semibold text-[#EAD8B1]">{item.name}</h2>
                  <p className="text-[#EAD8B1]">
                    ${(Number(item.price) || 0).toFixed(2)} x {item.quantity || 0}
                  </p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
