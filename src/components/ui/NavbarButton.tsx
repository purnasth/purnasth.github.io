import React, { useState } from 'react';
import { TbPlus, TbMail } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { PageProp } from '../../constant/types';

const NavbarButton: React.FC<PageProp> = ({ whiteBg }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className={`group z-50 m-5 rounded-full border p-2 backdrop-blur-lg transition-all duration-300 ease-linear hover:scale-125 ${
          isOpen
            ? 'rotate-[315deg] scale-[1.35] animate-pulse border-white bg-white/20'
            : ''
        } ${whiteBg ? 'black-mode' : 'white-mode'}`}
      >
        <TbPlus className="text-base transition-all duration-300 ease-linear group-hover:rotate-[315deg] group-hover:scale-110 group-hover:animate-pulse" />
      </button>

      <section
        className={`border-1 transition-700 fixed inset-0 -z-10 m-4 rounded-lg border border-white/20 bg-dark/40 shadow-sm backdrop-blur ${
          isOpen
            ? 'pointer-events-auto select-auto opacity-100'
            : 'pointer-events-none select-none opacity-0'
        }`}
      >
        <div className="h-full overflow-hidden p-4 text-white">
          <Link
            to="/"
            className={`group z-50 inline-block scale-125 animate-pulse rounded-full border border-white/50 bg-white/20 p-2 text-white transition-all duration-300 ease-linear hover:border-white hover:bg-white/20`}
          >
            <TbMail className="text-base transition-all duration-300 ease-linear group-hover:scale-110" />
          </Link>

          <div className="grid h-[95%] grid-cols-4 content-center px-16 py-8">
            <ul className="links col-span-1 flex flex-col items-start justify-start gap-2 md:gap-20">
              <li className="w-full">
                <Link
                  to="/"
                  className="navlink transition-300 inline-block w-full pb-2 text-5xl font-medium text-white/80 hover:text-white"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/about"
                  className="navlink transition-300 inline-block w-full pb-2 text-5xl font-medium text-white/80 hover:text-white"
                  aria-label="About"
                >
                  About
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/portfolio"
                  className="navlink transition-300 inline-block w-full pb-2 text-5xl font-medium text-white/80 hover:text-white"
                  aria-label="Portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="w-full">
                <a
                  href="/contact"
                  className="navlink transition-300 inline-block w-full pb-2 text-5xl font-medium text-white/80 hover:text-white"
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
