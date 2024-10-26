import resume from "@/assets/resume.pdf";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const App = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-dark-green to-dark-green/70 h-screen flex flex-col items-center text-center gap-5 font-poppins p-10">
      <div className="flex flex-col w-full gap-2  text-left ">
        <p className="text-pale-green text-5xl tracking-wider w-full ">
          KAORI KAWAKAMI
        </p>
        <div className="text-light-green text-2xl font-extralight flex items-center gap-5">
          <p className="">
            k.kawakami08@gmail.com |{" "}
            <a
              href={resume} // Link to the imported PDF
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="text-light-green text-2xl font-extralight hover:text-tangerine"
            >
              Resume
            </a>
          </p>
        </div>

        <div className="flex items-center text-light-green text-xl font-extralight gap-2 mt-2">
          <a
            href={"https://github.com/kkawakami08"} // Link to the imported PDF
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            <FaGithubSquare className="text-4xl text-tangerine hover:text-pale-green" />
          </a>
          <a
            href={"https://www.linkedin.com/in/k-kawakami/"} // Link to the imported PDF
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            <FaLinkedin className="text-4xl text-tangerine hover:text-pale-green" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
