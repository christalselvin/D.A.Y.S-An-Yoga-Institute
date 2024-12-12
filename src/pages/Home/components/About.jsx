import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import about from "../components/assets/aboutimage.png";
import AdsClickTwoToneIcon from '@mui/icons-material/AdsClickTwoTone';
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const statsData = [
    { value: "25k", label: "Students" },
    { value: "100+", label: "Courses" },
    { value: "50+", label: "Trainers" },
    { value: "35k", label: "Reviews" },
  ];

  return (
    <div ref={ref}>
      <motion.img
        src={about}
        alt="About Image"
        className="w-[320px] h-auto relative left-[10rem] rounded-[2rem]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
      <motion.p
        className="md:text-3xl font-Poynter Oldstyle Display font-['poppins'] relative top-[-360px] justify-self-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        About D.A.Y.S An Yoga Institute
      </motion.p>
      <motion.div
        className="new-content relative top-[-330px] right-[-550px] w-[60ch] text-3xl font-Poynter Oldstyle Display font-['poppins']"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-lg mt-4">
          <AdsClickTwoToneIcon style={{ color: 'red', marginRight: '8px' }} />
          D.A.Y.S An Yoga Institute is a sanctuary for those seeking peace, balance, and holistic wellness.
          Nestled in the heart of nature, our institute offers a serene environment where individuals can connect with their inner selves.
          Our experienced instructors guide students through a variety of yoga practices, ensuring that each session is tailored to meet the unique needs of the participants.
          We believe in the transformative power of yoga and strive to create a supportive community that fosters personal growth and well-being.
          Whether you are a beginner or an advanced practitioner, our classes are designed to challenge and inspire you.
          Join us on a journey of self-discovery and rejuvenation at D.A.Y.S An Yoga Institute, where every breath brings you closer to harmony and tranquility.
        </p>
        <div className="flex justify-around items-center  mt-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-3xl font-bold text-red-500">{stat.value}</h2>
              <p className="text-lg text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
        {/* Button at the end */}
        <div className="flex justify-center mt-8">
          <button 
            className="px-4 py-2 bg-yellow-500 text-white text-lg rounded-full hover:bg-red-600 transition duration-300"
           
          >
           <Link to="contact">  Join Us Today</Link>
          </button>
        </div>
      </motion.div>
    </div>
  );
}