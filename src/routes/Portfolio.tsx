import React from "react";
import hotelHimalaya from "../assets/img/portfolio/hotel-himalaya.png";
import { Link } from "react-router-dom";
import { MdOutlineArrowCircleRight } from "react-icons/md";

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

        <div className="portfolio px-8 my-24 space-y-12">
          <div className="flex items-center justify-between">
            <h4 className="text-gold-gradient text-5xl font-luxury">
              Hotel Himalaya
            </h4>
            <Link
              to="#"
              className="py-2 px-5 rounded-full flex items-center gap-2 bg-white/20 text-white outline outline-2 outline-white/80 pointer-events-auto hover-outline"
            >
              Detail Portfolio
              <MdOutlineArrowCircleRight className="text-2xl" />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-3 relative rounded-3xl overflow-hidden group">
              <div>
                <img
                  src={hotelHimalaya}
                  alt=""
                  className="size-full object-cover group-hover:scale-125 transition-700"
                />
                <div className="overlay group-hover:bg-black/0" />
              </div>
              <div className="w-full h-20 absolute bottom-6 px-6">
                <div className="flex items-center justify-between gap-5 border border-white/50 bg-black/30 backdrop-blur-sm p-6 rounded-full">
                  <h4>Hotel Himalaya</h4>
                  <Link to="#">Learn more</Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative rounded-3xl overflow-hidden group">
              <div>
                <img
                  src={hotelHimalaya}
                  alt=""
                  className="size-full object-cover group-hover:scale-125 transition-700"
                />
                <div className="overlay group-hover:bg-black/0" />
              </div>
              <div className="w-full h-20 absolute bottom-6 px-6">
                <div className="flex items-center justify-between gap-5 border border-white/50 bg-black/30 backdrop-blur-sm p-6 rounded-full">
                  <h4>Hotel Himalaya</h4>
                  <Link to="#">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="relative rounded-3xl overflow-hidden group">
                <div>
                  <img
                    src={hotelHimalaya}
                    alt=""
                    className="size-full object-cover group-hover:scale-125 transition-700"
                  />
                  <div className="overlay group-hover:bg-black/0" />
                </div>
                <div className="w-full h-20 absolute bottom-6 px-6">
                  <div className="flex items-center justify-between gap-5 border border-white/50 bg-black/30 backdrop-blur-sm p-6 rounded-full">
                    <h4>Hotel Himalaya</h4>
                    <Link to="#">Learn more</Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 relative rounded-3xl overflow-hidden group">
                  <div>
                    <img
                      src={hotelHimalaya}
                      alt=""
                      className="size-full h-[38rem] group-hover:scale-125 transition-700"
                    />
                    <div className="overlay group-hover:bg-black/0" />
                  </div>
                  <div className="w-full h-20 absolute bottom-6 px-6">
                    <div className="flex items-center justify-between gap-5 border border-white/50 bg-black/30 backdrop-blur-sm p-6 rounded-full">
                      <h4>Hotel Himalaya</h4>
                      <Link to="#">Learn more</Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 relative rounded-3xl overflow-hidden group">
                  <div>
                    <img
                      src={hotelHimalaya}
                      alt=""
                      className="size-full h-[38rem] group-hover:scale-125 transition-700"
                    />
                    <div className="overlay group-hover:bg-black/0" />
                  </div>
                  <div className="w-full h-20 absolute bottom-6 px-6">
                    <div className="flex items-center justify-between gap-5 border border-white/50 bg-black/30 backdrop-blur-sm p-6 rounded-full">
                      <h4>Hotel Himalaya</h4>
                      <Link to="#">Learn more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 relative rounded-3xl overflow-hidden group">
              <div>
                <img
                  src={hotelHimalaya}
                  alt=""
                  className="w-auto h-[72rem] group-hover:scale-125 transition-700"
                />
                <div className="overlay group-hover:bg-black/0" />
              </div>
              <div className="w-full h-20 absolute bottom-6 px-6">
                <div className="flex items-center justify-between gap-5 border border-white/50 bg-black/30 backdrop-blur-sm p-6 rounded-full">
                  <h4>Hotel Himalaya</h4>
                  <Link to="#">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
