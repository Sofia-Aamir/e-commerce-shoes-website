import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#001F3F] text-[#EAD8B1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold">ZULU</a>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-xl text-[#EAD8B1] hover:text-[#6A9AB0]">Home</a>
            <a href="/products" className="text-xl text-[#EAD8B1] hover:text-[#6A9AB0]">Product Listing</a>
            <a href="/product-detail" className="text-xl text-[#EAD8B1] hover:text-[#6A9AB0]">Product Detail</a>
            <a href="/checkout" className="text-xl text-[#EAD8B1] hover:text-[#6A9AB0]">Check Out</a>
          </div>

          {/* Right - Cart Icon */}
          <div className="flex items-center space-x-6">
            <a href="/cart" className="text-xl">
              <FaShoppingCart className="text-[#EAD8B1] hover:text-[#6A9AB0]" size={28} />
            </a>

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
          <a href="/" className="block text-xl text-[#EAD8B1] hover:text-[#6A9AB0] py-3">Home</a>
          <a href="/products" className="block text-xl text-[#EAD8B1] hover:text-[#6A9AB0] py-3">Product Listing</a>
          <a href="/product-detail" className="block text-xl text-[#EAD8B1] hover:text-[#6A9AB0] py-3">Product Detail</a>
          <a href="/checkout" className="block text-xl text-[#EAD8B1] hover:text-[#6A9AB0] py-3">Check Out</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
