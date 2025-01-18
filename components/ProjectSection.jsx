"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProjectSection = ({ id, project }) => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div
      className="bg-brand-light-green text-brand-very-dark-green rounded-lg   "
      id={id}
    >
      <div
        className={`text-3xl font-semibold font-serif tracking-wide  gap-5 flex rounded-lg hover:bg-brand-green transition group `}
        onClick={() => setOpenInfo((prev) => !prev)}
      >
        <div
          className={`bg-brand-dark-green px-5 flex items-center ${
            openInfo ? "rounded-br-lg rounded-tl-lg" : "rounded-l-lg"
          }`}
        >
          {openInfo ? (
            <FaChevronUp className="stroke-1 text-brand-light-green text-3xl " />
          ) : (
            <FaChevronDown className="stroke-1 text-brand-light-green text-3xl" />
          )}
        </div>
        <h3 className="py-3 group-hover:text-gray-100 tracking-wider">
          {project.title}{" "}
        </h3>
      </div>

      {/* showdiv */}
      {openInfo && (
        <div className=" grid grid-cols-1 justify-items-center  gap-5 px-5 pt-10 pb-10  ">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
            <Image
              src={project.image}
              width={0}
              height={0}
              sizes="100vw"
              alt={project.title}
              className="max-h-80 w-auto lg:justify-self-end "
            />

            <div className="grid grid-cols-1 justify-items-center gap-5 lg:justify-items-start  ">
              <div className="flex flex-wrap justify-center items-center lg:justify-start gap-3 ">
                {project.points.map((point, index) => (
                  <p
                    key={index}
                    className="bg-brand-yellow text-brand-dark-green font-bold px-5 text-xl text-center py-2 rounded-lg shadow-[0px_4px_0px_0px_#a2470a] "
                  >
                    {point}
                  </p>
                ))}
              </div>
              <div className="">{project.skills()}</div>
              <div className="flex items-center gap-3  lg:col-span-1 ">
                <a
                  href={project.livePreview}
                  target="_blank"
                  className="bg-brand-dark-green text-gray-100 font-bold px-5 text-xl text-center py-2 rounded-lg shadow-[0px_4px_0px_0px_#1f2b2d] hover:bg-brand-yellow hover:text-brand-dark-green transition"
                >
                  Live Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-brand-dark-green text-gray-100 text-xl p-3 rounded-lg shadow-[0px_4px_0px_0px_#1f2b2d] hover:bg-brand-yellow hover:text-brand-dark-green transition "
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          {project.description()}
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
