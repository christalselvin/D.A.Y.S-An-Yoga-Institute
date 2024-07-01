import { motion } from "framer-motion";
import { image } from "../../data/data";
import Navbar from "../../Home/components/Navbar";

export default function Levels() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow">
        <h3 className="text-2xl md:text-3xl text-gray-900 pl-8 mt-8 md:mt-16 font-semibold">
          Choose your style & Level
        </h3>
        <div className="container flex flex-wrap justify-center my-8">
          {image.map((item) => (
            <motion.li
              key={item.id}
              className="list-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 px-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100, duration: 1.8 }}
            >
              <motion.img
                src={item.img}
                alt={`${item.id}`}
                className="w-full h-auto rounded-lg"
                style={{ maxWidth: "100%" }}
              />
            </motion.li>
          ))}
        </div>
      </div>
      <footer className="bg-gray-200 text-center py-4">
        Your footer content here
      </footer>
    </div>
  );
}
