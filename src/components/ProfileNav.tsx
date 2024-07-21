import hero from "../assets/img/hero.png";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProfileNav = () => {
  return (
    <>
      <section className="text-white fixed left-4 top-4 bg-black/10 backdrop-blur-sm border border-1 border-white/20 shadow-sm p-6 w-72 rounded-lg z-40 h-[calc(100%-2rem)]">
        <div className="profile flex items- justify-center flex-col gap-6 h-full">
          <img
            src={hero}
            alt=""
            className="w-full h-56 object-cover object-top rounded-lg"
            draggable="false"
          />
          <div className="details">
            <h1 className="text-3xl text-gray-200">Purna Shrestha</h1>

            <p className="text-base text-gray-300">Web Developer</p>
          </div>

          <div className="description">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              a.
            </p>

            <h5 className="font-semibold">20+ successful projects</h5>
          </div>

          <div className="social-media">
            <ul className="flex items-center justify-start gap-4">
              <li className="hover:scale-125 transition-300">
                <a href="">
                  <FaGithub />
                </a>
              </li>
              <li className="hover:scale-125 transition-300">
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="hover:scale-125 transition-300">
                <a href="">
                  <MdCall />
                </a>
              </li>
              <li className="hover:scale-125 transition-300">
                <a href="">
                  <MdMail />
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4>Companies worked with:</h4>
            <ul className="flex items-center flex-wrap gap-4 my-3">
              <li className="flex items-center justify-center">
                <img
                  src="https://www.lftechnology.com/images/lf-logo.svg"
                  alt="Leapfrog Technology"
                  className="filter-white opacity-75 hover:opacity-100 hover:filter-none transition-300 w-24 h-9 object-contain p-1 hover:bg-white rounded-xl"
                />
              </li>
              <li className="flex items-center justify-center">
                <img
                  src="https://longtail.info/assets/img/longtail.svg"
                  alt="Longtail e-media"
                  className="filter-white opacity-75 hover:opacity-100 hover:filter-none transition-300 w-24 h-9 object-contain p-1 hover:bg-white rounded-xl"
                />
              </li>
            </ul>
          </div>

          <div className="links">
            <button className="mb-6 w-full text-center py-2 px-5 rounded-full flex items-center justify-center gap-2 backdrop-blur-md text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline">
              Download my CV
            </button>
            <a href="" className="flex items-center justify-between">
              <span>Know More About Me</span>
              <MdOutlineArrowCircleRight className="text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileNav;
