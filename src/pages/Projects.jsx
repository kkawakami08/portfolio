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
    <div className="w-screen bg-gradient-to-br from-dark-green to-dark-green/70 h-fit flex flex-col items-center text-center font-poppins gap-10 relative ">
      <Nav />
      <div className="flex flex-col gap-3 py-8">
        <p className="text-pale-green text-5xl tracking-widest w-full ">
          {project.title}
        </p>
        <p className="text-pale-green text-xl font-light tracking-widest w-full ">
          {project.titleDescription.toUpperCase()}
        </p>
      </div>
      <div className="flex gap-3">{project.skills.map((skill) => skill)}</div>
      <div className="flex items-center  w-full justify-evenly text-pale-green">
        {project.preview && (
          <a
            href={project.preview} // Link to the imported PDF
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
            className=" text-xl font-extralight hover:text-tangerine transition-colors duration-200"
          >
            Live Preview
            <p className="text-xs">(Not meant for mobile)</p>
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
      <div className="text-pale-green font-light tracking-wide text-left px-10">
        <p className="pb-2 text-pale-green text-xl w-full ">Description:</p>
        <p className="text-sm">{project.description}</p>
      </div>
      <img src={project.imgURL} className="px-10 " />
      <div className="text-pale-green font-light tracking-wide text-left px-10">
        <p className="pb-2 text-pale-green text-xl w-full ">
          Responsibilities:
        </p>
        <p className="text-sm">{project.responsibilities}</p>
      </div>
      <div className="text-pale-green font-light tracking-wide text-left px-10 pb-10">
        <p className="pb-2 text-pale-green text-xl w-full ">Challenges:</p>
        <p className="text-sm">{project.challenges}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
