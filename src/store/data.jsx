export const cardData = ["Home", "Projects", "Contact"];
export const information = {
  Menu: {
    title: "Menu",
    description:
      "This is the menu section where you can find all the links to my projects and contact information.",
  },
  Home: {
    title: "Home",
    description: () => {
      return (
        <>
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
          <p className="mt-4 text-neutral-300">Thank you for visiting my portfolio!</p>{" "}
        </>
      );
    },
  },
  Projects: {
    title: "Projects",
    description: "Here you can find a list of my projects and their descriptions.",
  },
  Contact: {
    title: "Contact",
    description: "If you want to get in touch with me, you can find my contact information here.",
  },
  About: {
    title: "About",
    description: "This section contains information about my background and skills.",
  },
  Skills: {
    title: "Skills",
    description: "Here you can find a list of my skills and technologies I work with.",
  },
};
