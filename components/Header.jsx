import MainImage from "./MainImage";

const Header = () => {
  return (
    <div
      id="header"
      className="lg:max-w-4xl mx-auto flex flex-col lg:flex-row items-center pt-14  justify-around "
    >
      <div className="text-7xl font-medium  text-center flex flex-col items-center gap-3 font-serif z-10 text-zinc-800 lg:items-end lg:text-right  animate-fade-up cursor-default">
        <p
          className="text-xl  border-2 w-fit border-brand-dark-green text-brand-dark-green font-semibold tracking-wider rounded-full px-5 py-1 shadow-[0px_4px_0px_0px_#344345] 
        transition ease-in-out   hover:-rotate-3 hover:-translate-y-1 hover:scale-110 hover:bg-brand-yellow duration-300 
        "
        >
          Hello!
        </p>
        <p className="">
          I'm <span className="text-[#dd6302] ">Kaori</span>,
        </p>
        <p className=" w-fit">
          Front-End <br className="hidden lg:block" />
          Developer
        </p>
      </div>
      <MainImage />
    </div>
  );
};

export default Header;
