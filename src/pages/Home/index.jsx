import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Benefit from "./components/Benefit"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Welcome />
      <About />
      <Benefit />
      <Testimonial />
      <Footer />
    </div>
  );
}
