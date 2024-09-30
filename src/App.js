// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Pages/CartContext'; // Importing CartProvider
import Navbar from './Pages/Navbar'; // Importing the Navbar component
import HomePage from './Pages/Home';
import ProductListingPage from './Pages/ProductListingPage';
import QuickViewPage from './Pages/QuickViewPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';
import CheckOutPage from './Pages/CheckuOutPage';

function App() {
  return (
    <CartProvider> {/* Wrapping the application with CartProvider */}
      <Router>
        <div className="bg-[#001F3F] min-h-screen"> {/* Apply background here for full height */}
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<QuickViewPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/detailpage" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
