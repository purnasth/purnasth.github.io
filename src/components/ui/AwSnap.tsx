import React from 'react';
import awSnap from '../../assets/img/ss.png';

const AwSnap: React.FC = () => {
  return (
    <>
      <main className="m-0 h-screen overflow-hidden p-0">
        <img
          src={awSnap}
          alt="AwSnap"
          className="size-full object-cover object-center"
        />
      </main>
    </>
  );
};

export default AwSnap;
