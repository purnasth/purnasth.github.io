import React from 'react';
import { Link } from 'react-router-dom';
import { TbDownload } from 'react-icons/tb';

import purnaCV from '../../assets/docs/purna-cv.pdf';

import { formatDate } from '../../utils/functions';
import { ExperienceData } from '../../constant/types';

const experienceData: ExperienceData[] = [
  {
    id: 1,
    title: 'Leapfrog Technology',
    url: 'https://www.lftechnology.com/',
    logo: 'https://www.lftechnology.com/images/lf-logo.svg',
    startDate: '2025-03-03',
    category: 'Associate Software Engineer',
  },
  {
    id: 13,
    title: 'Longtail e-Media',
    url: 'https://longtail.info/',
    logo: 'https://longtailemedia.pages.dev/assets/icon-DKbZ6YCO.svg',
    startDate: '2023-11-01',
    endDate: '2025-03-02',
    category: 'React Developer',
  },
  {
    id: 1,
    title: 'Leapfrog Technology',
    url: 'https://www.lftechnology.com/',
    logo: 'https://www.lftechnology.com/images/lf-logo.svg',
    startDate: '2023-04-01',
    endDate: '2023-12-31',
    category: 'Leapfrog Student Partnership Program',
  },
];

const ExperienceCategory: React.FC = () => {
  return (
    <>
      <ul className="portfolio-skills mt-24 space-y-6 md:space-y-8">
        {experienceData.map((categoryData) => (
          <li
            key={categoryData.category}
            className="skills flex flex-col flex-wrap items-center justify-between gap-1 md:flex-row md:gap-0"
          >
            <div>
              <h5 className="text-sm font-normal text-white/90 md:text-xl">
                {categoryData.category}
              </h5>
              <p className="text-xs text-white/60 md:text-sm">
                {formatDate(categoryData.startDate)} -{' '}
                {formatDate(categoryData.endDate)}
              </p>
            </div>
            <span className="flex-grow rounded-full border-2 border-dotted border-white/20 md:ml-4"></span>
            <div className="skills flex flex-wrap items-center gap-3 rounded-3xl border border-white/50 bg-white/10 p-2 md:gap-8 md:rounded-full md:px-2">
              <Link
                to={categoryData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full transition duration-300 ease-in-out"
              >
                <img
                  src={categoryData.logo}
                  alt={categoryData.title}
                  className="h-8 w-auto rounded-full bg-white/80 object-contain px-4 py-2"
                />
                <h5 className="pr-3 text-sm font-normal text-white/90 md:text-sm">
                  {categoryData.title}
                </h5>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex items-center justify-start gap-4">
        <span>For the detailed experience and projects,</span>
        <a
          href={purnaCV}
          className="group relative h-14 min-w-fit overflow-hidden rounded-full border-4 border-light bg-light px-12 py-2 text-center text-xl font-semibold text-black"
          aria-label="Download my CV"
          download
        >
          <span className="absolute right-0 top-0 z-10 grid aspect-square size-12 place-items-center rounded-full bg-dark duration-500 group-hover:w-full">
            <TbDownload className="transition-300 scale-125 text-xl text-white group-hover:scale-150" />
          </span>
          <label className="transition-300 inline-block w-full -translate-x-4 text-base font-medium group-hover:-translate-x-full group-hover:scale-0 group-hover:opacity-0">
            Download my CV
          </label>
        </a>
      </div>
    </>
  );
};

export default ExperienceCategory;
