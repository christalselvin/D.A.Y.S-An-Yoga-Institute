// ThankYouPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-gray-700">Thank You!</h1>
        <p className="mt-4 text-lg">Your message has been sent successfully. We'll get back to you soon.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-gray-700 text-white py-3 px-6 rounded-md hover:bg-gray-600 transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
