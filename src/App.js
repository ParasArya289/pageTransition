import Home from "./Pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import { AnimatePresence } from "framer-motion";
import { InterPage } from "./Pages/InterPage";
import { StairsPage } from "./Pages/StairsPage";
import { SvgPage } from "./Pages/SvgPage";
import { Navbar } from "./Components/Navbar";

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/inter" element={<InterPage />} />
          <Route path="/stairs" element={<StairsPage />} />
          <Route path="/svg" element={<SvgPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
