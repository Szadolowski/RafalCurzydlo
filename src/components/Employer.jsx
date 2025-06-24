import { PortfolioContext } from "../store/portfolio-context";
import { use } from "react";
import { motion } from "motion/react"; // eslint-disable-line

export default function Employer() {
  const data = use(PortfolioContext);
  const employerData = data.information.Employer;

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-neutral-300">{employerData.title}</h2>
      <motion.ul
        className="space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.1 }}
      >
        {employerData.company.map((item, index) => (
          <li key={index} className="p-4 rounded-lg bg-neutral-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-neutral-200">{item.name}</h3>
                <p className="text-neutral-400">{item.position}</p>
              </div>
              <motion.p
                className="text-sm text-neutral-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {item.year}
              </motion.p>
            </div>
            <p className="mt-2 text-neutral-300">
              <motion.ul
                className="pl-5 list-disc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.description.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 20 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="text-neutral-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </p>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
