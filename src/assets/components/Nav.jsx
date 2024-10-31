import { IoMenu } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="bg-light-green w-full flex items-center justify-between px-5 py-3 sticky top-0 ">
      <IoMenu className="w-8 h-8 text-pale-green" />
      <p className=" text-xl  text-dark-green font-medium tracking-wider">
        KAORI KAWAKAMI
      </p>
    </div>
  );
};

export default Nav;
