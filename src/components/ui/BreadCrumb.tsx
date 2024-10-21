import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbArrowGuide } from 'react-icons/tb';
import { PageProp } from '../../constant/types';

const BreadCrumb: React.FC<PageProp> = ({ page, currentPage }) => {
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
    <nav
      className={`z-40 transition-all duration-500 ${
        window.scrollY > 0 ? '' : ''
      } ${visible ? '' : '-translate-y-full'}`}
    >
      <h3
        className={`text-xs md:text-base flex items-center justify-center gap-2 md:gap-3 rounded-full px-4 py-1 transition-all duration-[1s] ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        } ${
          window.scrollY > 0
            ? `outline outline-1 backdrop-blur-lg ${
                page === 'portfolio'
                  ? 'bg-dark/10 text-dark outline-dark/30'
                  : 'bg-white/10 text-white outline-white/60'
              }`
            : `${page === 'portfolio' ? 'text-dark' : 'text-white'}`
        }`}
      >
        <Link
          to="/"
          className="flex items-center justify-center gap-1 capitalize"
        >
          Home
        </Link>
        <TbArrowGuide />
        {currentPage ? (
          <>
            <Link
              to={`/${page}`}
              className="flex items-center justify-center gap-1 capitalize"
            >
              {page}
            </Link>
            <TbArrowGuide />
            <span className="font-inria-sans font-medium capitalize">
              {currentPage}
            </span>
          </>
        ) : (
          <span className="font-inria-sans font-light capitalize">{page}</span>
        )}
      </h3>
    </nav>
  );
};

export default BreadCrumb;
