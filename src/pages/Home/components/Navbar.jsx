import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const [isSlowmo, setIsSlowmo] = useState(false); // State for slow-motion effect

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSlowmo = () => {
    setIsSlowmo(!isSlowmo);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed left-0 right-0 top-0 flex justify-between items-center py-4 px-6 z-50 bg-green-600 text-white ${isSlowmo ? 'transition-all duration-[3000ms]' : ''}`}
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 0.5 }}
      >
        <a href="/" className="flex items-center">
          <Logo className="h-8 md:h-10" />
        </a>

        {/* Slow Motion Button */}
        <button
          onClick={toggleSlowmo}
          className="md:hidden text-white bg-yellow-400 py-2 px-6 rounded-full hover:bg-yellow-500 focus:outline-none"
        >
          Slow Motion Mode
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-poppins">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <Link to="/" className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400">
              Home
            </Link>
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <Link to="/article" className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400">
              Articles
            </Link>
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <Link to="/about" className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400">
              About Us
            </Link>
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
            <Link to="/contact" className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400">
              Contact Us
            </Link>
          </motion.li>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <a href="https://wa.me/918127227284" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="hover:text-yellow-400 transition-all duration-300" />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
              <a href="https://x.com/ashishu9899?lang=en" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="hover:text-yellow-400 transition-all duration-300" />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
              <a href="https://youtube.com/@anyogainstitute?si=lowYzoFr96ofjBE0" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon className="hover:text-yellow-400 transition-all duration-300" />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
              <a href="https://www.facebook.com/profile.php?id=100071712365099" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="hover:text-yellow-400 transition-all duration-300" />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
              <a href="https://www.instagram.com/anyogainstitute?igsh=MXRmaWh0dmtyNGZsMw==" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="hover:text-yellow-400 transition-all duration-300" />
              </a>
            </motion.div>
          </div>
        </ul>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 p-6">
          <ul className="flex flex-col gap-6">
            <li>
              <Link to="/" className="text-white hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/article" className="text-white hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400">
                Contact Us
              </Link>
            </li>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center mt-4">
              <a href="https://wa.me/918127227284" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 text-white hover:text-yellow-400 transition-all duration-300" />
              </a>
              <a href="https://x.com/ashishu9899?lang=en" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="w-6 h-6 text-white hover:text-yellow-400 transition-all duration-300" />
              </a>
              <a href="https://youtube.com/@anyogainstitute?si=lowYzoFr96ofjBE0" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon className="w-6 h-6 text-white hover:text-yellow-400 transition-all duration-300" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100071712365099" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="w-6 h-6 text-white hover:text-yellow-400 transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/anyogainstitute?igsh=MXRmaWh0dmtyNGZsMw==" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="w-6 h-6 text-white hover:text-yellow-400 transition-all duration-300" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
