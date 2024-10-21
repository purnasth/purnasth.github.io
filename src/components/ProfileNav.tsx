import hero from '../assets/img/hero.png';
import { MdCall, MdMail, MdOutlineArrowCircleRight } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import purnaCV from '../assets/docs/cv.pdf';

const ProfileNav = () => {
  return (
    <>
      <section className="border-1 left-4 top-4 z-40 mx-auto h-auto w-full overflow-y-auto border-white/20 bg-dark p-6 text-white shadow-sm backdrop-blur-sm md:fixed md:h-[calc(100%-2rem)] md:w-72 md:rounded-lg md:border md:bg-dark/10">
        <div className="profile flex h-full flex-col gap-6">
          <Link to="/">
            <img
              src={hero}
              alt=""
              className="hidden h-80 w-full rounded-lg object-cover object-top md:block md:h-56"
              draggable="false"
            />
          </Link>
          <div className="details">
            <h1 className="text-2xl uppercase text-gray-200">Purna Shrestha</h1>

            <p className="text-sm font-light opacity-70">
              Designer + Developer
            </p>
          </div>

          <hr className="opacity-10" />

          <div className="description">
            <p className="text-pretty text-justify text-sm text-gray-400">
              The combination of my passion for design & development highlights
              me in the web world.
            </p>

            <h5 className="mt-1 font-medium">20+ successful projects</h5>
          </div>

          <div className="social-media">
            <ul className="flex items-center justify-start gap-4">
              <li className="transition-300 hover:scale-125">
                <a href="">
                  <FaGithub className="transition-300 text-white/75 hover:text-white" />
                </a>
              </li>
              <li className="transition-300 hover:scale-125">
                <a href="">
                  <FaLinkedinIn className="transition-300 text-white/75 hover:text-white" />
                </a>
              </li>
              <li className="transition-300 hover:scale-125">
                <a href="">
                  <MdCall className="transition-300 text-white/75 hover:text-white" />
                </a>
              </li>
              <li className="transition-300 hover:scale-125">
                <a href="">
                  <MdMail className="transition-300 text-white/75 hover:text-white" />
                </a>
              </li>
            </ul>
          </div>

          <hr className="opacity-10" />

          <div>
            <h4>Companies worked with:</h4>
            <ul className="my-3 flex flex-wrap items-center gap-4">
              <li className="flex items-center justify-center">
                <img
                  src="https://www.lftechnology.com/images/lf-logo.svg"
                  alt="Leapfrog Technology"
                  className="filter-white transition-300 h-8 w-24 rounded-md object-contain p-1 opacity-50 hover:bg-white hover:opacity-100 hover:filter-none"
                  title="Leapfrog Technology"
                />
              </li>
              <li className="flex items-center justify-center">
                <img
                  src="https://longtail.info/assets/img/longtail.svg"
                  alt="Longtail e-media"
                  className="filter-white transition-300 h-8 w-24 rounded-md object-contain p-1 opacity-50 hover:bg-white hover:opacity-100 hover:filter-none"
                  title="Longtail e-Media"
                />
              </li>
            </ul>
          </div>

          <div className="links mt-4">
            <a
              href={purnaCV}
              className="transition-300 pointer-events-auto mb-6 flex w-full max-w-52 items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-5 py-2 text-center text-white outline outline-1 outline-offset-2 outline-white/50 backdrop-blur-md hover:bg-white hover:text-dark md:max-w-full"
              download={true}
            >
              Download my CV
            </a>
            <Link
              to="/about"
              className="flex items-center justify-between md:hidden"
            >
              <span>Know More About Me</span>
              <MdOutlineArrowCircleRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileNav;
