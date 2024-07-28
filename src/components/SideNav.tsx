import React from "react";
import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideNav: React.FC = () => {
  return (
    <>
      <header className="text-white fixed right-4 top-4 bg-black/10 backdrop-blur-sm border border-1 border-white/20 shadow-sm p-6 w-72 rounded-lg z-40 h-[calc(100%-2rem)]">
        <div className="flex items-center justify-between">
          <span className="uppercase text-white/80 hover:text-white transition-300/50 text-xs text-gray-400">
            Menu
          </span>
          <TbCirclePlus className="text-2xl" />
        </div>

        <ul className="mt-8 links flex items-start justify-start gap-2 md:gap-4 flex-col">
          {/* <li className="w-full">
            <a
              href="#"
              className="navlink w-full pb-2 inline-block text-4xl text-white/80 hover:text-white transition-300 font-medium"
              aria-label="Home"
            >
              Home
            </a>
          </li> */}
          <li className="w-full">
            <Link
              to="/about"
              className="navlink w-full pb-2 inline-block text-4xl text-white/80 hover:text-white transition-300 font-medium"
              aria-label="About "
            >
              About
            </Link>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="navlink w-full pb-2 inline-block text-4xl text-white/80 hover:text-white transition-300 font-medium"
              aria-label="Portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="w-full">
            <a
              href=""
              className="navlink w-full pb-2 inline-block text-4xl text-white/80 hover:text-white transition-300 font-medium"
              aria-label="Contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <hr className="my-8 opacity-30" />

        <div className="">
          <div className="my-4">
            <h3 className="text-base font-semibold capitalize">
              Valued Clients Feedback
            </h3>
          </div>
          <div className="testimonials mt-8">
            <div className="flex flex-col gap-4 relative transition-all duration-150 ease-linear max-h-64 overflow-y-auto">
              <p className="text-justify text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                molestias at accusantium libero quas omnis magni perspiciatis
                commodi numquam, provident officia minima.
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white/90">
                  Lorem, ipsum.
                </h4>
                <span className="text-xs italic text-white/90">- CEO</span>
              </div>
            </div>

            <div className="pagination flex items-center justify-center gap-2 mt-5">
              <span></span>
              <span className="active"></span>
              <span></span>
            </div>
          </div>
        </div>

        <hr className="my-8 opacity-30" />

        <div>
          <a
            rel="noopener noreferrer"
            className="w-full text-center py-2 px-5 rounded-full flex items-center justify-center gap-2 backdrop-blur-md text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline"
            href="#"
            target="_blank"
          >
            Contact Me
          </a>
          <p className="mt-5 text-xs text-white/80">
            Or directly mail at
            <a
              href="mailto:purnashrestha0310@gmail.com"
              className="mx-1 underline underline-offset-2 text-white"
            >
              purnashrestha0310@gmail.com
            </a>
          </p>
        </div>
      </header>
    </>
  );
};

export default SideNav;
