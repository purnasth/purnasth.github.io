
import React from "react";
import { useParams, Link } from "react-router-dom";
import { portfolioData } from "../constant/data";
import macbook from "../assets/img/mockup/macbook.png";

const PortfolioPresentation: React.FC = () => {
  const { website } = useParams<{ website: string }>();

  const portfolioItem = portfolioData[0].portfolioDetails.find(
    (item) => item.id === website
  );

  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  const {
    title,
    logoSrc,
    description,
    portfolioWebsite: {
      deployUrl,
      role,
      year,
      credits,
      titleImage,
      backgroundImage,
      iframePages,
    },
  } = portfolioItem;

  return (
    <>
      <main className="px-0 pb-0">
        <section>
          <div className="container">
            <h1 className="text-8xl capitalize hidden">{website}</h1>
            <h1 className="text-8xl">{title}</h1>
            <p className="max-w-lg">{description}</p>
            <ul className="mt-8">
              <li>
                <span className="text-gray-600">Role & Year:</span> {role} (
                {year})
              </li>
              <li>
                <span className="text-gray-600">Credits:</span> {credits}
              </li>
            </ul>

            <div className="mt-20 relative -z-10">
              <div
                className={`bg-[url('${titleImage}')] w-full h-screen outline outline-1 outline-white -outline-offset-[10px] bg-no-repeat bg-cover bg-center bg-fixed`}
              ></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="overlay"></div>
                <img
                  src={logoSrc}
                  alt={title}
                  className="absolute w-32 h-28 md:w-64 md:h-44 object-contain filter-white hover:filter-none z-10 transition-300"
                />
              </div>
            </div>

            <div className="-translate-y-16 flex items-center justify-center">
              <Link
                to={deployUrl}
                target="_blank"
                rel="noreferrer"
                className="size-32 bg-hotel-himalaya rounded-full flex items-center justify-center outline outline-1 outline-white/50 -outline-offset-[8px]"
              >
                <h5>View Project</h5>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden mb-16">
          <img
            src={logoSrc}
            alt=""
            className="absolute inset-0 w-[74.2%] h-screen object-contain mx-auto -z-10 -translate-y-4 rounded-2xl"
          />

          <div className="bg-[url('https://dennissnellenberg.com/assets/img/device-mbp-15-nonotch.png')] bg-no-repeat bg-contain bg-center w-full h-screen"></div>
        </section>

        <section className="py-32">
          <div className="flex items-center justify-evenly px-3">
            {iframePages.map((page, index) => (
              <div
                key={index}
                className="w-[22rem] h-[40rem] overflow-y-auto shadow-lg"
              >
                <iframe
                  src={page.url}
                  title={page.title}
                  className="size-full"
                ></iframe>
              </div>
            ))}
          </div>
        </section>

        <div
          className={`w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed`}
          style={{ backgroundImage: `url(${macbook})` }}
        ></div>

        <div className="w-full h-screen overflow-y-auto shadow-lg scale-[0.8] my-12">
          <iframe
            src={iframePages[0]?.url || "#"}
            title={iframePages[0]?.title || "Iframe"}
            className="size-full"
          ></iframe>
        </div>
      </main>
      <footer className="bg-black h-screen"></footer>
    </>
  );
};

export default PortfolioPresentation;



<div className="capitalize">
          <NavbarBreadCrumb page="portfolio" currentPage="Hotel Himalaya" />
        </div>
