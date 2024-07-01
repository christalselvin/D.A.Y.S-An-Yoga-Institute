import { Check, Star, Award, Trophy, Medal } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";

export default function Achievement() {
  const achievements = [
    {
      icon: <Medal />,
      text: "In the year 2012, got the first position in the speech competition held at Shri Ram Krishna Math, Lucknow."
    },
    {
      icon: <Star />,
      text: "Got the first position in the online Yogasan Championship organized by Daria Bria University Jharkhand in the year 2021.",
    },
    {
      icon: <Award />,
      text: "Got third place in the senior category of traditional event in the district level Yogasan sports competition organized by Uttar Pradesh Yoga Sport Association in the year 2022.",
    },
    {
      icon: <Trophy />,
      text: "In the year 2022, got the first position in the artistic event in the district level Yogasan sports competition organized by the Uttar Pradesh Yogasan Sports Association.",
    },
    {
      icon: <Medal />,
      text: "In the year 2021, got second place from the state of Uttar Pradesh in the Yogasana competition organized by the Ministry of AYUSH.",
    },
    {
      icon: <Star />,
      text: "In the year 2023, Dus Ka Dum Women's Yogasan Competition was organized under Khelo India, in which gained experience of working as a judge.",
    },
    {
      icon: <Medal />,
      text: "In the year 2023, gained experience of working as a judge in the Uttar Pradesh G 20 Yoga League organized by the Directorate of Sports.",
    },
  ];

  return (
    <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col justify-center items-center py-10 gap-4 px-4 pb-32 overflow-auto text-sm sm:text-base md:text-lg text-center sm:text-left font-semibold">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-4xl text-center">Achievements</h2>
      </div>
      <motion.ul
        className="w-full md:w-[800px] flex flex-col gap-6"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
      >
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2 items-center">
            <span className="text-xl">{achievement.icon}</span>
            <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
              {achievement.text}
            </p>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
