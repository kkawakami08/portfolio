"use client";
import { useState } from "react";
import Link from "next/link";
import { LuSquareMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/#about", label: "About" },
    { href: "/resume.pdf", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="sticky top-3 z-50 mx-auto bg-brand-green text-slate-100 w-11/12 rounded-xl flex items-center justify-between gap-3 px-5 py-3 shadow-[0px_4px_0px_0px_#1f2b2d] lg:max-w-3xl  ">
        {/* Desktop Menu */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:justify-items-center  items-center justify-around w-full ">
          <Link
            href={"/#about"}
            className="hover:text-slate-300 transition-colors"
          >
            About
          </Link>
          <Link
            href={"/#contact"}
            className="hover:text-slate-300 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/"
            className=" w-fit font-serif text-xl font-medium tracking-wider rounded-lg px-3 border-2 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Kaori
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            className="hover:text-slate-300 transition-colors"
          >
            Resume
          </a>
          <Link
            href="/projects"
            className="hover:text-slate-300 transition-colors"
          >
            Projects
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between w-full lg:hidden">
          <Link
            href="/"
            className=" w-fit font-serif text-2xl font-medium tracking-wider rounded-lg px-3 border-2 text-center hover:text-brand-yellow hover:border-brand-yellow"
            onClick={() => setIsMenuOpen(false)}
          >
            Kaori
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none hover:text-brand-yellow hover:border-brand-yellow"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <LuX className="text-5xl stroke-1" />
            ) : (
              <LuSquareMenu className="text-5xl stroke-1" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-10 pt-8 mx-auto w-11/12 bg-brand-dark-green rounded-xl  z-40  text-lg shadow-[0px_4px_0px_0px_#1f2b2d]">
          <div className="flex flex-col items-center py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full text-center text-slate-100 py-3 hover:bg-opacity-20 hover:bg-brand-light-green transition-colors hover:text-brand-yellow "
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
