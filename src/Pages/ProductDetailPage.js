// src/components/ProductDetailPage.js
import React, { useState } from 'react';
import { useCart } from '../Pages/CartContext'; // Import the cart context

const ProductDetailPage = () => {
  const { addToCart } = useCart(); // Use the cart context
  const [selectedImage, setSelectedImage] = useState('./images/sneaker11.png');

  const product = {
    id: 1, // Add a unique ID for the product
    name: 'Men’s Running Shoe',
    price: 79.99,
    description: 'This men’s running shoe is designed for comfort and durability, perfect for long runs and daily wear.',
    specifications: {
      brand: 'Nike',
      material: 'Mesh',
      color: 'Black/White',
      size: 'Available in all sizes',
      gender: 'Male',
    },
    images: [
      './images/sneaker11.png',
      './images/sneaker9.png',
      './images/sneaker4.png',
    ],
    reviews: [
      { id: 1, name: 'John Doe', rating: 4, comment: 'Great shoes, very comfortable!' },
      { id: 2, name: 'Jane Smith', rating: 5, comment: 'Perfect fit and great for running!' },
    ],
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: 1, image: selectedImage }; // Include the selected image
    console.log('Adding to cart:', productWithQuantity);
    addToCart(productWithQuantity);
    alert(`${product.name} has been added to the cart!`);
};


  return (
    <div className="bg-[#001F3F] text-[#EAD8B1] p-3">
      <div className="flex flex-col lg:flex-row">
        {/* Product Images Section */}
        <div className="w-full lg:w-1/2 mb-0 lg:mb-0 pr-6">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-[600px] h-[350px] object-cover rounded-md mb-2"
          />
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-80"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 pl-2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>

          <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Brand:</strong> {product.specifications.brand}</li>
            <li><strong>Material:</strong> {product.specifications.material}</li>
            <li><strong>Color:</strong> {product.specifications.color}</li>
            <li><strong>Size:</strong> {product.specifications.size}</li>
            <li><strong>Gender:</strong> {product.specifications.gender}</li>
          </ul>

          <button 
            className="bg-[#3A6D8B] text-white py-3 px-5 rounded-lg text-lg font-bold hover:bg-[#285473]"
            onClick={handleAddToCart} // Add onClick event handler
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-[#EAD8B1]">Customer Reviews</h2>
        <div className="space-y-6">
          {product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div key={review.id} className="mb-4 p-4 border border-[#EAD8B1] rounded-md">
                <h4 className="font-bold text-[#EAD8B1]">{review.name}</h4>
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
  );
};

export default ProductDetailPage;
