import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const embedded = [
  'https://www.instagram.com/p/DFCNBthvPDe/?img_index=1',
  // 'https://www.instagram.com/p/DESbjHCvRyv/',
  'https://www.instagram.com/p/DEOmbPSPaHu/?img_index=1',
  'https://www.instagram.com/p/DEJWdmcvxyI/?img_index=1',
  'https://www.instagram.com/p/DC--V15vbMe/?img_index=1',
  // 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7261238772942430209',
  //   'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7261238772942430209?compact=1',
  'https://www.instagram.com/p/DBk6B2vv_pP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.instagram.com/p/DB0mzmXPH_m/?img_index=1',
  // 'https://www.instagram.com/p/DCLbbcXvj3k/?img_index=1',
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
      {/* <h3 className="text-xl uppercase leading-snug sm:text-2xl md:text-3xl lg:leading-snug">
          Social Media Wall
        </h3> */}
      <h3 className="inline-flex flex-wrap gap-2 font-body text-xl font-normal leading-snug text-light/70 md:gap-3 md:text-4xl md:leading-snug">
        Stay connected with the latest updates on
        <Link
          to="https://www.linkedin.com/in/purna-shrestha-0310ps/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block font-normal text-inherit text-light"
        >
          <span className="absolute -bottom-0 -right-0 h-px w-full origin-left bg-light transition-all duration-300 ease-linear group-hover:scale-x-0"></span>
          linkedin
          {/* <FaLinkedinIn /> */}
        </Link>
        &
        <Link
          to="https://www.instagram.com/purna.codes/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block font-normal text-inherit text-light"
        >
          <span className="absolute -bottom-0 -right-0 h-px w-full origin-left bg-light transition-all duration-300 ease-linear group-hover:scale-x-0"></span>
          instagram
          {/* <RiInstagramFill /> */}
        </Link>
      </h3>
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
