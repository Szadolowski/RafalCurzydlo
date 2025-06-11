import { PortfolioContext } from "../store/portfolio-context";
import { use } from "react";
import { motion } from "motion/react"; // eslint-disable-line

function NavElement({ children, position = null, choose, ...props }) {
  const round =
    position === "left" ? "rounded-tl-2xl" : position === "right" ? "rounded-tr-2xl" : "";

  return (
    <motion.div
      layoutId={children}
      className={`group flex justify-center w-full px-5 py-1 border border-solid ${round} ${choose} border-neutral-700  hover:text-neutral-300 hover:bg-neutral-700 transition-colors duration-200 font-semibold cursor-pointer`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function Block({ children }) {
  const burgerMenu = "bg-black w-5 h-1 bg-neutral-400 group-hover::bg-neutral-300";

  const portfolioContext = use(PortfolioContext);

  return (
    <div className="flex flex-col items-start justify-center w-full h-full">
      <nav className="flex flex-row w-full rounded-">
        {portfolioContext.card.map((item, index) => (
          <NavElement
            key={index}
            position={index === 0 ? "left" : null}
            onClick={() => portfolioContext.setChoosenCard(item)}
            choose={
              portfolioContext.choosenCard === item
                ? "bg-neutral-700 text-neutral-300"
                : "bg-neutral-800 text-neutral-400"
            }
          >
            {portfolioContext.information[item]?.title || item}
          </NavElement>
        ))}
        <NavElement
          position={"right"}
          onClick={() => portfolioContext.setChoosenCard("menu")}
          choose={
            portfolioContext.choosenCard === "menu"
              ? "bg-neutral-700 text-neutral-300"
              : "bg-neutral-800 text-neutral-400"
          }
        >
          <div className="flex flex-col items-center justify-center w-full h-full px-5 py-1 space-y-0.5 grup">
            <span className={burgerMenu} />
            <span className={burgerMenu} />
            <span className={burgerMenu} />
          </div>
        </NavElement>
      </nav>

      <div className="flex flex-col items-start object-cover w-full h-full px-10 py-8 border border-solid rounded-b-2xl border-neutral-700 bg-neutral-800">
        {children}
      </div>
    </div>
  );
}
