import Hero from '../components/Hero';
import ProfileNav from '../components/ProfileNav';
import SideNav from '../components/SideNav';
import NavbarButton from '../components/ui/NavbarButton';
import withFramerTransition from '../hoc/withFramerTransition';

const Home = () => {
  return (
    <>
      <div className="fixed right-5 top-5 z-50 flex items-center justify-center">
        <NavbarButton />
      </div>
      <Hero />
      <section className="m-0 p-0 md:hidden">
        <ProfileNav />
        <SideNav />
      </section>
    </>
  );
};

export default withFramerTransition(Home);
