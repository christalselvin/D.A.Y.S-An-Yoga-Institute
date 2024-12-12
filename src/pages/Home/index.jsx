import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Benefit from "./components/Benefit"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer";
import Inner from "./components/Inner";
import OurOffer from "./components/Ouroffer";
import Powerofyoga from "./components/Powerogyoga";


export default function Home() {
  return (
    <div className="">
      <Welcome />
      {/* <About /> */}
      {/* <Benefit /> */}
      {/* <Testimonial /> */}
      <Inner />
      <OurOffer />
      <Powerofyoga />
      <Footer />
    </div>
  );
}
