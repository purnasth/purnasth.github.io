import React from 'react';
// import { LiaPenAltSolid } from 'react-icons/lia';
// import { RiPaintBrushLine } from 'react-icons/ri';
import { GiPaintRoller } from 'react-icons/gi';

const CreativeGap: React.FC = () => {
  return (
    <>
      <span className="-mb-2 mr-1 inline-flex -translate-y-1 items-center gap-0">
        <i className="h-[0.5px] w-8 bg-white/60 md:w-28" />
        <GiPaintRoller className="rotate-90 text-xl text-white/80 md:text-3xl" />
      </span>
    </>
  );
};

export default CreativeGap;
