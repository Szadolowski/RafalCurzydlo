import SideBar from "./components/SideBar";
import Block from "./components/Block";
import { PortfolioContext } from "./store/portfolio-context";

function App() {
  return (
    <PortfolioContext value={{ job: [], card: ["Home", "Projects", "Contact"] }}>
      <div className="flex flex-row items-center justify-center w-full h-screen p-16 space-x-16 bg-neutral-900">
        <SideBar />
        <Block>
          <h1 className="text-2xl font-bold text-neutral-200">Hello 👋</h1>
          <h2 className="mt-3 text-xl font-bold text-neutral-400">Welcome to my portfolio</h2>
          <p className="mt-4 text-neutral-300">
            This is a simple portfolio page built with React and Tailwind CSS. It showcases my
            skills and projects.
          </p>
          <p className="mt-4 text-neutral-300">
            Feel free to explore and learn more about me. If you have any questions or want to get
            in touch, please reach out!
          </p>
          <p className="mt-4 text-neutral-300">
            You can find my projects on GitHub and connect with me on LinkedIn.
          </p>
          <p className="mt-4 text-neutral-300">Thank you for visiting my portfolio!</p>
        </Block>
      </div>
    </PortfolioContext>
  );
}

export default App;
