import React from 'react';
import logo from '../../assets/logo.svg';

const Logo: React.FC = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        className={`transition-1000 h-24 w-auto object-contain object-left-top mix-blend-difference hover:opacity-100 hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.5)]`}
      />
    </>
  );
};

export default Logo;
