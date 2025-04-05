import React from 'react';
import Hello from './ui/Hello';
import purna from '../assets/img/hero_noise.png';
import CustomButton from './ui/CustomButton';

const AboutHome: React.FC = () => {
  return (
    <main className="relative mt-12 h-[85vh] max-w-[100vw] overflow-x-hidden md:mt-0 md:h-screen">
      <div className="container h-full">
        <div className="inline-flex h-full max-w-6xl flex-col justify-start text-light md:justify-center">
            <Hello title="a Software Engineer" />
          <p className="my-2 max-w-xl text-sm leading-relaxed text-light/70">
            helping brands <strong>build globally</strong> through design and
            code. I bring <strong>ideas to life</strong> by crafting{' '}
            <strong>seamless digital experiences</strong> that are both
            beautiful and functional.{' '}
            <strong>Let's create something unforgettable together!</strong>
          </p>

          <div className="mt-5 flex">
            <CustomButton to="/about" value="About Me" />
          </div>
        </div>
        <aside className="">
          <img
            src={purna}
            alt=""
            className="absolute inset-0 -z-30 mt-auto size-full max-h-[90vh] object-contain object-right-bottom opacity-20 mix-blend-normal"
          />
        </aside>
      </div>
      {/* <div className="bg-green-gradient absolute bottom-0 left-0 -z-20 size-full -translate-x-1/4 opacity-50"></div>
      <div className="bg-blue-gradient absolute bottom-0 right-0 -z-20 size-full translate-x-1/4 opacity-50"></div> */}
    </main>
  );
};

export default AboutHome;
