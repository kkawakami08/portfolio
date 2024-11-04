import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../data/projectData";
import { FaGithubSquare } from "react-icons/fa";

const ProjectList = () => {
  return (
    <div className="w-full gap-6  flex flex-col items-center px-5 lg:grid lg:grid-cols-3 xl:w-5/6 pb-28 lg:px-10 ">
      <p className="text-pale-green text-5xl tracking-wider w-full lg:col-span-3">
        PROJECTS
      </p>
      <ProjectCard project={ProjectData[0]} />
      <ProjectCard project={ProjectData[1]} />
      <ProjectCard project={ProjectData[2]} />

      <a
        href={"https://github.com/kkawakami08"} // Link to the imported PDF
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Security best practice
        className="flex items-center gap-2 text-2xl font-extralight text-pale-green hover:text-tangerine transition-colors duration-200 lg:col-span-3 lg:justify-center"
      >
        More projects on <FaGithubSquare className=" " />
      </a>
    </div>
  );
};

export default ProjectList;
