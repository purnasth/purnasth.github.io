// import React, { useState, useEffect } from 'react';
// import { TbPlus, TbMail } from 'react-icons/tb';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { PageProp } from '../../constant/types';
// import heroNoise from '../../assets/img/hero_noise.png';
// import hotelHimalaya from '../../assets/img/portfolio/hotel-himalaya.png';

// const navLinks = [
//   {
//     id: 'About',
//     title: 'About',
//     routing: '/about',
//     picture: heroNoise,
//   },
//   {
//     id: 'Portfolio',
//     title: 'Portfolio',
//     routing: '/portfolio',
//     picture: hotelHimalaya,
//   },
//   {
//     id: 'Services',
//     title: 'Services',
//     routing: '/services',
//     picture: heroNoise,
//   },
//   {
//     id: 'Contact',
//     title: 'Contact',
//     routing: '/contact',
//     picture: heroNoise,
//   },
// ];

// const NavbarButton: React.FC<PageProp> = ({ whiteBg }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredLink, setHoveredLink] = useState<string | null>(null);
//   const location = useLocation(); // Getting the current route path
//   const [activeLink, setActiveLink] = useState<string | null>(null);

//   useEffect(() => {
//     const currentLink = navLinks.find(
//       (link) => location.pathname === link.routing,
//     );
//     if (currentLink) {
//       setActiveLink(currentLink.id);
//     }
//   }, [location]);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button
//         onClick={toggleNav}
//         className={`group z-50 m-2 rounded-full border p-2 backdrop-blur-lg transition-all duration-300 ease-linear hover:scale-125 md:m-4 ${
//           isOpen
//             ? 'rotate-[315deg] scale-[1.35] animate-pulse border-white bg-white/20'
//             : ''
//         } ${whiteBg ? 'black-mode' : 'white-mode'}`}
//       >
//         <TbPlus className="text-base transition-all duration-300 ease-linear group-hover:rotate-[315deg] group-hover:scale-110 group-hover:animate-pulse" />
//       </button>

//       <section
//         className={`border-1 transition-700 fixed inset-0 -z-10 m-2 rounded-lg border border-white/20 bg-dark/60 p-0 shadow-sm backdrop-blur md:m-4 ${
//           isOpen
//             ? 'pointer-events-auto select-auto opacity-100'
//             : 'pointer-events-none select-none opacity-0'
//         }`}
//       >
//         <div className="h-full overflow-hidden p-4 text-white">
//           <Link
//             to="/"
//             className={`group z-50 inline-block scale-125 animate-pulse rounded-full border border-white/50 bg-white/20 p-2 text-white transition-all duration-300 ease-linear hover:border-white hover:bg-white/20`}
//           >
//             <TbMail className="text-base transition-all duration-300 ease-linear group-hover:scale-110" />
//           </Link>

//           <div className="flex h-full items-center justify-center px-4 md:px-16">
//             <div className="overlay bg-dark/60" />
//             <ul className="links z-30 flex h-auto flex-row items-end justify-center gap-8 md:gap-24">
//               {navLinks.map((link) => (
//                 <li
//                   key={link.id}
//                   className="w-full"
//                   onMouseEnter={() => setHoveredLink(link.id)}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   <NavLink
//                     to={link.routing}
//                     className={({ isActive }) =>
//                       isActive
//                         ? 'nav-link text-white [text-shadow:_0_2px_15px_rgb(255_255_255_/_100%)]'
//                         : 'nav-link'
//                     }
//                     aria-label={link.title}
//                   >
//                     {link.title}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             {navLinks.map((link) => (
//               <div
//                 key={link.id}
//                 className={`group absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 transition-1000 ${
//                   hoveredLink === link.id || activeLink === link.id // Show the image if it's hovered or active
//                     ? 'opacity-100'
//                     : 'opacity-0'
//                 }`}
//               >
//                 <img
//                   src={link.picture}
//                   alt={link.title}
//                   className="transition-300 absolute inset-0 -z-10 size-full scale-125 scale-x-150 object-contain blur-3xl group-hover:blur-[100px]"
//                 />
//                 <img
//                   src={link.picture}
//                   alt={link.title}
//                   className="h-full max-h-[90vh] object-contain object-bottom"
//                   draggable="false"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default NavbarButton;

import React, { useState, useEffect } from 'react';
import { TbPlus, TbMail } from 'react-icons/tb';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { PageProp } from '../../constant/types';
import heroNoise from '../../assets/img/hero_noise.png';
import hotelHimalaya from '../../assets/img/portfolio/hotel-himalaya.png';

const navLinks = [
  {
    id: 'About',
    title: 'About',
    routing: '/about',
    picture: heroNoise,
  },
  {
    id: 'Portfolio',
    title: 'Portfolio',
    routing: '/portfolio',
    picture: hotelHimalaya,
  },
  {
    id: 'Services',
    title: 'Services',
    routing: '/services',
    picture: heroNoise,
  },
  {
    id: 'Contact',
    title: 'Contact',
    routing: '/contact',
    picture: heroNoise,
  },
];

const NavbarButton: React.FC<PageProp> = ({ whiteBg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  // Update active link based on current route
  useEffect(() => {
    const currentLink = navLinks.find(
      (link) => location.pathname === link.routing,
    );
    if (currentLink) {
      setActiveLink(currentLink.id);
    }
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className={`group z-50 m-2 rounded-full border p-2 backdrop-blur-lg transition-all duration-300 ease-linear hover:scale-125 md:m-4 ${
          isOpen
            ? 'rotate-[315deg] scale-[1.35] animate-pulse border-white bg-white/20'
            : ''
        } ${whiteBg ? 'black-mode' : 'white-mode'}`}
      >
        <TbPlus className="text-base transition-all duration-300 ease-linear group-hover:rotate-[315deg] group-hover:scale-110 group-hover:animate-pulse" />
      </button>

      <section
        className={`border-1 transition-1000 fixed inset-0 -z-10 m-2 rounded-lg border border-white/20 bg-dark/60 p-0 shadow-sm backdrop-blur md:m-4 ${
          isOpen
            ? 'pointer-events-auto select-auto opacity-100'
            : 'pointer-events-none select-none opacity-0'
        }`}
      >
        <div className="h-full overflow-hidden p-4 text-white">
          <Link
            to="/"
            className={`group z-50 inline-block scale-125 animate-pulse rounded-full border border-white/50 bg-white/20 p-2 text-white transition-all duration-300 ease-linear hover:border-white hover:bg-white/20`}
          >
            <TbMail className="text-base transition-all duration-300 ease-linear group-hover:scale-110" />
          </Link>

          <div className="flex h-full items-center justify-center px-4 md:px-16">
            <div className="overlay bg-dark/60" />
            <ul className="links z-30 flex h-auto flex-row items-end justify-center gap-8 md:gap-24">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="w-full"
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <NavLink
                    to={link.routing}
                    className={({ isActive }) =>
                      isActive
                        ? 'nav-link text-white [text-shadow:_0_2px_15px_rgb(255_255_255_/_100%)]'
                        : 'nav-link'
                    }
                    aria-label={link.title}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {navLinks.map((link) => (
              <div
                key={link.id}
                className={`transition-1000 group absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 ${
                  hoveredLink === link.id
                    ? 'opacity-100'
                    : activeLink === link.id && !hoveredLink // Only show active when not hovering
                      ? 'opacity-100'
                      : 'opacity-0'
                }`}
              >
                <img
                  src={link.picture}
                  alt={link.title}
                  className="transition-300 absolute inset-0 -z-10 size-full scale-125 scale-x-150 object-contain blur-3xl group-hover:blur-[100px]"
                />
                <img
                  src={link.picture}
                  alt={link.title}
                  className="h-full max-h-[90vh] object-contain object-bottom"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarButton;
