import "./index.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import PortfolioPresentation from "./routes/PortfolioPresentation";
import NavbarButton from "./components/ui/NavbarButton";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="fixed right-5 top-5 z-50">
          <NavbarButton />
        </div>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/:website"
            element={<PortfolioPresentation />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
