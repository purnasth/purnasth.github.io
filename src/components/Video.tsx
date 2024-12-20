import bgVideo from '../assets/video/gradient-dark.mp4';

const Video = () => {
  return (
    <>
      <video
        className="fixed inset-0 z-[-99] h-screen w-full object-cover opacity-40 mix-blend-luminosity contrast-150"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
