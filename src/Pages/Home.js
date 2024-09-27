import React from 'react';

const HomePage = () => {
  const imageSrc = './images/homeshoe1.png'; // Your single shoe image

  return (
    <div className="bg-[#001F3F] flex items-center justify-center h-[85vh] px-5 overflow-hidden"> {/* Adjusted height */}{/* Ensure no overflow */}
      {/* Left Side - Text Content */}
      <div className="w-1/2 text-left relative">
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
      <div className="w-1/2 relative" style={{ top: '40px' }}>
        {/* Adjusted Filled Square Behind the Shoe */}
        <div className="absolute -top-[5%] left-[140px] w-80 h-80 bg-[#EAD8B1] opacity-100 z-0"></div>

        <img
          src={imageSrc}
          alt="Sneakers"
          className="w-[90%] max-w-[500px] mx-auto"
          style={{ transform: 'rotate(-10deg)', position: 'relative', zIndex: 10 }} // Added zIndex for positioning
        />

        {/* Large Background Text Element - Updated to NIKE */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1
            className="text-[180px] font-bold text-[#6A9AB0] opacity-100 tracking-tight uppercase" // Keeping all styles
            style={{
              transform: 'rotate(-90deg) translateX(20%)',
              top: '35%',
              right: '0%',
              position: 'absolute',
              zIndex: 5 // Ensuring the text is behind the image
            }}
          >
            NIKE
          </h1>
        </div>

        {/* Square Design Element on the Right - Border Only */}
        <div className="absolute top-[30%] right-[350px] w-60 h-60 border border-[#EAD8B1]"></div>
      </div>
    </div>
  );
};

export default HomePage;
