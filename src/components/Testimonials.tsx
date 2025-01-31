import { portfolioData } from '../constant/data';
import { FaQuoteLeft } from 'react-icons/fa';
import ScrollReveal from './ui/ScrollReveal';
import CustomButton from './ui/CustomButton';
import { TbBookmarkFilled } from 'react-icons/tb';

const Testimonials = () => {
  const { portfolioDetails } = portfolioData[0];

  return (
    <main className="text-light">
      <ScrollReveal
        heading="Clients' Storytellings & Project Impacts"
        styles="px-4 md:px-0 text-light text-3xl md:text-6xl xl:text-7xl font-luxury font-extralight leading-snug text-pretty md:leading-snug"
      />
      <section className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2 xl:space-y-6">
          {portfolioDetails.map(
            (portfolio, index) =>
              index % 3 !== 2 && (
                <div
                  key={index}
                  className="transition-300 group relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-light/20 bg-light/10 p-6 backdrop-blur hover:bg-light/15 xl:flex-row xl:gap-12 xl:p-12"
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

                  <span className="transition-300 flex aspect-square size-7 origin-top-left scale-150 items-center justify-center rounded-full border bg-light text-center text-dark group-hover:border-light/50 group-hover:bg-light/30 group-hover:text-light xl:size-9">
                    <FaQuoteLeft className="text-sm xl:text-xl" />
                  </span>
                  <div>
                    <blockquote className="text-pretty text-justify font-body text-base font-extralight md:text-lg">
                      {portfolio.caseStudy.feedback.clientReview}
                    </blockquote>
                    <div className="mt-4 flex flex-col items-center justify-between gap-y-8 xl:mt-8 xl:flex-row">
                      <div className="flex w-full gap-4 xl:items-center xl:gap-8">
                        <div className="relative">
                          <img
                            src={portfolio.logoSrc}
                            alt={portfolio.caseStudy.feedback.author}
                            className="size-20 object-contain xl:size-24"
                          />
                          <img
                            src={portfolio.logoSrc}
                            alt={portfolio.caseStudy.feedback.author}
                            className="absolute inset-0 -z-20 size-20 scale-[3] object-contain blur-[40px] xl:size-24"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-body text-xl font-normal xl:text-2xl">
                            {portfolio.caseStudy.feedback.author}
                          </h3>
                          <ul className="flex items-center gap-2">
                            {portfolio.portfolioWebsite.role
                              .split('&')
                              .map((role, roleIndex) => (
                                <li
                                  key={roleIndex}
                                  className="w-fit rounded-full border border-light/60 px-4 py-1 text-xs font-extralight tracking-wide text-light"
                                >
                                  {role.trim()}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      {/* <Link
                        to={`/portfolio/${portfolio.portfolioUrl}`}
                        className="transition-300 w-full min-w-fit rounded-full border border-light/50 bg-light/20 px-14 py-3 text-center text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark xl:w-auto"
                      >
                        View Case Study
                      </Link> */}

                      <CustomButton
                        to={`/portfolio/${portfolio.portfolioUrl}`}
                        value="View Case Study"
                        icon={TbBookmarkFilled}
                      />
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
                  className="transition-300 group relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-light/20 bg-light/10 p-6 backdrop-blur hover:bg-light/15 xl:gap-12 xl:p-12"
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

                  <span className="transition-300 flex aspect-square size-7 origin-top-left scale-150 items-center justify-center rounded-full border bg-light text-center text-dark group-hover:border-light/50 group-hover:bg-light/30 group-hover:text-light xl:size-9">
                    <FaQuoteLeft className="text-sm xl:text-xl" />
                  </span>
                  <div>
                    <blockquote className="text-pretty text-justify font-body text-base font-extralight md:text-lg">
                      {portfolio.caseStudy.feedback.clientReview}
                    </blockquote>
                    <div className="mt-4 flex flex-col justify-between gap-y-8 xl:mt-8">
                      <div className="flex w-full gap-4 xl:items-center">
                        <div className="relative">
                          <img
                            src={portfolio.logoSrc}
                            alt={portfolio.caseStudy.feedback.author}
                            className="size-20 object-contain xl:size-24"
                          />
                          <img
                            src={portfolio.logoSrc}
                            alt={portfolio.caseStudy.feedback.author}
                            className="absolute inset-0 -z-20 size-24 scale-[3] object-contain blur-[40px]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-body text-xl font-normal xl:text-2xl">
                            {portfolio.caseStudy.feedback.author}
                          </h3>
                          <ul className="flex items-center gap-2">
                            {portfolio.portfolioWebsite.role
                              .split('&')
                              .map((role, roleIndex) => (
                                <li
                                  key={roleIndex}
                                  className="w-fit rounded-full border border-light/60 px-4 py-1 text-xs font-extralight tracking-wide text-light"
                                >
                                  {role.trim()}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>

                      <CustomButton
                        to={`/portfolio/${portfolio.portfolioUrl}`}
                        value="View Case Study"
                        icon={TbBookmarkFilled}
                      />

                      {/* <Link
                        to={`/portfolio/${portfolio.portfolioUrl}`}
                        className="transition-300 w-full rounded-full border border-light/50 bg-light/20 px-6 py-3 text-center text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark"
                      >
                        View Case Study
                      </Link> */}
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
