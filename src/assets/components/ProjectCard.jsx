import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.title}`);
  };

  return (
    <div
      className=" w-full flex flex-col items-center bg-pale-green     rounded-lg group cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex  w-full items-center justify-center gap-5 px-6 py-5 bg-light-green   text-dark-green rounded-t-lg  group-hover:bg-dark-green group-hover:text-pale-green transition-colors duration-200">
        <p className=" text-4xl   text-left ">{project.title.toUpperCase()}</p>
        <p className=" text-xl font-light  text-left ">
          {project.titleDescription}
        </p>
      </div>
      <img src={project.imgURL} className="object-scale-down p-3  " />
    </div>
  );
};

export default ProjectCard;
