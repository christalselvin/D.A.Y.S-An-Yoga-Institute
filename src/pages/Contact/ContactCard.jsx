import React from "react";
import Lucknow from "../Home/components/assets/Lucknow map.png"
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

export default function Card() {
  const handleCallClick = () => {
    window.location.href = `tel:+918127227284`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:anyogainstitute@gmail.com`;
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/T68A7xtXzr81fDz19");
  };

  return (
    <div className="w-full md:w-[400px] flex flex-col shadow-lg border border-gray-200 rounded-xl bg-white transition duration-250 hover:scale-105 p-4 my-4">
      <div className="flex flex-col space-y-4">
        {/* Contact Info Section */}
        <div className="flex items-center space-x-4">
          <IoMdCall className="text-2xl text-green-600 cursor-pointer" onClick={handleCallClick} />
          <span className="text-sm text-gray-600">+91 8127227284</span>
        </div>

        {/* Email Section */}
        <div className="flex items-center space-x-4">
          <MdOutlineEmail className="text-2xl text-green-600 cursor-pointer" onClick={handleEmailClick} />
          <span className="text-sm text-gray-600">anyogainstitute@gmail.com</span>
        </div>

        {/* Address Section */}
        <div className="flex items-start space-x-4">
          <FaLocationArrow className="text-2xl text-green-600 cursor-pointer mt-1" onClick={handleLocationClick} />
          <span className="text-sm leading-tight text-gray-600">
            Behind Batti chokha restaurant near BABA IAS Coaching, Kothari Bandhu
            park sector J Aliganj, Lucknow
          </span>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="mt-4">
        <a href="https://maps.app.goo.gl/T68A7xtXzr81fDz19" target="_blank" rel="noopener noreferrer">
          <img src={Lucknow} alt="Lucknow" className="w-full h-auto rounded-xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
}