import React from 'react';
import { Link } from 'react-router-dom';

const CircularText: React.FC = () => {
  return (
    <Link
      to="https://hotelhimalaya.pages.dev"
      className="bg-hotel-himalaya flex size-32 items-center justify-center rounded-full outline outline-1 -outline-offset-[8px] outline-white/50"
    >
      <h5>View Project</h5>
    </Link>
  );
};

export default CircularText;
