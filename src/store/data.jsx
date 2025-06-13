import Envelope from "../svg/Envelope";
import GitHub from "../svg/GitHub";
import LinkedIn from "../svg/LinkedIn";
import Pin from "../svg/Pin";
import Telephone from "../svg/Telephone";

export const cardData = ["Home", "Skills", "Projects", "Contact", "Employer", "Education"];
export const information = {
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
    skillsGroup: {
      frontend: [
        { name: "ReactJS", level: 3 },
        { name: "JavaScript (ES6+)", level: 3 },
        { name: "HTML", level: 3 },
        { name: "CSS (CSS3)", level: 3 },
        { name: "TailwindCSS", level: 3 },
        { name: "Framer Motion", level: 2 },
        { name: "TypeScript", level: 2 },
        { name: "Redux", level: 2 },
      ],
      backend: [
        { name: "Node.js", level: 2 },
        { name: "PHP", level: 1 },
        { name: "C++", level: 1 },
        { name: "SQL", level: 2 },
      ],
      tools: [
        { name: "Git", level: 3 },
        { name: "GitHub", level: 3 },
        { name: "npm", level: 3 },
        { name: "VSCode", level: 3 },
      ],
      platforms: [
        { name: "Windows", level: 3 },
        { name: "Linux", level: 2 },
        { name: "MacOS", level: 1 },
      ],
      networking: [
        { name: "MikroTik", level: 2 },
        { name: "Cisco", level: 2 },
        { name: "LAN/WAN configuration", level: 2 },
      ],
      languages: [
        { name: "Polish", level: 5 },
        { name: "English", level: 3 },
      ],
    },
  },
  Projects: {
    title: "Projects",
    description: () => {
      return (
        <>
          <h1 className="text-4xl font-bold text-neutral-200">Work in progress</h1>
        </>
      );
    },
  },
  Contact: {
    title: "Contact",
    information: [
      {
        type: "Email",
        value: "rafallcurzydlo.biz@gmail.com",
        svg: <Envelope />,
      },
      {
        type: "Phone",
        value: "+48 792 802 918",
        svg: <Telephone />,
      },
      {
        type: "Location",
        value: "Słopnice, Poland",
        svg: <Pin />,
      },
      {
        type: "LinkedIn",
        value: "https://www.linkedin.com/in/rafalcurzydlo/",
        svg: <LinkedIn />,
      },
      {
        type: "GitHub",
        value: "https://github.com/Szadolowski",
        svg: <GitHub />,
      },
      {
        type: "Portfolio",
        value: "https://twojastrona.pl", // Replace with your actual portfolio URL
      },
    ],
  },
  Employer: {
    title: "Employer",
    company: [
      {
        name: "Laskopol Sp. z o.o.",
        position: "IT Specialist",
        year: "2024 – present",
        description:
          "Developed internal dashboards and automation tools in ReactJS and Next.js, streamlining reporting and materials management for the company.",
      },
      {
        name: "GM PROJEKT",
        position: "Office Intern",
        year: "2024",
        description:
          "Created data-driven reporting panels and optimized UI components in ReactJS, improving workflow efficiency and technical documentation.",
      },
    ],
  },
  Education: {
    title: "Education",
    school: [
      {
        name: "Akademia Nauk Stosowanych w Nowym Sączu",
        degree: "Bachelor of Science in Applied Computer Science",
        year: "2024 - present",
      },
      {
        name: "Zespół Szkół Technicznych i Ogólnokształcących w Limanowej",
        degree: "Technik Informatyk",
        year: "2019 - 2024",
      },
    ],
  },
};
