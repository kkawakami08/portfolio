import { useState, useRef, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // This will trigger on every route change

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = (path) => {
    navigate(`/projects/${path}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={navRef}
      className="bg-light-green w-screen  flex items-center justify-between px-5 py-2 sticky top-0 hover:text-tangerine"
    >
      <p
        onClick={handleMenuClick}
        className="p-1  rounded-full transition-colors"
      >
        <IoMenu className="w-8 h-8 text-pale-green hover:text-dark-green" />
      </p>

      <p
        onClick={() => {
          navigate("/");
          setIsOpen(false);
        }}
        className="text-xl text-dark-green font-medium tracking-wider cursor-pointer pr-3"
      >
        KAORI KAWAKAMI
      </p>

      {isOpen && (
        <div className="absolute w-full bg-pale-green text-dark-green left-0 top-full flex flex-col items-start px-6 gap-2 py-3 rounded-b-lg">
          <p
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            className="hover:text-tangerine transition-colors"
          >
            HOME
          </p>
          <p>PROJECTS</p>
          <div className="cursor-pointer flex flex-col items-start gap-2 px-5 font-light">
            <p
              onClick={() => handleNavClick("wingspan")}
              className="hover:text-tangerine transition-colors"
            >
              Wingspan
            </p>
            <p
              onClick={() => handleNavClick("trails")}
              className="hover:text-tangerine transition-colors"
            >
              Trails
            </p>
            <p
              onClick={() => handleNavClick("refactor")}
              className="hover:text-tangerine transition-colors"
            >
              AI Refactor
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
