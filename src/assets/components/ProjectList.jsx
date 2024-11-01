import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../data/projectData";
import { FaGithubSquare } from "react-icons/fa";

const ProjectList = () => {
  return (
    <div className="w-full gap-6  flex flex-col items-center px-5 ">
      <p className="text-pale-green text-5xl tracking-wider w-full ">
        PROJECTS
      </p>
      <ProjectCard project={ProjectData[0]} />
      <ProjectCard project={ProjectData[1]} />
      <ProjectCard project={ProjectData[2]} />
      <p className="flex items-center gap-2 text-2xl font-extralight text-pale-green">
        More projects on{" "}
        <a
          href={"https://github.com/kkawakami08"} // Link to the imported PDF
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
        >
          <FaGithubSquare className=" text-tangerine hover:text-pale-green transition-colors duration-200" />
        </a>
      </p>
    </div>
  );
};

export default ProjectList;
