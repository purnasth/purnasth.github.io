import { portfolioData } from '../constant/data';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const { portfolioDetails } = portfolioData[0];

  return (
    <main className="text-light">
      <section className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="transition-300 group flex items-start gap-12 rounded-2xl border border-light/20 bg-light/10 p-12 backdrop-blur hover:bg-light/20">
            <span className="flex aspect-square size-14 items-center justify-center rounded-full bg-light text-center text-dark">
              <FaQuoteLeft className="text-3xl" />
            </span>
            <div>
              <blockquote className="text-pretty font-body text-xl font-extralight">
              {/* {portfolio.caseStudy.feedback.clientReview} */}
              </blockquote>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    // src={portfolio.logoSrc}
                    // alt={portfolio.caseStudy.feedback.author}
                    className="size-24 object-contain"
                  />

                  <div className="flex flex-col gap-4">
                    <h3 className="font-body text-2xl font-normal">
                    {/* {portfolio.caseStudy.feedback.author} */}
                    </h3>
                    <ul className="flex items-center gap-2">
                      {/* {portfolio.portfolioWebsite.role
                      .split('&')
                      .map((role, index) => (
                        <li
                          key={index}
                          className="w-fit rounded-full border border-light px-4 py-1 text-xs font-extralight text-light"
                        >
                          {role.trim()}
                        </li>
                      ))} */}
                    </ul>
                  </div>
                </div>
                <button className="transition-300 rounded-full border border-light/50 bg-light/20 px-6 py-3 text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
          <div className="transition-300 group flex items-start gap-12 rounded-2xl border border-light/20 bg-light/10 p-12 backdrop-blur hover:bg-light/20">
            <span className="flex aspect-square size-14 items-center justify-center rounded-full bg-light text-center text-dark">
              <FaQuoteLeft className="text-3xl" />
            </span>
            <div>
              <blockquote className="text-pretty font-body text-xl font-extralight">
              {/* {portfolio.caseStudy.feedback.clientReview} */}
              </blockquote>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    // src={portfolio.logoSrc}
                    // alt={portfolio.caseStudy.feedback.author}
                    className="size-24 object-contain"
                  />

                  <div className="flex flex-col gap-4">
                    <h3 className="font-body text-2xl font-normal">
                    {/* {portfolio.caseStudy.feedback.author} */}
                    </h3>
                    <ul className="flex items-center gap-2">
                      {/* {portfolio.portfolioWebsite.role
                      .split('&')
                      .map((role, index) => (
                        <li
                          key={index}
                          className="w-fit rounded-full border border-light px-4 py-1 text-xs font-extralight text-light"
                        >
                          {role.trim()}
                        </li>
                      ))} */}
                    </ul>
                  </div>
                </div>
                <button className="transition-300 rounded-full border border-light/50 bg-light/20 px-6 py-3 text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="transition-300 group flex flex-col items-start gap-12 rounded-2xl border border-light/20 bg-light/10 p-12 backdrop-blur hover:bg-light/20">
            <span className="flex aspect-square size-14 items-center justify-center rounded-full bg-light text-center text-dark">
              <FaQuoteLeft className="text-3xl" />
            </span>
            <div>
              <blockquote className="text-pretty font-body text-xl font-extralight">
                “The new website has been a game-changer for Satprayas Nepal. It
                has helped us reach a wider audience and increase donations and
                volunteer sign-ups. We’ve seen a 50% increase in donations and a
                30% rise in volunteer participation within the first month. The
                site’s design and functionality have exceeded our expectations.”
              </blockquote>
              <div className="mt-8 flex flex-col items-start gap-8 justify-between">
                <div className="flex items-center gap-4">
                  {/* image here */}
                  <img
                    src="https://satprayas.purnashrestha.com.np/assets/logo.svg"
                    alt=""
                    className="size-24 object-contain"
                  />

                  <div className="flex flex-col gap-4">
                    <h3 className="font-body text-2xl font-normal">
                      Author here
                    </h3>
                    <ul className="flex items-center gap-2">
                      {/* {portfolio.portfolioWebsite.role
                      .split('&')
                      .map((role, index) => (
                        <li
                          key={index}
                          className="w-fit rounded-full border border-light px-4 py-1 text-light"
                        >
                          {role.trim()}
                        </li>
                      ))} */}
                      <li className="w-fit rounded-full border border-light px-4 py-1 text-xs font-extralight text-light">
                        Design
                      </li>
                      <li className="w-fit rounded-full border border-light px-4 py-1 text-xs font-extralight text-light">
                        Development
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="transition-300 rounded-full border border-light/50 bg-light/20 px-6 py-3 text-light hover:bg-dark hover:text-light group-hover:bg-light group-hover:text-dark w-full">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;