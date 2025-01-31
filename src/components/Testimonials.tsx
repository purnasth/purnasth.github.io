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
      <section className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {portfolioDetails.map(
            (portfolio, index) =>
              index % 3 !== 2 && (
                <div
                  key={index}
                  className="transition-300 group relative flex items-start gap-12 overflow-hidden rounded-2xl border border-light/20 bg-light/10 p-12 backdrop-blur hover:bg-light/15"
                >
                  {/* <div
                    className="transition-300 absolute -top-1/4 right-2 -z-20 size-96 rounded-full bg-slate-600 blur-[100px] group-hover:scale-125 group-hover:blur-[50px]"
                    // style={{ animationDuration: '10s' }}
                  ></div>

                  <div className="absolute -bottom-12 -left-10 -z-10 size-52 rounded-full bg-slate-400 blur-[100px] group-hover:scale-125"></div> */}

                  <div
                    className={`transition-300 absolute right-2 ${
                      index % 2 === 0 ? '-top-1/4' : '-bottom-1/4'
                    } -z-20 size-96 rounded-full bg-slate-600 blur-[100px] group-hover:scale-125 group-hover:blur-[50px]`}
                  ></div>

                  <div
                    className={`absolute -left-10 ${
                      index % 2 === 0 ? '-bottom-12' : '-top-12'
                    } -z-10 size-52 rounded-full bg-slate-400 blur-[100px] group-hover:scale-125`}
                  ></div>

                  <span className="transition-300 flex aspect-square size-14 items-center justify-center rounded-full border bg-light text-center text-dark group-hover:border-light/50 group-hover:bg-light/30 group-hover:text-light">
                    <FaQuoteLeft className="text-3xl" />
                  </span>
                  <div>
                    <blockquote className="text-pretty font-body text-xl font-extralight">
                      {portfolio.caseStudy.feedback.clientReview}
                    </blockquote>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={portfolio.logoSrc}
                            alt={portfolio.caseStudy.feedback.author}
                            className="size-24 object-contain"
                          />
                          <img
                            src={portfolio.logoSrc}
                            alt={portfolio.caseStudy.feedback.author}
                            className="absolute inset-0 -z-20 size-24 scale-[3] object-contain blur-[40px]"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h3 className="font-body text-2xl font-normal">
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
                        className="transition-300 rounded-full border border-light/50 bg-light/20 px-10 py-3 text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark"
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
                  className="transition-300 relative overflow-hidden group flex flex-col items-start gap-12 rounded-2xl border border-light/20 bg-light/10 p-12 backdrop-blur hover:bg-light/15"
                >
                  <div
                    className={`transition-300 absolute right-2 ${
                      index % 2 === 0 ? '-top-1/4' : '-bottom-1/4'
                    } -z-20 size-96 rounded-full bg-slate-600 blur-[100px] group-hover:scale-125 group-hover:blur-[50px]`}
                  ></div>

                  <div
                    className={`absolute -left-10 ${
                      index % 2 === 0 ? '-bottom-12' : '-top-12'
                    } -z-10 size-52 rounded-full bg-slate-400 blur-[100px] group-hover:scale-125`}
                  ></div>

                  <span className="transition-300 flex aspect-square size-14 items-center justify-center rounded-full border bg-light text-center text-dark group-hover:border-light/50 group-hover:bg-light/30 group-hover:text-light">
                    <FaQuoteLeft className="text-3xl" />
                  </span>
                  <div>
                    <blockquote className="text-pretty font-body text-xl font-extralight">
                      {portfolio.caseStudy.feedback.clientReview}
                    </blockquote>
                    <div className="mt-8 flex flex-col items-start justify-between gap-8">
                      <div className="flex items-center gap-4">
                        <div className="relative">

                        <img
                          src={portfolio.logoSrc}
                          alt={portfolio.caseStudy.feedback.author}
                          className="size-24 object-contain"
                        />
                          <img
                            src={portfolio.logoSrc}
                            alt={portfolio.caseStudy.feedback.author}
                            className="absolute inset-0 -z-20 size-24 scale-[3] object-contain blur-[40px]"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h3 className="font-body text-2xl font-normal">
                            {portfolio.caseStudy.feedback.author}
                          </h3>
                          <ul className="flex items-center gap-2">
                            {portfolio.portfolioWebsite.role
                              .split('&')
                              .map((role, roleIndex) => (
                                <li
                                  key={roleIndex}
                                  className="w-fit rounded-full border border-light px-4 py-1 text-xs font-extralight tracking-wide text-light"
                                >
                                  {role.trim()}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <Link
                        to={`/portfolio/${portfolio.portfolioUrl}`}
                        className="transition-300 w-full text-center rounded-full border border-light/50 bg-light/20 px-6 py-3 text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark"
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
