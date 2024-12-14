import { motion } from "framer-motion";
import { FaRocket, FaBriefcase, FaUsers } from "react-icons/fa";

const data = [
  { id: 1, logo: <FaRocket className="text-4xl text-red-500" />, title: "Growth", desc: "Achieve personal and professional growth" },
  { id: 2, logo: <FaBriefcase className="text-4xl text-blue-500" />, title: "Career", desc: "Explore diverse career opportunities" },
  { id: 3, logo: <FaUsers className="text-4xl text-green-500" />, title: "Community", desc: "Be part of a supportive community" },
];

export default function Benefit() {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 py-10">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-semibold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      Benefits of Joining Us
      </motion.h2>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-9 md:w-[80%] mx-auto py-10 font-semibold"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        initial="hidden"
        whileInView="visible"
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 120 }}
            aria-label={`Benefit: ${item.title}`}
          >
            <div className="mb-3">{item.logo}</div>

            <h3 className="md:text-xl text-lg font-bold uppercase">{item.title}</h3>

            <div className="md:w-20 w-16 h-1 bg-blue-600"></div>

            <p className="text-sm md:text-base text-center text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
