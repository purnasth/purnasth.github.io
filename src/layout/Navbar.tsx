import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

import { navLinks } from '../constant/data';
import { NavLink } from 'react-router-dom';

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
        className={`transition-1000 pointer-events-none fixed top-0 z-40 w-full p-5 ${
          window.scrollY > 0 ? '' : ''
        } ${visible ? '' : '-translate-y-full'}`}
      >
        <div className={`flex w-full items-start justify-between`}>
          <a
            href="/"
            className={`transition-1000 pointer-events-auto object-contain ${
              visible ? '' : ''
            } ${window.scrollY > 0 ? '' : ''}`}
          >
            <img
              src={logo}
              alt="logo"
              className={`transition-1000 h-28 w-auto object-contain opacity-80 hover:opacity-100 hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.5)] ${
                visible ? '-translate-y-0' : '-translate-y-6 scale-100'
              } ${window.scrollY > 0 ? 'origin-top-left translate-y-0 scale-50' : ''}`}
            />
          </a>

          <div
            className={`transition-1000 mt-1 cursor-pointer pr-4 text-light ${
              visible ? 'translate-y-0' : '-translate-y-6'
            } ${window.scrollY > 0 ? '-translate-y-6 opacity-0' : ''}`}
          >
            <ul className="pointer-events-auto flex items-center gap-8">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.routing}
                    className="text-light"
                    aria-label={link.title}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
