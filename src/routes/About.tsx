import React, { useState, useEffect } from "react";
import ProfileNav from "../components/ProfileNav";
import purna from "../assets/img/purna/FC_20221024_0004.jpg";
import NavbarBreadCrumb from "../components/NavbarBreadCrumb";

type SkillLogo = {
  id: number;
  title: string;
  url: string;
};

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

  const frontDevLogos: SkillLogo[] = [
    {
      id: 3,
      title: "HTML5",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      id: 4,
      title: "CSS3",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      id: 5,
      title: "JavaScript",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      id: 9,
      title: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 17,
      title: "Next.js",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      id: 6,
      title: "Bootstrap",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      id: 7,
      title: "Tailwind CSS",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
  ];

  const backendLogos: SkillLogo[] = [
    {
      id: 13,
      title: "Node.js",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      id: 14,
      title: "Express.js",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      id: 15,
      title: "MongoDB",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
      id: 12,
      title: "MySQL",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    },
    {
      id: 16,
      title: "Firebase",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    },
    {
      id: 18,
      title: "Python",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      id: 19,
      title: "Django",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
    },
  ];

  const designLogos: SkillLogo[] = [
    {
      id: 10,
      title: "Figma",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      id: 22,
      title: "Photoshop",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    },
    {
      id: 23,
      title: "Illustrator",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
    },
    {
      id: 24,
      title: "Adobe XD",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
    },
    {
      id: 25,
      title: "InDesign",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
    },
    {
      id: 26,
      title: "After Effects",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
    },
    {
      id: 27,
      title: "Premiere Pro",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    },
  ];

  const versionControlLogos: SkillLogo[] = [
    {
      id: 1,
      title: "Git",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    {
      id: 2,
      title: "Github",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
      id: 3,
      title: "Cloudflare",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg",
    },
  ];

  const projectManagementLogos: SkillLogo[] = [
    {
      id: 31,
      title: "Slack",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
    },
    {
      id: 32,
      title: "Trello",
      url: "https://cdn.worldvectorlogo.com/logos/trello.svg",
    },
    {
      id: 33,
      title: "Jira",
      url: "https://cdn.worldvectorlogo.com/logos/jira-3.svg",
    },
    {
      id: 34,
      title: "Notion",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    },
  ];

  const otherLogos: SkillLogo[] = [
    {
      id: 1,
      title: "Word",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg",
    },
    {
      id: 2,
      title: "Excel",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    },
    {
      id: 3,
      title: "PowerPoint",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg",
    },
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

            <div className="mt-24 space-y-8">
              <div className="skills flex items-center justify-between">
                <h5 className="text-white/90 font-normal">
                  Frontend Development
                </h5>
                <span className="flex-grow border-2 border-dotted border-white/20 rounded-full ml-4"></span>
                <div className="flex items-center gap-8 bg-white/10 px-8 py-2 rounded-full border border-white/50">
                  {frontDevLogos.map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center flex-col gap-2 group"
                    >
                      <img
                        src={logo.url}
                        alt={logo.title}
                        className="size-8 bg-white/80 p-[0.125em] object-contain rounded-full"
                      />
                      <p className="text-xs text-white/80">{logo.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills flex items-center justify-between">
                <h5 className="text-white/90 font-normal">
                  Backend Development
                </h5>
                <span className="flex-grow border-2 border-dotted border-white/20 rounded-full ml-4"></span>
                <div className="flex items-center gap-8 bg-white/10 px-8 py-2 rounded-full border border-white/50">
                  {backendLogos.map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center flex-col gap-2 group"
                    >
                      <img
                        src={logo.url}
                        alt={logo.title}
                        className="size-8 bg-white/80 p-[0.125em] object-contain rounded-full"
                      />
                      <p className="text-xs text-white/80">{logo.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills flex items-center">
                <h5 className="text-white/90 font-normal">
                  UI/UX & Design Tools
                </h5>
                <span className="flex-grow border-2 border-dotted border-white/20 rounded-full ml-4"></span>
                <div className="flex items-center gap-8 bg-white/10 px-8 py-2 rounded-full border border-white/50">
                  {designLogos.map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center flex-col gap-2 group"
                    >
                      <img
                        src={logo.url}
                        alt={logo.title}
                        className="size-8 bg-white/80 p-[0.125em] object-contain rounded-full"
                      />
                      <p className="text-xs text-white/80">{logo.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills flex items-center justify-between">
                <h5 className="text-white/90 font-normal">
                  Collaboration Tools
                </h5>
                <span className="flex-grow border-2 border-dotted border-white/20 rounded-full ml-4"></span>
                <div className="flex items-center gap-8 bg-white/10 px-8 py-2 rounded-full border border-white/50">
                  {projectManagementLogos.map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center flex-col gap-2 group"
                    >
                      <img
                        src={logo.url}
                        alt={logo.title}
                        className="size-8 bg-white/80 p-[0.125em] object-contain rounded-full"
                      />
                      <p className="text-xs text-white/80">{logo.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills flex items-center justify-between">
                <h5 className="text-white/90 font-normal">
                  Version Control & Hosting
                </h5>
                <span className="flex-grow border-2 border-dotted border-white/20 rounded-full ml-4"></span>
                <div className="flex items-center gap-8 bg-white/10 px-8 py-2 rounded-full border border-white/50">
                  {versionControlLogos.map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center flex-col gap-2 group"
                    >
                      <img
                        src={logo.url}
                        alt={logo.title}
                        className="size-8 bg-white/80 p-[0.125em] object-contain rounded-full"
                      />
                      <p className="text-xs text-white/80">{logo.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills flex items-center justify-between">
                <h5 className="text-white/90 font-normal">Other Tools</h5>
                <span className="flex-grow border-2 border-dotted border-white/20 rounded-full ml-4"></span>
                <div className="flex items-center gap-8 bg-white/10 px-8 py-2 rounded-full border border-white/50">
                  {otherLogos.map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center flex-col gap-2 group"
                    >
                      <img
                        src={logo.url}
                        alt={logo.title}
                        className="size-8 bg-white/80 p-[0.125em] object-contain rounded-full"
                      />
                      <p className="text-xs text-white/80">{logo.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
