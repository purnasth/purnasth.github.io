import React from 'react';
import { Link } from 'react-router-dom';

import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';

interface ExploreProjectsProps {
  portfolioDetails: Array<{
    id: string;
    title: string;
    portfolioUrl: string;
    portfolioWebsite?: {
      mockup: string;
    };
  }>;
  currentProjectIndex: number;
}

const ExploreProjects: React.FC<ExploreProjectsProps> = ({
  portfolioDetails = [],
  currentProjectIndex = 0,
}) => {
  if (portfolioDetails.length === 0) {
    return <p>No projects available</p>;
  }

  const nextProjectIndex = (currentProjectIndex + 1) % portfolioDetails.length;
  const prevProjectIndex =
    (currentProjectIndex - 1 + portfolioDetails.length) %
    portfolioDetails.length;

  return (
    <main className="bg-gray-100 px-0 md:px-4 xl:px-8 pb-8 md:pb-16">
      <div className="text-center">
        <span className="text-xs uppercase tracking-wider md:text-base">
          Next Project
        </span>
        <Link
          key={portfolioDetails[nextProjectIndex].id}
          className="group mt-6 flex flex-col items-center justify-center gap-y-0 md:mt-12 md:gap-12 overflow-hidden"
          to={`/portfolio/${portfolioDetails[nextProjectIndex].portfolioUrl}`}
        >
          <div className="text-center">
            <h3 className="transition-500 font-luxury text-4xl group-hover:translate-y-8 group-hover:scale-150 group-hover:opacity-60 md:text-7xl md:group-hover:translate-y-16">
              {portfolioDetails[nextProjectIndex].title}
            </h3>
            <img
              src={portfolioDetails[nextProjectIndex].portfolioWebsite?.mockup}
              alt={portfolioDetails[nextProjectIndex].title}
              className="transition-500 h-52 object-contain group-hover:-translate-y-10 group-hover:scale-125 group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] md:h-96 md:group-hover:-translate-y-14"
            />
          </div>
        </Link>
      </div>
      <hr className="mx-auto max-w-4xl" />
      <ul className="px-2 md:px-0 mt-8 flex flex-row items-center justify-between gap-2 md:gap-4 md:mt-12 md:flex-row">
        <li className="flex-1">
          <Link
            to={`/portfolio/${portfolioDetails[prevProjectIndex].portfolioUrl}`}
            className="transition-300 group flex items-center gap-2 text-xs font-semibold hover:-translate-x-2 sm:text-sm md:text-base"
          >
            <CgArrowLongLeft className="transition-300 text-xl group-hover:scale-x-125 md:group-hover:text-2xl" />
            {portfolioDetails[prevProjectIndex].title}
          </Link>
        </li>

        <li className="flex-shrink-0">
          <Link
            to="/portfolio"
            className="transition-300 text-light inline-flex items-center justify-center gap-2 rounded-full bg-dark px-4 py-3 text-center text-xs font-medium uppercase shadow outline outline-1 outline-dark hover:bg-dark/90 hover:tracking-wide md:hover:tracking-widest hover:shadow-2xl sm:text-sm md:px-8 md:py-4 md:text-base scale-90 md:scale-100"
          >
            All Projects
            <sup className="green-gradient text-xs font-bold group-hover:text-dark sm:text-sm md:text-base">
              ({portfolioDetails.length})
            </sup>
          </Link>
        </li>

        <li className="flex-1 text-right">
          <Link
            to={`/portfolio/${portfolioDetails[nextProjectIndex].portfolioUrl}`}
            className="transition-300 group flex items-center justify-end gap-2 text-xs font-semibold hover:translate-x-2 sm:text-sm md:text-base"
          >
            {portfolioDetails[nextProjectIndex].title}
            <CgArrowLongRight className="transition-300 text-xl group-hover:scale-x-125 md:group-hover:text-2xl" />
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default ExploreProjects;
