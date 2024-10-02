import React, { useState, useEffect } from 'react';
import ProfileNav from '../components/ProfileNav';
import purna from '../assets/img/purna/FC_20221024_0004.jpg';
import NavbarBreadCrumb from '../components/NavbarBreadCrumb';
import SkillsCategory from '../components/ui/SkillsCategory';

const About: React.FC = () => {
  const greetings: string[] = [
    'Hello',
    'ज्वजलपा', // Newari
    'नमस्कार', // Nepali
    'Hola', // Spanish
    'Bonjour', // French
    'Hallo', // German
    'Ciao', // Italian
    'こんにちは', // Japanese
    '안녕하세요', // Korean
    '你好', // Chinese
    'Olá', // Portuguese
  ];

  const [greeting, setGreeting] = useState<string>(greetings[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreeting((prevGreeting) => {
        const currentIndex = greetings.indexOf(prevGreeting);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="size-full bg-dark py-8 md:py-12 text-white">
      <NavbarBreadCrumb page="About" />
      <div className="ml-auto h-full w-full md:w-[calc(100%-14rem-5rem)]">
        <div className="hidden md:block">
          <ProfileNav />
        </div>
        <section className="space-y-16">
          <div>
            <h2 className="text-3xl capitalize leading-snug md:text-6xl">
              {greeting}, <br /> I'm Purna Shrestha.
            </h2>
            <p className="my-5 ml-8 text-sm md:my-12 md:ml-32 md:text-base">
              ---------------- a software engineer based in Kathmandu, Nepal.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              nam eligendi amet quam eos totam, blanditiis dolores commodi hic
              quo?
            </p>

            <img
              src={purna}
              alt="Purna"
              className="h-64 w-full rounded-3xl object-cover md:h-[42rem]"
            />
          </div>

          <div>
            <h4 className="sticky top-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-800/30 px-4 py-1 font-normal text-green-400 outline outline-1 outline-green-400/40 backdrop-blur">
              <span className="size-2 rounded-full bg-green-500"></span>
              Available for work
            </h4>

            <p className="my-5 ml-8 text-sm md:my-12 md:ml-32 md:text-base">
              ---------------- a software engineer based in Kathmandu, Nepal.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              nam eligendi amet quam eos totam, blanditiis dolores commodi hic
              quo?
            </p>

            <SkillsCategory />
          </div>

          <div>
            <h4 className="sticky top-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-800/30 px-4 py-1 font-normal text-green-400 outline outline-1 outline-green-400/40 backdrop-blur">
              <span className="size-2 rounded-full bg-green-500"></span>
              Trusted by
            </h4>

            <div className="align-center my-6 mt-12 flex flex-wrap justify-center gap-8">
              <img
                src="https://hotelhimalaya.pages.dev/assets/logo-s4LMycLK.svg"
                alt="Hotel Himalaya"
                className="filter-white transition-300 size-24 object-contain opacity-70 hover:opacity-100 hover:filter-none"
              />
              <img
                src="https://hotel-ichchha.pages.dev/assets/logo-C7pBEzx4.svg"
                alt="Hotel Ichchha"
                className="filter-white transition-300 size-24 object-contain opacity-70 hover:opacity-100 hover:filter-none"
              />
              <img
                src="https://mithilayatriniwas.com/assets/logo-BoMl5AAK.svg"
                alt="Mithila Yatri Niwas"
                className="filter-white transition-300 size-24 object-contain opacity-70 hover:opacity-100 hover:filter-none"
              />
              <img
                src="https://babermahalvilas.pages.dev/img/logo.svg"
                alt="Baber Mahal Vilas"
                className="filter-white transition-300 size-24 object-contain opacity-70 hover:opacity-100 hover:filter-none"
              />
              <img
                src="https://www.decrowninn.com/images/preference/AxIuw-logo.png"
                alt="De Crown Inn"
                className="filter-white transition-300 size-24 object-contain opacity-70 hover:opacity-100 hover:filter-none"
              />
              <img
                src="https://barpeepal.pages.dev/logo.svg"
                alt="Barpeepal Resort"
                className="filter-white transition-300 size-24 object-contain opacity-70 hover:opacity-100 hover:filter-none"
              />
              <img
                src="https://demo.airfarenepal.com/assets/images/logo.png"
                alt="Airfare Nepal"
                className="filter-white transition-300 size-24 object-contain opacity-70 hover:opacity-100 hover:filter-none"
              />
              <img
                src="https://www.purnashrestha.com.np/dayatra/assets/img/logo.svg"
                alt="Hotel Da Yatra"
                className="filter-white transition-300 size-24 object-contain opacity-70 hover:opacity-100 hover:filter-none"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
