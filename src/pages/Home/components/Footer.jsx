import { Link } from "react-router-dom";
import { icons } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";
import { useInView } from 'react-intersection-observer';
import React from "react";
export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.01 });

  return React.createElement(
    motion.div,
    {
      ref: ref,
      className: `bg-green-600 py-2 md:py-5 flex flex-col md:flex-row justify-center md:justify-between items-center text-white text-xs gap-2 md:gap-4 z-50 fixed bottom-0 left-0 w-full`,
      variants: fadeIn("down", 0.3),
      initial: "hidden",
      whileInView: "show",
      style: { overflowX: "hidden" }
    },
    inView && React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "ul",
        { className: "flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4 text-center w-full text-xs md:text-sm" },
        React.createElement(
          Link,
          { to: "/", className: "hover:underline hover:text-yellow-400" },
          "Home"
        ),
        React.createElement(
          Link,
          { to: "/career", className: "hover:underline hover:text-yellow-400" },
          "Career"
        ),
        React.createElement(
          Link,
          { to: "/about", className: "hover:underline hover:text-yellow-400" },
          "About us"
        ),
        React.createElement(
          Link,
          { to: "/contact", className: "hover:underline hover:text-yellow-400" },
          "Contact us"
        )
      ),
      React.createElement(
        "div",
        { className: "mt-1 md:mt-0" },
        React.createElement(
          motion.div,
          {
            className: "flex gap-2 md:gap-4 justify-center md:justify-start mr-5",
            variants: {
              hidden: { opacity: 1, scale: 1 },
              visible: { transition: { staggerChildren: 0.05 } }
            },
            initial: "hidden",
            animate: "visible"
          },
          icons.map((item) =>
            React.createElement(
              motion.li,
              {
                key: item.id,
                className: "list-none",
                whileHover: { scale: 1.3 },
                transition: { type: "spring" }
              },
              React.createElement(
                Link,
                { to: item.link },
                React.createElement(
                  "i",
                  { className: "text-base md:text-2xl cursor-pointer" },
                  item.icon
                )
              )
            )
          )
        )
      )
    )
  );
}
