import Hero from "../components/Hero";
import ProfileNav from "../components/ProfileNav";
import SideNav from "../components/SideNav";
// import hero from "../assets/img/hero_cutout.png";

const Home = () => {
  return (
    <main className="relative size-full">
      <ProfileNav />
      <Hero />
      <SideNav />

      {/* <img
        src={hero}
        alt=""
        className="z-50 select-none pointer-events-none w-[80vh] absolute left-1/2 -translate-x-1/2 bottom-0 opacity-20 mix-blend-normal"
      /> */}
    </main>
  );
};

export default Home;
