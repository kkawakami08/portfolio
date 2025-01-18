"use client";

import Image from "next/image";
import kaoriPoint from "@/assets/images/kaori-project.png";
import kaoriPointSmall from "@/assets/images/kaori-project-small.png";
import Link from "next/link";
import ProjectSection from "@/components/ProjectSection";
import { phoneProjects, laptopProjects } from "@/constants/projectData";

const ProjectsPage = () => {
  return (
    <div className="pb-20 lg:max-w-4xl lg:mx-auto">
      <div className="bg-brand-yellow -mt-20 pt-44 shadow-[0px_4px_0px_0px_#a2470a] rounded-b-3xl  ">
        <h2 className="font-serif text-6xl text-[#1f2b2d] text-center ">
          My <span className="text-brand-dark-yellow">Projects</span>
        </h2>
        <div className="flex flex-col items-center gap-3 py-10 lg:flex-row  lg:justify-center animate-fade-up">
          <Link
            href="#positivus"
            className="bg-brand-dark-green text-gray-100 text-xl font-semibold tracking-wider px-5 py-2 rounded-lg shadow-[0px_4px_0px_0px_#1f2b2d] "
          >
            Modern Landing Page
          </Link>
          <Link
            href="#rental"
            className="bg-brand-dark-green text-gray-100 text-xl font-semibold tracking-wider px-5 py-2 rounded-lg shadow-[0px_4px_0px_0px_#1f2b2d]  "
          >
            Full Stack Rental Property Site
          </Link>
        </div>
        <div className="relative lg:mt-5  flex flex-col items-center  bg-no-repeat bg-center rounded-b-3xl overflow-hidden   ">
          <Image
            src={kaoriPoint}
            width="0"
            height="0"
            sizes="100vw"
            className="hidden md:block z-20 md:max-w-lg "
            alt="Kaori's Picture"
          />
          <Image
            src={kaoriPointSmall}
            width="0"
            height="0"
            sizes="100vw"
            className="md:hidden z-20 "
            alt="Kaori's Picture"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 px-5 lg:px-0  mt-10">
        <ProjectSection id="positivus" project={phoneProjects[0]} />
        <ProjectSection id="rental" project={laptopProjects[0]} />
      </div>
    </div>
  );
};

export default ProjectsPage;
