import React from 'react';
import purna from '../assets/img/purnaGreen.jpeg';
import ScrollReveal from './ui/ScrollReveal';

const HeroProfile: React.FC = () => {
  return (
    <main className="relative m-0 h-[110vh] w-full p-0">
      <img
        src={purna}
        alt=""
        className="absolute inset-0 -z-30 size-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 size-full bg-gradient-to-b from-dark via-dark/90 to-transparent"></div>
      <div className="relative z-10 mx-auto flex size-full flex-col items-center overflow-hidden md:w-full">
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
      {/* <div className="bg-green-gradient absolute top-0 left-0 -z-10 w-full h-96 -translate-x-1/4 rotate-180 opacity-50"></div> */}
      {/* <div className="bg-blue-gradient absolute top-0 right-0 -z-10 w-full h-96 translate-x-1/4 rotate-180 opacity-50"></div> */}
      <ScrollReveal
        heading="Bringing your Vision to Life"
        styles="absolute inset-0 size-full text-light text-8xl font-luxury font-extralight leading-snug text-center my-24 md:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:leading-snug"
      />
    </main>
  );
};

export default HeroProfile;
