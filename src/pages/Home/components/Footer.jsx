import React from 'react';

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
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zM13 6h-2v3h2V6zM12 9c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 4h-2v7h2v-7z"
              />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12c0 4.92 3.69 9 8.5 9 3.51 0 6.53-1.83 8-4.5 1.07 2.56 3.82 4.5 6.5 4.5 1.1 0 2-.9 2-2 0-3.86-3.14-7-7-7s-7 3.14-7 7c0 1.65-.67 3.16-1.75 4.25C8.66 16.33 7 13.6 7 11c0-2.2 1.79-4 4-4 2.21 0 4 1.79 4 4z"
              />
            </svg>
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.5 10.5 0 0 1-3 1 4.83 4.83 0 0 0 2-2.7A9.97 9.97 0 0 1 20 3a5 5 0 0 0-8.5 4A14.1 14.1 0 0 1 3 3a5 5 0 0 0 1.5 6.7A4.8 4.8 0 0 1 2 9v.1a5 5 0 0 0 4 4.9 4.8 4.8 0 0 1-2-.5v.1A5 5 0 0 0 7 18a5 5 0 0 0 6 3 10 10 0 0 1-6 2c-1.3 0-2.6-.1-3.9-.5a10.16 10.16 0 0 0 9 5.5 10.8 10.8 0 0 0 9-8.6c0-.1 0-.3 0-.4a7.07 7.07 0 0 0 1.5-3.5c0-.2-.1-.4-.1-.6a10 10 0 0 0 2.5-2.7z"
              />
            </svg>
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/917708927972"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2a10 10 0 1 0 9.993 9.75l1.3 1.3a1 1 0 0 1 0 1.415l-2.61 2.61a1 1 0 0 1-1.415 0l-1.46-1.46a9.953 9.953 0 0 1-1.62.528A9.971 9.971 0 0 1 12 22a9.97 9.97 0 0 1-9.75-11.006 9.97 9.97 0 0 1 10.506-8.678A9.965 9.965 0 0 1 12 2zM12 4a8 8 0 1 0 7.803 6.138l1.493 1.492a1 1 0 0 1 0 1.414l-2.607 2.607a1 1 0 0 1-1.413 0l-1.459-1.458a8.043 8.043 0 0 1-1.91.577A7.953 7.953 0 0 1 12 4z"
              />
            </svg>
          </a>

          {/* YouTube Icon */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 7s-1.1-.4-2.1-.6c-.6-.1-1.2-.2-1.7-.2-1.6 0-3.2.2-4.6.6-.5.1-.9.3-1.3.5-.3.2-.5.4-.7.7-.5.6-.8 1.3-1.1 2-.2.7-.3 1.4-.4 2.1-.1.8-.1 1.6 0 2.4.1.7.2 1.4.4 2.1.3.7.7 1.4 1.1 2 .2.3.4.5.7.7.4.2.8.4 1.3.5 1.4.4 2.8.6 4.4.6 1.7 0 3.3-.2 4.8-.6.7-.1 1.3-.3 1.9-.5 1.4-.4 2.6-.9 3.8-1.5.5-.3.9-.6 1.3-.9 1-.9 1.7-2 1.9-3.2.1-.7.1-1.5.1-2.2s0-1.5-.1-2.2c-.2-1.3-.9-2.3-1.9-3.2-.4-.3-.8-.6-1.3-.9-1.2-.6-2.4-1.1-3.8-1.5-1.6-.3-3.2-.5-4.8-.5zM9 12.6l4.6-3.3-4.6-3.3v6.6z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 text-center text-sm">
        <p>&copy; 2025 D.A.Y.S AN YOGA All rights reserved <a href="https://wa.me/917708927972" target="_blank" class="text-pink-500 hover:text-green-700 hover:underline">CHRISTAL</a>
        </p>
      </div>
    </footer>
  );
};

export default YogaFooter;
