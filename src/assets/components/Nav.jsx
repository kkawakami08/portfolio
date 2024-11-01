import { IoMenu } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    setIsOpen((prev) => !prev);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (path) => {
    navigate(`/projects/${path}`);
    setIsOpen(false);
    scrollToTop();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={navRef}
      className="bg-light-green w-full flex items-center justify-between px-5 py-3 sticky top-0 hover:text-tangerine"
    >
      <button
        onClick={handleMenuClick}
        className="p-1 hover:bg-pale-green rounded-full transition-colors"
      >
        <IoMenu className="w-8 h-8 text-pale-green" />
      </button>

      <p className="text-xl text-dark-green font-medium tracking-wider">
        KAORI KAWAKAMI
      </p>

      {isOpen && (
        <div className="absolute w-full bg-pale-green text-dark-green left-0 top-full flex flex-col items-start px-6 gap-2 py-3 rounded-b-lg">
          <button
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            className="hover:text-tangerine transition-colors"
          >
            HOME
          </button>
          <p>PROJECTS</p>
          <div className="cursor-pointer flex flex-col items-start gap-2 px-5 font-light">
            <button
              onClick={() => handleNavClick("wingspan")}
              className="hover:text-tangerine transition-colors"
            >
              Wingspan
            </button>
            <button
              onClick={() => handleNavClick("trails")}
              className="hover:text-tangerine transition-colors"
            >
              Trails
            </button>
            <button
              onClick={() => handleNavClick("refactor")}
              className="hover:text-tangerine transition-colors"
            >
              AI Refactor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
