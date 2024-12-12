import React, { useEffect } from 'react';

import { FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const embedded = [
  'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7261238772942430209',
  //   'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7261238772942430209?compact=1',
  'https://www.instagram.com/p/DBk6B2vv_pP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DB0mzmXPH_m/?img_index=1',
  'https://www.instagram.com/p/DCLbbcXvj3k/?img_index=1',
  'https://www.instagram.com/p/DChOJkUhuAR/?img_index=1',
];

const EmbedPosts: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return (
    <main className="border-t border-light/30">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4">
        {/* <h3 className="text-xl uppercase leading-snug sm:text-2xl md:text-3xl lg:leading-snug">
          Social Media Wall
        </h3> */}
        <h3 className="font-body text-5xl text-light">
          Stay connected with the latest updates on
          <Link
            to="https://www.linkedin.com/in/purna-shrestha-0310ps/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-3 inline-block text-xl"
          >
            <span className="absolute -bottom-2 -right-0 h-px w-full origin-left bg-light transition-all duration-300 ease-linear group-hover:scale-x-0"></span>
            <FaLinkedinIn />
          </Link>
          and
          <Link
            to="https://www.instagram.com/purna.codes/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-3 inline-block text-xl"
          >
            <span className="absolute -bottom-2 -right-0 h-px w-full origin-left bg-light transition-all duration-300 ease-linear group-hover:scale-x-0"></span>
            <RiInstagramFill />
          </Link>
        </h3>
      </div>
      <div className="scroll mt-12 flex max-w-full gap-6 overflow-x-auto text-light md:mt-20">
        {embedded.map((postUrl, index) => {
          // Check if the URL is for LinkedIn or Instagram
          const isLinkedIn = postUrl.includes('linkedin.com');
          return (
            <div key={index}>
              {isLinkedIn ? (
                <iframe
                  src={postUrl}
                  frameBorder="0"
                  allowFullScreen
                  title={`LinkedIn Post ${index + 1}`}
                  className="h-full w-96 object-contain"
                ></iframe>
              ) : (
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                >
                  <a href={postUrl} target="_blank" rel="noopener noreferrer">
                    View this post on Instagram
                  </a>
                </blockquote>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default EmbedPosts;
