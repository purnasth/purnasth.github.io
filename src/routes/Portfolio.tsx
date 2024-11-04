import React from 'react';
import { portfolioData } from '../constant/data';

import NavbarBreadCrumb from '../components/NavbarBreadCrumb';
import ProjectsUI from '../components/ui/ProjectsUI';
import SEO from '../utils/SEO';
import Footer from '../layout/Footer';
// import ProjectsUI_OG from '../components/ui/ProjectsUI_OG';

const Portfolio: React.FC = () => {
  return (
    <>
      <SEO
        title="Portfolio - Purna Shrestha | Designer & Developer"
        description="Explore the portfolio of Purna Shrestha, showcasing professional projects in UI/UX design, web development, and software engineering."
        keywords="Portfolio, Purna Shrestha, Projects, UI/UX Design, Web Development, Software Engineer, Designer, Developer"
        url="https://www.purnashrestha.com.np/portfolio"
      />
      <main className="bg-dark text-light">
        <NavbarBreadCrumb page="Portfolio" />

        <div className="mx-auto max-w-4xl space-y-4 md:text-center">
          <span>{portfolioData[0].title}</span>
          <h3 className="text-4xl capitalize drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-8xl">
            {portfolioData[0].heading}
          </h3>
          <p className="text-sm opacity-70 md:text-base">
            {portfolioData[0].description}
          </p>
        </div>

        <div className="mt-12 container">
          <ProjectsUI />
        </div>

        {/* <ProjectsUI_OG /> */}

        <div className="static left-12 top-10 mx-auto mt-10 flex w-auto md:fixed md:mt-0">
          <p className="translate-y-0 rounded-xl bg-light/10 px-4 py-1 text-base text-light outline outline-1 outline-light/60 backdrop-blur-lg transition-all duration-[1s] md:rounded-full md:text-xs">
            <strong className="font-extrabold text-inherit">Note:</strong> Some
            projects have been completed under{' '}
            <strong className="font-extrabold text-inherit">NDAs</strong>, and
            cannot be publicly shared.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
