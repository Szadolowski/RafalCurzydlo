import SideBar from "./components/SideBar";
import Block from "./components/Block";
import { PortfolioContext } from "./store/portfolio-context";
import { useState } from "react";
import { cardData, information } from "./store/data";

function App() {
  const [choosenCard, setChoosenCard] = useState(null);

  return (
    <PortfolioContext
      value={{
        card: cardData,
        choosenCard: choosenCard,
        setChoosenCard: setChoosenCard,
        information: information,
      }}
    >
      <div className="flex flex-row items-center justify-center w-full h-screen p-16 space-x-16 bg-neutral-900">
        <SideBar />
        <Block>
          {typeof information[choosenCard]?.description === "function"
            ? information[choosenCard].description()
            : information[choosenCard]?.description}
        </Block>
      </div>
    </PortfolioContext>
  );
}

export default App;
