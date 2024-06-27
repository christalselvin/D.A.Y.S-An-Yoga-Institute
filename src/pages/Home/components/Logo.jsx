import React from "react";
import logo from "./assets/logo background.png"; // Ensure this is a PNG with a transparent background

const Logo = () => {
  return (
    <a href="/">
      <img
        className="w-120 h-20 object-contain transition duration-300 ease-in-out transform hover:scale-110 hover:brightness-125 hover:filter hover:contrast-125"
        src={logo}
        alt="Logo"
      />
    </a>
  );
};

export default Logo;
