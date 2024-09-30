// ProductDetailPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample expanded product data
const products = [
  { 
    id: 1, 
    name: 'Men’s Running Shoe Alpha', 
    price: 79.99, 
    gender: 'Male', 
    image: '../images/sneaker1.png',
    description: 'The Men’s Running Shoe Alpha is designed for performance and comfort. Ideal for runners looking for a reliable shoe that combines support and style.',
    reviews: [
      { user: 'John Doe', rating: 5, comment: 'Great shoes! Very comfortable for long runs.' },
      { user: 'Jane Smith', rating: 4, comment: 'Good support but a bit heavy for my liking.' },
      { user: 'Bob Brown', rating: 5, comment: 'I love these shoes! Perfect fit and stylish.' }
    ]
  },
  { 
    id: 2, 
    name: 'Women’s Casual Sneaker Beta', 
    price: 89.99, 
    gender: 'Female', 
    image: '../images/sneaker7.png',
    description: 'The Women’s Casual Sneaker Beta offers a perfect blend of style and comfort for everyday wear.',
    reviews: [
      { user: 'Alice Green', rating: 5, comment: 'So stylish and comfy! Perfect for daily wear.' },
      { user: 'Samantha White', rating: 4, comment: 'Very comfortable, but they scuff easily.' },
      { user: 'Emma Davis', rating: 5, comment: 'Love these sneakers! They go with everything!' }
    ]
  },
  { 
    id: 3, 
    name: 'Men’s Casual Sneaker Gamma', 
    price: 59.99, 
    gender: 'Male', 
    image: '../images/sneaker2.png',
    description: 'The Men’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 4, 
    name: 'Women’s Running Shoe Delta', 
    price: 99.99, 
    gender: 'Female', 
    image: '../images/sneaker8.png',
    description: 'The Women’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 5, 
   name: 'Men’s Sports Shoe Epsilon', price: 69.99, gender: 'Male', image: '../images/sneaker3.png',
    description: 'The Men’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 6, 
  name: 'Women’s Athletic Shoe Zeta', price: 79.99, gender: 'Female', image: '../images/sneaker9.png',
    description: 'The Women’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 7, 
    name: 'Men’s Trail Shoe Eta', price: 89.99, gender: 'Male', image: '../images/sneaker4.png',
    description: 'The Men’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 8, 
    name: 'Women’s Sports Sneaker Theta', price: 99.99, gender: 'Female', image: '../images/sneaker10.png' ,
    description: 'The Women’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 9, 
    name: 'Men’s Hiking Shoe Iota', price: 109.99, gender: 'Male', image: '../images/sneaker5.png'  ,
    description: 'The Men’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 10, 
    name: 'Women’s Running Shoe Kappa', price: 69.99, gender: 'Female', image: '../images/sneaker1.png' ,
    description: 'The Women’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 11, 
    name: 'Men’s Casual Shoe Lambda', price: 79.99, gender: 'Male', image: '../images/sneaker6.png' ,
    description: 'The Men’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },
  { 
    id: 12, 
    name: 'Women’s Trail Shoe Mu', price: 89.99, gender: 'Female', image: '../images/sneaker2.png'  ,
    description: 'The Women’s Casual Sneaker Gamma is perfect for those looking for comfort and casual style.',
    reviews: [
      { user: 'Mark Taylor', rating: 4, comment: 'Great casual shoes for the price.' },
      { user: 'Luke Wilson', rating: 3, comment: 'They are okay, but not very durable.' },
      { user: 'Ryan Johnson', rating: 4, comment: 'Good fit and feel. Would buy again.' }
    ]
  },

  // Add more products as needed
];

const QuickViewPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  // State to store cart items
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const addToCart = () => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
  
    if (existingProduct) {
      // Update quantity if product already in the cart
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert(`Increased quantity of ${product.name} in your cart!`);
    } else {
      // Add product with quantity 1
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      alert(`${product.name} has been added to your cart!`);
    }
  };
  

  // If product not found, show default view
  if (!product) {
    return (
      <div className="bg-[#001F3F] text-[#EAD8B1] h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Detail Page</h1>
        <p className="mt-4">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#001F3F] text-[#EAD8B1] p-3">
      <h1 className="text-3xl font-bold text-center text-[#EAD8B1] mb-6">Detail Page</h1>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-md" />
        </div>
        {/* Details Section */}
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-semibold text-[#EAD8B1] mb-2">{product.name}</h2>
          <p className="text-[#EAD8B1] mb-4">${product.price.toFixed(2)}</p>
          <p className="text-[#EAD8B1] mb-4">{product.description}</p>
          <button onClick={addToCart} className="bg-[#3A6D8B] text-white py-2 px-4 rounded hover:bg-[#285473] mb-4">
            Add to Cart
          </button>

          {/* Reviews Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#EAD8B1] mb-4">Customer Reviews</h3>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="mb-4 p-4 border border-[#EAD8B1] rounded-md">
                  <h4 className="font-bold text-[#EAD8B1]">{review.user}</h4>
                  <p className="text-yellow-500 mb-2">
                    {'⭐'.repeat(review.rating)}{' '}
                    {'☆'.repeat(5 - review.rating)}
                  </p>
                  <p className="text-[#EAD8B1]">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-[#EAD8B1]">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPage;