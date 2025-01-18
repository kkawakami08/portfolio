import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center text-center pt-14 pb-32 gap-7 "
    >
      <h2 className="text-5xl font-serif text-zinc-800 tracking-wide  w-full ">
        Let's Connect!
      </h2>

      <ul className="text-lg font-semibold text-brand-dark-green tracking-wide grid grid-cols-1 justify-items-center gap-5 px-5 w-full max-w-md md:max-w-4xl md:grid-cols-2 ">
        <li className="w-full ">
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex  items-center gap-2 bg-[#ffc44a] hover:bg-brand-green hover:text-gray-100 transition p-5 w-full rounded-lg shadow-[0px_4px_0px_0px_#3a4e50]"
          >
            <IoDocumentText className="text-2xl" />
            Resume
          </a>
        </li>
        <li className="flex  items-center gap-2 bg-[#ffc44a] p-5 w-full rounded-lg shadow-[0px_4px_0px_0px_#3a4e50] hover:bg-brand-green hover:text-gray-100 transition">
          <FaPhoneAlt className="text-2xl " />
          (714) 757-4739
        </li>
        <li className="flex  items-center gap-2 bg-[#ffc44a] p-5 w-full rounded-lg shadow-[0px_4px_0px_0px_#3a4e50] hover:bg-brand-green hover:text-gray-100 transition">
          <MdEmail className="text-2xl" />
          k.kawakami08@gmail.com
        </li>
        <li className="w-full">
          <a
            href="https://www.linkedin.com/in/k-kawakami/"
            target="_blank"
            className="flex  items-center gap-2 bg-[#ffc44a] p-5 w-full rounded-lg shadow-[0px_4px_0px_0px_#3a4e50] hover:bg-brand-green hover:text-gray-100 transition"
          >
            <FaLinkedin className="text-2xl" />
            k-kawakami
          </a>
        </li>
        <li className="w-full">
          <a
            href="https://github.com/kkawakami08"
            target="_blank"
            className="flex  items-center gap-2 bg-[#ffc44a] p-5 w-full rounded-lg shadow-[0px_4px_0px_0px_#3a4e50] hover:bg-brand-green hover:text-gray-100 transition"
          >
            <FaGithub className="text-2xl" />
            kkawakami08
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
