import { Link } from 'react-router-dom';
import { CgArrowTopRight } from 'react-icons/cg';

interface CustomButtonProps {
  to: string;
  value?: string;
  icon?: React.FC;
  external?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  to,
  value = 'Explore',
  icon: Icon = CgArrowTopRight,
  external = false,
}) => {
  return (
    <>
      <Link
        to={to}
        className="group relative h-14 min-w-fit overflow-hidden rounded-full border-4 border-light bg-light px-12 py-2 text-center text-xl font-semibold text-black"
        aria-label={value}
        target={external ? '_blank' : '_self'}
      >
        <span className="absolute right-0 top-0 z-10 grid aspect-square size-12 place-items-center rounded-full bg-dark duration-500 group-hover:w-full">
          <Icon className="transition-300 scale-125 text-xl text-white group-hover:rotate-45 group-hover:scale-150" />
        </span>
        <label className="transition-300 inline-block w-full -translate-x-4 text-base font-medium group-hover:-translate-x-full group-hover:scale-0 group-hover:opacity-0">
          {value}
        </label>
      </Link>
    </>
  );
};

export default CustomButton;

// import React from 'react';

// const CustomButton = () => {
//   return (
//     <>
//       <button
//         className="before:hover:scale-200 group relative isolation-auto w-fit flex items-center gap-2 overflow-hidden rounded-full border-2 border-light/50 bg-transparent px-6 py-2 font-sans text-lg text-light shadow-xl backdrop-blur before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-light before:transition-all before:duration-700 hover:text-black before:hover:left-0 before:hover:w-full before:hover:duration-500 lg:font-semibold"
//         type="submit"
//       >
//         Get Plan
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 16 19"
//           className="size-10 rotate-45 translate-x-3 justify-end rounded-full border border-dark bg-light p-2 text-light duration-300 ease-linear group-hover:rotate-90 group-hover:border-dark group-hover:bg-light"
//         >
//           <path
//             className="fill-gray-800 group-hover:fill-gray-800"
//             d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//           ></path>
//         </svg>
//       </button>
//     </>
//   );
// };

// export default CustomButton;
