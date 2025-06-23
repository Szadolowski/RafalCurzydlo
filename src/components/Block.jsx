import { PortfolioContext } from "../store/portfolio-context";
import { use } from "react";
import { motion } from "motion/react"; // eslint-disable-line
import Skills from "./Skills";
import Contact from "./Information";

function NavElement({ children, position = null, choose, menu = false, ...props }) {
  const round =
    position === "left" ? "rounded-tl-2xl" : position === "right" ? "rounded-tr-2xl" : "";

  const chooseClass = menu ? "lg:rounded-tl-none rounded-tl-2xl  w-full visible" : "";
  return (
    <motion.div
      layoutId={children}
      className={`${chooseClass} group flex justify-center px-5 py-1 lg:w-full invisible lg:visible border border-solid ${round} ${choose} border-neutral-700  hover:text-neutral-300 hover:bg-neutral-700 transition-colors duration-200 font-semibold cursor-pointer`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function Block() {
  const burgerMenu = "bg-black w-5 h-1 bg-neutral-400 group-hover::bg-neutral-300";

  const portfolioContext = use(PortfolioContext);

  const renderContent = () => {
    switch (portfolioContext.choosenCard) {
      case "Home":
        return portfolioContext.information.Home.description();
      case "About":
        return portfolioContext.information.About.description();
      case "Skills":
        return <Skills />;
      case "Projects":
        return portfolioContext.information.Projects.description();
      case "Contact":
        return <Contact />;
      default:
        return <p className="text-neutral-300">Select a card to view its content.</p>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col items-start justify-center object-cover w-full h-full"
    >
      <nav className="flex flex-row flex-wrap w-full lg:flex-nowrap">
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
          menu={true}
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

      <div className="flex flex-col items-start object-cover w-full h-full px-5 py-4 overflow-hidden border border-solid rounded-b-2xl border-neutral-700 bg-neutral-800">
        {renderContent()}
      </div>
    </motion.div>
  );
}
