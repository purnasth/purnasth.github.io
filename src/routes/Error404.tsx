import React from 'react';
import { useNavigate } from 'react-router-dom';
import globe from '../assets/img/svg/globe.gif';
import { CgArrowLongLeft } from 'react-icons/cg';
import SEO from '../utils/SEO';

import error from '../assets/img/svg/error.svg';

const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Page Not Found - Purna Shrestha"
        description="Oops! The page you're looking for doesn't exist. Go back or return to the homepage."
        keywords="404 error, page not found, missing page, Purna Shrestha, web developer"
        robots="noindex, nofollow"
      />
      <main className="relative flex h-screen items-center justify-center flex-col gap-2 p-0 text-light">
        <img
          src={globe}
          alt="Globe"
          className="absolute inset-0 -z-10 size-full object-cover mix-blend-color-dodge"
        />
        <div className="relative">
          <img
            src={error}
            alt="Error"
            draggable="false"
            className="animate-floating absolute inset-0 h-96 md:h-[80vh] w-full object-contain blur-xl"
          />
          <img
            src={error}
            alt="Error"
            draggable="false"
            className="animate-floating h-96 md:h-[80vh] w-full object-contain"
          />
        </div>
        <div className="md:absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="transition-300 group flex h-fit w-fit translate-y-0 items-center justify-center gap-2 rounded-full bg-dark/40 px-8 py-4 text-xs text-light opacity-100 outline outline-1 outline-light/60 backdrop-blur-sm hover:bg-light hover:text-dark md:text-base"
            aria-label="Go Back"
            title="Go Back"
          >
            <CgArrowLongLeft className="transition-300 text-2xl group-hover:-translate-x-2" />
            Go Back
          </button>
        </div>
      </main>
    </>
  );
};

export default Error404;
