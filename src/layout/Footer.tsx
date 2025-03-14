import React from 'react';
import { Link } from 'react-router-dom';
import { TbBrandWhatsapp } from 'react-icons/tb';
import purna from '../assets/img/hero.avif';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdCall, MdMail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import WebsiteUseTime from '../components/ui/WebsiteUseTime';
import CustomButton from '../components/ui/CustomButton';

const aboutContents = {
  profileImage: purna,
  name: 'Purna Shrestha',
  socialLinks: [
    { id: 'Github', icon: FaGithub, url: 'https://github.com/purnasth' },
    {
      id: 'Linkedin',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/purna-shrestha-0310ps/',
    },
    {
      id: 'Instagram',
      icon: RiInstagramFill,
      url: 'https://www.instagram.com/purna.codes/',
    },
    { id: 'Call', icon: MdCall, url: 'tel:+9779808021753' },
    { id: 'Mail', icon: MdMail, url: 'mailto:purnashrestha0310@gmail.com' },
  ],
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="flex h-full items-center justify-center border-t border-light/20 bg-dark/50 px-4 py-16 text-light backdrop-blur-sm md:h-screen md:px-12">
        <div className="container">
          <div className="flex items-end gap-4 md:gap-6">
            {/* <span>Contact</span> */}
            <h3 className="text-pretty text-3xl capitalize leading-snug text-light/60 md:text-6xl md:leading-snug">
              <strong className="font-luxury text-inherit text-light">
                Let's start
              </strong>{' '}
              <br /> a project together
            </h3>
            <img
              src={purna}
              alt="Purna"
              className="size-10 -translate-y-1 rounded-full bg-white object-contain md:size-16 md:-translate-y-4"
            />
          </div>
          <div className="mt-6 md:mt-14">
            {/* <Link
              to="https://wa.me/+9779808021753"
              rel="noopener noreferrer"
              className="transition-300 group mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-light/20 bg-light/10 px-8 py-4 text-sm text-light shadow-md hover:animate-bounce hover:bg-light/30 hover:shadow-xl md:text-base"
              target="_blank"
              aria-label="Schedule a meeting"
            >
              Schedule a meeting
              <TbMessageChatbot className="transition-300 text-xl group-hover:text-2xl group-hover:translate-x-2 group-hover:animate-wave" />
            </Link> */}

            <div className="flex">
              <CustomButton
                to="https://wa.me/+9779808021753"
                value="Schedule a meeting"
                icon={TbBrandWhatsapp}
                external
              />
            </div>

            <p className="mt-6 text-light/60">
              or directly mail me at
              <Link
                to="mailto:purnashrestha0310@gmail.com"
                className="group relative mx-1 text-base font-normal text-light"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="purnashrestha0310@gmail.com"
              >
                <span className="absolute -bottom-[6px] -right-0 h-[0.5px] w-full origin-left bg-light text-sm font-extralight transition-all duration-300 ease-linear group-hover:scale-x-0"></span>
                purnashrestha0310@gmail.com
              </Link>
            </p>
          </div>

          <hr className="my-12 border-light/10 md:my-20" />

          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3">
            <div className="space-y-3">
              <span className="text-sm uppercase text-light/50">
                Copyright & Version
              </span>
              <p className="font-medium">
                &copy; {year}{' '}
                <strong className="uppercase">Purna Shrestha</strong> | v
                <strong>2.0.4</strong>
              </p>
            </div>
            <WebsiteUseTime />
            <div className="space-y-3">
              <span className="text-sm uppercase text-light/50">
                Socials & Contact
              </span>
              <div className="flex items-center justify-between gap-1">
                <p className="font-medium">Say&nbsp;Hi</p>
                <i className="animate-wave text-2xl">&#128075;</i>
                <span className="mr-4 h-px w-full bg-gradient-to-r from-transparent to-light/40"></span>
                <ul className="flex items-center gap-6">
                  {aboutContents.socialLinks.map((link) => (
                    <li
                      key={link.id}
                      className="transition-300 hover:scale-125"
                    >
                      <Link
                        to={link.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.id}
                        title={link.id}
                        className="capitalize"
                      >
                        <link.icon className="transition-300 text-xl text-light hover:text-light" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
