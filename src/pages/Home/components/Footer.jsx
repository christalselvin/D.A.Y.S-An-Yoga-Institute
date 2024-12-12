import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const YogaFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="text-2xl font-bold">
            <span className="text-green-500">D.A.Y.S</span> YOHA
          </div>

          {/* Links Section */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-green-500">Home</a>
            <a href="#services" className="hover:text-green-500">Articles</a>
            <a href="#classes" className="hover:text-green-500">About Us</a>
            <a href="#contact" className="hover:text-green-500">Contact Us</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          {/* Facebook Icon */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaTwitter className="w-6 h-6" />
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/917708927972"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          {/* YouTube Icon */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 text-center text-sm">
        <p>&copy; 2025 D.A.Y.S AN YOGA All rights reserved <a href="https://wa.me/917708927972" target="_blank" className="text-pink-500 hover:text-green-700 hover:underline">CHRISTAL</a></p>
      </div>
    </footer>
  );
};

export default YogaFooter;
