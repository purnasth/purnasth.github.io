import React, { useState, useEffect } from 'react';
import { TbPlus, TbMail } from 'react-icons/tb';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { PageProp } from '../../constant/types';
import heroNoise from '../../assets/img/hero_noise.png';
import portfolio from '../../assets/img/nav/portfolio.svg';
import services from '../../assets/img/nav/services.svg';
import contact from '../../assets/img/nav/contact.svg';

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
    picture: portfolio,
  },
  {
    id: 'Services',
    title: 'Services',
    routing: '/services',
    picture: services,
  },
  {
    id: 'Contact',
    title: 'Contact',
    routing: '/contact',
    picture: contact,
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
        type="button"
        onClick={toggleNav}
        className={`group z-50 m-2 rounded-full border p-2 backdrop-blur-lg transition-all duration-300 ease-linear hover:scale-125 md:m-4 ${
          isOpen
            ? 'rotate-[315deg] scale-[1.35] animate-pulse border-white bg-white/20'
            : ''
        } ${whiteBg ? 'black-mode' : 'white-mode'}`}
        aria-label="Navigation"
        title="Navigation"
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
            aria-label="Mail"
            title="Mail"
          >
            <TbMail className="text-base transition-all duration-300 ease-linear group-hover:scale-110" />
          </Link>

          <div className="flex h-full items-start px-4 md:items-center md:justify-center md:px-16">
            <div className="overlay bg-dark/20 md:bg-dark/50" />
            <ul className="links z-30 mt-12 flex flex-wrap items-center justify-center gap-12 gap-y-6 text-center md:mt-0 md:flex-nowrap md:items-end md:gap-24">
              {navLinks.map((link) => (
                <li
                  key={link.id}
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
                className={`transition-1000 group absolute bottom-0 left-1/2 -z-10 w-full -translate-x-1/2 ${
                  hoveredLink === link.id
                    ? 'opacity-100'
                    : activeLink === link.id && !hoveredLink
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
                  className="size-full max-h-[80vh] object-contain object-bottom"
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

// ! NEW FEATURE but has some bugs and errors ..
// import React, { useState, useEffect } from 'react';
// import { TbPlus, TbMail } from 'react-icons/tb';
// import { NavLink, useLocation, Link } from 'react-router-dom';
// import { PageProp } from '../../constant/types';
// import heroNoise from '../../assets/img/hero_noise.png';
// import portfolio from '../../assets/img/nav/portfolio.svg';
// import services from '../../assets/img/nav/services.svg';
// import contact from '../../assets/img/nav/contact.svg';
// import hotelHimalayaMockup from '../../assets/img/portfolio/hotel-himalaya/hotelhimalaya_mockup.png';
// import ichchhaMockup from '../../assets/img/portfolio/hotel-ichchha/mockup.png';
// import hotelDayatraMockup from '../../assets/img/portfolio/hotel-dayatra/mockup.png';
// import mithilaMockup from '../../assets/img/portfolio/mithila/mockup.png';

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
//     picture: portfolio,
//     subLinks: [
//       {
//         id: 'hotel-himalaya',
//         title: 'Hotel Himalaya',
//         routing: '/portfolio/hotel-himalaya',
//         picture: hotelHimalayaMockup,
//       },
//       {
//         id: 'hotel-ichchha',
//         title: 'Hotel Ichchha',
//         routing: '/portfolio/hotel-ichchha',
//         picture: ichchhaMockup,
//       },
//       {
//         id: 'hotel-dayatra',
//         title: 'Hotel Dayatra',
//         routing: '/portfolio/hotel-dayatra',
//         picture: hotelDayatraMockup,
//       },
//       {
//         id: 'mithila',
//         title: 'Mithila',
//         routing: '/portfolio/mithila-yatri-niwas',
//         picture: mithilaMockup,
//       }
//     ],
//   },
//   {
//     id: 'Services',
//     title: 'Services',
//     routing: '/services',
//     picture: services,
//   },
//   {
//     id: 'Contact',
//     title: 'Contact',
//     routing: '/contact',
//     picture: contact,
//   },
// ];

// const NavbarButton: React.FC<PageProp> = ({ whiteBg }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredLink, setHoveredLink] = useState<string | null>(null);
//   const location = useLocation();
//   const [activeLink, setActiveLink] = useState<string | null>(null);
//   const [activeImage, setActiveImage] = useState<string | null>(null);

//   // Update active link and image based on current route
//   useEffect(() => {
//     let currentLink = navLinks.find(link => location.pathname === link.routing);

//     // Check sub-links if main link is not matched
//     if (!currentLink) {
//       for (const link of navLinks) {
//         if (link.subLinks) {
//           const matchedSubLink = link.subLinks.find(
//             subLink => location.pathname === subLink.routing
//           );
//           if (matchedSubLink) {
//             currentLink = matchedSubLink;
//             break;
//           }
//         }
//       }
//     }

//     if (currentLink) {
//       setActiveLink(currentLink.id);
//       setActiveImage(currentLink.picture);
//     }
//   }, [location]);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button
//         type="button"
//         onClick={toggleNav}
//         className={`group z-50 m-2 rounded-full border p-2 backdrop-blur-lg transition-all duration-300 ease-linear hover:scale-125 md:m-4 ${
//           isOpen
//             ? 'rotate-[315deg] scale-[1.35] animate-pulse border-white bg-white/20'
//             : ''
//         } ${whiteBg ? 'black-mode' : 'white-mode'}`}
//         aria-label="Navigation"
//         title="Navigation"
//       >
//         <TbPlus className="text-base transition-all duration-300 ease-linear group-hover:rotate-[315deg] group-hover:scale-110 group-hover:animate-pulse" />
//       </button>

//       <section
//         className={`border-1 transition-1000 fixed inset-0 -z-10 m-2 rounded-lg border border-white/20 bg-dark/60 p-0 shadow-sm backdrop-blur md:m-4 ${
//           isOpen
//             ? 'pointer-events-auto select-auto opacity-100'
//             : 'pointer-events-none select-none opacity-0'
//         }`}
//       >
//         <div className="h-full overflow-hidden p-4 text-white">
//           <Link
//             to="/"
//             className="group z-50 inline-block scale-125 animate-pulse rounded-full border border-white/50 bg-white/20 p-2 text-white transition-all duration-300 ease-linear hover:border-white hover:bg-white/20"
//             aria-label="Mail"
//             title="Mail"
//           >
//             <TbMail className="text-base transition-all duration-300 ease-linear group-hover:scale-110" />
//           </Link>

//           <div className="flex h-full items-start px-4 md:items-center md:justify-center md:px-16">
//             <div className="overlay bg-dark/20 md:bg-dark/50" />
//             <ul className="links z-30 mt-12 flex flex-wrap items-center justify-center gap-12 gap-y-6 text-center md:mt-0 md:flex-nowrap md:items-end md:gap-24">
//               {navLinks.map(link => (
//                 <li
//                   key={link.id}
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

//             <div
//               className={`transition-1000 group absolute bottom-0 left-1/2 -z-10 w-full -translate-x-1/2 ${
//                 isOpen || hoveredLink || activeImage ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <img
//                 src={hoveredLink ? navLinks.find(link => link.id === hoveredLink)?.picture : activeImage ?? undefined}
//                 alt={hoveredLink ? hoveredLink : activeLink}
//                 className="transition-300 absolute inset-0 -z-10 size-full scale-125 scale-x-150 object-contain blur-3xl group-hover:blur-[100px]"
//               />
//               <img
//                 src={hoveredLink ? navLinks.find(link => link.id === hoveredLink)?.picture : activeImage}
//                 alt={hoveredLink ? hoveredLink : activeLink}
//                 className="size-full max-h-[80vh] object-contain object-bottom"
//                 draggable="false"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default NavbarButton;
