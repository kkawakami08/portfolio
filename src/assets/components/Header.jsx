import resume from "@/assets/resume.pdf";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Skills from "./Skills";

const Header = () => {
  return (
    <div className="flex flex-col w-full gap-5  text-center px-6 md:px-10 lg:px-0 xl:w-3/5 lg:w-3/4">
      <p className="text-pale-green font-semibold sm:text-5xl text-4xl tracking-widest w-full ">
        KAORI KAWAKAMI
      </p>
      <p className="text-pale-green text-xl font-light">Front End Developer</p>
      <p className="text-pale-green text-xl font-light">
        BA in Animal Science (Pre-Vet)
      </p>
      <hr className="border-t-2 border-beige" />
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-5 lg:pt-5 lg:gap-5">
        <div className="text-pale-green   font-light flex flex-col gap-2 lg:col-span-3 lg:text-left lg:row-span-2 lg:row-start-1 ">
          <p>
            I'm a self-driven front-end developer with over 2 years of
            experience, driven by a passion for solving logic puzzles and
            tackling complex problems. I built my programming foundation through
            Codecademy courses and self-directed projects, and I’ve also
            leveraged my 6 years of experience in 2D animation to create
            engaging web experiences. I blend technical skills with a keen eye
            for design to craft intuitive, responsive interfaces. My experience
            working on projects like recreating digital board games has helped
            me refine my ability to manage complex state and optimize codebases.
          </p>
        </div>
        <Skills />

        <div className="text-dark-green text-lg  flex flex-col items-center gap-2 justify-center bg-pale-green  py-3 rounded-lg lg:col-span-2">
          <p className="">k.kawakami08@gmail.com</p>
          <a
            href={resume} // Link to the imported PDF
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
            className="hover:text-tangerine transition-colors duration-200"
          >
            Resume
          </a>

          <div className="flex items-center text-light-green text-3xl  gap-2 ">
            <a
              href={"https://github.com/kkawakami08"} // Link to the imported PDF
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <FaGithubSquare className=" text-tangerine hover:text-dark-green transition-colors duration-200" />
            </a>
            <a
              href={"https://www.linkedin.com/in/k-kawakami/"} // Link to the imported PDF
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <FaLinkedin className=" text-tangerine hover:text-dark-green transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
