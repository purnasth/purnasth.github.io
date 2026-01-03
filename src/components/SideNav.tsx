import React from 'react';
import { Link } from 'react-router-dom';
import { ReviewSlider } from './ui/ReviewSlider';
import { EMAIL } from '../config/constants';

const SideNav: React.FC = () => {
  return (
    <>
      <header className="border-1 right-4 top-4 z-40 mx-auto h-auto w-full overflow-y-auto overflow-x-hidden md:rounded-lg border-white/20 bg-dark md:bg-dark/10 p-6 text-white shadow-sm backdrop-blur-sm md:fixed md:h-[calc(100%-2rem)] md:w-72 md:border">
        <div className="hidden md:block">
          <div className="mt-3 flex items-center justify-between">
            <span className="transition-300/50 text-xs uppercase text-gray-400 text-white/80 hover:text-white">
              Menu
            </span>
          </div>
          <ul className="links mt-8 flex flex-col items-start justify-start gap-2 md:gap-4">
            <li className="w-full">
              <Link
                to="/about"
                className="navlink transition-300 inline-block w-full pb-2 text-4xl font-medium text-white/80 hover:text-white"
                aria-label="About "
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/portfolio"
                className="navlink transition-300 inline-block w-full pb-2 text-4xl font-medium text-white/80 hover:text-white"
                aria-label="Portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/contact"
                className="navlink transition-300 inline-block w-full pb-2 text-4xl font-medium text-white/80 hover:text-white"
                aria-label="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="mb-8 opacity-30 md:my-8" />
        {/* <div className="">
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
        </div> */}
        <div className="">
          <div className="my-4 mb-8">
            <h4 className="text-base font-semibold capitalize">
              Valued Clients Feedback
            </h4>
          </div>
          <ReviewSlider />
        </div>
        <hr className="my-8 opacity-30" />
        <div>
          <Link
            rel="noopener noreferrer"
            className="hover-outline pointer-events-auto mb-6 flex w-full max-w-52 items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2 text-center text-white outline outline-2 outline-white backdrop-blur-md md:max-w-full"
            to="#"
            target="_blank"
            aria-label="Let's Talk"
          >
            Let's Talk
          </Link>
          <p className="mt-5 text-xs text-white/80">
            Or directly mail at
            <Link
              to={`mailto:${EMAIL}`}
              className="transition-300 mx-1 text-white underline underline-offset-4 hover:underline-offset-2"
              aria-label="Email"
            >
              {EMAIL}
            </Link>
          </p>
        </div>
      </header>
    </>
  );
};

export default SideNav;
