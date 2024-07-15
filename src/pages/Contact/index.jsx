// import { IoMdCall } from "react-icons/io";
// import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
// import { motion } from "framer-motion";
// import Header from "../Career/components/Header";
import Navbar from "../Home/components/Navbar.jsx";
import ContactCard from "./ContactCard.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 px-4 md:flex-row md:space-x-8"> {/* Responsive flex direction */}
      <Navbar />
      <div className="flex flex-col w-full max-w-screen-lg md:flex-row md:space-x-8"> {/* Responsive alignment */}
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  );
}
