import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Benefit from "./components/Benefit"
import Testimonial from "./components/Testimonial"
import Inner from "./components/Inner";
import OurOffer from "./components/Ouroffer";
import Powerofyoga from "./components/Powerogyoga";
import Chatbot from "./components/Chatbot";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Welcome />
      <About />
      <Benefit />
      <Chatbot />
      <Testimonial />
      <Inner />
      <OurOffer />
      <Powerofyoga />
    </div>
  );
}
