import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { portfolioData } from '../constant/data';
import NavbarBreadCrumb from '../components/NavbarBreadCrumb';
import CaseStudy from '../components/CaseStudy';

import { TbMessageChatbot } from 'react-icons/tb';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

const PortfolioPresentation: React.FC = () => {
  const { website } = useParams();

  const filteredProjects = portfolioData[0].portfolioDetails
    .filter((project) => project.portfolioUrl !== website)
    .slice(0, 2);

  const portfolioItem = portfolioData[0].portfolioDetails.find(
    (item) => item.portfolioUrl === website,
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
      <main className="md:px-0">
        {/* <div className="absolute inset-0 -z-10 h-4/5 w-full bg-[url('https://i.pinimg.com/originals/41/3f/79/413f79030afe575c4df464e9be636fa1.jpg')] bg-cover opacity-20 contrast-200" /> */}
        {/* <div className="absolute inset-0 -z-10 h-4/5 w-full bg-[url('https://indieground.net/wp-content/uploads/2020/02/Freebie-DarkGrungeTextures-Preview-06.jpg')] bg-cover bg-center mix-blend-difference" /> */}
        {/* <div className="absolute inset-0 -z-10 h-4/5 w-full bg-[url('https://cdn.pixabay.com/photo/2021/02/05/18/05/paper-5985445_1280.jpg')] bg-cover bg-center" /> */}
        {/* <div className="absolute inset-0 -z-10 h-4/5 w-full bg-[url('https://homegrowngardencentre.com/wp-content/uploads/2023/06/Masthead-2200x1375.jpg')] bg-cover bg-center opacity-50" /> */}
        <div className="mt-12 md:container md:mt-0">
          <h1 className="text-4xl md:text-8xl">{portfolioItem.title}</h1>
          <p className="max-w-lg text-pretty text-sm md:text-base">
            {portfolioItem.description}
          </p>
          <ul className="mt-6 md:mt-8">
            <li>
              <span className="mr- text-gray-600">Role & Year:</span>
              {portfolioItem.portfolioWebsite?.role} (
              {portfolioItem.portfolioWebsite?.year})
            </li>
            <li>
              <span className="mr- text-gray-600">Credits:</span>
              {portfolioItem.portfolioWebsite?.credits}
            </li>
          </ul>

          <div className="relative mt-12 md:mt-20">
            <div
              className="z-20 h-72 w-full bg-cover bg-center bg-no-repeat outline outline-1 -outline-offset-[10px] outline-white md:h-screen md:bg-fixed"
              style={{
                backgroundImage: `url(${portfolioItem.portfolioWebsite?.titleImage})`,
              }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="overlay"></div>
              <img
                src={portfolioItem.logoSrc}
                alt={`${portfolioItem.title} logo`}
                className="transition-300 absolute z-10 h-28 w-32 object-contain md:h-44 md:w-64"
              />
            </div>
          </div>

          <div className="flex -translate-y-1/2 items-center justify-center md:-translate-y-16">
            <Link
              to={portfolioItem.portfolioWebsite?.deployUrl || '#'}
              target="_blank"
              rel="noreferrer"
              className="bg-hotel-himalaya flex size-24 items-center justify-center rounded-full text-xs outline outline-1 -outline-offset-[8px] outline-white/50 md:size-32 md:text-base"
            >
              <h5>View Project</h5>
            </Link>
          </div>
        </div>

        {portfolioItem.caseStudy && (
          <CaseStudy
            problemStatement={
              portfolioItem.caseStudy?.problemStatement ||
              'No problem statement provided.'
            }
            solutionOverview={
              portfolioItem.caseStudy?.solutionOverview ||
              'No solution overview provided.'
            }
            projectJourney={
              portfolioItem.caseStudy?.projectJourney?.projectJourney || ''
            }
            journeyOverview={
              portfolioItem.caseStudy?.journeyOverview ||
              'No journey overview provided.'
            }
            toolsUsed={
              portfolioItem.caseStudy?.toolsUsed?.map((tool) => ({
                src: tool.src,
                title: tool.title,
              })) || []
            }
            projectOutcome={
              portfolioItem.caseStudy?.projectOutcome ||
              'No project outcome provided.'
            }
          />
        )}

        <section className="">
          <img
            src={portfolioItem.portfolioWebsite?.mockup}
            alt={`${portfolioItem.title} Mockup`}
            className="size-full object-contain"
          />
        </section>


        <section className='container max-w-3xl my-16'>
          <img
          src={portfolioItem.portfolioWebsite?.uiPresentation}
          alt={`UI Presentation of ${portfolioItem.title}`} className='size-full shadow' />
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

        <section className="py-10 md:py-32">
          <div className="hidden flex-col items-center justify-evenly gap-y-16 md:flex md:flex-row md:px-3">
            {portfolioItem.portfolioWebsite?.iframePages.map(
              (iframe, index) => (
                <div
                  key={index}
                  className="h-[42rem] w-full overflow-y-auto shadow-lg md:w-[22rem]"
                >
                  <iframe
                    src={iframe.url}
                    title={iframe.title}
                    className="size-full"
                  ></iframe>
                </div>
              ),
            )}
          </div>
        </section>

        <div
          className="h-72 w-full bg-cover bg-center bg-no-repeat md:h-screen md:bg-fixed"
          style={{
            backgroundImage: `url(${portfolioItem.portfolioWebsite?.backgroundImage})`,
          }}
        ></div>

        <div className="my-8 h-screen w-full scale-[0.875] overflow-y-auto shadow-lg md:my-16 md:h-[110vh]">
          <iframe
            src={portfolioItem.portfolioWebsite?.iframePages[0]?.url}
            title={portfolioItem.portfolioWebsite?.iframePages[0]?.title}
            className="size-full"
          ></iframe>
        </div>

        <section className="bg-white">
          <div className="container md:px-4">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-8">
              <div className="col-span-2">
                <div className="space-y-4">
                  <h5 className="font-luxury text-4xl font-extralight">
                    Gallery
                  </h5>
                  <p className="max-w-lg text-xs md:text-sm">
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
                        className="gallery-item group relative cursor-pointer overflow-hidden shadow-md transition-all duration-200 ease-linear hover:shadow-xl"
                        data-src={image.src}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="size-full h-72 cursor-pointer object-cover contrast-100 transition-all duration-300 ease-linear group-hover:scale-110 group-hover:contrast-125"
                          loading="lazy"
                          draggable="false"
                        />
                        <div className="pointer-events-none absolute inset-0 z-0 size-full bg-gradient-to-t from-black/70 to-black/0 transition-all duration-300 ease-linear group-hover:opacity-50" />
                        <h5 className="absolute bottom-0 z-10 w-full -translate-x-0 p-2 text-right text-white opacity-80 transition-all duration-300 ease-linear [text-shadow:1px_1px_2px_#cd9c31] group-hover:translate-x-1/2 group-hover:opacity-100">
                          {image.alt}
                        </h5>
                      </div>
                    ),
                  )}
                </LightGallery>
              </div>

              <div className="col-span-1">
                <div className="space-y-4">
                  <h5 className="font-luxury text-4xl font-extralight">
                    Feedback
                  </h5>
                  <p className="max-w-xs text-xs md:text-sm">
                    Discover what
                    <strong className="mx-1 font-bold text-inherit">
                      {portfolioItem.title}
                    </strong>
                    has to say about entrusting their vision to me—and how our
                    successful collaboration propelled their business to new
                    heights.
                  </p>
                </div>

                <div className="mt-12 border border-dark/10 p-4 shadow-lg">
                  <div className="testimonials">
                    <div className="relative flex max-h-64 flex-col gap-4 overflow-y-auto transition-all duration-150 ease-linear">
                      <p className="review mr-3 text-pretty text-justify text-sm text-dark md:text-base">
                        {portfolioItem.caseStudy?.feedback?.clientReview}
                      </p>
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-dark">
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
                    className="transition-300 group mt-4 inline-flex items-center justify-center gap-2 border border-dark/20 bg-dark/10 px-6 py-2 text-dark shadow-md hover:animate-bounce hover:bg-dark/30 hover:shadow-xl"
                    target="_blank"
                  >
                    Schedule a meeting
                    <TbMessageChatbot className="transition-300 text-xl group-hover:translate-x-2 group-hover:animate-ping" />
                  </a>
                  <p className="mt-2">
                    or directly Mail me at
                    <a
                      href="mailto:purnashrestha0310@gmail.com"
                      className="group relative mx-1 text-base font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="purnashrestha0310@gmail.com"
                    >
                      <span className="absolute -bottom-1 -right-0 h-[2px] w-full origin-left bg-dark transition-all duration-300 ease-linear group-hover:scale-x-0"></span>
                      purnashrestha0310@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-gray-200 px-4 py-24 md:px-0 md:py-32">
        <div className="container">
          <h5 className="mb-8 font-luxury text-3xl font-extralight md:mb-12 md:text-4xl">
            Explore more projects
          </h5>
          <div className="overflow-hidden rounded-3xl border-[1px] border-dark/40">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                className="bg-bg-gold-dark group flex flex-col items-center justify-between gap-0 border-b-[1px] border-dark/30 transition-all duration-700 hover:bg-gray-400 md:flex-row"
                to={`/portfolio/${project.portfolioUrl}`}
              >
                <div className="flex w-full md:w-1/3">
                  <img
                    src={project.landingImage[0]?.url}
                    alt={project.title}
                    className="h-64 w-full origin-left object-cover transition-all duration-700 sm:h-96 md:h-60 md:group-hover:scale-x-105"
                  />
                </div>
                <div className="flex w-full items-center justify-between gap-10 px-4 py-8 transition-all duration-700 md:w-2/3 md:p-12 md:py-12 md:group-hover:translate-x-4">
                  <div className="flex flex-col items-start gap-2 md:gap-5">
                    <h4 className="text-2xl md:text-3xl">{project.title}</h4>
                    <p className="line-clamp-2 max-w-md text-base">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex transition-all duration-700 md:group-hover:translate-x-4">
                    <button
                      type="button"
                      className="rounded-full bg-gray-400 px-4 py-1 text-2xl text-dark transition-all duration-300 ease-linear group-hover:bg-dark group-hover:text-gray-400"
                      title="Explore More"
                      aria-label="Explore More"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="transition-all duration-300 ease-linear group-hover:translate-x-0 md:group-hover:scale-x-150"
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
