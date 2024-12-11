import { motion } from "framer-motion";
import { data } from "../../data/data";

export default function Benefit() {
  return (
    <motion.div
      className="flex items-center gap-9 md:w-[80%] mx-auto py-10 md:py-[0rem] font-semibold"
      variants={{
        hidden: { opacity: 1, scale: 1 },
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      initial="hidden"
      whileInView="visible"
    >
      {data.map((item) => (
        <motion.li
          key={item.id}
          className="flex flex-col items-center gap-2 p-4"
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          exit={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 100, duration: 1.8 }}
        >
          <div className="p-4">
            <p style={{ color: 'red' }}>{item.logo}</p>
          </div>
          <h3 className="md:text-xl uppercase">{item.title}</h3>
          <div className="md:w-20 h-1 bg-blue-600"></div>
          <p className="text-sm md:text-base text-center">{item.desc}</p>
        </motion.li>
      ))}
    </motion.div>
  );
}
