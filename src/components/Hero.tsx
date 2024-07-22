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

import React from "react";
import FloatLogo from "./ui/FloatLogo";

const Hero: React.FC = () => {
  return (
    <main className="flex items-center flex-col w-[calc(100%-14rem-14rem-10rem)] h-full mx-auto overflow-hidden relative">
      <div className="text-white p-6">
        <div className="flex items-center justify-evenly">
          <h4 className="green-gradient">#design</h4>
          <img
            src="https://tv.purnashrestha.com.np/assets/purna_shrestha-d517ddc5.svg"
            alt=""
            className="h-16 filter-white opacity-0"
          />
          <h4 className="blue-gradient">#development</h4>
        </div>
        <h2 className="text-8xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] capitalize">
          Your imagination, Mine creation
        </h2>
      </div>

      <FloatLogo />
    </main>
  );
};

export default Hero;
