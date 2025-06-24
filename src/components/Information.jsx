import { PortfolioContext } from "../store/portfolio-context";
import { use } from "react";

export default function Information() {
  const portfolioContext = use(PortfolioContext);
  const data = portfolioContext.information.Information;

  return (
    <div className="flex flex-col h-full w-[40%] pt-6 justify-center text-neutral-300 bg-neutral-800 rounded-lg lg:w-full lg:h-auto">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="flex flex-row space-y-2">
            {item.svg}
            <p className="text-[0.90rem] text-neutral-300">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
