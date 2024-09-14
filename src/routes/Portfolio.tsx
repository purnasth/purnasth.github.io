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
import NavbarBreadCrumb from "../components/NavbarBreadCrumb";

const Portfolio: React.FC = () => {
  return (
    <main className="size-full bg-dark text-white">
      <NavbarBreadCrumb page="Portfolio" />

      <div className="container">
        <div className="text-center space-y-4">
          <span>{portfolioData[0].title}</span>
          <h3 className="text-8xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] capitalize">
            {portfolioData[0].heading}
          </h3>
        </div>
      </div>

      <section className="mt-24 xl:p-0 xl:pt-0 py-0">
        {portfolioData[0].portfolioDetails.map((portfolio, index) => (
          <div className="grid grid-cols-1 xl:grid-cols-3" key={portfolio.id}>
            <div
              className={`col-span-1 content-center w-full ${
                index % 2 === 0 ? "" : "xl:order-last"
              }`}
            >
              <div className="space-y-8 md:space-y-16">
                <div>
                  <img
                    src={portfolio.logoSrc}
                    alt={portfolio.title}
                    className="w-32 h-28 md:w-40 md:h-36 object-contain"
                  />
                  <p className="text-sm text-justify md:text-base mt-4">
                    {portfolio.description}
                  </p>
                </div>

                <Link
                  to={`/portfolio/${portfolio.portfolioUrl}`}
                  className="bg-hotel-himalaya text-dark px-8 py-2 text-lg rounded-full inline-block hover:bg-opacity-80 transition-all duration-300 ease-linear"
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
              elementClassNames={`col-span-2 justify-self-end md:mt-16 xl:mt-24 ${
                index === portfolioData[0].portfolioDetails.length - 1
                  ? "mb-0"
                  : "mb-28 lg:mb-44 xl:mb-6"
              }`}
            >
              <div
                data-src={portfolio.portfolioWebsite.mockup}
                className="group overflow-hidden transition-all duration-200 ease-linear cursor-pointer"
              >
                <img
                  src={portfolio.portfolioWebsite.mockup}
                  alt={portfolio.title}
                  className="contrast-100 group-hover:contrast-150 object-cover rounded-2xl transition-all duration-300 ease-linear cursor-pointer"
                  draggable="false"
                />
              </div>
            </LightGallery>
          </div>
        ))}
      </section>

      <div className="fixed left-12 top-10 flex w-auto mx-auto">
        <p className="px-4 py-1 rounded-full transition-all duration-[1s] translate-y-0 outline outline-1 backdrop-blur-lg text-white bg-white/10 outline-white/60 text-xs">
          <strong className="text-inherit font-extrabold">Note:</strong> Some
          projects have been completed under{" "}
          <strong className="text-inherit font-extrabold">NDAs</strong>, and
          cannot be publicly shared.
        </p>
      </div>
    </main>
  );
};

export default Portfolio;
