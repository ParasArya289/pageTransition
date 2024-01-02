import Home from "./Pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import { AnimatePresence } from "framer-motion";
import { InterPage } from "./Pages/InterPage";
import { StairsPage } from "./Pages/StairsPage";
import { SvgPage } from "./Pages/SvgPage";
import { ControlBox } from "./Components/ControlBox";
import { useState } from "react";

export default function App() {
  const location = useLocation();
  const [transition, setTransition] = useState("inter");
  return (
    <div className="App">
      <ControlBox setTransition={setTransition} transition={transition} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home transition={transition} />} />
          <Route
            path="/inter"
            element={<InterPage transition={transition} />}
          />
          <Route
            path="/stairs"
            element={<StairsPage transition={transition} />}
          />
          <Route path="/svg" element={<SvgPage transition={transition} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
