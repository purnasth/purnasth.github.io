// import { portfolioData } from '../constant/data';

// const Testimonials = () => {
//   const { portfolioDetails } = portfolioData[0];

//   return (
//     <main className="w-full columns-1 gap-2  sm:columns-2 md:gap-4 md:px-4 lg:columns-2 xl:columns-3 xl:px-0">
//       {portfolioDetails.map((portfolio, index) => (
//         <section
//           key={index}
//           className="flex flex-col items-center justify-center gap-6 bg-red-600 mb-4"
//         >
//           <h4 className="text-center text-base font-extralight leading-tight text-light">
//             {portfolio.caseStudy.feedback.clientReview}
//           </h4>
//           <p className="text-center text-light">
//             - {portfolio.caseStudy.feedback.author}
//           </p>
//           <img
//             src={portfolio.logoSrc}
//             alt={portfolio.caseStudy.feedback.author}
//             className="h-24 w-24 rounded-full"
//           />
//   <ul className="flex items-center gap-2">
//     {portfolio.portfolioWebsite.role.split('&').map((role, index) => (
//       <li
//         key={index}
//         className="w-fit rounded-full border border-light px-4 py-1 text-light"
//       >
//         {role.trim()}
//       </li>
//     ))}
//           </ul>
//         </section>
//       ))}
//     </main>
//   );
// };

// export default Testimonials;

import { portfolioData } from '../constant/data';

const Testimonials = () => {
  const { portfolioDetails } = portfolioData[0];

  return (
    <>
      <main className="px-4">
        <section
          className={`transition-linear w-full columns-1 gap-2 sm:columns-2 md:gap-4 lg:columns-2 xl:columns-3 text-light`}
        >
          {portfolioDetails.map((portfolio, index) => (
            <div
              key={index}
              className={`group mb-4 origin-center space-y-6 overflow-hidden rounded-xl  p-6 shadow transition-all duration-300 ease-linear`}
            >
              <p className="text-pretty">
                {portfolio.caseStudy.feedback.clientReview}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={portfolio.logoSrc}
                  alt={portfolio.caseStudy.feedback.author}
                  className="h-24 w-24 rounded-full"
                />
                <div>
                  <h3 className="font-body text-lg font-semibold">
                    {portfolio.caseStudy.feedback.author}
                  </h3>
                  <ul className="flex items-center gap-2">
                    {portfolio.portfolioWebsite.role
                      .split('&')
                      .map((role, index) => (
                        <li
                          key={index}
                          className="w-fit rounded-full border border-light px-4 py-1 text-light"
                        >
                          {role.trim()}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Testimonials;
