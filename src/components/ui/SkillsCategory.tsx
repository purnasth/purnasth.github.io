import React from "react";

type SkillLogo = {
  id: number;
  title: string;
  url: string;
};

const SkillsCategory: React.FC = () => {
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

  return (
    <>
      <div className="mt-24 space-y-8">
        <div className="skills flex items-center justify-between">
          <h5 className="text-white/90 font-normal">Frontend Development</h5>
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
          <h5 className="text-white/90 font-normal">Backend Development</h5>
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
          <h5 className="text-white/90 font-normal">UI/UX & Design Tools</h5>
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
          <h5 className="text-white/90 font-normal">Collaboration Tools</h5>
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

      {/* <div className="skills-design space-y-8">
            <div className="skills flex items-center justify-between">
              <div className="flex items-center gap-8 bg-dark px-8 pt-5 pb-2 rounded-full border border-white/50 relative">
                <h5 className="absolute -top-4 left-1/2 -translate-x-1/2 text-center text-white/90 font-extralight bg-dark px-4 py-1">
                  Frontend Development
                </h5>
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
              <div className="flex items-center gap-8 bg-dark px-8 pt-5 pb-2 rounded-full border border-white/50 relative">
                <h5 className="absolute -top-4 left-1/2 -translate-x-1/2 text-center text-white/90 font-extralight bg-dark px-4 py-1">
                  Backend Development
                </h5>
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
            <div className="skills flex items-center justify-between">
              <div className="flex items-center gap-8 bg-dark px-8 pt-5 pb-2 rounded-full border border-white/50 relative">
                <h5 className="absolute -top-4 left-1/2 -translate-x-1/2 text-center text-white/90 font-extralight bg-dark px-4 py-1">
                  UI/UX & Design Tools
                </h5>
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
              <div className="flex items-center gap-8 bg-dark px-8 pt-5 pb-2 rounded-full border border-white/50 relative">
                <h5 className="absolute -top-4 left-1/2 -translate-x-1/2 text-center text-white/90 font-extralight bg-dark px-4 py-1">
                  Team Tools
                </h5>
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
              <div className="flex items-center gap-8 bg-dark px-8 pt-5 pb-2 rounded-full border border-white/50 relative">
                <h5 className="absolute -top-4 left-1/2 -translate-x-1/2 text-center text-white/90 font-extralight bg-dark px-4 py-1">
                  VCS
                </h5>
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
              <div className="flex items-center gap-8 bg-dark px-8 pt-5 pb-2 rounded-full border border-white/50 relative">
                <h5 className="absolute -top-4 left-1/2 -translate-x-1/2 text-center text-white/90 font-extralight bg-dark px-4 py-1">
                  Other Tools
                </h5>
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
          </div> */}
    </>
  );
};

export default SkillsCategory;
