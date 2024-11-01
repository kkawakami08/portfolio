import resume from "@/assets/resume.pdf";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Skills from "./Skills";

const Header = () => {
  return (
    <div className="flex flex-col w-full gap-5  text-center px-6">
      <p className="text-pale-green font-semibold text-5xl tracking-widest w-full ">
        KAORI KAWAKAMI
      </p>
      <p className="text-pale-green text-xl font-light">
        BA in Animal Science (Pre-Vet)
      </p>
      <hr className="border-t-2 border-beige" />
      <div className="text-pale-green   font-light flex flex-col gap-2 ">
        <p>
          I’m a creative professional with six years in video editing and 2D
          animation, plus five years in customer service, where I honed my
          communication and problem-solving skills.
        </p>
        <p>
          I've spent the past two years diving into the world of coding and
          software development, with a particular focus on web development and
          interactive applications.
        </p>
        <p>
          {" "}
          One of my proudest projects is my recreation of the Wingspan board
          game as an online application, a complex yet rewarding project that
          merges my coding skills with my passion for board games.
        </p>
        <p>
          Beyond my work, I enjoy sewing, playing the piano, and a good board
          game.
        </p>
      </div>
      <Skills />
      <div className="text-dark-green text-lg  flex flex-col items-center gap-2 justify-center bg-pale-green  py-3 rounded-lg">
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
            <FaGithubSquare className=" text-tangerine hover:text-pale-green transition-colors duration-200" />
          </a>
          <a
            href={"https://www.linkedin.com/in/k-kawakami/"} // Link to the imported PDF
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            <FaLinkedin className=" text-tangerine hover:text-pale-green transition-colors duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
