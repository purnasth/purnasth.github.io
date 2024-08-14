import React from "react";
import NavbarButton from "./ui/NavbarButton";
import BreadCrumb from "./ui/BreadCrumb";
import { PageProp } from "../constant/types";

const NavbarBreadCrumb: React.FC<PageProp> = ({ page, currentPage }) => {
  return (
    <div className="fixed right-5 top-5 z-50 flex items-center justify-center">
      <BreadCrumb page={page} currentPage={currentPage} />
      <NavbarButton />
    </div>
  );
};

export default NavbarBreadCrumb;
