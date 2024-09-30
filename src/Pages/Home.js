// HomePage.js
import React, { useState } from 'react';

const HomePage = () => {
  // State to store cart items
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const imageSrc = './images/homeshoe1.png'; // Your single shoe image
  const featuredItems = [
    { id: 1, name: 'Sneaker 1', price: 49.99, image: './images/sneaker1.png' },
    { id: 2, name: 'Sneaker 2', price: 59.99, image: './images/sneaker2.png' },
    { id: 3, name: 'Sneaker 3', price: 69.99, image: './images/sneaker3.png' },
    { id: 4, name: 'Sneaker 4', price: 79.99, image: './images/sneaker4.png' },
    { id: 5, name: 'Sneaker 5', price: 89.99, image: './images/sneaker5.png' },
    { id: 6, name: 'Sneaker 6', price: 99.99, image: './images/sneaker6.png' },
    { id: 7, name: 'Sneaker 7', price: 109.99, image: './images/sneaker7.png' },
    { id: 8, name: 'Sneaker 8', price: 119.99, image: './images/sneaker8.png' },
  ];

 // Update the addToCart function to set the price correctly
const addToCart = (item) => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    const updatedCart = cart.map(cartItem => 
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  } else {
    const newCart = [...cart, { ...item, quantity: 1 }];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
  
  const cartEvent = new CustomEvent('cartUpdated', { detail: cart.length });
  window.dispatchEvent(cartEvent);
};
  

  return (
    <div className="bg-[#001F3F] flex flex-col items-center overflow-hidden">
      {/* Existing upper section */}
      <div className="flex items-center justify-center h-[85vh] px-5 flex-col md:flex-row">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left relative mb-10 md:mb-0">
          <h3 className="text-[#6A9AB0] font-semibold tracking-widest mb-2 uppercase">
            New Collection For Sneakers
          </h3>
          <h1 className="text-5xl text-[#EAD8B1] font-bold mb-4">
            Sneakers And Athletic Shoes
          </h1>
          <p className="text-[#EAD8B1] mb-6">
            Lorem ipsum dolor sit amet consectetur. Felis elit tellus et convallis commodo massa est non mattis.
            Quisque leo aliquam dui neque semper arcu vel et malesuada. Non ac met.
          </p>
          <button className="bg-[#3A6D8B] text-white py-3 px-5 rounded-lg text-lg font-bold">
            Shop Now
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative mt-20 hidden md:block">
          <div className="absolute -top-[5%] left-[140px] w-80 h-80 bg-[#EAD8B1] opacity-100 z-0"></div>
          <img
            src={imageSrc}
            alt="Sneakers"
            className="w-[90%] max-w-[500px] mx-auto"
            style={{ transform: 'rotate(-10deg)', position: 'relative', zIndex: 10 }}
          />
          <div className="absolute inset-0 flex justify-center items-center hidden md:block">
            <h1
              className="text-[180px] font-bold text-[#6A9AB0] opacity-100 tracking-tight uppercase"
              style={{
                transform: 'rotate(-90deg) translateX(20%)',
                top: '35%',
                right: '0%',
                position: 'absolute',
                zIndex: 5,
              }}
            >
              NIKE
            </h1>
          </div>
          <div className="absolute top-[30%] right-[350px] w-60 h-60 border border-[#EAD8B1]"></div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="w-full px-5 py-10 mt-[-40px]">
        <h2 className="text-3xl text-[#EAD8B1] font-bold mb-6 text-center">Featured Sneakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {featuredItems.map(item => (
            <div key={item.id} className="bg-[#EAD8B1] rounded-lg p-4 flex flex-col items-center">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-lg font-bold">{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="bg-[#3A6D8B] text-white py-2 px-4 rounded-lg mt-2"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
