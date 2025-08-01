import SideBar from "./components/SideBar";
import Block from "./components/Block";
import { PortfolioContext } from "./store/portfolio-context";
import { useState } from "react";
import { cardData, information } from "./store/data";
import MenuElements from "./components/MenuElements";
import { motion, LayoutGroup } from "motion/react"; // eslint-disable-line

function App() {
  const [choosenCard, setChoosenCard] = useState("Home");

  return (
    <PortfolioContext
      value={{
        card: cardData,
        choosenCard: choosenCard,
        setChoosenCard: setChoosenCard,
        information: information,
      }}
    >
      <LayoutGroup>
        <motion.div
          className="flex flex-col items-center justify-center w-full h-screen p-5 space-x-16 md:p-12 lg:flex-row bg-neutral-900"
          layout
        >
          <SideBar />
          {choosenCard === "menu" ? <MenuElements /> : <Block />}
        </motion.div>
      </LayoutGroup>
    </PortfolioContext>
  );
}

export default App;
