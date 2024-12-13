import React from "react";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import hero from "../components/assets/hero.png";
import { Link } from "react-router-dom";

const AnimatedText = ({ children, className }) => (
  <p
    className={`w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-Poynter Oldstyle Display font-['poppins'] mt-4 leading-snug sm:leading-relaxed text-center ${className}`}
  >
    <CallMergeIcon style={{ color: "blue" }} /> {children}
  </p>
);

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 lg:px-16">
      {/* Header Section */}
      <div className="text-sm sm:text-4xl font-bold text-center md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl p-6 m-1 font-Poynter Oldstyle Display font-['poppins'] mt-32 sm:p-4 md:p-6 lg:p-12 xl:p-16 leading-snug">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">
          Yoga is really the art of waking up
        </h1>
      </div>

      {/* Animated Text Section - Align in Row */}
      <div className="flex flex-wrap justify-center gap-4 mt-4"> {/* Reduced margin-top */}
        {/* First Animated Text with margin-left */}
        <AnimatedText className="ml-[-10px] sm:ml-0">
          Getting back to the true you. It can be that simple. Yoga offers up a way for us to see a world that is working for you instead of against you.
        </AnimatedText>

        <AnimatedText>
          Yoga reminds me that everything is connected so we must live, act, breathe with awareness. The process is the candy.
        </AnimatedText>

        <AnimatedText>
          Embrace mindfulness and inner peace through yoga. Our practice encourages balance, strength, and clarity, helping you find harmony in your daily life.
        </AnimatedText>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-6">
        <button
          className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-blue-500 text-white text-lg font-semibold rounded-full transform hover:scale-105 hover:bg-green-500 transition duration-300 ease-in-out shadow-lg"
          aria-label="Contact Us"
        >
          <Link to="contact" className="inline-block w-full h-full">Contact Us</Link>
        </button>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center mt-1 mx-auto max-w-72 sm:max-w-[00px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px]">
        <img src={hero} alt="Yoga hero" className="w-full h-auto" />
      </div>
    </div>
  );
}
