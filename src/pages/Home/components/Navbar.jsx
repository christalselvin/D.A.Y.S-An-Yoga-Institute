import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { icons } from "../../data/data";
import Logo from "./Logo"; // Import the new Logo component

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      setIsVisible(scrollPosition > currentScrollPosition || currentScrollPosition < 10);
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-4 text-white bg-green-600 border-b border-gray-100 z-50 font-times transition-transform duration-300 ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <a href="/">
          <div className="flex items-center">
            <Logo className="h-8 md:h-10" /> {/* Adjust logo size */}
            <p className="ml-2 text-sm md:text-base font-bold" style={{ fontFamily: 'Lucida Bright' }}>
              D.A.Y.S An Yoga
            </p>
          </div>
        </a>

        <ul className="hidden md:flex gap-8" style={{ fontFamily: 'Lucida Bright' }}>
          <li>
            <Link
              to="/"
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-6 md:hidden"> {/* Show icons on small screens */}
          {icons.map((item) => (
            <motion.li
              key={item.id}
              className="list-none"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring" }}
            >
              <Link to={item.link}>
                <i className="text-[1.8rem] cursor-pointer">{item.icon}</i>
              </Link>
            </motion.li>
          ))}
        </div>
      </nav>
      <div className="pt-16" style={{ fontFamily: 'Times New Roman' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
