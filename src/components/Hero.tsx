import gradientBg from "../assets/gradients/gradient1.avif";

const Hero = () => {
  return (
    <>
      <main className="relative flex items-center justify-center h-screen">
        <h1 className="font-serif text-8xl text-center text-white mix-blend-overlay drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Hello, I am Purna Shrestha!
        </h1>
        <div
          className={`pointer-events-none absolute inset-0 bg-[url('')] size-full bg-cover bg-center -z-10 mix-blend-darken`}
          style={{ backgroundImage: `url(${gradientBg})` }}
        />
      </main>
    </>
  );
};

export default Hero;
