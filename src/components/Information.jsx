import { PortfolioContext } from "../store/portfolio-context";
import { use } from "react";

export default function Information() {
  const portfolioContext = use(PortfolioContext);
  const data = portfolioContext.information.Information;

  return (
    <div className="flex flex-col h-full w-[40%]  justify-center px-4 py-2 text-neutral-300 bg-neutral-800 rounded-lg lg:w-full lg:h-auto">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="flex flex-row">
            {item.svg}
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
