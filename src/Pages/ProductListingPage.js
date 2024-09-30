import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Changed to useNavigate

// Expanded product data with unique names and more items
const products = [
  { id: 1, name: 'Men’s Running Shoe Alpha', price: 79.99, gender: 'Male', image: './images/sneaker1.png' },
  { id: 2, name: 'Women’s Casual Sneaker Beta', price: 89.99, gender: 'Female', image: './images/sneaker7.png' },
  { id: 3, name: 'Men’s Casual Sneaker Gamma', price: 59.99, gender: 'Male', image: './images/sneaker2.png' },
  { id: 4, name: 'Women’s Running Shoe Delta', price: 99.99, gender: 'Female', image: './images/sneaker8.png' },
  { id: 5, name: 'Men’s Sports Shoe Epsilon', price: 69.99, gender: 'Male', image: './images/sneaker3.png' },
  { id: 6, name: 'Women’s Athletic Shoe Zeta', price: 79.99, gender: 'Female', image: './images/sneaker9.png' },
  { id: 7, name: 'Men’s Trail Shoe Eta', price: 89.99, gender: 'Male', image: './images/sneaker4.png' },
  { id: 8, name: 'Women’s Sports Sneaker Theta', price: 99.99, gender: 'Female', image: './images/sneaker10.png' },
  { id: 9, name: 'Men’s Hiking Shoe Iota', price: 109.99, gender: 'Male', image: './images/sneaker5.png' },
  { id: 10, name: 'Women’s Running Shoe Kappa', price: 69.99, gender: 'Female', image: './images/sneaker1.png' },
  { id: 11, name: 'Men’s Casual Shoe Lambda', price: 79.99, gender: 'Male', image: './images/sneaker6.png' },
  { id: 12, name: 'Women’s Trail Shoe Mu', price: 89.99, gender: 'Female', image: './images/sneaker2.png' }
];

const ProductListingPage = () => {
  const navigate = useNavigate(); // Changed from useHistory to useNavigate
  const [selectedGender, setSelectedGender] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter by gender
  const handleGenderFilter = (gender) => {
    setSelectedGender(gender);
    if (gender) {
      setFilteredProducts(products.filter((product) => product.gender === gender));
    } else {
      setFilteredProducts(products);
    }
  };

  // Sorting functionality
  const handleSort = (option) => {
    setSortOption(option);
    const sortedProducts = [...filteredProducts];

    if (option === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === 'a-z') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'z-a') {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === 'A-Z') {
      sortedProducts.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    } else if (option === 'Z-A') {
      sortedProducts.sort((a, b) => b.name.toUpperCase().localeCompare(a.name.toUpperCase()));
    }

    setFilteredProducts(sortedProducts);
  };

    // Navigate to Product Detail Page
    const handleQuickView = (productId) => {
      navigate(`/product/${productId}`); // Changed to navigate
    };

    return (
      <div className="bg-[#001F3F] py-10 px-5">
        {/* Filter and Sort Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <label htmlFor="gender" className="mr-4 font-semibold text-white">Filter by Gender:</label>
            <select
              id="gender"
              value={selectedGender}
              onChange={(e) => handleGenderFilter(e.target.value)}
              className="bg-white border border-gray-300 py-2 px-4 rounded-md"
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
  
          {/* Sort by Price or Name */}
          <div>
            <label htmlFor="sort" className="mr-4 font-semibold text-white">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-white border border-gray-300 py-2 px-4 rounded-md"
            >
              <option value="">None</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="a-z">Name: a-z</option>
              <option value="z-a">Name: z-a</option>
            </select>
          </div>
        </div>
  
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#EAD8B1] p-4 rounded-lg shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 sm:h-64 object-cover mb-4 rounded-md" 
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => handleQuickView(product.id)} 
                className="bg-[#3A6D8B] text-white py-2 px-4 rounded hover:bg-[#285473]"
              >
                Quick View
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductListingPage;