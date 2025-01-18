import Image from "next/image";
import polaroid from "@/assets/images/polaroid.png";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center pt-40 md:pt-5   text-gray-100   bg-brand-dark-green rounded-b-3xl -mt-20 "
    >
      <div className="relative w-full   pb-28 md:pb-0  items-center md:flex md:justify-center">
        {" "}
        <Image
          src={polaroid}
          width="0"
          height="0"
          sizes="100vw"
          alt="polaroid (kaori and dogs)"
          className="w-72 -rotate-6 absolute -left-24 -top-40  z-10 md:static"
        />{" "}
        <h2 className="text-5xl font-serif pr-5 py-2 tracking-wide text-right  w-full bg-gray-100 text-brand-dark-green md:w-fit  md:rounded-3xl md:px-14 md:-ml-16 ">
          About Me
        </h2>
      </div>
      <div className="bg-brand-light-green font-medium text-zinc-900 text-xl tracking-wide text-left rounded-3xl py-10 px-10 shadow-[0px_4px_0px_0px_#1f2b2d] md:-mt-8 w-full ">
        <p className=" flex flex-col gap-5 md:max-w-2xl md:mx-auto">
          Hi! I'm Kaori, a self-taught front-end developer with a passion for
          creating meaningful web experiences.
          <span>
            {" "}
            Since 2022, I've immersed myself in modern web development,
            specializing in React, Next.js, and Tailwind CSS. When I'm not
            coding, you'll find me playing piano, enjoying a board game, or
            working on sewing projects.{" "}
          </span>
          My goal is to combine my technical skills with my love for animals,
          aspiring to develop solutions that make a difference in animal
          welfare.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
