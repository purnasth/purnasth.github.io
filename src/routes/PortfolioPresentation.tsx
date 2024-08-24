import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { portfolioData } from "../constant/data";
import NavbarBreadCrumb from "../components/NavbarBreadCrumb";

const PortfolioPresentation: React.FC = () => {
  const { website } = useParams();

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
            <h1 className="text-8xl capitalize hidden">{website}</h1>
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
                className="bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen outline outline-1 outline-white -outline-offset-[10px]"
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

        <section className="relative overflow-hidden mb-16">
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
        </section>

        <section className="py-32">
          <div className="flex items-center justify-evenly px-3">
            {portfolioItem.portfolioWebsite?.iframePages.map(
              (iframe, index) => (
                <div
                  key={index}
                  className="w-[22rem] h-[42rem] overflow-y-auto shadow-lg scale-90"
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

        <div className="w-full h-screen overflow-y-auto shadow-lg scale-[0.8]">
          <iframe
            src={portfolioItem.portfolioWebsite?.iframePages[0]?.url}
            title={portfolioItem.portfolioWebsite?.iframePages[0]?.title}
            className="size-full"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default PortfolioPresentation;
