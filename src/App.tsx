import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './routes/Home';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import PortfolioPresentation from './routes/PortfolioPresentation';
import Contact from './routes/Contact';
import Services from './routes/Services';
import withFramerTransition from './hoc/withFramerTransition'; 
import RouterToTop from './utils/RouterToTop';
import useLenisScroll from './hooks/useLenisScroll';

const HomeWithTransition = withFramerTransition(Home);
const AboutWithTransition = withFramerTransition(About);
const PortfolioWithTransition = withFramerTransition(Portfolio);
const PortfolioPresentationWithTransition = withFramerTransition(
  PortfolioPresentation,
);
const ContactWithTransition = withFramerTransition(Contact);
const ServicesWithTransition = withFramerTransition(Services);

const App = () => {
  useLenisScroll();
  const location = useLocation();

  return (
    <>
      <RouterToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomeWithTransition />} />
          <Route path="/about" element={<AboutWithTransition />} />
          <Route path="/portfolio" element={<PortfolioWithTransition />} />
          <Route
            path="/portfolio/:website"
            element={<PortfolioPresentationWithTransition />}
          />
          <Route path="/contact" element={<ContactWithTransition />} />
          <Route path="/services" element={<ServicesWithTransition />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
