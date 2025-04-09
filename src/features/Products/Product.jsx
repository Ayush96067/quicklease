import React from "react";

const Product = () => {
  return (
    <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-lg">
      {/* Product Title & Images */}
      <h1 className="text-2xl font-bold text-gray-800">
        Canon EOS 90D DSLR Camera
      </h1>
      <div className="mt-4 flex space-x-4">
        <img src="/img1.jpg" alt="Front View" className="w-1/3 rounded-lg" />
        <img src="/img1.jpg" alt="Side View" className="w-1/3 rounded-lg" />
        <img src="/img1.jpg" alt="Back View" className="w-1/3 rounded-lg" />
      </div>

      {/* Rental Details */}
      <div className="mt-6 rounded-lg bg-gray-100 p-4">
        <p>
          <strong>Availability:</strong>{" "}
          <span className="text-green-600">In Stock ✅</span>
        </p>
        <p>
          <strong>Rental Price:</strong> $15 per day
        </p>
        <p>
          <strong>Security Deposit:</strong> $50 (Refundable)
        </p>
        <p>
          <strong>Borrow Duration:</strong> 1-7 days
        </p>
      </div>

      {/* Specifications */}
      <h2 className="mt-6 text-xl font-semibold">Specifications</h2>
      <ul className="mt-2 list-inside list-disc text-gray-700">
        <li>
          <strong>Brand:</strong> Canon
        </li>
        <li>
          <strong>Model:</strong> EOS 90D
        </li>
        <li>
          <strong>Resolution:</strong> 32.5 MP
        </li>
        <li>
          <strong>Lens:</strong> 18-135mm
        </li>
        <li>
          <strong>Battery Life:</strong> 1300 shots per charge
        </li>
      </ul>

      {/* Lender Details */}
      <h2 className="mt-6 text-xl font-semibold">Lender Details</h2>
      <p>
        <strong>Owner:</strong> John Doe
      </p>
      <p>
        <strong>Location:</strong> New York, USA
      </p>
      <p>
        <strong>Contact:</strong>{" "}
        <a href="mailto:johndoe@email.com" className="text-blue-500">
          johndoe@email.com
        </a>
      </p>

      {/* Reviews */}
      <h2 className="mt-6 text-xl font-semibold">Reviews</h2>
      <div className="mt-2 rounded-lg bg-gray-100 p-4">
        <p>⭐⭐⭐⭐☆ (4.5/5) - 10 Reviews</p>
        <blockquote className="italic">
          "Great quality camera! The images came out amazing." - Alex
        </blockquote>
        <blockquote className="mt-2 italic">
          "Smooth borrowing process. Highly recommend!" - Priya
        </blockquote>
      </div>

      {/* Call-to-Action */}
      <div className="mt-6 flex space-x-4">
        <button className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          Request to Borrow
        </button>
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Chat with Lender
        </button>
      </div>
    </div>
  );
};

export default Product;
