import { Link } from "react-router-dom";
import { icons } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from "react";

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.01 });
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setShowFooter(isScrolledToEnd);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check the initial scroll position
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`bg-green-600 py-2 md:py-5 flex flex-col md:flex-row justify-between items-center text-white  gap-2 md:gap-4 z-50 fixed bottom-0 left-0 w-full ${showFooter ? 'visible' : 'hidden'}`}
      variants={fadeIn("down", 0.9)}
      initial="hidden"
      whileInView="show"
      style={{ overflowX: "hidden" }}
    >
      {inView && (
        <>
          <ul className="flex flex-col md:flex-row justify-start items-center gap-5 md:gap-8 text-left w-full text-xs md:text-sm md:ml-8">
            <li>
              <Link to="/" className="hover:underline hover:text-yellow-400">Home</Link>
            </li>
            <li>
              <Link to="/career" className="hover:underline hover:text-yellow-400">Career</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-yellow-400">About us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline hover:text-yellow-400">Contact us</Link>
            </li>
          </ul>
          <div className="mt-1 md:mt-0">
            <motion.div
              className="flex gap-2 md:gap-4 justify-center md:justify-start mr-5"
              variants={{
                hidden: { opacity: 1, scale: 1 },
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              initial="hidden"
              animate="visible"
            >
              {icons.map((item) => (
                <motion.li
                  key={item.id}
                  className="list-none"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring" }}
                >
                  <Link to={item.link}>
                    <i className="text-base md:text-2xl cursor-pointer">{item.icon}</i>
                  </Link>
                </motion.li>
              ))}
            </motion.div>
          </div>
          <div className="text-gray-400 mt-2 md:mt-0 flex flex-col md:flex-row justify-end items-center text-xs md:text-sm w-full md:mr-8">
            <span>2024Ⓒ All Rights Reserved Christal</span> {/* Moved to the right corner */}
          </div>
        </>
      )}
    </motion.div>
  );
}
