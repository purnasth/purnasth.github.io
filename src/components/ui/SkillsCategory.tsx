import React from 'react';

type SkillLogo = {
  id: number;
  title: string;
  url: string;
};

type SkillsCategoryData = {
  category: string;
  logos: SkillLogo[];
};

const skillsData: SkillsCategoryData[] = [
  {
    category: 'Front-end Development',
    logos: [
      {
        id: 3,
        title: 'HTML5',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      },
      {
        id: 4,
        title: 'CSS3',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      },
      {
        id: 5,
        title: 'JavaScript',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      },
      {
        id: 9,
        title: 'React',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        id: 17,
        title: 'Next.js',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
      },
      {
        id: 6,
        title: 'Bootstrap',
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
      },
      {
        id: 7,
        title: 'Tailwind CSS',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      },
    ],
  },
  {
    category: 'Back-end Development',
    logos: [
      {
        id: 13,
        title: 'Node.js',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      },
      {
        id: 14,
        title: 'Express.js',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      },
      {
        id: 15,
        title: 'MongoDB',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
      },
      {
        id: 12,
        title: 'MySQL',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg',
      },
      {
        id: 16,
        title: 'Firebase',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg',
      },
      {
        id: 18,
        title: 'Python',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      },
      {
        id: 19,
        title: 'Django',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
      },
    ],
  },
  {
    category: 'Design',
    logos: [
      {
        id: 10,
        title: 'Figma',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      },
      {
        id: 22,
        title: 'Photoshop',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
      },
      {
        id: 23,
        title: 'Illustrator',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
      },
      {
        id: 24,
        title: 'Adobe XD',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg',
      },
      {
        id: 25,
        title: 'InDesign',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg',
      },
      {
        id: 26,
        title: 'After Effects',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
      },
      {
        id: 27,
        title: 'Premiere Pro',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
      },
    ],
  },
  {
    category: 'Version Control',
    logos: [
      {
        id: 1,
        title: 'Git',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
      },
      {
        id: 2,
        title: 'Github',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      },
      {
        id: 3,
        title: 'Cloudflare',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
      },
    ],
  },
  {
    category: 'Project Management',
    logos: [
      {
        id: 31,
        title: 'Slack',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
      },
      {
        id: 32,
        title: 'Trello',
        url: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
      },
      {
        id: 33,
        title: 'Jira',
        url: 'https://cdn.worldvectorlogo.com/logos/jira-3.svg',
      },
      {
        id: 34,
        title: 'Notion',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
      },
    ],
  },
  {
    category: 'Other',
    logos: [
      {
        id: 1,
        title: 'Word',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg',
      },
      {
        id: 2,
        title: 'Excel',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
      },
      {
        id: 3,
        title: 'PowerPoint',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg',
      },
    ],
  },
];

const SkillsCategory: React.FC = () => {
  return (
    <>
      <ul className="portfolio-skills space-y-6 md:space-y-8">
        {skillsData.map((categoryData) => (
          <li
            key={categoryData.category}
            className="skills flex flex-col flex-wrap items-center justify-between gap-1 md:flex-row md:gap-0"
          >
            <h5 className="text-sm font-normal text-white/90 md:text-base">
              {categoryData.category}
            </h5>
            <span className="flex-grow rounded-full border-2 border-dotted border-white/20 md:ml-4"></span>
            <ul className="skills flex flex-wrap items-center gap-3 rounded-3xl border border-white/50 bg-white/10 p-2 md:gap-8 md:rounded-full md:px-8">
              {categoryData.logos.map((logo) => (
                <li
                  key={logo.id}
                  className="group flex flex-col items-center justify-center gap-2 opacity-100"
                >
                  <img
                    src={logo.url}
                    alt={logo.title}
                    className="size-8 rounded-full bg-white/80 object-contain p-[0.125em]"
                  />
                  <p className="hidden text-xs text-white/80 md:block">
                    {logo.title}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkillsCategory;
