import React from "react";
import hotelHimalaya from "../assets/img/portfolio/hotel-himalaya.png";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
  return (
    <>
      <main className="size-full h-full bg-black text-white">
        <div className="container">
          <div className="text-center space-y-4">
            <span>Portfolio </span>
            <h3 className="font-title text-8xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] capitalize">
              A collection of my best projects
            </h3>
          </div>
        </div>

        <div className="portfolio px-8 my-24">
          <div className="grid grid-cols-4">
            <div className="col-span-3 relative rounded-3xl overflow-hidden group">
              <div>
                <img src={hotelHimalaya} alt="" className="r" />
                <div className="overlay group-hover:bg-black/0" />
              </div>
              <div className="absolute bottom-0 size-full p-8 w-full h-60" >
                <div className="w-full h-16 flex items-center justify-between gap-5 bg-red-600 px-8 rounded-full">
                  <h4>Hotel Himalaya</h4>
                  <Link to="#">Learn more</Link>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
