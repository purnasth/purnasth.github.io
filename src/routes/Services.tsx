import React from 'react';
import NavbarBreadCrumb from '../components/NavbarBreadCrumb';
// import purna from '../assets/img/hero.avif';
import design from '../assets/img/nav/services.svg';
import develop from '../assets/img/svg/develop.svg';
import app from '../assets/img/svg/app.svg';
import earth from '../assets/img/svg/earth.gif';
import ProjectsUI from '../components/ui/ProjectsUI';
import SEO from '../utils/SEO';
import Footer from '../layout/Footer';

const servicesContent = [
  {
    id: 1,
    title: 'Web & App Design',
    subtitle: 'UI/UX',
    description:
      "Design goes beyond aesthetics; it's about functionality. We offer comprehensive UI/UX design services that rival the best globally.",
    image: design,
  },
  {
    id: 2,
    title: 'Web Development',
    subtitle: 'React.js',
    description:
      'We build high-performance, scalable, and secure web applications. Our team ensures that your web app is fast, reliable, and user-friendly.',
    image: develop,
  },
  {
    id: 3,
    title: 'App Development',
    subtitle: 'React Native',
    description:
      'We develop cross-platform mobile applications that are fast, reliable, and user-friendly. Our team ensures that your app is scalable and secure.',
    image: app,
  },
];

const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="Services - Purna Shrestha"
        description="Explore the range of services offered by Purna Shrestha, including UI/UX design, web development, and software solutions."
        keywords="UI/UX design services, web development services, software solutions, frontend developer, React developer"
      />
      <main className="size-full bg-dark pb-28 text-white">
        <NavbarBreadCrumb page="Services" />

        <div className="container">
          {/* <div className="flex items-end gap-4 md:gap-6">
            <h3 className="text-pretty text-3xl capitalize leading-snug drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-6xl md:leading-snug">
              Expert Solutions <br /> Tailored for Your Needs
            </h3>
            <img
              src={purna}
              alt="Purna"
              className="size-10 -translate-y-1 rounded-full bg-white object-contain md:size-16 md:-translate-y-4"
            />
          </div>

          <div className="my-10 h-px w-full bg-gradient-to-r from-[#989AA6]/[0.5] to-transparent md:my-16 md:h-[0.5px]" /> */}

          <section className="pt-0">
            <h4 className="sticky top-7 z-30 inline-flex items-center justify-center gap-2 rounded-full bg-green-800/30 px-4 py-1 text-xs font-normal text-green-400 outline outline-1 outline-green-400/40 backdrop-blur sm:text-sm md:top-8 md:text-base">
              <span className="size-2 rounded-full bg-green-500"></span>
              Services
            </h4>

            {servicesContent.map((service, index) => (
              <div
                key={service.id}
                className="relative mt-10 flex md:mt-16 lg:space-x-10"
              >
                <div className="h-full w-0 lg:w-[4%]" />
                <div className="w-full">
                  <div className="absolute left-0 hidden h-full w-[4%] justify-center lg:flex">
                    <div className="bg-gradient sticky top-20 z-10 hidden size-10 -translate-x-2 items-center justify-center rounded-full lg:flex">
                      <img
                        src={earth}
                        alt="globe"
                        className="aspect-square size-9 rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute left-0 hidden h-full w-px items-center bg-gradient-to-t from-transparent via-[#989AA6]/[0.5] to-transparent transition duration-100 lg:flex" />
                  </div>
                  {index % 2 === 0 ? (
                    <div className="w-full">
                      <div className="">
                        <p className="mb-3">{service.subtitle}</p>
                        <h2 className="mb-4 text-2xl md:mb-8 md:text-4xl lg:text-6xl">
                          {service.title}
                        </h2>
                        <div className="relative grid grid-cols-1 gap-0 gap-y-12 md:grid-cols-3 md:gap-12">
                          <div>
                            <p className="text-pretty text-sm opacity-80">
                              {service.description}
                            </p>
                          </div>
                          <div className="relative transform-none opacity-100 md:col-span-2">
                            <img
                              alt={service.title}
                              draggable="false"
                              loading="lazy"
                              decoding="async"
                              className="size-full select-none object-cover transition duration-500 md:-translate-y-24"
                              src={service.image}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="pb-16 md:pb-40">
                        <p className="mb-3">{service.subtitle}</p>
                        <h2 className="text-2xl md:mb-8 md:text-4xl lg:text-6xl">
                          {service.title}
                        </h2>
                        <div className="relative mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-20">
                          <div className="relative transform-none opacity-100 md:col-span-2">
                            <img
                              alt={service.title}
                              draggable="false"
                              loading="lazy"
                              decoding="async"
                              className="size-full object-contain transition duration-500"
                              src={service.image}
                            />
                          </div>
                          <div>
                            <p className="text-pretty text-sm opacity-80">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>

          <div className="space-y-0">
            <p className="mt-10 text-sm opacity-80 md:text-base">
              Glimpse of some of my recent projects.
            </p>

            <ProjectsUI limit={4} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
