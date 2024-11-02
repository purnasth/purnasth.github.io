import React from 'react';
import { Link } from 'react-router-dom';
import { TbMessageChatbot } from 'react-icons/tb';
import purna from '../../assets/img/hero.avif';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdCall, MdMail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

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
      <footer className="bg-dark text-light border-t border-light/20 h-screen flex items-center justify-center">
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
          <div className="mt-12">
            <Link
              to="https://wa.me/+9779808021753"
              rel="noopener noreferrer"
              className="transition-300 group mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-light/20 bg-light/10 px-8 py-4 text-light shadow-md hover:animate-bounce hover:bg-light/30 hover:shadow-xl"
              target="_blank"
              aria-label="Schedule a meeting"
            >
              Schedule a meeting
              <TbMessageChatbot className="transition-300 text-xl group-hover:translate-x-2 group-hover:animate-ping" />
            </Link>
            <p className="mt-6 text-light/60">
              or directly mail me at
              <Link
                to="mailto:purnashrestha0310@gmail.com"
                className="group relative mx-1 text-base font-semibold text-light"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="purnashrestha0310@gmail.com"
              >
                <span className="absolute -bottom-2 -right-0 h-px w-full origin-left bg-light transition-all duration-300 ease-linear group-hover:scale-x-0"></span>
                purnashrestha0310@gmail.com
              </Link>
            </p>
          </div>

          <hr className="my-20 border-light/10" />

          <div className="grid grid-cols-3">
            <div className="space-y-3">
              <span className="text-sm uppercase text-light/50">
                Copyright & Version
              </span>
              <p className="">
                &copy; {year}{' '}
                <strong className="uppercase">Purna Shrestha</strong> | v
                <strong>2.0.4</strong>
              </p>
            </div>
            <div></div>
            <div className="space-y-3">
              <span className="text-sm uppercase text-light/50">
                Socials & Contact
              </span>
              <div className="flex items-center justify-between gap-1">
                <p className="inline-block">Say Hi &#128075;</p>
                <span className="h-px w-1/3 bg-gradient-to-r from-transparent via-light/30 to-transparent"></span>
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
