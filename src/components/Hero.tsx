import React from "react";
import hero from "../assets/img/hero_cutout.png";

type SkillLogo = {
  id: number;
  title: string;
  url: string;
};

const skillLogos: SkillLogo[] = [
  { id: 1, title: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { id: 2, title: "JavaScript", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { id: 3, title: "CSS3", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { id: 4, title: "HTML5", url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { id: 5, title: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" },
  { id: 6, title: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { id: 7, title: "Markdown", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" },
  { id: 8, title: "PowerShell", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" },
  { id: 9, title: "GraphQL", url: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
  { id: 10, title: "AJAX", url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/AJAX_logo_by_gengns.svg" }
  // Add more skill logos as needed
];

const Hero: React.FC = () => {
  return (
    <main className="flex items-center flex-col w-[calc(100%-18rem)] ml-auto h-screen overflow-hidden relative">
      <div className="text-white p-8 space-y-8">
        <div className="flex items-center justify-around">
          <h4 className="green-gradient">#design</h4>
          <h4 className="blue-gradient">#development</h4>
        </div>
        <h1 className="text-8xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] capitalize">
          Your imagination, Mine creation
        </h1>
      </div>
      <img
        src={hero}
        alt=""
        className="w-[80vh] absolute bottom-0 opacity-20 mix-blend-normal"
      />
      {skillLogos.map((logo) => (
        <img
          key={logo.id}
          src={logo.url}
          alt={logo.title}
          className="w-16 opacity-50 absolute"
          style={{
            top: `${Math.random() * 80}vh`,
            left: `${Math.random() * 80}vw`
          }}
          title={logo.title}
        />
      ))}
    </main>
  );
};

export default Hero;
