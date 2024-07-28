import Hero from "../components/Hero";
import ProfileNav from "../components/ProfileNav";
import SideNav from "../components/SideNav";
import withFramerTransition from "../hoc/withFramerTransition";

const Home = () => {
  return (
    <>
      <ProfileNav />
      <Hero />
      <SideNav />
    </>
  );
};

export default withFramerTransition(Home);
