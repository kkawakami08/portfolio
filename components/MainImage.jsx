import Image from "next/image";
import Link from "next/link";
import myPic from "@/assets/images/kaori.png";
import smallMyPic from "@/assets/images/kaori-small.png";

const MainImage = () => {
  return (
    <div className="relative mt-2 flex flex-col items-center  rounded-b-3xl overflow-hidden shadow-[0px_4px_0px_0px_#815e54] bg-brand-pink rounded-t-full md:rounded-3xl animate-fade animate-duration-[2000ms]">
      <Image
        src={myPic}
        width="0"
        height="0"
        sizes="100vw"
        className="hidden md:block z-20 md:max-w-lg "
        alt="Kaori's Picture"
      />
      <Image
        src={smallMyPic}
        width="0"
        height="0"
        sizes="100vw"
        className="md:hidden z-20 "
        alt="Kaori's Picture"
      />
      <div className="absolute bottom-5 z-30 backdrop-blur-2xl text-white flex items-center gap-5 rounded-full text-xl font-light border border-slate-50 p-1">
        <Link
          href="/projects"
          className="bg-[#ffc44a] text-zinc-800 px-7 py-2 rounded-full font-bold tracking-wide uppercase hover:bg-gray-100 hover:text-brand-green transition-all"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="pr-5 text-2xl font-medium tracking-wide hover:text-[#ffefc6] transition-all"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default MainImage;
