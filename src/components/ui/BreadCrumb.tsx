// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { TbArrowGuide } from "react-icons/tb";
// import { PageProp } from "../../constant/types";

// const BreadCrumb: React.FC<PageProp> = ({ page, currentPage }) => {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos]);

//   return (
//     <nav
//       className={`transition-all duration-500 z-40 ${
//         window.scrollY > 0 ? "" : ""
//       } ${visible ? "" : "-translate-y-full"}`}
//     >
//       <h2
//         className={`px-4 py-1 rounded-full flex items-center justify-center gap-3 transition-all duration-[1s] ${
//           visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
//         } ${
//           window.scrollY > 0
//             ? "text-white bg-white/10 outline outline-1 outline-white/60 backdrop-blur-lg"
//             : "text-white"
//         }`}
//       >
//         <Link to="/" className="flex items-center justify-center gap-1">
//           Home
//         </Link>
//         <TbArrowGuide />
//         {currentPage ? (
//           <>
//             <Link to={`/${page}`} className="flex items-center justify-center gap-1">
//               {page}
//             </Link>
//             <TbArrowGuide />
//             <h4 className="font-inria-sans font-light">{currentPage}</h4>
//           </>
//         ) : (
//           <h3 className="font-inria-sans font-light">{page}</h3>
//         )}
//       </h2>
//     </nav>
//   );
// };

// export default BreadCrumb;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbArrowGuide } from "react-icons/tb";
import { PageProp } from "../../constant/types";

const BreadCrumb: React.FC<PageProp> = ({ page }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`transition-all duration-500 z-40 ${
        window.scrollY > 0 ? "" : ""
      } ${visible ? "" : "-translate-y-full"}`}
    >
      <h2
        className={`px-4 py-1 rounded-full flex items-center justify-center gap-3 transition-all duration-[1s] ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
        } ${
          window.scrollY > 0
            ? "text-white bg-white/10 outline outline-1 outline-white/60 backdrop-blur-lg"
            : "text-white"
        }`}
      >
        <Link to="/" className="flex items-center justify-center gap-1">
          Home
        </Link>
        <TbArrowGuide />
        <span>{page}</span>
      </h2>
    </nav>
  );
};

export default BreadCrumb;
