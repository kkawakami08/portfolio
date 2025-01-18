import {
  RiNextjsFill,
  RiJavascriptFill,
  RiReactjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
} from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoPython,
  BiLogoMongodb,
  BiGitBranch,
} from "react-icons/bi";
import {
  SiVite,
  SiMongoose,
  SiFigma,
  SiAdobeillustrator,
} from "react-icons/si";

const skillset = [
  {
    title: "HTML",
    icon: () => <RiHtml5Fill />,
  },
  {
    title: "CSS",
    icon: () => <RiCss3Fill />,
  },
  {
    title: "Javascript",
    icon: () => <RiJavascriptFill />,
  },
  {
    title: "Typescript",
    icon: () => <BiLogoTypescript />,
  },
  {
    title: "React",
    icon: () => <RiReactjsFill />,
  },
  {
    title: "Tailwind CSS",
    icon: () => <RiTailwindCssFill />,
  },
  {
    title: "Next.js",
    icon: () => <RiNextjsFill />,
  },
  {
    title: "Vite",
    icon: () => <SiVite />,
  },
  {
    title: "Node",
    icon: () => <RiNodejsFill />,
  },
  {
    title: "Git",
    icon: () => <BiGitBranch />,
  },
  {
    title: "Figma",
    icon: () => <SiFigma />,
  },
  {
    title: "Illustrator",
    icon: () => <SiAdobeillustrator />,
  },
  {
    title: "MongoDB",
    icon: () => <BiLogoMongodb />,
  },
  {
    title: "Mongoose",
    icon: () => <SiMongoose />,
  },
];

const Skills = () => {
  return (
    <div className=" text-zinc-800  py-10 -mb-1 flex flex-col  items-center   lg:mx-auto ">
      <h2 className="text-5xl font-serif  tracking-wide bg-brand-dark-green text-gray-100 px-10 pt-5 pb-3 rounded-t-3xl -z-10 md:-ml-96">
        My Skillsets
      </h2>
      <div className=" bg-brand-light-green w-full px-5 py-10 rounded-b-3xl  shadow-[0px_4px_0px_0px_#1f2b2d] ">
        <div className="md:max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
          {skillset.map((skill, index) => (
            <div
              className="flex items-center gap-2 bg-brand-green text-gray-100 w-fit px-3 py-1 rounded-lg shadow-[0px_4px_0px_0px_#3a4e50] cursor-default "
              key={index}
            >
              <span className="text-3xl">{skill.icon()}</span>
              <p className="text-xl  tracking-wide">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
