import React from 'react';
import NavbarBreadCrumb from '../components/NavbarBreadCrumb';
import purna from '../assets/img/hero.avif';

const Contact: React.FC = () => {
  return (
    <main className="size-full bg-dark text-white">
      <NavbarBreadCrumb page="Contact" />

      <div className="md:container">
        <div className="flex items-end gap-4 md:gap-6">
          {/* <span>Contact</span> */}
          <h3 className="text-pretty text-3xl capitalize leading-snug drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-6xl md:leading-snug">
            Let's start <br /> a project together
          </h3>
          <img
            src={purna}
            alt="Purna"
            className="size-10 -translate-y-1 rounded-full bg-white object-contain md:size-16 md:-translate-y-4"
          />
        </div>

        <div className="my-10 h-px w-full bg-gradient-to-r from-[#989AA6]/[0.5] to-transparent md:my-16 md:h-[0.5px]" />

        <section className="">
          <h4 className="sticky top-6 z-10 inline-flex items-center justify-center gap-2 rounded-full bg-green-800/30 px-4 py-1 font-normal text-green-400 outline outline-1 outline-green-400/40 backdrop-blur md:top-8">
            <span className="size-2 rounded-full bg-green-500"></span>
            Services Process
          </h4>
          <div className="relative mt-10 flex md:mt-16 lg:space-x-10">
            <div className="h-full w-0 lg:w-[4%]" />
            <div className="w-full">
              <div className="absolute left-0 hidden h-full w-[4%] justify-center lg:flex">
                <div className="bg-gradient sticky top-20 z-30 hidden size-10 -translate-x-2 items-center justify-center rounded-full lg:flex">
                  <div className="flex size-8 items-center justify-center rounded-full">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="p-px text-3xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M21 12a9 9 0 1 0 -9 9" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h7.9" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62" />
                      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M20.2 20.2l1.8 1.8" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-0 hidden h-full w-px items-center bg-gradient-to-t from-transparent via-[#989AA6]/[0.5] to-transparent transition duration-100 lg:flex" />
              </div>
              <div className="">
                <p className="mb-3">Meeting</p>
                <h2 className="text-2xl md:mb-8 md:text-4xl lg:text-6xl">
                  Consulting & Strategy
                </h2>
                <div className="relative grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-12">
                  <div>
                    <p className="text-pretty text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nulla, aut rem dolor ex neque fuga perspiciatis quia
                      voluptates.
                    </p>
                    <button className="shadow-luminr-white/5 text-luminr-white group relative mt-5 rounded-xl p-px text-base leading-6 shadow-lg md:mt-10">
                      <span className="absolute inset-0 overflow-hidden">
                        <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(219,99,50,1)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                      <div className="from-luminr-blue/20 to-luminr-orange/5 ring-luminr-white/20 hover:bg-luminr-blue relative z-10 flex items-center space-x-2 rounded-xl bg-gradient-to-b px-5 py-3 ring-1 backdrop-blur-md transition-all duration-500 md:px-8 md:py-4">
                        <span className="group-hover:text-gradient text-base transition-all duration-300 ease-linear">
                          Learn More
                        </span>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="group-hover:text-luminr-orange text-xl transition duration-200 group-hover:translate-x-2"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[rgb(219,99,50)] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                  </div>
                  <div
                    className="relative md:col-span-2"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <img
                      alt="Web Design and Development"
                      draggable="false"
                      loading="lazy"
                      decoding="async"
                      className="select-none rounded-2xl object-contain p-6 blur-0 transition duration-500 md:p-10"
                      src="https://luminr.pages.dev/assets/web-C42Nw-_y.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="py-16 md:py-40">
                <p className="mb-3">UI/UX + React.js</p>
                <h2 className="text-2xl md:mb-8 md:text-4xl lg:text-6xl">
                  Web Design & Development
                </h2>
                <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-20">
                  <div
                    className="relative md:col-span-2"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <img
                      alt="SEO"
                      draggable="false"
                      loading="lazy"
                      decoding="async"
                      className="object-contain p-6 blur-0 transition duration-500 md:scale-90 md:p-10"
                      src="https://luminr.pages.dev/assets/seo-C4mOUhsv.svg"
                    />
                  </div>
                  <div>
                    <p className="text-pretty text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nulla, aut rem dolor ex neque fuga perspiciatis quia
                      voluptates.
                    </p>
                    <button className="shadow-luminr-white/5 text-luminr-white group relative mt-5 rounded-xl p-px text-base leading-6 shadow-lg md:mt-10">
                      <span className="absolute inset-0 overflow-hidden">
                        <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(219,99,50,1)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                      <div className="from-luminr-blue/20 to-luminr-orange/5 ring-luminr-white/20 hover:bg-luminr-blue relative z-10 flex items-center space-x-2 rounded-xl bg-gradient-to-b px-5 py-3 ring-1 backdrop-blur-md transition-all duration-500 md:px-8 md:py-4">
                        <span className="group-hover:text-gradient text-base transition-all duration-300 ease-linear">
                          Learn More
                        </span>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="group-hover:text-luminr-orange text-xl transition duration-200 group-hover:translate-x-2"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[rgb(219,99,50)] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-end gap-6">
          {/* <span>Contact</span> */}
          <h3 className="flex items-center gap-1 text-pretty text-xl leading-relaxed drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-4xl md:leading-snug">
            Interested in working together? <br />
            {/* We should queue up a time to
            chat. I'll buy the coffee. */}
            Let's pencil in a time for a chat. I'll buy the coffee.
            <img
              src="https://ugokawaii.com/wp-content/uploads/2022/10/hot-coffee.gif"
              alt="Coffee"
              className="size-12 translate-y-3 object-contain md:size-16"
            />
          </h3>
          {/* <img
            src={purna}
            alt="Purna"
            className="size-16 rounded-full object-contain -translate-y-4 bg-white"
          /> */}
        </div>
      </div>
    </main>
  );
};

export default Contact;
