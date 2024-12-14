import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import about from "../components/assets/Home/aboutimage.png";
import AdsClickTwoToneIcon from "@mui/icons-material/AdsClickTwoTone";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const statsData = [
    { id: 1, value: "25k", label: "Students" },
    { id: 2, value: "100+", label: "Courses" },
    { id: 3, value: "50+", label: "Trainers" },
    { id: 4, value: "35k", label: "Reviews" },
  ];

  return (
    <div ref={ref} className="px-4 sm:px-6 md:px-16 lg:px-32 py-10">
      <motion.img
        src={about}
        alt="About Image"
        className="w-full h-auto mx-auto rounded-[2rem] mt-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h2
        className="text-center text-3xl md:text-4xl font-semibold mt-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About D.A.Y.S An Yoga Institute
      </motion.h2>
      <motion.div
        className="new-content mt-8 text-xl md:text-3xl font-Poynter Oldstyle Display font-['poppins']"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-lg">
          <AdsClickTwoToneIcon style={{ color: "red", marginRight: "8px" }} />
          D.A.Y.S An Yoga Institute is a sanctuary for those seeking peace,
          balance, and holistic wellness. Nestled in the heart of nature, our
          institute offers a serene environment where individuals can connect
          with their inner selves. Our experienced instructors guide students
          through a variety of yoga practices, ensuring that each session is
          tailored to meet the unique needs of the participants. We believe in
          the transformative power of yoga and strive to create a supportive
          community that fosters personal growth and well-being. Whether you are
          a beginner or an advanced practitioner, our classes are designed to
          challenge and inspire you. Join us on a journey of self-discovery and
          rejuvenation at D.A.Y.S An Yoga Institute, where every breath brings
          you closer to harmony and tranquility.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center items-center mt-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        initial="hidden"
        whileInView="visible"
      >
        {statsData.map((stat) => (
          <motion.div
            key={stat.id}
            className="text-center mb-6 md:mb-0 w-1/2 sm:w-1/4 lg:w-1/5 px-4"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h2 className="text-3xl font-bold text-red-500">{stat.value}</h2>
            <p className="text-lg text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <button className="px-4 py-2 bg-yellow-500 text-white text-lg rounded-full hover:bg-red-600 transition duration-300">
          <Link to="contact">Join Us Today</Link>
        </button>
      </motion.div>
    </div>
  );
}
