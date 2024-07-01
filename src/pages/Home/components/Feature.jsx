import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";
import { FaRegHandPointRight } from "react-icons/fa";
import pose from "../components/assets/pose-2.jpg";

export default function Feature() {
  return (
    <section className="feature-container container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8 mt-[-14rem] px-4 overflow-hidden">
      {/* Feature Content */}
      <motion.div className="flex flex-col gap-4 md:gap-4 md:w-1/2">
        <motion.h2
          className="text-2xl md:text-[2.5rem] text-center md:text-left font-semibold"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          Why You Should Learn
          <br /> From Us?
        </motion.h2>
        <motion.p
          className="text-md md:text-lg leading-relaxed"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          <div className="flex items-start gap-3">
            <FaRegHandPointRight className="text-8xl text-black" /> {/* Applied text-2xl class */}
            <p className="text-md md:text-lg font-semibold">
              Continuing your journey with us means unlocking the transformative power of yoga.
              Immerse yourself in our rich heritage and embrace the holistic approach to well-being.
              Explore diverse practices tailored to your needs and aspirations. Join our vibrant community
              and embark on a path of self-discovery and growth!
            </p>
          </div>
          <br />
          <div className="flex items-start gap-3">
            <FaRegHandPointRight className="text-8xl text-black" /> {/* Applied text-2xl class */}
            <p className="text-md md:text-lg font-semibold">
              We first prepare a protocol related to yoga asana, pranayam, and meditation
              considering your physical and mental problems. We work 5 days a week on 5 major
              categories of Yogasana: Back Bending, Forward Bending, Twisting, Hand Balancing,
              and Leg Balancing to maintain perfect physical and mental health.
            </p>
          </div>
        </motion.p>
      </motion.div>

      {/* Feature Image */}
      <motion.img
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        src={pose}
        alt="Yoga pose demonstrating flexibility"
        className="w-full sm:w-[250px] md:w-[380px] lg:w-[420px] h-auto sm:h-[300px] md:h-[420px] lg:h-[500px] rounded-2xl object-cover"
        loading="lazy"
      />
    </section>
  );
}
