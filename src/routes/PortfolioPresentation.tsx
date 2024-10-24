import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { portfolioData } from '../constant/data';
import NavbarBreadCrumb from '../components/NavbarBreadCrumb';
import CaseStudy from '../components/CaseStudy';
import GalleryReview from '../components/ui/GalleryReview';
import ExploreProjects from '../components/ui/ExploreProjects';

const PortfolioPresentation: React.FC = () => {
  const { website } = useParams();
  const portfolioDetails = portfolioData[0].portfolioDetails;

  const currentProjectIndex = portfolioDetails.findIndex(
    (item) => item.portfolioUrl === website,
  );

  const portfolioItem = portfolioDetails[currentProjectIndex];

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
      <main className="bg-white md:px-4 xl:px-0">
        <div className="md:container">
          <h1 className="text-4xl md:text-8xl">{portfolioItem.title}</h1>
          <p className="mt-2 max-w-lg text-pretty text-sm md:text-base">
            {portfolioItem.description}
          </p>
          <ul className="mt-6 md:mt-8">
            <li className="text-sm font-medium md:text-base">
              <span className="mr-1 text-gray-600">Role & Year:</span>
              {portfolioItem.portfolioWebsite?.role} (
              {portfolioItem.portfolioWebsite?.year})
            </li>
            <li className="text-sm font-medium md:text-base">
              <span className="mr-1 text-gray-600">Credits:</span>
              {portfolioItem.portfolioWebsite?.credits}
            </li>
          </ul>

          <div className="relative mt-12 md:mt-20">
            <div
              className="z-20 h-72 w-full bg-cover bg-center bg-no-repeat outline outline-1 -outline-offset-[10px] outline-white md:h-[42rem] xl:h-screen xl:bg-fixed"
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
              className="bg-hotel-himalaya flex size-24 items-center justify-center rounded-full text-xs shadow outline outline-1 -outline-offset-[8px] outline-white/50 hover:animate-bounce md:size-32 md:text-base"
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

        <section className="py-10 md:py-0 overflow-hidden">
          <img
            src={portfolioItem.portfolioWebsite?.mockup}
            alt={`${portfolioItem.title} Mockup`}
            className="size-full scale-125 object-contain md:scale-100"
          />
        </section>

        <section className="container max-w-3xl pb-0">
          <img
            src={portfolioItem.portfolioWebsite?.uiPresentation}
            alt={`UI Presentation of ${portfolioItem.title}`}
            className="size-full shadow"
          />
        </section>

        <section className="py-4 md:py-32">
          <div className="hidden flex-col items-center justify-evenly gap-y-16 md:px-3 xl:flex xl:flex-row">
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

        <section className="md:py-0">
          <div
            className="h-72 w-full bg-cover bg-center bg-no-repeat md:h-screen md:bg-fixed"
            style={{
              backgroundImage: `url(${portfolioItem.portfolioWebsite?.backgroundImage})`,
            }}
          ></div>
        </section>

        <section>
          <div className="h-screen w-full overflow-y-auto shadow-lg md:h-[110vh] md:scale-[0.875]">
            <iframe
              src={portfolioItem.portfolioWebsite?.iframePages[0]?.url}
              title={portfolioItem.portfolioWebsite?.iframePages[0]?.title}
              className="size-full"
            ></iframe>
          </div>
        </section>

        <GalleryReview portfolioItem={portfolioItem} />
      </main>

      <ExploreProjects
        portfolioDetails={portfolioDetails}
        currentProjectIndex={currentProjectIndex}
      />
    </>
  );
};

export default PortfolioPresentation;
