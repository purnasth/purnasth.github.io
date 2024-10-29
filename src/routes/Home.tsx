// import Hero from '../components/Hero';
import HeroProfile from '../components/HeroProfile';
import ProfileNav from '../components/ProfileNav';
import SideNav from '../components/SideNav';
import NavbarButton from '../components/ui/NavbarButton';
import withFramerTransition from '../hoc/withFramerTransition';
import SEO from '../utils/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="Purna Shrestha - Designer & Developer"
        description="Purna Shrestha is a software engineer with 2+ years experience. He has completed 20+ projects with companies like Leapfrog and Longtail e-Media."
        keywords="Web Developer, Full Stack Developer, React Developer, UI/UX Designer, Frontend Developer, Software Engineer, Purna Shrestha, Web Design, Web Development, Software Development, Portfolio, Professional"
      />
      <div className="fixed right-5 top-5 z-50 flex items-center justify-center">
        <NavbarButton />
      </div>
      {/* <Hero /> */}
      <HeroProfile />
      <section className="m-0 p-0 md:hidden">
        <ProfileNav />
        <SideNav />
      </section>
    </>
  );
};

export default withFramerTransition(Home);
