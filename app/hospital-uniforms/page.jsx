import React from 'react';

const HospitalUniforms = () => {
  const products = [
    { id: 1, name: 'Doctor Lab Coat', price: '$45.00', image: '/images/lab-coat.jpg' },
    { id: 2, name: 'Premium Scrubs Set', price: '$35.00', image: '/images/scrubs.jpg' },
    { id: 3, name: 'Nurse Uniform', price: '$40.00', image: '/images/nurse-uniform.jpg' },
    { id: 4, name: 'Surgical Gown', price: '$25.00', image: '/images/gown.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Hospital Uniforms</h1>
      <p className="text-gray-600 mb-8">
        High-quality, durable, and comfortable medical apparel designed for healthcare professionals.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              {/* Replace with actual Image component if images are available */}
              <span className="text-gray-400">Product Image</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalUniforms;