import hero from '../assets/img/hero.png';
import { MdCall, MdMail, MdOutlineArrowCircleRight } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import purnaCV from '../assets/docs/cv.pdf';

const aboutContents = {
  profileImage: hero,
  name: 'Purna Shrestha',
  title: 'Designer + Developer',
  description:
    'A software engineer with 2+ years in software development & UI/UX design.',
  successfulProjects: '20+',
  socialLinks: [
    { id: 'Github', icon: FaGithub, url: 'https://github.com/purnasth' },
    {
      id: 'Linkedin',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/purna-shrestha-b4551b246',
    },
    { id: 'Call', icon: MdCall, url: 'tel:+9779808021753' },
    { id: 'Mail', icon: MdMail, url: 'mailto:purnashrestha0310@gmail.com' },
  ],
  companies: [
    {
      id: 1,
      name: 'Leapfrog Technology',
      logo: 'https://www.lftechnology.com/images/lf-logo.svg',
      url: 'https://www.lftechnology.com',
    },
    {
      id: 2,
      name: 'Longtail e-Media',
      logo: 'https://longtail.info/assets/img/longtail.svg',
      url: 'https://longtail.info',
    },
  ],
  downloadLink: purnaCV,
};

const ProfileNav = () => {
  return (
    <section className="border-1 left-4 top-4 z-40 mx-auto h-auto w-full overflow-y-auto border-white/20 bg-dark p-6 text-white shadow-sm backdrop-blur-sm md:fixed md:h-[calc(100%-2rem)] md:w-72 md:rounded-lg md:border md:bg-dark/10">
      <div className="profile flex h-full flex-col gap-5">
        <Link to="/">
          <img
            src={aboutContents.profileImage}
            alt="Profile"
            className="hidden h-80 w-full rounded-lg object-cover object-top md:block md:h-56"
            draggable="false"
          />
        </Link>
        <div className="details">
          <h1 className="text-2xl uppercase text-gray-200">
            {aboutContents.name}
          </h1>
          <p className="text-sm font-light opacity-70">{aboutContents.title}</p>
        </div>

        <hr className="opacity-10" />

        <div className="description">
          <p className="text-pretty text-justify text-sm text-light/60">
            {aboutContents.description}
          </p>
          <p className="mt-1 font-light text-sm">
            <strong className='font-bold'>{aboutContents.successfulProjects}</strong> successful
            projects
          </p>
        </div>

        <div className="social-media">
          <ul className="flex items-center justify-start gap-4">
            {aboutContents.socialLinks.map((link) => (
              <li key={link.id} className="transition-300 hover:scale-125">
                <Link
                  to={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.id}
                  title={link.id}
                  className="capitalize"
                >
                  <link.icon className="transition-300 text-white/75 hover:text-white" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="opacity-10" />

        <div>
          <h4>Companies worked with:</h4>
          <ul className="my-3 flex flex-wrap items-center gap-4">
            {aboutContents.companies.map((company) => (
              <li key={company.id} className="">
                <Link to={company.url} target="_blank" rel="noreferrer">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="filter-white transition-300 h-8 w-24 rounded-md object-contain p-1 opacity-50 hover:bg-white hover:opacity-100 hover:filter-none"
                    title={company.name}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="links">
          <a
            href={aboutContents.downloadLink}
            className="transition-300 pointer-events-auto mb-6 flex w-full max-w-52 items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-5 py-2 text-center text-white outline outline-1 outline-offset-2 outline-white/50 backdrop-blur-md hover:bg-white hover:text-dark md:max-w-full"
            download
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
  );
};

export default ProfileNav;
