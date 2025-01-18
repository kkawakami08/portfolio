import PhoneProjectCard from "./PhoneProjectCard";
import LaptopProjectCard from "./LaptopProjectCard";
import { phoneProjects, laptopProjects } from "@/constants/projectData";

const Projects = () => {
  return (
    <div className=" bg-brand-dark-green py-16 rounded-b-3xl -mt-10 shadow-[0px_4px_0px_0px_#1f2b2d] ">
      <div className="grid grid-cols-1 gap-5 px-5 justify-items-center md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
        <h2 className="text-5xl font-serif text-center tracking-wide  text-gray-100 px-10 pt-5 pb-3 rounded-t-3xl md:col-span-2">
          My Projects
        </h2>

        <PhoneProjectCard project={phoneProjects[0]} />
        <LaptopProjectCard project={laptopProjects[0]} />
      </div>
    </div>
  );
};

export default Projects;
