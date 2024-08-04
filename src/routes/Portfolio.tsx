import React from "react";
import { portfolioData } from "../constant/data";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
  return (
    <main className="size-full h-full bg-black text-white">
      <div className="container">
        <div className="text-center space-y-4">
          <span>{portfolioData[0].title}</span>
          <h3 className="font-title text-8xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] capitalize">
            {portfolioData[0].heading}
          </h3>
        </div>
      </div>

      <section className="mt-24 xl:p-8 xl:pt-0 py-0">
        {portfolioData[0].portfolioDetails.map((portfolio, index) => (
          <div
            className="grid grid-cols-1 xl:grid-cols-3 content-center gap-y-12 xl:gap-16 xl:p-8"
            key={portfolio.id}
          >
            <div
              className={`col-span-1 content-center w-full ${
                index % 2 === 0 ? "" : "xl:order-last"
              }`}
            >
              <div className="space-y-8 md:space-y-20">
                <div>
                  <img
                    src={portfolio.logoSrc}
                    alt={portfolio.title}
                    className="w-32 h-28 md:w-40 md:h-36 object-contain"
                  />
                  {/* <h3 className="text-xl md:text-2xl xl:text-3xl md:leading-normal xl:leading-snug">
                {portfolio.title}
              </h3> */}
                  <p className="text-sm text-justify md:text-base mt-4 mb-8 md:mb-20">
                    {portfolio.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl mb-6">Technologies</h3>

                  <ul className="flex items-center gap-3 md:gap-6 flex-wrap">
                    {portfolio.technologies.map(
                      (technology, technologyIndex) => (
                        <li
                          key={technologyIndex}
                          className="px-4 py-2 rounded-2xl relative overflow-hidden text-xs md:text-base"
                          // style={{
                          //   backgroundColor: portfolio.technologiesColor,
                          // }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 opacity-30 -z-10 pointer-events-none"></div>
                          {technology}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <Link
                  to={`/portfolio/${portfolio.portfolioUrl}`}
                  className="bg-hotel-himalaya text-black px-10 py-3 rounded-full inline-block hover:bg-opacity-80 transition-all duration-300 ease-linear"
                >
                  View Project
                </Link>
              </div>
            </div>
            <LightGallery
              plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
              mode="lg-fade"
              // options={{
              //   thumbnail: true,
              //   autoplay: true,
              // }}
              thumbnail={true}
              autoplay={true}
              elementClassNames={`col-span-2 grid grid-cols-5 gap-4 md:gap-8 ${
                index % 2 === 0 ? "" : "xl:order-first"
              } md:mt-16 xl:mt-24 ${
                index === portfolioData[0].portfolioDetails.length - 1
                  ? "mb-0"
                  : "mb-28 lg:mb-44 xl:mb-6"
              }`}
            >
              {portfolio.landingImage.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  data-src={image.url}
                  className={`col-span-${image.colSpan || 1} ${
                    imageIndex % 2 === 0 ? "content-end" : ""
                  } group overflow-hidden transition-all duration-200 ease-linear cursor-pointer`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="contrast-100 group-hover:contrast-150 object-cover rounded-2xl transition-all duration-300 ease-linear cursor-pointer"
                    draggable="false"
                  />
                </div>
              ))}
            </LightGallery>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Portfolio;
