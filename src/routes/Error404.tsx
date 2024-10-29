import React from 'react';
import { useNavigate } from 'react-router-dom';
import globe from '../assets/img/svg/globe.gif';
import { CgArrowLongLeft } from 'react-icons/cg';
import SEO from '../utils/SEO';

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
      <main className="relative flex h-screen flex-col items-center justify-center gap-2 p-0 text-light">
        <img
          src={globe}
          alt="Globe"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="overlay -z-10 bg-dark/50" />
        <h1 className="text-center font-inria-sans text-6xl font-bold leading-snug">
          404 <br /> Page Not Found
        </h1>
        {/* <p className="mt-4 text-lg">
        Oops! The page you're looking for doesn't exist.
      </p> */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="transition-300 group mt-12 flex translate-y-0 items-center justify-center gap-2 rounded-full bg-light/10 px-8 py-4 text-xs text-light opacity-100 outline outline-1 outline-light/60 backdrop-blur-lg hover:bg-light hover:text-dark md:text-base"
          aria-label="Go Back"
          title="Go Back"
        >
          <CgArrowLongLeft className="transition-300 text-2xl group-hover:-translate-x-2" />
          Go Back
        </button>
      </main>
    </>
  );
};

export default Error404;
