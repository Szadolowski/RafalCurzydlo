import { PortfolioContext } from "../store/portfolio-context";
import { use, useState } from "react";
import { LayoutGroup, AnimatePresence, motion } from "motion/react";

export default function Skills() {
  const portfolioContext = use(PortfolioContext);
  const data = portfolioContext.information.Skills;
  const [skillsGroup, setSkillsGroup] = useState("frontend");
  const categorys = Object.keys(data.skillsGroup);

  return (
    <div className="w-full h-full">
      <h1 className="text-2xl font-bold text-neutral-200">{data.title}</h1>
      <main className="flex flex-row w-full h-full space-x-5">
        <aside>
          <ul>
            {categorys.map((name, index) => {
              let classes =
                skillsGroup === name
                  ? "bg-neutral-700 text-neutral-300"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700";

              return (
                <li className="mb-2" key={index}>
                  <button
                    key={index}
                    className={`py-2 pl-2 rounded-lg transition-colors duration-200 text-left w-24 ${classes}`}
                    onClick={() => setSkillsGroup(name)}
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <section className="w-full">
          {data.skillsGroup[skillsGroup].map((skill, index) => {
            return (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                layout
                key={`${skillsGroup}-${skill.name}`}
                className="flex flex-row items-center justify-between w-full h-16 px-4 py-2 mb-2 text-xl font-bold border rounded-lg bg-neutral-800 text-neutral-300"
              >
                <div className="flex items-center flex-row w-[40%]">
                  {skill.svg ? (
                    <div className="w-8 h-8 mr-2">{skill.svg}</div>
                  ) : (
                    <div className="w-8 h-8 mr-2 rounded-full bg-neutral-700"></div>
                  )}
                  {skill.name}
                </div>
                <div className="flex items-start border-2 rounded-sm border-neutral-200 w-[60%] h-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level * 20}%` }}
                    className={`h-full w-full  rounded-r-sm`}
                    style={{
                      backgroundImage: `linear-gradient(to right, #ff4d00 ${
                        skill.level * 20
                      }%, transparent ${skill.level * 20}%)`,
                    }}
                  ></motion.div>
                </div>
              </motion.section>
            );
          })}
        </section>
      </main>
    </div>
  );
}
