import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../constant/data';
import { CgArrowLongRight } from 'react-icons/cg';

const ProjectsUI: React.FC = () => {
  const { portfolioDetails } = portfolioData[0];
  return (
    <>
      <section className="mt-24">
        <div className="border-light/10 overflow-hidden rounded-3xl border-[1px]">
          {portfolioDetails.map((project) => (
            <Link
              key={project.id}
              className="transition-300 border-light/20 text-light hover:bg-light group grid grid-cols-3 gap-0 border-b-[1px] hover:text-dark md:flex-row"
              to={`/portfolio/${project.portfolioUrl}`}
            >
              <div className="col-span-1">
                <img
                  src={project.portfolioWebsite.mockup}
                  alt={project.title}
                  className="transition-300 h-64 w-full origin-left object-cover sm:h-96 md:h-64 md:group-hover:scale-x-105"
                />
              </div>
              <div className="transition-300 flex w-full items-center justify-between gap-10 px-4 py-8 md:col-span-2 md:p-12 md:py-12 md:group-hover:translate-x-4">
                <div className="flex flex-col items-start gap-4">
                  <h4 className="font-luxury text-2xl font-extralight md:text-6xl">
                    {project.title}
                  </h4>
                  <p className="line-clamp-2 max-w-sm text-sm opacity-80">
                    {project.description}
                  </p>
                </div>
                <div className="transition-300 flex md:group-hover:translate-x-4">
                  <button
                    type="button"
                    className="transition-300 bg-light group-hover:text-light rounded-full px-4 py-1 text-2xl text-dark ease-linear group-hover:bg-dark"
                    title="Explore More"
                    aria-label="Explore More"
                  >
                    <CgArrowLongRight className="transition-300 ease-linear group-hover:translate-x-0 md:group-hover:scale-x-125" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsUI;
