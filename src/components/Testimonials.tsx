import { portfolioData } from '../constant/data';
import { FaQuoteLeft } from 'react-icons/fa';
import ScrollReveal from './ui/ScrollReveal';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const { portfolioDetails } = portfolioData[0];

  return (
    <main className="text-light">
      <ScrollReveal
        // heading="Helping Brands Build Globally Through Design & Development"
        // heading="Projects that Speak for Themselves"
        heading="Clients' Storytellings & Project Impacts"
        styles="px-4 md:px-0 text-light text-3xl md:text-6xl xl:text-7xl font-luxury font-extralight leading-snug text-pretty md:leading-snug"
      />
      <section className="grid xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-4 xl:space-y-6">
          {portfolioDetails.map(
            (portfolio, index) =>
              index % 3 !== 2 && (
                <div
                  key={index}
                  className="transition-300 group flex flex-col xl:flow-row items-start gap-6 xl:gap-12 rounded-2xl border border-light/20 bg-light/10 p-6 xl:p-12 backdrop-blur hover:bg-light/20"
                >
                  <span className="transition-300 flex aspect-square size-10 xl:size-14 items-center justify-center rounded-full border bg-light text-center text-dark group-hover:border-light/50 group-hover:bg-light/30 group-hover:text-light">
                    <FaQuoteLeft className="text-xl xl:text-3xl" />
                  </span>
                  <div>
                    <blockquote className="text-pretty font-body text-base md:text-xl font-extralight">
                      {portfolio.caseStudy.feedback.clientReview}
                    </blockquote>
                    <div className="mt-4 xl:mt-8 flex items-center justify-between flex-col xl:flex-row gap-y-8">
                      <div className="flex w-full xl:items-center gap-4 xl:gap-8">
                        <img
                          src={portfolio.logoSrc}
                          alt={portfolio.caseStudy.feedback.author}
                          className="size-20 xl:size-24 object-contain"
                        />
                        <div className="flex flex-col gap-4">
                          <h3 className="font-body text-xl xl:text-2xl font-normal">
                            {portfolio.caseStudy.feedback.author}
                          </h3>
                          <ul className="flex items-center gap-2">
                            {portfolio.portfolioWebsite.role
                              .split('&')
                              .map((role, roleIndex) => (
                                <li
                                  key={roleIndex}
                                  className="w-fit rounded-full border border-light px-4 py-1 text-xs font-extralight text-light"
                                >
                                  {role.trim()}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <Link
                        to={`/portfolio/${portfolio.portfolioUrl}`}
                        className="transition-300 w-full xl:w-auto text-center min-w-fit rounded-full border border-light/50 bg-light/20 px-10 py-3 text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark"
                      >
                        View Case Study
                      </Link>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
        <div className="col-span-1 space-y-6">
          {portfolioDetails.map(
            (portfolio, index) =>
              index % 3 === 2 && (
                <div
                  key={index}
                  className="transition-300 group flex flex-col items-start gap-12 rounded-2xl border border-light/20 bg-light/10 p-6 xl:p-12 backdrop-blur hover:bg-light/20"
                >
                  <span className="transition-300 flex aspect-square size-10 xl:size-14 items-center justify-center rounded-full border bg-light text-center text-dark group-hover:border-light/50 group-hover:bg-light/30 group-hover:text-light">
                    <FaQuoteLeft className="text-xl xl:text-3xl" />
                  </span>
                  <div>
                  <blockquote className="text-pretty font-body text-base md:text-xl font-extralight">
                      {portfolio.caseStudy.feedback.clientReview}
                    </blockquote>
                    <div className="mt-4 xl:mt-8 flex items-center justify-between flex-col gap-y-8">
                      <div className="flex w-full xl:items-center gap-4">
                        <img
                          src={portfolio.logoSrc}
                          alt={portfolio.caseStudy.feedback.author}
                          className="size-20 xl:size-24 object-contain"
                        />
                        <div className="flex flex-col gap-4">
                        <h3 className="font-body text-xl xl:text-2xl font-normal">
                            {portfolio.caseStudy.feedback.author}
                          </h3>
                          <ul className="flex items-center gap-2">
                            {portfolio.portfolioWebsite.role
                              .split('&')
                              .map((role, roleIndex) => (
                                <li
                                  key={roleIndex}
                                  className="w-fit rounded-full border border-light px-4 py-1 text-xs font-extralight text-light"
                                >
                                  {role.trim()}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <Link
                        to={`/portfolio/${portfolio.portfolioUrl}`}
                        className="w-full text-center transition-300 rounded-full border border-light/50 bg-light/20 px-10 py-3 text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark"
                        >
                        View Case Study
                      </Link>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
