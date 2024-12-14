import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../components/assets/Home/logo.png";
import HamburgerMenu from "./Menu";

export const navlist = [
  { name: "Home", link: "/" },
  { name: "Article", link: "article" },
  { name: "Contact", link: "contact" },
  { name: "About", link: "about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className="md:flex justify-between items-center flex py-6 px-8 z-50 bg-green-600 text-white overflow-hidden"
        initial={{ opacity: 0, scale: 0.12, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 55 }}
      >
        <a href="/" className="inline-block ml-[-1rem]">
          <img src={logo} alt="logo" className="w-16 md:h-16" />
        </a>

        <ul className="hidden md:flex gap-8 font-poppins">
          {navlist.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              }}
            >
              <Link
                to={item.link}
                className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}

          <div className="flex gap-4">
            {[
              {
                href: "https://wa.me/918127227284",
                icon: <WhatsAppIcon />,
                delay: 0.6,
              },
              {
                href: "https://x.com/ashishu9899?lang=en",
                icon: <TwitterIcon />,
                delay: 0.7,
              },
              {
                href: "https://youtube.com/@anyogainstitute?si=lowYzoFr96ofjBE0",
                icon: <YouTubeIcon />,
                delay: 0.8,
              },
              {
                href: "https://www.facebook.com/profile.php?id=100071712365099",
                icon: <FacebookIcon />,
                delay: 0.9,
              },
              {
                href: "https://www.instagram.com/anyogainstitute?igsh=MXRmaWh0dmtyNGZsMw==",
                icon: <InstagramIcon />,
                delay: 1.0,
              },
            ].map(({ href, icon, delay }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </motion.div>
            ))}
          </div>
        </ul>

        <div
          className="w-8 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.div
            className="flex flex-col z-50 items-center justify-between w-8 h-6 space-y-1 cursor-pointer"
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpen ? 0.8 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className={`w-8 h-1 bg-gray-800 rounded-md transition-transform duration-300 ease-in-out`}
              style={{
                transform: isOpen
                  ? "rotate(45deg) translateY(7px)"
                  : "rotate(0deg) translateY(0px)",
              }}
            ></motion.div>
            <motion.div
              className={`w-8 h-1 bg-gray-800 rounded-md`}
              style={{
                opacity: isOpen ? 0 : 1,
              }}
            ></motion.div>
            <motion.div
              className={`w-8 h-1 bg-gray-800 rounded-md transition-transform duration-300 ease-in-out`}
              style={{
                transform: isOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "rotate(0deg) translateY(0px)",
              }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.nav>
      {isOpen && <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
