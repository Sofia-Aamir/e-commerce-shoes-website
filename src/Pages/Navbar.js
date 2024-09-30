// Navbar.js
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Retrieve cart items count from localStorage on mount
  useEffect(() => {
    // Retrieve initial cart count from localStorage on mount
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  
    // Add event listener for the custom 'cartUpdated' event
    const handleCartUpdate = (event) => {
      setCartCount(event.detail); // Update the cart count from the event's detail
    };
  
    window.addEventListener('cartUpdated', handleCartUpdate);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#001F3F] text-[#EAD8B1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold">ZULU</Link>
          </div>

          {/* Center - Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-xl text-[#EAD8B1] hover:text-[#6A9AB0]">Home</Link>
            <Link to="/products" className="text-xl text-[#EAD8B1] hover:text-[#6A9AB0]">Product Listing</Link>
            <Link to="/detailpage" className="text-xl text-[#EAD8B1] hover:text-[#6A9AB0]">Product Detail</Link>
            <Link to="/checkout" className="text-xl text-[#EAD8B1] hover:text-[#6A9AB0]">Check Out</Link>
          </div>

          {/* Right - Cart Icon and Mobile Menu Button */}
          <div className="flex items-center space-x-6">
          <Link to="/cart" className="text-xl flex items-center">
  <FaShoppingCart className="text-[#EAD8B1] hover:text-[#6A9AB0]" size={28} />
  {cartCount > 0 && <span className="ml-1">({cartCount})</span>} {/* Display count if > 0 */}
</Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#EAD8B1]" onClick={toggleMenu}>
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#001F3F] px-4 pb-4">
          <Link to="/" className="block text-xl text-[#EAD8B1] hover:text-[#6A9AB0] py-3">Home</Link>
          <Link to="/products" className="block text-xl text-[#EAD8B1] hover:text-[#6A9AB0] py-3">Product Listing</Link>
          <Link to="/product-detail" className="block text-xl text-[#EAD8B1] hover:text-[#6A9AB0] py-3">Product Detail</Link>
          <Link to="/checkout" className="block text-xl text-[#EAD8B1] hover:text-[#6A9AB0] py-3">Check Out</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
