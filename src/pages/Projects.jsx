import { useParams } from "react-router-dom";
import Nav from "../assets/components/Nav";
import { ProjectData } from "../data/projectData";
import { FaGithubSquare } from "react-icons/fa";
import Footer from "../assets/components/Footer";

const Projects = () => {
  const { title } = useParams();
  const projectIndex = ProjectData.findIndex(
    (project) => project.title === title
  );
  const project = ProjectData[projectIndex];

  return (
    <div className="w-screen bg-gradient-to-br from-dark-green to-dark-green/70 h-fit  text-center font-poppins  relative flex flex-col items-center justify-between pb-5">
      <Nav />
      <div className="flex flex-col items-center gap-10 lg:px-14 xl:w-3/4 py-10">
        <div className="flex flex-col gap-3 py-8 ">
          <p className="text-pale-green text-5xl tracking-widest w-full ">
            {project.title}
          </p>
          <p className="text-pale-green text-xl font-light tracking-widest w-full ">
            {project.titleDescription.toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col gap-8  md:flex-row  md:w-full px-10 lg:gap-14  md:items-center md:justify-center ">
          <div className="flex gap-3 flex-wrap px-5 justify-center md:flex-nowrap ">
            {project.skills.map((skill) => skill)}
          </div>
          <div className=" flex flex-col sm:flex-row gap-8 items-center  w-full justify-evenly text-pale-green  md:w-fit  ">
            {project.preview && (
              <a
                href={project.preview} // Link to the imported PDF
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
                className=" text-xl font-extralight hover:text-tangerine transition-colors duration-200"
              >
                Live Preview
                {title !== "property rental site" && (
                  <p className="text-xs">(Not meant for mobile)</p>
                )}
              </a>
            )}

            <a
              href={project.github} // Link to the imported PDF
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className=" text-xl font-extralight hover:text-tangerine transition-colors duration-200 flex items-center gap-1"
            >
              <FaGithubSquare className="text-2xl " /> Github Repo
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10 2xl:w-3/4">
          <div className="text-pale-green font-light tracking-wide text-left px-10 ">
            <p className="pb-2 text-pale-green text-xl w-full ">Description:</p>
            <p className="text-sm">{project.description}</p>
          </div>
          <div className="w-full px-10 lg:col-start-1 lg:col-span-2 lg:row-start-1 flex justify-center">
            <img
              src={project.imgURL}
              className="2xl:w-3/4 border-2 md:border-4 rounded-lg border-dark-green"
            />
          </div>
          <div className="text-pale-green font-light tracking-wide text-left px-10 ">
            <p className="pb-2 text-pale-green text-xl w-full ">
              Responsibilities:
            </p>
            <p className="text-sm">{project.responsibilities}</p>
          </div>
          <div className="text-pale-green font-light tracking-wide text-left px-10 pb-10 lg:col-span-2">
            <p className="pb-2 text-pale-green text-xl w-full ">Challenges:</p>
            <p className="text-sm">{project.challenges}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
