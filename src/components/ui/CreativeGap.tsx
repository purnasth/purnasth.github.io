import React from 'react';
import { LiaPenAltSolid } from 'react-icons/lia';

const CreativeGap: React.FC = () => {
  return (
    <>
      <div className="mr-1 inline-flex items-center gap-0">
        <div className="mt-2 h-[0.5px] w-28 bg-white/60" />
        <LiaPenAltSolid className="text-base text-white" />
      </div>
    </>
  );
};

export default CreativeGap;
