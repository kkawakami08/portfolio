import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-brand-dark-green text-gray-100  pt-20 pb-5  text-center  rounded-t-3xl -mt-10 ">
      <div className="divide-y grid  gap-10 px-10 sm:grid-cols-2  sm:divide-y-0 sm:justify-items-center sm:items-center md:max-w-4xl md:mx-auto">
        <div className=" gap-5  flex flex-col items-center ">
          <p className="text-2xl font-semibold font-serif tracking-widest border-2 px-10 py-2 rounded-lg border-gray-100 col-span-2 w-full text-center">
            Kaori Kawakami
          </p>

          <Link
            href="/projects"
            className="bg-brand-yellow text-brand-dark-green text-xl  px-6 py-2 rounded-lg font-semibold tracking-wider shadow-[0px_4px_0px_0px_#1f2b2d] w-full hover:bg-brand-green hover:text-gray-100 transition"
          >
            Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-brand-yellow text-brand-dark-green text-xl  px-6 py-2 rounded-lg font-semibold tracking-wider shadow-[0px_4px_0px_0px_#1f2b2d] w-full hover:bg-brand-green hover:text-gray-100 transition"
          >
            Resume
          </a>
        </div>

        <div className="pt-10 sm:pt-0 sm:pl-10">
          <p className="text-lg tracking-wider  font-medium py-1 text-left bg-brand-dark-green w-fit px-3 sm:px-0 rounded-lg mb-3">
            Contact
          </p>
          <ul className="text-lg tracking-wide flex flex-col  gap-2">
            <li className="flex items-center gap-2 ">
              <FaPhoneAlt className="text-xl" />
              (714) 757-4739
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-xl" />
              k.kawakami08@gmail.com
            </li>
            <li className="">
              <a
                href="https://www.linkedin.com/in/k-kawakami/"
                target="_blank"
                className="flex items-center gap-2 cursor-pointer  hover:text-brand-yellow transition"
              >
                <FaLinkedin className="text-xl" />
                k-kawakami
              </a>
            </li>
            <li className="">
              <a
                href="https://github.com/kkawakami08"
                target="_blank"
                className="flex items-center gap-2 cursor-pointer hover:text-brand-yellow transition"
              >
                <FaGithub className="text-xl" />
                kkawakami08
              </a>
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-100/60 pt-5 sm:col-span-2 ">
          {new Date().getFullYear()} Kaori Kawakami
        </p>
      </div>
    </div>
  );
};

export default Footer;
