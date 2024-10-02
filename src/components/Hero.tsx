// import React from "react";

// const Hero: React.FC = () => {
//   return (
//     <main className="flex items-center flex-col w-[calc(100%-14rem-14rem-10rem)] mx-auto overflow-hidden relative">
//       <div className="text-white p-8 space-y-4 mt-6">
//         <div className="flex items-center justify-around">
//           <h4 className="green-gradient">#design</h4>
//           <h4 className="blue-gradient">#development</h4>
//         </div>
//         <h2 className="text-8xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] capitalize">
//           Your imagination, Mine creation
//         </h2>
//       </div>
//     </main>
//   );
// };

// export default Hero;

import React from 'react';
import FloatLogo from './ui/FloatLogo';
// import gradientBg from "../assets/gradients/gradient2.avif";

{
  /* <main
        className={`absolute inset-0 bg-[url('')] size-full bg-cover bg-center -z-10 mix-blend-darken`}
        style={{ backgroundImage: `url(${gradientBg})` }}
      > */
}

const Hero: React.FC = () => {
  return (
    // <main
    //   className="size-full bg-cover bg-center -z-10 mix-blend-darken p-0 m-0"
    //   style={{ backgroundImage: `url(${gradientBg})` }}
    // >
    <main className="relative -z-10 m-0 size-full max-w-full overflow-x-hidden bg-cover bg-center p-0">
      <div className="absolute inset-0 -z-50 size-full bg-dark mix-blend-darken"></div>
      <div className="bg-green-gradient absolute bottom-0 left-0 -z-20 size-full -translate-x-1/4"></div>
      <div className="bg-blue-gradient absolute bottom-0 right-0 -z-20 size-full translate-x-1/4"></div>
      <div className="relative mx-auto flex h-screen w-full flex-col items-center overflow-hidden md:w-[calc(100%-14rem-14rem-5rem-5rem)]">
        <div className="space-y-8 p-4 text-white md:p-6">
          <div className="mt-8 flex items-center justify-evenly md:mt-0">
            <h4 className="green-gradient">#design</h4>
            {/* <img
              src="https://tv.purnashrestha.com.np/assets/purna_shrestha-d517ddc5.svg"
              alt=""
              className="filter-white h-16 opacity-0"
            /> */}
            <h4 className="blue-gradient">#development</h4>
          </div>
          <h2 className="text-center text-4xl font-extralight capitalize drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-8xl">
            Your imagination, Mine creation
          </h2>
        </div>

        <FloatLogo />
      </div>
    </main>
  );
};

export default Hero;
