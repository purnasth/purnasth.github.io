import bgVideo from '../assets/video/gradient-dark.mp4';

const Video = () => {
  return (
    <>
      <video
        className="fixed inset-0 z-[-99] h-screen w-full object-cover mix-blend-luminosity opacity-40 contrast-150"
        autoPlay
        muted
        loop
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
