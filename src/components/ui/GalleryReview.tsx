import React from 'react';
import { TbMessageChatbot } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

interface GalleryReviewProps {
  portfolioItem: {
    caseStudy?: {
      galleryImages?: {
        src: string;
        alt: string;
      }[];
      feedback?: {
        clientReview: string;
        author: string;
      };
    };
    title: string;
  };
}

const GalleryReview: React.FC<GalleryReviewProps> = ({ portfolioItem }) => {
  return (
    <>
      <section className="">
        <div className="px-0 xl:container xl:px-4">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-8">
            <div className="col-span-2">
              <div className="space-y-2 md:space-y-4">
                <h5 className="font-luxury text-2xl font-extralight md:text-4xl">
                  Gallery
                </h5>
                <p className="max-w-lg text-xs md:text-sm">
                  Explore the exquisite moments captured throughout our project
                  journey. Each photograph tells a story of creativity and
                  collaboration, celebrating the milestones and memories that
                  defined our success.
                </p>
              </div>

              <LightGallery
                plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
                mode="lg-fade"
                thumbnail={true}
                autoplay={true}
                elementClassNames="ul mt-6 md:mt-12 w-full grid grid-cols-1 md:grid-cols-2 gap-4 transition-linear"
              >
                {portfolioItem.caseStudy?.galleryImages?.map((image, index) => (
                  <div
                    key={index}
                    className="li gallery-item group relative cursor-pointer overflow-hidden shadow-md transition-all duration-200 ease-linear hover:shadow-xl"
                    data-src={image.src}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="size-full h-56 cursor-pointer object-cover contrast-100 transition-all duration-300 ease-linear group-hover:scale-110 group-hover:contrast-125 md:h-52 xl:h-72"
                      loading="lazy"
                      draggable="false"
                    />
                    <div className="pointer-events-none absolute inset-0 z-0 size-full bg-gradient-to-t from-black/70 to-black/0 transition-all duration-300 ease-linear group-hover:opacity-50" />
                    <h5 className="absolute bottom-0 z-10 w-full -translate-x-0 p-2 text-right text-white opacity-80 transition-all duration-300 ease-linear [text-shadow:1px_1px_2px_#cd9c31] group-hover:translate-x-1/2 group-hover:opacity-100">
                      {image.alt}
                    </h5>
                  </div>
                ))}
              </LightGallery>
            </div>

            <div className="col-span-1">
              <div className="space-y-2 md:space-y-4">
                <h5 className="font-luxury text-2xl font-extralight md:text-4xl">
                  Feedback
                </h5>
                <p className="max-w-xs text-xs md:text-sm">
                  Discover what
                  <strong className="mx-1 font-bold text-inherit">
                    {portfolioItem.title}
                  </strong>
                  has to say about entrusting their vision to us—and how we
                  propelled their business to new heights.
                </p>
              </div>

              <div className="mt-6 md:mt-12 border border-dark/10 p-4 shadow-lg">
                <div className="testimonials">
                  <div className="relative flex max-h-64 flex-col gap-4 overflow-y-auto transition-all duration-150 ease-linear">
                    <p className="review mr-3 text-pretty text-justify text-sm text-dark md:text-base">
                      {portfolioItem.caseStudy?.feedback?.clientReview}
                    </p>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-dark">
                        - {portfolioItem.caseStudy?.feedback?.author}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  to="https://wa.me/+9779808021753"
                  rel="noopener noreferrer"
                  className="transition-300 group mt-4 inline-flex items-center justify-center gap-2 border border-dark/20 bg-dark/10 px-6 py-2 text-dark shadow-md hover:animate-bounce hover:bg-dark/30 hover:shadow-xl"
                  target="_blank"
                  aria-label="Schedule a meeting"
                >
                  Schedule a meeting
                  <TbMessageChatbot className="transition-300 text-xl group-hover:translate-x-2 group-hover:animate-ping" />
                </Link>
                <p className="mt-2">
                  or directly Mail me at
                  <Link
                    to="mailto:purnashrestha0310@gmail.com"
                    className="group relative mx-1 text-base font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="purnashrestha0310@gmail.com"
                  >
                    <span className="absolute -bottom-1 -right-0 h-[2px] w-full origin-left bg-dark transition-all duration-300 ease-linear group-hover:scale-x-0"></span>
                    purnashrestha0310@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryReview;
