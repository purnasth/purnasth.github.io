import { MdOutlineArrowCircleRight } from "react-icons/md";

const ProfileNav = () => {
  return (
    <>
      <section className="fixed left-0 top-0 m-4 bg-white/5 backdrop-blur-sm border border-1 border-white/20 shadow-sm p-6 w-72 rounded-lg z-40">
        <div className="profile space-y-8">
          <img
            src="https://www.purnashrestha.com.np/assets/img/purna%20pp1.png"
            alt=""
            className="w-full h-56 object-cover rounded-lg"
          />
          <div className="details">
            <h2 className="text-2xl text-gray-200">Purna Shrestha</h2>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
          </div>

          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              a.
            </p>

            <h5 className="font-semibold">20+ successful projects</h5>
          </div>

          <div>
            <h4>Companies worked with:</h4>
            <ul className="flex items-center flex-wrap gap-4 my-3">
              <li>
                <img
                  src="https://www.lftechnology.com/images/lf-logo.svg"
                  alt="Leapfrog Technology"
                  className="filter-black hover:filter-none transition-300 w-24 h-10 object-contain p-1"
                />
              </li>
              <li>
                <img
                  src="https://longtail.info/assets/img/longtail.svg"
                  alt="Longtail e-media"
                  className="filter-black hover:filter-none transition-300 w-24 h-10 object-contain p-1"
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
