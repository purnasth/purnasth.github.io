import React from "react";
import { Link } from "react-router-dom";

const CircularText: React.FC = () => {
  return (
    <Link
      to="https://hotelhimalaya.pages.dev"
      className="size-32 bg-hotel-himalaya rounded-full flex items-center justify-center outline outline-1 outline-white/50 -outline-offset-[8px]"
    >
      <h5>View Project</h5>
    </Link>
  );
};

export default CircularText;
