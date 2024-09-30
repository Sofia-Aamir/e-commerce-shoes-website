// src/components/CheckoutPage.js
import React, { useState } from 'react';
import { useCart } from './CartContext';

const CheckOutPage = () => {
  const { cart } = useCart(); // Get cart items from context
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit-card', // Default payment method
  });

  const totalPrice = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the checkout (e.g., send to API)
    console.log('User Info:', userInfo);
    console.log('Cart Items:', cart);
    console.log('Total Price:', totalPrice);
    // Reset form if needed
    setUserInfo({ name: '', address: '', paymentMethod: 'credit-card' });
  };

  return (
    <div className="bg-[#001F3F] text-[#EAD8B1] p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout Page</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userInfo.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-[#EAD8B1] rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={userInfo.address}
            onChange={handleChange}
            required
            className="w-full p-2 border border-[#EAD8B1] rounded"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="paymentMethod">Payment Method:</label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            value={userInfo.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border border-[#EAD8B1] rounded text-black"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-[#EAD8B1] text-[#001F3F] py-2 rounded hover:bg-[#FFC107]">
          Complete Checkout
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {cart.length === 0 ? (
        <p className="text-center text-[#EAD8B1]">Your cart is empty.</p>
      ) : (
        <div className="max-w-md mx-auto">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2 p-2 border border-[#EAD8B1] rounded">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>${(Number(item.price) || 0).toFixed(2)} x {item.quantity || 1}</p>
              </div>
              <span className="text-lg font-semibold">
                ${(Number(item.price) * (item.quantity || 1)).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-4">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
