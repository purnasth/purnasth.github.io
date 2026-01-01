import React, { useEffect, useState, useRef } from 'react';

import hero_mobile from '../../assets/img/hero.png';
import heroNoise from '../../assets/img/hero_noise.png';

type SkillLogo = {
  id: number;
  title: string;
  url: string;
};

const skillLogos: SkillLogo[] = [
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
    id: 6,
    title: 'Bootstrap',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
  },
  {
    id: 7,
    title: 'Tailwind CSS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    id: 8,
    title: 'Sass',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
  },
  {
    id: 9,
    title: 'React',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 10,
    title: 'Figma',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    id: 11,
    title: 'Php',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
  },
  {
    id: 12,
    title: 'MySQL',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg',
  },
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
    id: 16,
    title: 'Firebase',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg',
  },
  {
    id: 17,
    title: 'Next.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
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
  {
    id: 20,
    title: 'C',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
  },
  {
    id: 21,
    title: 'C++',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
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
  {
    id: 28,
    title: 'Word',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg',
  },
  {
    id: 29,
    title: 'Excel',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
  },
  {
    id: 30,
    title: 'PowerPoint',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg',
  },
];

const FloatLogo: React.FC = () => {
  const [displayedLogos, setDisplayedLogos] = useState<SkillLogo[]>([]);
  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);
  const heroRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLogos = skillLogos
        .sort(() => 0.5 - Math.random())
        .slice(0, 15); // Display 10 logos at a time
      setDisplayedLogos(randomLogos);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkCollision = () => {
      const heroRect = heroRef.current?.getBoundingClientRect();

      if (!heroRect) {
        return;
      }

      logoRefs.current.forEach((logo) => {
        if (!logo) {
          return;
        }

        const logoRect = logo.getBoundingClientRect();

        if (
          logoRect.right > heroRect.left &&
          logoRect.left < heroRect.right &&
          logoRect.bottom > heroRect.top &&
          logoRect.top < heroRect.bottom
        ) {
          logo.style.animationDirection = 'reverse';
        } else {
          logo.style.animationDirection = 'normal';
        }
      });
    };

    const interval = setInterval(checkCollision, 100);
    return () => clearInterval(interval);
  }, [displayedLogos]);

  const getRandomAnimation = () => {
    const animations = ['float-up', 'float-down', 'float-left', 'float-right'];

    return animations[Math.floor(Math.random() * animations.length)];
  };

  const getRandomDuration = () => `${Math.random() * 10 + 5}s`; // Random duration between 5s to 15s

  return (
    <section className="absolute inset-0 overflow-hidden">
      {displayedLogos.map((logo, index) => (
        <img
          key={logo.id}
          ref={(el) => (logoRefs.current[index] = el)}
          src={logo.url}
          alt={logo.title}
          className={`absolute size-8 object-contain opacity-50 md:w-16 ${getRandomAnimation()}`}
          style={{
            top: `${Math.random() * 80}vh`,
            left: `${Math.random() * 80}vw`,
            animationDuration: getRandomDuration(),
          }}
          title={logo.title}
        />
      ))}
      <img
        src={heroNoise}
        alt=""
        ref={heroRef}
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 hidden max-h-[75vh] w-4/5 -translate-x-1/2 select-none object-contain opacity-20 md:block"
      />
      <img
        src={hero_mobile}
        alt=""
        ref={heroRef}
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-full -translate-x-1/2 select-none opacity-20 mix-blend-normal md:hidden"
      />
    </section>
  );
};

export default FloatLogo;
