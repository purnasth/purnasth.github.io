import React, { useState } from "react";
import { TbPlus, TbMail } from "react-icons/tb";
import { Link } from "react-router-dom";
import { NavbarButtonProps } from "../../constant/types";

const NavbarButton: React.FC<NavbarButtonProps> = ({ whiteBg }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className={`group p-2 m-5 z-50 border rounded-full backdrop-blur-lg hover:scale-125 transition-all duration-300 ease-linear ${
          isOpen
            ? "scale-[1.35] bg-white/20 border-white rotate-[315deg] animate-pulse"
            : ""
        } ${whiteBg ? "black-mode" : "white-mode"}`}
      >
        <TbPlus className="text-base group-hover:scale-110 group-hover:rotate-[315deg] transition-all duration-300 ease-linear group-hover:animate-pulse" />
      </button>

      <section
        className={`fixed inset-0 bg-black/30 backdrop-blur border border-1 border-white/20 shadow-sm m-4 rounded-lg transition-700 -z-10 ${
          isOpen
            ? "opacity-100 pointer-events-auto select-auto"
            : "opacity-0 pointer-events-none select-none"
        }`}
      >
        <div className="p-4 text-white h-full overflow-hidden">
          <Link
            to="/"
            className={`inline-block group p-2 bg-white/20 text-white z-50 border border-white/50 rounded-full scale-125 hover:bg-white/20 hover:border-white animate-pulse transition-all duration-300 ease-linear`}
          >
            <TbMail className="text-base group-hover:scale-110 transition-all duration-300 ease-linear" />
          </Link>

          <div className="py-8 px-16 grid grid-cols-4 h-[95%] content-center">
            <ul className="col-span-1 links flex items-start justify-start gap-2 md:gap-20 flex-col">
              <li className="w-full">
                <Link
                  to="/"
                  className="navlink w-full pb-2 inline-block text-5xl text-white/80 hover:text-white transition-300 font-medium"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/about"
                  className="navlink w-full pb-2 inline-block text-5xl text-white/80 hover:text-white transition-300 font-medium"
                  aria-label="About"
                >
                  About
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/portfolio"
                  className="navlink w-full pb-2 inline-block text-5xl text-white/80 hover:text-white transition-300 font-medium"
                  aria-label="Portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="w-full">
                <a
                  href=""
                  className="navlink w-full pb-2 inline-block text-5xl text-white/80 hover:text-white transition-300 font-medium"
                  aria-label="Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="col-span-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarButton;
