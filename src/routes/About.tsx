import React from 'react';
import ProfileNav from '../components/ProfileNav';
// import purna from '../assets/img/purna/FC_20221024_0004.jpg';
import purna from '../assets/img/purna.jpeg';
import NavbarBreadCrumb from '../components/NavbarBreadCrumb';
import SkillsCategory from '../components/ui/SkillsCategory';
import CreativeGap from '../components/ui/CreativeGap';
import SEO from '../utils/SEO';
import Hello from '../components/ui/Hello';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Purna Shrestha"
        description="Learn about Purna Shrestha, a UI/UX Designer & Web Developer with expertise in creating engaging user experiences."
        keywords="About Purna Shrestha, UI/UX Designer, Web Developer, Portfolio, Developer Journey, Purna's Story, Purna Shrestha, Purna Shrestha Portfolio"
        url="https://www.purnashrestha.com.np/about"
      />
      <main className="size-full py-8 text-white md:py-12">
        <NavbarBreadCrumb page="About" />
        <div className="ml-auto h-full w-full md:w-[calc(100%-14rem-5rem)]">
          <div className="hidden md:block">
            <ProfileNav />
          </div>
          <section className="space-y-16 pt-0">
            <div>
              <Hello title="Purna Shrestha" />
              <p className="my-5 ml-8 text-sm text-light/70 md:my-12 md:ml-32 md:text-base">
                <CreativeGap color="white" /> a <strong>UI/UX Designer</strong>{' '}
                & <strong>Web Developer</strong> helping brands{' '}
                <strong>build globally</strong> through design and code. I bring{' '}
                <strong>ideas to life</strong> by crafting{' '}
                <strong>seamless digital experiences</strong> that are both
                beautiful and functional.{' '}
                <strong>Let's create something unforgettable together!</strong>
              </p>

              <img
                src={purna}
                alt="Purna"
                className="h-64 w-full rounded-3xl object-cover md:h-[42rem]"
              />
            </div>

            <div>
              <h4 className="sticky top-7 z-10 inline-flex items-center justify-center gap-2 rounded-full bg-green-800/30 px-4 py-1 text-xs font-normal text-green-400 outline outline-1 outline-green-400/40 backdrop-blur sm:text-sm md:top-8 md:text-base">
                <span className="size-2 rounded-full bg-green-500"></span>
                Available for work
              </h4>

              <p className="my-5 ml-8 text-sm text-light/70 md:my-12 md:ml-32 md:text-base">
                <CreativeGap color="white" /> I turn{' '}
                <strong>caffeine into code</strong> and{' '}
                <strong>ideas into design</strong>. With my{' '}
                <strong>skills</strong> and <strong>creativity</strong>, I'll
                make your website look so good, you might want to{' '}
                <strong>marry it</strong> (no judgments here!). By working with
                me, you'll benefit from <strong>professional services</strong>{' '}
                tailored to bring your <strong>vision to life</strong>.
              </p>

              <SkillsCategory />
            </div>

            <div>
              <h4 className="sticky top-7 inline-flex items-center justify-center gap-2 rounded-full bg-green-800/30 px-4 py-1 text-xs font-normal text-green-400 outline outline-1 outline-green-400/40 backdrop-blur sm:text-sm md:top-8 md:text-base">
                <span className="size-2 rounded-full bg-green-500"></span>
                Trusted by
              </h4>

              <p className="my-5 ml-8 text-sm text-light/70 md:my-12 md:ml-32 md:text-base">
                <CreativeGap color="white" /> From{' '}
                <strong>ambitious startups</strong> to{' '}
                <strong>renowned brands</strong>, I have a{' '}
                <strong>wealth</strong> of stories to share.{' '}
                <strong>Trusted</strong> by clients across the{' '}
                <strong>globe</strong>, I'm here to build{' '}
                <strong>digital experiences</strong> that make an{' '}
                <strong>impact</strong>.
              </p>

              <ul className="relative my-6 mt-12 grid grid-cols-3 md:grid-cols-6">
                {/* <div className="pointer-events-none absolute inset-0 z-10 size-full select-none outline outline-2 -outline-offset-1 outline-dark" /> */}
                <li>
                  <img
                    src="https://hotelhimalaya.purnashrestha.com.np/assets/logo-s4LMycLK.svg"
                    alt="Hotel Himalaya"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Hotel Himalaya"
                  />
                </li>
                <li>
                  <img
                    src="https://hotel-ichchha.pages.dev/assets/logo-DwnyUaN0.svg"
                    alt="Hotel Ichchha"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Hotel Ichchha"
                  />
                </li>
                <li>
                  <img
                    src="https://mithilayatriniwas.com/assets/logo-BoMl5AAK.svg"
                    alt="Mithila Yatri Niwas"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Mithila Yatri Niwas"
                  />
                </li>
                <li>
                  <img
                    src="https://babermahalvilas.pages.dev/img/logo.svg"
                    alt="Baber Mahal Vilas"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Baber Mahal Vilas"
                  />
                </li>
                <li>
                  <img
                    src="https://www.decrowninn.com/images/preference/AxIuw-logo.png"
                    alt="De Crown Inn"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="De Crown Inn"
                  />
                </li>
                <li>
                  <img
                    src="https://demo.airfarenepal.com/assets/images/logo.png"
                    alt="Airfare Nepal"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Airfare Nepal"
                  />
                </li>
                <li>
                  <img
                    src="https://dayatra.purnashrestha.com.np/assets/img/logo.svg"
                    alt="Hotel Da Yatra"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Hotel Da Yatra"
                  />
                </li>
                <li>
                  <img
                    src="https://himalayanflavours.pages.dev/assets/logo-suQbDJXC.svg"
                    alt="Himalayan Flavours"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Himalayan Flavours"
                  />
                </li>
                <li>
                  <img
                    src="https://naikapvillageresort.com/images/preference/91wAZ-naikap_logo.svg"
                    alt="Naikap Village Resort"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Naikap Village Resort"
                  />
                </li>
                <li>
                  <img
                    src="https://hotelmanang.com/images/preference/StO7F-manang-ogclr.png"
                    alt="Hotel Manang"
                    className="filter-white transition-300 aspect-square size-32 w-full border border-dotted border-white/10 object-contain p-7 opacity-50 hover:border-white/50 hover:p-5 hover:opacity-100 hover:filter-none md:size-40 md:w-full"
                    title="Hotel Manang"
                  />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
