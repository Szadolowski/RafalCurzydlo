import { PortfolioContext } from "../store/portfolio-context";
import { use } from "react";
import { motion } from "motion/react"; // eslint-disable-line

export default function Education() {
  const data = use(PortfolioContext);
  const educationData = data.information.Education;

  return (
    <div className="w-full h-full p-6 rounded-lg">
      <h2 className="mb-4 text-2xl font-bold text-neutral-300">{educationData.title}</h2>
      <motion.ul
        className="space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {educationData.school.map((item, index) => (
          <li key={index} className="p-4 rounded-lg bg-neutral-800">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-neutral-200">{item.name}</h3>
                <p className="text-neutral-400">{item.degree}</p>
              </motion.div>
              <motion.p
                className="text-sm text-neutral-500"
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 10, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {item.year}
              </motion.p>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
