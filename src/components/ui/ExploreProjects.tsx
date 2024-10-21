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
    <main className="bg-gray-100 pb-16">
      <div className="text-center">
        <span className="uppercase tracking-wider">Next Project</span>
        <Link
          key={portfolioDetails[nextProjectIndex].id}
          className="group mt-12 flex flex-col items-center justify-center gap-12"
          to={`/portfolio/${portfolioDetails[nextProjectIndex].portfolioUrl}`}
        >
          <div className="text-center">
            <h3 className="transition-300 font-luxury text-4xl font-extralight group-hover:translate-y-16 group-hover:scale-150 group-hover:opacity-60 md:text-7xl">
              {portfolioDetails[nextProjectIndex].title}
            </h3>
            <img
              src={portfolioDetails[nextProjectIndex].portfolioWebsite?.mockup}
              alt={portfolioDetails[nextProjectIndex].title}
              className="transition-300 h-96 object-contain group-hover:-translate-y-14 group-hover:scale-125 group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
            />
          </div>
        </Link>
      </div>
      <hr className="mx-auto max-w-4xl" />
      <ul className="mt-12 flex flex-col items-center justify-between gap-4 md:flex-row">
        <li className="flex-1">
          <Link
            to={`/portfolio/${portfolioDetails[prevProjectIndex].portfolioUrl}`}
            className="transition-300 group flex items-center gap-2 font-semibold hover:-translate-x-2"
          >
            <CgArrowLongLeft className="transition-300 text-xl group-hover:scale-x-125 group-hover:text-2xl" />
            {portfolioDetails[prevProjectIndex].title}
          </Link>
        </li>

        <li className="flex-shrink-0">
          <Link
            to="/portfolio"
            className="transition-300 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-center text-base font-medium uppercase text-dark shadow outline outline-1 outline-dark hover:bg-dark/20 hover:tracking-widest hover:shadow-xl"
          >
            All Projects
            <sup className="text-base font-bold group-hover:text-dark">
              ({portfolioDetails.length})
            </sup>
          </Link>
        </li>

        <li className="flex-1 text-right">
          <Link
            to={`/portfolio/${portfolioDetails[nextProjectIndex].portfolioUrl}`}
            className="transition-300 group flex items-center justify-end gap-2 font-semibold hover:translate-x-4"
          >
            {portfolioDetails[nextProjectIndex].title}{' '}
            <CgArrowLongRight className="transition-300 text-xl group-hover:scale-x-125 group-hover:text-2xl" />
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default ExploreProjects;
