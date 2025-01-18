import Image from "next/image";
import Link from "next/link";

const LaptopProjectCard = ({ project }) => {
  return (
    <Link href={project.url} className="">
      <div className="grid grid-cols-2 gap-5 relative overflow-hidden p-5 pb-3 rounded-3xl bg-[#ffc44a]  shadow-[0px_4px_0px_0px_#dd6302] min-h-64 max-w-md transition ease-in-out   hover:-translate-y-1 hover:scale-105  duration-300">
        <Image
          src={project.image}
          width="0"
          height="0"
          sizes="100vw"
          alt="positivus thumbnail"
          className="w-80  absolute -bottom-3 -right-28 "
        />{" "}
        <div className="text-white text-lg tracking-wide text-center leading-tight col-span-2 w-full  flex justify-evenly h-fit">
          {project.points.map((point, index) => (
            <p
              key={index}
              className="bg-brand-dark-green rounded-lg  px-5 py-1  shadow-[0px_4px_0px_0px_#262f25]"
            >
              {point}
            </p>
          ))}
        </div>
        {project.skills()}{" "}
      </div>
      <p className="text-white text-center text-2xl font-thin py-5 tracking-wide hover:text-brand-yellow transition-colors">
        {project.title}
      </p>
    </Link>
  );
};

export default LaptopProjectCard;
