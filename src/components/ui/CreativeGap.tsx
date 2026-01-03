import React from 'react';
import { GiPaintRoller } from 'react-icons/gi';

interface CreativeGapProps {
  color: string;
}

const CreativeGap: React.FC<CreativeGapProps> = ({ color }) => {
  return (
    <>
      <span className="-mb-2 mr-1 inline-flex -translate-y-1 items-center gap-0">
        <i className={`h-[0.5px] w-8 bg-${color} opacity-60 md:w-28`} />
        <GiPaintRoller
          className={`rotate-90 text-xl text-${color} opacity-80 md:text-3xl`}
        />
      </span>
    </>
  );
};

export default CreativeGap;
