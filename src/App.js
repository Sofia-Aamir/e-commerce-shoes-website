import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar'; // Importing the Navbar component
import HomePage from './Pages/Home';

// Create basic components for routing (you can customize them later)


function App() {
  return (
    <Router>
      <div>
        {/* Navbar should be visible on all pages */}
        <Navbar />

         <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/products" element={<ProductListing />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} /> */}
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
