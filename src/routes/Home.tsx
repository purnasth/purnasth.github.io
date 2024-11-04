// import Hero from '../components/Hero';
import AboutHome from '../components/AboutHome';
import HeroProfile from '../components/HeroProfile';
import ProfileNav from '../components/ProfileNav';
import SideNav from '../components/SideNav';
import Footer from '../layout/Footer';
import NavbarButton from '../components/ui/NavbarButton';
import ProjectsSlider from '../components/ui/ProjectsSlider';
import ProjectsUI from '../components/ui/ProjectsUI';
import withFramerTransition from '../hoc/withFramerTransition';
import SEO from '../utils/SEO';
import Navbar from '../layout/Navbar';

const Home = () => {
  return (
    <>
      <SEO
        title="Purna Shrestha - Designer & Developer"
        description="Purna Shrestha is a software engineer with 2+ years experience. He has completed 20+ projects with companies like Leapfrog and Longtail e-Media."
        keywords="Web Developer, Full Stack Developer, React Developer, UI/UX Designer, Frontend Developer, Software Engineer, Purna Shrestha, Web Design, Web Development, Software Development, Portfolio, Professional"
      />
      <Navbar />
      {/* <div className="fixed right-5 top-5 z-50 flex items-center justify-center">
        <NavbarButton />
      </div> */}
      {/* <Hero /> */}
      <section className="m-0 p-0 md:hidden">
        <ProfileNav />
        <SideNav />
      </section>
      <AboutHome />
      <div className="sticky right-5 top-5 z-50 ml-auto mt-5 w-fit">
        <NavbarButton />
      </div>
      <h2 className="my-24 text-center text-4xl capitalize text-light/50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-8xl md:leading-snug">
        Bringing your <strong className="font-luxury text-light">vision</strong>{' '}
        to <strong className="font-luxury text-light">life</strong>
      </h2>
      <HeroProfile />
      <ProjectsSlider />
      <div className="container">
        <ProjectsUI />
      </div>
      <Footer />
    </>
  );
};

export default withFramerTransition(Home);
