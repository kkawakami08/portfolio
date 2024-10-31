import wingspan from "@/assets/wingspan.png";
import trails from "@/assets/trails.png";
import roland from "@/assets/roland.png";

import AfterEffects from "@/assets/icons/after-effects.svg";
import Css from "@/assets/icons/css.svg";
import Git from "@/assets/icons/git.svg";
import Html from "@/assets/icons/html.svg";
import Illustrator from "@/assets/icons/illustrator.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Mongo from "@/assets/icons/mongo.svg";
import Next from "@/assets/icons/next.svg";
import React from "@/assets/icons/react.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import Typescript from "@/assets/icons/typescript.svg";
import Vite from "@/assets/icons/vite.svg";
import Jotai from "@/assets/icons/jotai.svg";

const iconClassName = "w-10 h-10 fill-beige";

export const ProjectData = [
  {
    title: "wingspan",
    titleDescription: "Board Game Recreation",
    skills: [
      <Javascript className={iconClassName} key={"js"} />,
      <React className={iconClassName} key={"rt"} />,
      <Tailwind className={iconClassName} key={"tw"} />,
      <Vite className={iconClassName} key={"vt"} />,
      <Jotai className={iconClassName} key={"jt"} />,
      <Git className={iconClassName} key={"gt"} />,
    ],
    preview: "https://kkawakami08.github.io/wingspan-vite/",
    github: "https://github.com/kkawakami08/wingspan-vite",
    imgURL: wingspan,
    description:
      "An online adaptation of the Wingspan board game, built with Vite, React, Tailwind CSS, and Jotai. This project involved replicating the game's complex logic and dynamic gameplay through responsive UI components like the Bird Feeder, Habitat Mat, and Bird Cards.",
    responsibilities:
      "I created key gameplay elements and managed intricate game states. I also designed the user interactions, handling actions like feeding, laying eggs, and playing cards.",
    challenges:
      "Integrating unique bird powers, resource management, and player actions required extensive problem-solving. Using Jotai for state management, I ensured seamless real-time updates for a consistent user experience.",
    results:
      "50% of the game logic is complete, with a functional UI that’s set to be reskinned for enhanced visuals.",
  },
  {
    title: "trails",
    titleDescription: "Board Game Recreation",
    preview: "https://kkawakami08.github.io/trails-game-app/",
    github: "https://github.com/kkawakami08/trails-game-app",
    skills: [
      <Javascript className={iconClassName} key={"js"} />,
      <React className={iconClassName} key={"rt"} />,
      <Tailwind className={iconClassName} key={"tw"} />,
      <Vite className={iconClassName} key={"vt"} />,
      <Git className={iconClassName} key={"gt"} />,
      <Illustrator className={iconClassName} key={"ai"} />,
    ],
    imgURL: trails,
    description:
      "A digital recreation of the TRAILS board game, built using React, Vite, and Tailwind CSS. The app aims to replicate the game's engaging visuals and mechanics. Key design elements like the dynamic trail path and badge components are fully implemented.",
    responsibilities:
      "I handled the front-end development, creating components for trail locations and badges, each with unique attributes like resource type and actions. Using Figma for design planning, I translated the visual layout into a responsive interface with Tailwind CSS.",
    challenges:
      "Balancing visual fidelity with code efficiency was a priority, leading me to simplify trail locations into two reusable components. Designing for multiple player configurations also required adaptable, dynamic layout rendering.",
    results:
      "While design aspects are largely complete, upcoming goals include integrating full game logic and enhancing the user experience with improved interactions and refined visuals.",
  },
  {
    title: "refactor",
    titleDescription: "AI Generated Code",
    preview: null,
    github: "https://github.com/kkawakami08/roland-j6-refactored",
    skills: [
      <Javascript className={iconClassName} key={"js"} />,
      <React className={iconClassName} key={"rt"} />,
      <Tailwind className={iconClassName} key={"tw"} />,
      <Vite className={iconClassName} key={"vt"} />,
      <Git className={iconClassName} key={"gt"} />,
    ],
    imgURL: roland,
    description:
      "A refactoring project aimed at optimizing an existing application originally developed with AI-assisted code. The project focused on enhancing code quality, organization, and readability for easier maintenance and future development.",
    responsibilities:
      "I conducted a code review to identify redundancies, restructured the codebase for better modularity, and applied naming conventions for clarity. I also updated comments and documentation to enhance code usability.",
    challenges:
      "Refactoring required balancing simplicity with functionality, particularly in eliminating duplicate code without impacting core features. Improving readability and maintainability was key for future scalability.",
    results:
      "The refactored application is now more efficient and accessible, establishing a cleaner codebase and best practices for ongoing development.",
  },
];
