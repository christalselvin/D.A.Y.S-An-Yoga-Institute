import { motion } from "framer-motion";

// Mock Data Array
const data = [
  { id: 1, logo: "🚀", title: "Growth", desc: "Achieve personal and professional growth" },
  { id: 2, logo: "💼", title: "Career", desc: "Explore diverse career opportunities" },
  { id: 3, logo: "🤝", title: "Community", desc: "Be part of a supportive community" },
];

export default function Benefit() {
  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-9 md:w-[80%] mx-auto py-10 font-semibold"
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
          className="flex flex-col items-center gap-3 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 120 }}
          aria-label={`Benefit: ${item.title}`}
        >
          <div className="text-4xl text-red-500">{item.logo}</div>
          <h3 className="md:text-xl text-lg font-bold uppercase">{item.title}</h3>
          <div className="md:w-20 h-1 bg-blue-600"></div>
          <p className="text-sm md:text-base text-center text-gray-700">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
