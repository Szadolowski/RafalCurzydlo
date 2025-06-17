import { use } from "react";
import { PortfolioContext } from "../store/portfolio-context";
import { motion } from "motion/react"; // eslint-disable-line

export default function MenuElements() {
  const portfolioContext = use(PortfolioContext);
  return (
    <motion.div
      className="grid items-center justify-center w-full h-full grid-cols-3 px-8 py-4 "
      layout
    >
      {portfolioContext.card.map((item, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-3/4 h-24 px-4 py-2 font-semibold transition-colors duration-200 rounded-lg cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
          key={index}
          onClick={() => portfolioContext.setChoosenCard(item)}
          layoutId={item}
        >
          {portfolioContext.information[item]?.title || item}
        </motion.div>
      ))}
    </motion.div>
  );
}
