import React, { useState, useEffect } from 'react';

import { navLinks } from '../constant/data';
import { NavLink } from 'react-router-dom';
import Logo from '../components/ui/Logo';

import { RxDotsVertical } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`transition-1000 pointer-events-none fixed top-0 z-50 w-full p-2 mix-blend-difference md:p-5 ${
          window.scrollY > 0 ? '' : ''
          // } ${visible ? '' : '-translate-y-full'}`}
        }`}
      >
        <div className={`flex w-full items-start justify-between`}>
          <a
            href="/"
            className={`transition-1000 pointer-events-auto object-contain ${
              visible ? 'scale-100' : 'scale-100'
            } ${window.scrollY > 0 ? 'origin-top-left translate-y-0 scale-75' : ''}`}
          >
            {/* <img
              src={logo}
              alt="logo"
              className={`transition-1000 h-20 w-auto object-contain hover:opacity-100 hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.5)] ${
                visible ? '-translate-y-0' : '-translate-y-6 scale-100'
              } ${window.scrollY > 0 ? 'origin-top-left translate-y-0 scale-75' : ''}`}
            /> */}
            <Logo />
          </a>

          <div
            className={`transition-1000 mt-1 hidden cursor-pointer pr-4 text-light md:block ${
              visible ? 'translate-y-0' : '-translate-y-6'
            } ${window.scrollY > 0 ? '-translate-y-6 opacity-0' : ''}`}
          >
            <ul className="pointer-events-auto flex items-center gap-2 rounded-full bg-light/20 border border-light/10 px-4 py-1 backdrop-blur-sm">
              {navLinks.slice(0, 4).map((link, index) => (
                <>
                  <li key={link.id}>
                    <NavLink
                      to={link.routing}
                      className="text-sm font-light text-light"
                      aria-label={link.title}
                      title={link.title}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                  {index < navLinks.slice(0,4).length - 1 && (
                    <RxDotsVertical className="text-light text-sm opacity-50" />
                    // <span> | </span>
                  )}
                </>
              ))} 
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
