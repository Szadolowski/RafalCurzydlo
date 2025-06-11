export const cardData = ["Home", "Skills", "Projects", "Contact", "Employer", "Education"];
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
          <p className="mt-4 text-neutral-300">Thank you for visiting my portfolio!</p>
        </>
      );
    },
  },
  Skills: {
    title: "Skills",
    description: () => {
      return (
        <>
          <h1 className="text-2xl font-bold text-neutral-200">My Skills</h1>
          <p className="mt-3 text-neutral-300">
            I have experience in various web development technologies, including:
          </p>
          <ul className="mt-4 list-disc list-inside text-neutral-300">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </>
      );
    },
  },
  Projects: {
    title: "Projects",
    description: () => {
      return (
        <>
          <h1 className="text-2xl font-bold text-neutral-200">My Projects</h1>
          <p className="mt-3 text-neutral-300">
            Here you can find a list of my projects. Each project has a brief description and a link
            to the source code.
          </p>
          <p className="mt-4 text-neutral-300">
            Feel free to explore and check out the code on GitHub!
          </p>
        </>
      );
    },
  },
  Contact: {
    title: "Contact",
    description: () => {
      return (
        <>
          <h1 className="text-2xl font-bold text-neutral-200">Get in Touch</h1>
          <p className="mt-3 text-neutral-300">
            If you have any questions or want to collaborate, feel free to reach out!
          </p>
          <p className="mt-4 text-neutral-300">
            You can contact me via email or connect with me on LinkedIn.
          </p>
        </>
      );
    },
  },
  Employer: {
    title: "Employer",
    description: () => {
      return (
        <>
          <h1 className="text-2xl font-bold text-neutral-200">My Work Experience</h1>
          <p className="mt-3 text-neutral-300">
            I have worked with various companies and clients, gaining valuable experience in web
            development.
          </p>
          <p className="mt-4 text-neutral-300">
            My roles have included front-end development, project management, and team
            collaboration.
          </p>
        </>
      );
    },
  },
  Education: {
    title: "Education",
    school: {
      name: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2022",
    },
    description: () => {
      return (
        <>
          <h1 className="text-2xl font-bold text-neutral-200">My Education</h1>
          <p className="mt-3 text-neutral-300">
            I hold a degree in Computer Science and have completed various online courses in web
            development.
          </p>
          <p className="mt-4 text-neutral-300">
            My education has provided me with a strong foundation in programming and software
            development.
          </p>
        </>
      );
    },
  },
};
