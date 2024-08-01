import "./index.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
