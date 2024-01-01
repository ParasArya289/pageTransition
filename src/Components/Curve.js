import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Curve.css";
const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};
const routes = {
  "/": "Home",
  "/inter": "Inter",
  "/stairs": "Stairs",
  "/svg": "SVG Curve",
};
const SVG = ({ height, width }) => {
  const initialPath = `

      M0 300 

      Q${width / 2} 0 ${width} 300

      L${width} ${height + 300}

      Q${width / 2} ${height + 600} 0 ${height + 300}

      L0 0

  `;

  const targetPath = `

      M0 300

      Q${width / 2} 0 ${width} 300

      L${width} ${height}

      Q${width / 2} ${height} 0 ${height}

      L0 0

  `;
  const translate = {
    initial: {
      top: "-300px",
    },

    enter: {
      top: "-100vh",

      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },

      transitionEnd: {
        top: "100vh",
      },
    },

    exit: {
      top: "-300px",

      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const curve = (initialPath, targetPath) => {
    return {
      initial: {
        d: initialPath,
      },

      enter: {
        d: targetPath,

        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
      },

      exit: {
        d: initialPath,

        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      },
    };
  };

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
export const Curve = ({ children, backgroundColor }) => {
  const location = useLocation();

  const [dimensions, setDimensions] = useState({
    width: null,

    height: null,
  });
  const text = {
    initial: {
      opacity: 1,
    },

    enter: {
      opacity: 0,

      top: -100,

      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },

      transitionEnd: { top: "47.5%" },
    },

    exit: {
      opacity: 1,

      top: "40%",

      transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
  };

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,

        height: window.innerHeight,
      });
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="curve" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />

      <motion.p className="route" {...anim(text)}>
        {routes[location.pathname]}
      </motion.p>

      {dimensions.width != null && <SVG {...dimensions} />}

      {children}
    </div>
  );
};
