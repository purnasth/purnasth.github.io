import React from 'react';
import Hello from './ui/Hello';
import purna from '../assets/img/hero_noise.png';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  return (
    <main className="relative h-screen">
      <div className="container h-full">
        <div className="inline-flex h-full max-w-6xl flex-col justify-center text-light">
          {/* <h2 className="text-4xl capitalize text-light/50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-8xl md:leading-snug">
            Bringing your{' '}
            <strong className="font-luxury text-light">vision</strong> to{' '}
            <strong className="font-luxury text-light">life</strong>
          </h2> */}

          <Hello />
          <p className="my-2 max-w-xl text-sm leading- text-light/70">
            a <strong>UI/UX Designer</strong> & <strong>Web Developer</strong>{' '}
            helping brands <strong>build globally</strong> through design and
            code. I bring <strong>ideas to life</strong> by crafting{' '}
            <strong>seamless digital experiences</strong> that are both
            beautiful and functional.{' '}
            <strong>Let's create something unforgettable together!</strong>
          </p>
          <Link
            to="/about"
            className="max-w-56 transition-300 group mt-12 inline-flex items-center justify-center gap-2 rounded-full border border-light/20 bg-light/10 px-8 py-4 text-light shadow-md hover:animate-bounce hover:bg-light/30 hover:shadow-xl"
          >
            Know more about me
          </Link>
          {/* <p className="max-w-xl text-sm opacity-70 md:text-base">
            From early stage startups to renowned brands, from latest brand
            building to revamping existing ones, I have worked on a variety of
            projects. Here are some of my best works.Let's join forces,
            collaborate, and transform ideas into reality! Together, we can
            bring awesome things to life.
          </p> */}
        </div>
        <aside className="">
          {/* <img
            src={purna}
            alt=""
            className="absolute inset-0 -z-40 mt-auto size-full max-h-[90vh] -translate-x-[13%] scale-125 scale-x-150 object-contain object-right-bottom opacity-80 blur-[100px]"
          /> */}
          <img
            src={purna}
            alt=""
            className="absolute inset-0 -z-30 mt-auto size-full max-h-[90vh] object-contain object-right-bottom opacity-20 mix-blend-normal"
          />
        </aside>
      </div>
      <div className="bg-green-gradient absolute bottom-0 left-0 -z-20 size-full -translate-x-1/4 opacity-50"></div>
      <div className="bg-blue-gradient absolute bottom-0 right-0 -z-20 size-full translate-x-1/4 opacity-50"></div>
    </main>
  );
};

export default AboutHome;
