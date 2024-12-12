import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion"; 

export default function Navbar() {
  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 flex justify-between items-center py-2 px-4 z-50 text-white bg-green-600`}
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 0.5 }}   
      >
        <a href="/">
          <div className="flex items-center">
            <Logo className="h-8 md:h-10" />
          </div>
        </a>

        <ul className="hidden md:flex gap-8" style={{ fontFamily: 'Poppins' }}>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              to="/"
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link
              to="/career"
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Articles
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/about"
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              About Us
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Contact Us
            </Link>
          </motion.li>

          <div className="flex gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a href="https://wa.me/918127227284" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a href="https://x.com/ashishu9899?lang=en" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="https://youtube.com/@anyogainstitute?si=lowYzoFr96ofjBE0" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a href="https://www.facebook.com/profile.php?id=100071712365099" target="_blank" rel="noopener noreferrer">
                <FacebookIcon  className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a href="https://www.instagram.com/anyogainstitute?igsh=MXRmaWh0dmtyNGZsMw==" target="_blank" rel="noopener noreferrer">
                <InstagramIcon  className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400" />
              </a>
            </motion.div>
          </div>
        </ul>
      </motion.nav>
    </>
  );
}
