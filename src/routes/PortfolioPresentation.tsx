import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { portfolioData } from "../constant/data";
import NavbarBreadCrumb from "../components/NavbarBreadCrumb";
import CaseStudy from "../components/CaseStudy";

import { TbMessageChatbot } from "react-icons/tb";

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

const PortfolioPresentation: React.FC = () => {
  const { website } = useParams();

  const filteredProjects = portfolioData[0].portfolioDetails
    .filter((project) => project.portfolioUrl !== website)
    .slice(0, 2);

  const portfolioItem = portfolioData[0].portfolioDetails.find(
    (item) => item.portfolioUrl === website
  );

  if (!portfolioItem) {
    return <p>Portfolio item not found</p>;
  }

  const whiteBg = true;

  return (
    <>
      <NavbarBreadCrumb
        page="portfolio"
        currentPage={portfolioItem.title}
        whiteBg={whiteBg}
      />
      <main className="px-0">
        <section>
          <div className="container">
            <h1 className="text-8xl">{portfolioItem.title}</h1>
            <p className="max-w-lg">{portfolioItem.description}</p>
            <ul className="mt-8">
              <li>
                <span className="text-gray-600">Role & Year:</span>{" "}
                {portfolioItem.portfolioWebsite?.role} (
                {portfolioItem.portfolioWebsite?.year})
              </li>
              <li>
                <span className="text-gray-600">Credits:</span>{" "}
                {portfolioItem.portfolioWebsite?.credits}
              </li>
            </ul>

            <div className="mt-20 relative -z-10">
              <div
                className="bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen outline outline-1 outline-white -outline-offset-[10px] z-10"
                style={{
                  backgroundImage: `url(${portfolioItem.portfolioWebsite?.titleImage})`,
                }}
              ></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="overlay"></div>
                <img
                  src={portfolioItem.logoSrc}
                  alt={`${portfolioItem.title} logo`}
                  className="absolute w-32 h-28 md:w-64 md:h-44 object-contain z-10 transition-300"
                />
              </div>
            </div>

            <div className="-translate-y-16 flex items-center justify-center">
              <Link
                to={portfolioItem.portfolioWebsite?.deployUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="size-32 bg-hotel-himalaya rounded-full flex items-center justify-center outline outline-1 outline-white/50 -outline-offset-[8px]"
              >
                <h5>View Project</h5>
              </Link>
            </div>
          </div>
        </section>

        {portfolioItem.caseStudy && (
          <CaseStudy
            problemStatement={
              portfolioItem.caseStudy?.problemStatement ||
              "No problem statement provided."
            }
            solutionOverview={
              portfolioItem.caseStudy?.solutionOverview ||
              "No solution overview provided."
            }
            projectJourney={
              portfolioItem.caseStudy?.projectJourney?.projectJourney || ""
            }
            journeyOverview={
              portfolioItem.caseStudy?.journeyOverview ||
              "No journey overview provided."
            }
            toolsUsed={
              portfolioItem.caseStudy?.toolsUsed?.map((tool) => ({
                src: tool.src,
                title: tool.title,
              })) || []
            }
            projectOutcome={
              portfolioItem.caseStudy?.projectOutcome ||
              "No project outcome provided."
            }
          />
        )}

        <section>
          <img
            src={portfolioItem.portfolioWebsite?.mockup}
            alt={`${portfolioItem.title} Mockup`}
            className="size-full object-contain"
          />
        </section>
        {/* <section className="relative overflow-hidden mb-16">
          <img
            src={portfolioItem.landingImage[0]?.url}
            alt={portfolioItem.landingImage[0]?.alt}
            className="absolute inset-0 w-[74.2%] h-screen object-contain mx-auto -z-10 -translate-y-4 rounded-2xl"
          />

          <div
            className="bg-no-repeat bg-contain bg-center w-full h-screen"
            style={{
              backgroundImage: `url(https://dennissnellenberg.com/assets/img/device-mbp-15-nonotch.png)`,
            }}
          ></div>
        </section> */}

        <section className="py-32">
          <div className="flex items-center justify-evenly px-3">
            {portfolioItem.portfolioWebsite?.iframePages.map(
              (iframe, index) => (
                <div
                  key={index}
                  className="w-[22rem] h-[42rem] overflow-y-auto shadow-lg"
                >
                  <iframe
                    src={iframe.url}
                    title={iframe.title}
                    className="size-full"
                  ></iframe>
                </div>
              )
            )}
          </div>
        </section>

        <div
          className="bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen"
          style={{
            backgroundImage: `url(${portfolioItem.portfolioWebsite?.backgroundImage})`,
          }}
        ></div>

        <div className="my-16 w-full h-[110vh] overflow-y-auto shadow-lg scale-[0.875]">
          <iframe
            src={portfolioItem.portfolioWebsite?.iframePages[0]?.url}
            title={portfolioItem.portfolioWebsite?.iframePages[0]?.title}
            className="size-full"
          ></iframe>
        </div>

        <section className="bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-8">
              <div className="col-span-2">
                <div className="space-y-4">
                  <h5 className="text-4xl font-luxury font-extralight">
                    Gallery
                  </h5>
                  <p className="text-xs md:text-sm max-w-lg">
                    Explore the exquisite moments captured throughout our
                    project journey. Each photograph tells a story of creativity
                    and collaboration, celebrating the milestones and memories
                    that defined our success.
                  </p>
                </div>

                <LightGallery
                  plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
                  mode="lg-fade"
                  thumbnail={true}
                  autoplay={true}
                  elementClassNames="mt-12 w-full grid grid-cols-1 md:grid-cols-2 gap-4 transition-linear"
                >
                  {portfolioItem.caseStudy?.galleryImages?.map(
                    (image, index) => (
                      <div
                        key={index}
                        className="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer relative shadow-md hover:shadow-xl"
                        data-src={image.src}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="contrast-100 group-hover:contrast-125 size-full h-72 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                          loading="lazy"
                          draggable="false"
                        />
                        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear" />
                        <h5 className="absolute bottom-0 text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                          {image.alt}
                        </h5>
                      </div>
                    )
                  )}
                </LightGallery>
              </div>

              <div className="col-span-1">
                <div className="space-y-4">
                  <h5 className="text-4xl font-luxury font-extralight">
                    Feedback
                  </h5>
                  <p className="text-xs md:text-sm max-w-xs">
                    Discover what{" "}
                    <strong className="text-inherit font-bold">
                      {portfolioItem.title}
                    </strong>{" "}
                    has to say about entrusting their vision to me—and how our
                    successful collaboration propelled their business to new
                    heights.
                  </p>
                </div>

                <div className="mt-12 p-4 shadow-lg border border-dark/10">
                  <div className="testimonials">
                    <div className="flex flex-col gap-4 relative transition-all duration-150 ease-linear max-h-64 overflow-y-auto">
                      <p className="text-justify text-pretty text-dark text-sm md:text-base mr-3 review">
                        {portfolioItem.caseStudy?.feedback?.clientReview}
                      </p>
                      <div className="flex items-center justify-between">
                        <h4 className="text-base text-dark font-bold">
                          - {portfolioItem.caseStudy?.feedback?.author}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    href="https://wa.me/+9779808021753"
                    rel="noopener noreferrer"
                    className="mt-4 group inline-flex items-center justify-center gap-2 bg-dark/10 hover:bg-dark/30 hover:animate-bounce text-dark border border-dark/20 hover:shadow-xl shadow-md px-6 py-2 transition-300"
                    target="_blank"
                  >
                    Schedule a meeting
                    <TbMessageChatbot className="text-xl group-hover:translate-x-2 transition-300 group-hover:animate-ping" />
                  </a>
                  <p className="mt-2">
                    or directly Mail me at
                    <a
                      href="mailto:purnashrestha0310@gmail.com"
                      className="mx-1 text-base font-semibold relative group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="purnashrestha0310@gmail.com"
                    >
                      <span className="absolute -bottom-1 -right-0 w-full h-[2px] bg-dark group-hover:scale-x-0 origin-left transition-all duration-300 ease-linear"></span>
                      purnashrestha0310@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-gray-200 py-32">
        <div className="container mx-auto">
          <h5 className="text-4xl mb-12 font-luxury font-extralight">
            Explore more projects
          </h5>
          <div className="border-[1px] border-dark/40 rounded-3xl overflow-hidden">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                className="mb-8 border-b-[1px] md:mb-0 border-dark/30 flex items-center flex-col md:flex-row justify-between gap-0 bg-bg-gold-dark hover:bg-gray-400 group transition-all duration-700"
                to={`/portfolio/${project.portfolioUrl}`}
              >
                <div className="flex w-full md:w-1/3">
                  <img
                    src={project.landingImage[0]?.url}
                    alt={project.title}
                    className="w-full h-64 sm:h-96 md:h-60 object-cover origin-left transition-all duration-700 md:group-hover:scale-x-105"
                  />
                </div>
                <div className="py-12 px-4 flex items-center justify-between md:p-12 w-full md:w-2/3 gap-10 transition-all duration-700 md:group-hover:translate-x-4">
                  <div className="flex items-start flex-col gap-2 md:gap-5">
                    <h4 className="text-2xl md:text-3xl">{project.title}</h4>
                    <p className="text-base max-w-md line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex transition-all duration-700 md:group-hover:translate-x-4">
                    <button
                      type="button"
                      className="bg-gray-400 text-dark group-hover:text-gray-400 group-hover:bg-dark px-4 py-1 rounded-full text-2xl transition-all duration-300 ease-linear"
                      title="Explore More"
                      aria-label="Explore More"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="md:group-hover:scale-x-150 group-hover:translate-x-0 transition-all duration-300 ease-linear"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPresentation;
