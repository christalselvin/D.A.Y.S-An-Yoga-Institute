import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";
import divine from "./assets/divine.jpg";

export default function Divine() {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-[4rem] mt-10 sm:mt-[10rem] py-10 px-4">
      <motion.img
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        src={divine}
        alt="feature"
        className="w-full sm:w-[300px] md:w-[400px] h-auto sm:h-[300px] md:h-[400px] rounded-2xl object-cover"
      />
      <motion.div
        className="w-[90%] sm:w-[400px] md:w-[500px]"
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        animate="visible" // Added animate prop to trigger animation
        whileInView="show"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center sm:text-left">
          Dive in the World Of Health & Fitness
        </h2>
        <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-center sm:text-left">
          At our online yoga studio, we offer a mix of yoga styles, including
          Hatha and Ashtanga Vinyasa, alongside teachings on how to maintain a
          yogic lifestyle for both physical and mental well-being. Our programs
          are designed to cater to both group and individual needs and can be
          taken online from the comfort of your own home. All group class
          duration will be one hour.
        </p>
      </motion.div>
    </div>
  );
}
