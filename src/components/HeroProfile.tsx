import React from 'react';
import purna from '../assets/img/purnaGreen.jpeg';

const HeroProfile: React.FC = () => {
  return (
    <main className="relative m-0 size-full p-0">
      <img
        src={purna}
        alt=""
        className="absolute inset-0 -z-20 size-full h-[110vh] object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-dark to-transparent"></div>
      <div className="relative z-10 mx-auto flex h-screen w-full flex-col items-center overflow-hidden md:w-full">
        <div className="w-full space-y-8 p-4 text-white md:p-6">
          <div className="mt-8 flex items-center justify-around md:mt-0">
            <h4 className="green-gradient">#design</h4>
            {/* <img
              src="https://tv.purnashrestha.com.np/assets/purna_shrestha-d517ddc5.svg"
              alt=""
              className="filter-white h-16"
            /> */}
            <h4 className="blue-gradient">#development</h4>
          </div>
          {/* <h2 className="text-center text-4xl capitalize drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-6xl md:leading-tight">
            Your imagination, <br /> Mine creation
          </h2> */}
        </div>
      </div>
    </main>
  );
};

export default HeroProfile;
