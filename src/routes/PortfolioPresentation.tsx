import React from "react";
import { useParams } from "react-router-dom";
import CircularText from "../components/ui/CircularText";
import hotelHimalaya from "../assets/img/portfolio/hotel-himalaya.png";

const PortfolioPresentation: React.FC = () => {
  const { website } = useParams();
  return (
    <>
      <main>
        <section>
          <div className="container">
            {/* <h1 className="text-8xl">{website}</h1> */}
            <h1 className="text-8xl">Hotel Himalaya</h1>
            <p className="max-w-lg">
              Hotel Himalaya is conveniently located 8 km away from the
              Tribhuwan International Airport and only 2 km from the Kathmandu
              city center. The stay at Hotel Himalaya means enjoying every
              moment.
            </p>
            <ul className="mt-8">
              <li>
                <span className="text-gray-600">Role & Year:</span> Design &
                Development (2024)
              </li>
              <li>
                <span className="text-gray-600">Credits:</span> Longtail e-Media
              </li>
            </ul>

            <div className="mt-20 relative -z-10">
              {/* <img
                src="https://hotelhimalaya.pages.dev/images/hero/1.webp"
                alt=""
                className="w-full h-[85vh] object-cover outline outline-1 outline-white -outline-offset-[10px]"
              /> */}
              <div className="bg-[url('https://hotelhimalaya.pages.dev/images/hero/1.webp')] w-full h-screen outline outline-1 outline-white -outline-offset-[10px] bg-no-repeat bg-cover bg-center bg-fixed"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="overlay"></div>
                <img
                  src="https://hotelhimalaya.pages.dev/assets/logo-s4LMycLK.svg"
                  alt=""
                  className="absolute w-32 h-28 md:w-64 md:h-44 object-contain filter-white hover:filter-none z-10 transition-300"
                />
              </div>
            </div>

            <div className="-translate-y-16 flex items-center justify-center">
              <CircularText />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <img src={hotelHimalaya} alt="" className="absolute inset-0 w-[75%] object-contain mx-auto mt-20 -z-10" />
          <div className="bg-[url('https://dennissnellenberg.com/assets/img/device-mbp-15-nonotch.png')] bg-no-repeat bg-contain bg-center w-full h-screen"></div>

          
        </section>
      </main>
    </>
  );
};

export default PortfolioPresentation;
