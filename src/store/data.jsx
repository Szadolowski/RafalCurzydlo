import Envelope from "../svg/Envelope";
import GitHub from "../svg/GitHub";
import LinkedIn from "../svg/LinkedIn";
import Pin from "../svg/Pin";
import Telephone from "../svg/Telephone";
import Git from "../svg/Git";
import ReactJS from "../svg/ReactJS";
import Javascript from "../svg/Javascript";
import Html5 from "../svg/Html5";
import Css3 from "../svg/Css3";
import Tailwindcss from "../svg/Tailwindcss";
import Framer from "../svg/Framer";
import Typescript from "../svg/Typescript";
import Nodejs from "../svg/Nodejs";
import Php from "../svg/Php";
import Npm from "../svg/Npm";
import VsCode from "../svg/VsCode";
import Windows from "../svg/Windows";
import Ubuntu from "../svg/Ubuntu";
import AppleBrand from "../svg/AppleBrand";
import Cisco from "../svg/Cisco";

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
        { name: "ReactJS", level: 3.5, svg: <ReactJS /> },
        { name: "JavaScript (ES6+)", level: 4, svg: <Javascript /> },
        { name: "HTML", level: 4, svg: <Html5 /> },
        { name: "CSS (CSS3)", level: 3, svg: <Css3 /> },
        { name: "TailwindCSS", level: 4, svg: <Tailwindcss /> },
        { name: "Framer Motion", level: 3, svg: <Framer /> },
        { name: "TypeScript", level: 2.5, svg: <Typescript /> },
        { name: "Redux", level: 1.5 },
      ],
      backend: [
        { name: "Node.js", level: 2, svg: <Nodejs /> },
        { name: "PHP", level: 2, svg: <Php /> },
        { name: "C++", level: 2 },
        { name: "SQL", level: 1 },
      ],
      tools: [
        { name: "Git", level: 4, svg: <Git /> },
        { name: "GitHub", level: 4, svg: <GitHub width="40px" height="40px" color="#737373" /> },
        { name: "npm", level: 3, svg: <Npm /> },
        { name: "VSCode", level: 5, svg: <VsCode /> },
      ],
      platforms: [
        { name: "Windows", level: 5, svg: <Windows /> },
        { name: "Linux", level: 4, svg: <Ubuntu /> },
        { name: "MacOS", level: 3, svg: <AppleBrand /> },
      ],
      networking: [
        { name: "MikroTik", level: 3 },
        { name: "Cisco", level: 3, svg: <Cisco /> },
        { name: "LAN/WAN configuration", level: 4 },
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
  Information: [
    {
      type: "Email",
      value: <a href="mailto:rafalcurzydlo.biz@gmail.com">rafalcurzydlo.biz@gmail.com</a>,
      svg: <Envelope />,
    },
    {
      type: "Phone",
      value: <a href="tel:+48792802918">(+48) 792 802 918</a>,
      svg: <Telephone />,
    },
    {
      type: "Location",
      value: "Słopnice, Poland",
      svg: <Pin />,
    },
    {
      type: "LinkedIn",
      value: <a href="https://www.linkedin.com/in/rafalcurzydlo/">Linkedin</a>,
      svg: <LinkedIn />,
    },
    {
      type: "GitHub",
      value: <a href="https://github.com/Szadolowski">Github</a>,
      svg: <GitHub />,
    },
  ],
  Employer: {
    title: "Employer",
    company: [
      {
        name: "Laskopol Sp. z o.o.",
        position: "IT Specialist",
        year: "10.2024 - present",
        description: [
          `Front-end development: designing and implementing internal web dashboards in ReactJS and Next.js, includingFront-end development: designing and implementing internal web dashboards using ReactJS and Next.js, including a report-generation panel (REST API, SQL queries), materials and equipment management interface, and client-project-document portal.`,
          `Process automation (JavaScript, Bash): data processing, system monitoring, backups`,
          `Server & permissions administration: NAS storage, user accounts on Windows and Linux`,
          `LAN/WAN networking: configuring switches, routers, firewalls; monitoring and troubleshooting hardware, software, and connectivity issues`,
        ],
      },
      {
        name: "GM PROJEKT",
        position: "Office Intern",
        year: "05.2024 - 10.2024",
        description: [
          `Front-end development: building interactive applications with ReactJS, Next.js, and TailwindCSS (data-driven report panels, responsive UI components)`,
          `Back-end integration: consuming REST APIs, writing SQL queries, developing JavaScript utilities to automate workflows`,
          `Performance optimization: ensuring component efficiency and cross-browser compatibility`,
          `Technical documentation: maintaining and updating user guides and specifications`,
          `Technical support: diagnosing and resolving hardware, software, and network incidents`,
        ],
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
