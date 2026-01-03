import React from 'react';

import heroHotelHimalaya from '../../assets/videos/temp/hero.mp4';
import himalayaHome from '../../assets/videos/temp/himalaya-home.mp4';
import himalayaStay from '../../assets/videos/temp/himalaya-stay.mp4';
import himalayaDine from '../../assets/videos/temp/himalaya-dine.mp4';
import satprayasHome from '../../assets/videos/temp/satprayas-home.mp4';
import baberMahalDine from '../../assets/videos/temp/babermahal-dine.mp4';
import himalayaGallery from '../../assets/videos/temp/himalaya-gallery.mp4';
import himalayaContact from '../../assets/videos/temp/himalaya-contact.mp4';
import himalayanFlavours from '../../assets/videos/temp/himalayan-flavours.mp4';

const projectVideos = [
  {
    id: 1,
    title: 'heroHotelHimalaya',
    video: heroHotelHimalaya,
  },
  {
    id: 2,
    title: 'heroHotelHimalaya',
    video: himalayaHome,
  },
  {
    id: 3,
    title: 'heroHotelHimalaya',
    video: himalayaStay,
  },
  {
    id: 4,
    title: 'heroHotelHimalaya',
    video: himalayaDine,
  },
  {
    id: 5,
    title: 'heroHotelHimalaya',
    video: himalayaGallery,
  },
  {
    id: 6,
    title: 'heroHotelHimalaya',
    video: himalayaContact,
  },
  {
    id: 7,
    title: 'heroSatprayas',
    video: satprayasHome,
  },
  {
    id: 8,
    title: 'heroHimalayanFlavours',
    video: himalayanFlavours,
  },
  {
    id: 9,
    title: 'heroBaberMahal',
    video: baberMahalDine,
  },
];

const ProjectsSlider: React.FC = () => {
  return (
    <main className="max-w-[100vw] space-y-6 overflow-x-hidden py-24 md:space-y-12 md:py-48">
      {/* <div className="relative overflow-hidden"> */}
      <div className="ul photobanner photobanner-right hover:animation-paused flex items-center justify-center gap-6 whitespace-nowrap md:gap-12">
        {projectVideos.map((project, index) => (
          <video
            // poster={purna}
            key={index}
            className="li transition-1000 h-24 w-auto bg-light/20 object-cover sm:h-32 md:h-64"
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
          >
            <source src={project.video} type="video/mp4" />
            <track
              src="#"
              kind="captions"
              srcLang="en"
              label="english_captions"
            />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      {/* </div> */}

      <div className="ul photobanner photobanner-left hover:animation-paused flex items-center justify-center gap-6 whitespace-nowrap md:gap-12">
        {[...projectVideos].reverse().map((project, index) => (
          <video
            key={index}
            className="li transition-1000 h-24 w-auto bg-light/20 object-cover sm:h-32 md:h-64"
            src={project.video}
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
          ></video>
        ))}
      </div>

      <div className="ul photobanner photobanner-right hover:animation-paused flex items-center justify-center gap-6 whitespace-nowrap md:gap-12">
        {[
          ...projectVideos.slice(Math.floor(projectVideos.length / 2)),
          ...projectVideos.slice(0, Math.floor(projectVideos.length / 2)),
        ].map((project, index) => (
          <video
            key={index}
            className="li transition-1000 h-24 w-auto bg-light/20 object-cover sm:h-32 md:h-64"
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
          >
            <source src={project.video} type="video/mp4" />
            <track
              src="#"
              kind="captions"
              srcLang="en"
              label="english_captions"
            />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </main>
  );
};

export default ProjectsSlider;
