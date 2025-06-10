import { createContext } from "react";

export const PortfolioContext = createContext({
  card: [],
  choosenCard: null,
  setChoosenCard: () => {},
  information: [],
});
