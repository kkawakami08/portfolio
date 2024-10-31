import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../data/projectData";

const ProjectList = () => {
  return (
    <div className="w-full gap-6  flex flex-col items-center  ">
      <p className="text-pale-green text-5xl tracking-wider w-full ">
        PROJECTS
      </p>
      <ProjectCard project={ProjectData[0]} />
      <ProjectCard project={ProjectData[1]} />
      <ProjectCard project={ProjectData[2]} />
      <p>Check out my github</p>
    </div>
  );
};

export default ProjectList;
