import React from 'react';
import { Link } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

import { portfolioData } from '../../constant/data';

const ProjectsUI_OG: React.FC = () => {
  return (
    <>
      <section className="mt-12 py-0 md:mt-24 xl:p-0 xl:pt-0">
        {portfolioData[0].portfolioDetails.map((portfolio, index) => (
          <div className="grid grid-cols-1 xl:grid-cols-3" key={portfolio.id}>
            <div
              className={`col-span-1 w-full content-center ${
                index % 2 === 0 ? '' : 'xl:order-last'
              }`}
            >
              <div className="mx-auto space-y-8 md:space-y-16">
                <div>
                  <img
                    src={portfolio.logoSrc}
                    alt={portfolio.title}
                    className="h-28 w-32 object-contain md:h-36 md:w-40"
                  />
                  <p className="mt-4 text-justify text-sm md:text-base">
                    {portfolio.description}
                  </p>
                </div>

                <Link
                  to={`/portfolio/${portfolio.portfolioUrl}`}
                  className="bg-hotel-himalaya inline-block rounded-full px-6 py-2 text-sm text-dark transition-all duration-300 ease-linear hover:bg-opacity-80 md:px-8 md:text-lg"
                >
                  View Project
                </Link>
              </div>
            </div>
            <LightGallery
              plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
              mode="lg-fade"
              thumbnail={true}
              autoplay={true}
              elementClassNames={`col-span-2 justify-self-end mt-12 ${
                index === portfolioData[0].portfolioDetails.length - 1
                  ? 'mb-0'
                  : 'mb-28 lg:mb-44 xl:mb-6'
              }`}
            >
              <div
                data-src={portfolio.portfolioWebsite.mockup}
                className="group cursor-pointer overflow-hidden transition-all duration-200 ease-linear"
              >
                <img
                  src={portfolio.portfolioWebsite.mockup}
                  alt={portfolio.title}
                  className="cursor-pointer rounded-2xl object-cover contrast-100 transition-all duration-300 ease-linear group-hover:contrast-150"
                  draggable="false"
                />
              </div>
            </LightGallery>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectsUI_OG;
