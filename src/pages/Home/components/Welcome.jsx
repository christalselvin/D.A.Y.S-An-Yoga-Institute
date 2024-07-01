import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import React from "react";
import main from "../components/assets/main.jpg";
import leftImage from "../components/assets/logo.jpg"; // Import your left image

export default function Welcome() {
  return (
    <div className="min-h-screen bg-lightgreen overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[10rem] my-10 md:my-[5rem] relative overflow-hidden">
        {/* Left image */}
        <motion.img
          src={leftImage}
          alt="Yoga Institute Logo"
          className="h-32 sm:h-40 md:h-80 object-cover rounded-2xl bg-transparent absolute top-16 sm:top-20 md:top-0 left-4 sm:left-8 md:left-0 md:mt-8"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          loading="lazy"
        />
        {/* Content */}
        <motion.div
          className="flex flex-col gap-3 justify-center items-center px-4 pt-3 md:pt-0 md:px-8 text-center"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          style={{ zIndex: 1 }}
        >
          <h2 className="text-xl md:text-4xl mt-4">
            Welcome to <span className="font-bold">D.A.Y.S An Yoga Institute</span>
          </h2>
          <h3 className="text-lg md:text-xl mt-4">
            <span className="font-semibold">D.A.Y.S.</span> Provides You
          </h3>
          <motion.ul
            className="list-disc pl-6 mt-2 space-y-2 text-md md:text-lg text-left"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
          >
            {["Twisting Yoga", "Weight Loss Yoga", "Self Balancing Yoga", "Mental Issue Yoga", "Back Bending Yoga"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  className="text-gray-700 font-medium"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                  }}
                >
                  {item}
                </motion.li>
              )
            )}
          </motion.ul>
          <Link
            to="/form"
            aria-label="Go to the demo form"
            className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out text-white block w-full md:w-auto mt-4 text-lg font-semibold"
          >
            Demo
          </Link>
        </motion.div>
        {/* Right image (animated) */}
        <motion.img
          src={main}
          alt="Yoga practice session"
          className="h-36 sm:h-48 md:h-80 object-cover rounded-2xl bg-transparent absolute top-24 sm:top-32 md:top-0 right-4 sm:right-6 md:right-0"
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          loading="lazy"
        />
        <Chatbot />
      </div>
    </div>
  );
}
