import React, { useState, useEffect } from "react";
import ProfileNav from "../components/ProfileNav";
import purna from "../assets/img/purna/FC_20221024_0004.jpg";
import NavbarBreadCrumb from "../components/NavbarBreadCrumb";
import SkillsCategory from "../components/ui/SkillsCategory";

const About: React.FC = () => {
  const greetings: string[] = [
    "Hello",
    "ज्वजलपा", // Newari
    "नमस्कार", // Nepali
    "Hola", // Spanish
    "Bonjour", // French
    "Hallo", // German
    "Ciao", // Italian
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "你好", // Chinese
    "Olá", // Portuguese
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
    <main className="size-full bg-dark text-white py-12">
      <NavbarBreadCrumb page="About" />
      <div className="w-[calc(100%-14rem-5rem)] h-full ml-auto">
        <ProfileNav />
        <section className="space-y-16">
          <div>
            <h2 className="text-6xl leading-snug capitalize">
              {greeting}, <br /> I'm Purna Shrestha.
            </h2>
            <p className="my-12 ml-32 text-base">
              ---------------- a software engineer based in Kathmandu, Nepal.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              nam eligendi amet quam eos totam, blanditiis dolores commodi hic
              quo?
            </p>

            <img
              src={purna}
              alt="Purna"
              className="w-full h-[42rem] object-cover rounded-3xl"
            />
          </div>

          <div>
            <h4 className="sticky top-4 px-4 py-1 font-normal rounded-full inline-flex items-center justify-center gap-2 outline outline-1 backdrop-blur text-green-400 bg-green-800/30 outline-green-400/40">
              <span className="size-2 bg-green-500 rounded-full"></span>
              Available for work
            </h4>

            <p className="my-6 ml-32">
              ---------------- a software engineer based in Kathmandu, Nepal.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              nam eligendi amet quam eos totam, blanditiis dolores commodi hic
              quo?
            </p>

            <SkillsCategory />
          </div>

          <div>
            <h4 className="sticky top-4 px-4 py-1 font-normal rounded-full inline-flex items-center justify-center gap-2 outline outline-1 backdrop-blur text-green-400 bg-green-800/30 outline-green-400/40">
              <span className="size-2 bg-green-500 rounded-full"></span>
              Trusted by
            </h4>

            <div className="my-6 flex align-center justify-center gap-8 mt-12">
              <img
                src="https://hotelhimalaya.pages.dev/assets/logo-s4LMycLK.svg"
                alt="Hotel Himalaya"
                className="size-24 object-contain filter-white hover:filter-none transition-300 opacity-70 hover:opacity-100"
              />
              <img
                src="https://hotel-ichchha.pages.dev/assets/logo-C7pBEzx4.svg"
                alt="Hotel Ichchha"
                className="size-24 object-contain filter-white hover:filter-none transition-300 opacity-70 hover:opacity-100"
              />
              <img
                src="https://mithilayatriniwas.com/assets/logo-BoMl5AAK.svg"
                alt="Mithila Yatri Niwas"
                className="size-24 object-contain filter-white hover:filter-none transition-300 opacity-70 hover:opacity-100"
              />
              <img
                src="https://babermahalvilas.pages.dev/img/logo.svg"
                alt="Baber Mahal Vilas"
                className="size-24 object-contain filter-white hover:filter-none transition-300 opacity-70 hover:opacity-100"
              />
              <img
                src="https://www.decrowninn.com/images/preference/AxIuw-logo.png"
                alt="De Crown Inn"
                className="size-24 object-contain filter-white hover:filter-none transition-300 opacity-70 hover:opacity-100"
              />
              <img
                src="https://barpeepal.pages.dev/logo.svg"
                alt="Barpeepal Resort"
                className="size-24 object-contain filter-white hover:filter-none transition-300 opacity-70 hover:opacity-100"
              />
              <img
                src="https://demo.airfarenepal.com/assets/images/logo.png"
                alt="Airfare Nepal"
                className="size-24 object-contain filter-white hover:filter-none transition-300 opacity-70 hover:opacity-100"
              />
              <img
                src="https://www.purnashrestha.com.np/dayatra/assets/img/logo.svg"
                alt="Hotel Da Yatra"
                className="size-24 object-contain filter-white hover:filter-none transition-300 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
