import React from 'react';
import NavbarButton from './ui/NavbarButton';
import BreadCrumb from './ui/BreadCrumb';
import { PageProp } from '../constant/types';

const NavbarBreadCrumb: React.FC<PageProp> = ({
  page,
  currentPage,
  whiteBg = false,
}) => {
  return (
    <div className="fixed right-4 top-4 z-50 flex items-center justify-center rounded-full">
      <BreadCrumb page={page} currentPage={currentPage} />
      <NavbarButton whiteBg={whiteBg} />
    </div>
  );
};

export default NavbarBreadCrumb;
