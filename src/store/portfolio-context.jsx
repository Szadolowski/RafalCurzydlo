import { createContext } from "react";

export const PortfolioContext = createContext({
  card: ["Home", "Skills", "Projects", "Contact", "Employer", "Education"],
  choosenCard: "Home",
  setChoosenCard: () => {},
  information: {
    Home: {
      title: "",
      description: () => <></>,
    },
    Skills: {
      title: "",
      skillsGroup: {
        frontend: [{ name: "", level: 0, svg: null }],
        backend: [{ name: "", level: 0, svg: null }],
        tools: [{ name: "", level: 0, svg: null }],
        platforms: [{ name: "", level: 0, svg: null }],
        networking: [{ name: "", level: 0, svg: null }],
        languages: [{ name: "", level: 0 }],
      },
    },
    Projects: {
      title: "",
      description: () => <></>,
    },
    Contact: {
      title: "",
      information: [
        {
          type: "",
          value: "",
          svg: null,
        },
      ],
    },
    Employer: {
      title: "",
      company: [
        {
          name: "",
          position: "",
          year: "",
          description: "",
        },
      ],
    },
    Education: {
      title: "",
      school: [
        {
          name: "",
          degree: "",
          year: "",
        },
      ],
    },
  },
});
