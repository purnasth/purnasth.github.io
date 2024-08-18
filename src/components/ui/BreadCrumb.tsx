import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbArrowGuide } from "react-icons/tb";
import { BreadCrumbProps } from "../../constant/types";

const BreadCrumb: React.FC<BreadCrumbProps> = ({ page, currentPage }) => {
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
            ? `outline outline-1 backdrop-blur-lg ${
                page === "portfolio"
                  ? "text-black bg-black/10 outline-black/30"
                  : "text-white bg-white/10 outline-white/60"
              }`
            : `${page === "portfolio" ? "text-black" : "text-white"}`
        }`}
      >
        <Link to="/" className="flex items-center justify-center gap-1 capitalize">
          Home
        </Link>
        <TbArrowGuide />
        {currentPage ? (
          <>
            <Link
              to={`/${page}`}
              className="flex items-center justify-center gap-1 capitalize"
            >
              {page}
            </Link>
            <TbArrowGuide />
            <h4 className="font-inria-sans font-medium capitalize">
              {currentPage}
            </h4>
          </>
        ) : (
          <h3 className="font-inria-sans font-light capitalize">{page}</h3>
        )}
      </h2>
    </nav>
  );
};

export default BreadCrumb;
