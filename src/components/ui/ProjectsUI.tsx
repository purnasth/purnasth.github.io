import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../constant/data';
import { CgArrowLongRight } from 'react-icons/cg';
import CustomButton from './CustomButton';

interface ProjectsUIProps {
  limit?: number;
}

const ProjectsUI: React.FC<ProjectsUIProps> = ({ limit }) => {
  const { portfolioDetails } = portfolioData[0];

  const displayedProjects = limit
    ? portfolioDetails.slice(0, limit)
    : portfolioDetails;

  return (
    <>
      <section className="pt-12">
        <div className="overflow-hidden rounded-3xl border-[1px] border-light/10 bg-dark/50 backdrop-blur-sm hover:border-light/20">
          {displayedProjects.map((project, index) => (
            <Link
              key={project.id}
              className="transition-300 hover:bg-l ight/90 group relative grid grid-cols-1 gap-0 overflow-hidden border-b-[1px] border-light/20 text-light hover:text-dark md:grid-cols-3 md:flex-row"
              to={`/portfolio/${project.portfolioUrl}`}
              aria-label={project.title}
            >
              <div
                className={`transition-300 absolute -left-[15%] ${
                  index % 2 === 0 ? '-top-3/4' : '-bottom-3/4'
                } -z-20 size-96 rounded-full bg-white/60 blur-[100px] group-hover:scale-[2.5] group-hover:bg-white group-hover:blur-[50px]`}
              ></div>
              <div
                className={`transition-300 absolute right-2 ${
                  index % 2 === 0 ? '-top-3/4' : '-bottom-3/4'
                } -z-20 size-96 rounded-full bg-slate-700 blur-[100px] group-hover:scale-[2.5] group-hover:bg-white group-hover:blur-[50px]`}
              ></div>

              <div
                className={`transition-300 absolute left-1/3 -translate-x-1/4 ${
                  index % 2 === 0 ? '-bottom-24' : '-top-24'
                } -z-10 size-64 rounded-full bg-light/40 blur-[100px] group-hover:scale-[3] group-hover:bg-white group-hover:blur-[50px]`}
              ></div>
              <div className="col-span-1 overflow-hidden p-4 xl:p-0 2xl:p-8">
                <div className="relative">
                  <img
                    src={project.portfolioWebsite.mockup}
                    alt={project.title}
                    className="transition-300 h-56 w-full origin-center object-cover group-hover:scale-105 sm:h-96 md:h-64 md:origin-left"
                  />
                </div>
              </div>
              <div className="transition-300 flex w-full items-center justify-between gap-10 px-4 py-6 pt-0 md:col-span-2 md:p-12 md:py-12 md:group-hover:translate-x-4">
                <div className="flex flex-col items-start gap-4">
                  <h4 className="font-luxury text-xl font-extralight md:text-6xl">
                    {project.title}
                  </h4>
                  <p className="hidden max-w-sm text-sm opacity-80 md:line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="transition-300 flex md:group-hover:translate-x-4">
                  <button
                    type="button"
                    className="transition-300 group flex h-6 w-16 items-center justify-center rounded-full bg-light text-2xl text-dark group-hover:bg-dark group-hover:text-light"
                    title="Explore More"
                    aria-label="Explore More"
                  >
                    <CgArrowLongRight
                      className={`hidden transition-all duration-300 ease-linear group-hover:block`}
                    />
                    <span className="text-sm font-semibold group-hover:hidden">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-24 flex items-center justify-center">
          {/* <Link
            to="/portfolio"
            className="transition-300 inline-flex scale-90 items-center justify-center gap-2 rounded-full bg-dark px-4 py-3 text-center text-xs font-medium uppercase text-light shadow outline outline-1 outline-light/20 hover:bg-dark/90 hover:tracking-wide hover:shadow-2xl sm:text-sm md:scale-100 md:px-8 md:py-4 md:text-base md:hover:tracking-widest"
            aria-label="All Projects"
          >
            All Projects
            <sup className="green-gradient text-xs font-bold group-hover:text-dark sm:text-sm md:text-base">
              ({portfolioDetails.length})
            </sup>
          </Link> */}
          <CustomButton
            to="/portfolio"
            value={`All Projects (${portfolioDetails.length})`}
          />
        </div>
      </section>
    </>
  );
};

export default ProjectsUI;
