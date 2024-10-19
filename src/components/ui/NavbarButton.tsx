import React, { useState } from 'react';
import { TbPlus, TbMail } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { PageProp } from '../../constant/types';
import hero from '../../assets/img/hero_cutout.png';

const NavbarButton: React.FC<PageProp> = ({ whiteBg }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className={`group z-50 m-2 rounded-full border p-2 backdrop-blur-lg transition-all duration-300 ease-linear hover:scale-125 md:m-4 ${
          isOpen
            ? 'rotate-[315deg] scale-[1.35] animate-pulse border-white bg-white/20'
            : ''
        } ${whiteBg ? 'black-mode' : 'white-mode'}`}
      >
        <TbPlus className="text-base transition-all duration-300 ease-linear group-hover:rotate-[315deg] group-hover:scale-110 group-hover:animate-pulse" />
      </button>

      <section
        className={`border-1 transition-700 fixed inset-0 -z-10 m-2 rounded-lg border border-white/20 bg-dark/60 shadow-sm backdrop-blur md:m-4 ${
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

          <div className="grid h-full grid-cols-1 px-4 md:px-16 md:grid-cols-4">
            <ul className="links col-span-1 flex flex-col items-center justify-center gap-8 md:gap-20">
              <li className="w-full">
                <Link
                  to="/"
                  className="navlink transition-300 inline-block w-full pb-2 text-3xl md:text-5xl font-extralight tracking-wider text-white/80 hover:text-white hover:[text-shadow:_0_2px_15px_rgb(255_255_255_/_100%)]"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/about"
                  className="navlink transition-300 inline-block w-full pb-2 text-3xl md:text-5xl font-extralight tracking-wider text-white/80 hover:text-white hover:[text-shadow:_0_2px_15px_rgb(255_255_255_/_100%)]"
                  aria-label="About"
                >
                  About
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/portfolio"
                  className="navlink transition-300 inline-block w-full pb-2 text-3xl md:text-5xl font-extralight tracking-wider text-white/80 hover:text-white hover:[text-shadow:_0_2px_15px_rgb(255_255_255_/_100%)]"
                  aria-label="Portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="w-full">
                <a
                  href="/contact"
                  className="navlink transition-300 inline-block w-full pb-2 text-3xl md:text-5xl font-extralight tracking-wider text-white/80 hover:text-white hover:[text-shadow:_0_2px_15px_rgb(255_255_255_/_100%)]"
                  aria-label="Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="relative justify-self-end md:col-span-3">
              <img
                src={hero}
                alt=""
                className="absolute inset-0 -z-10 size-full h-full scale-125 scale-x-150 object-contain blur-3xl"
              />
              <img
                src={hero}
                alt=""
                className="h-full object-cover object-bottom"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarButton;
