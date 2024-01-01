import "./Stairs.css";
import { motion } from "framer-motion";
export const Stairs = ({ children }) => {
  const anim = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };
  const expand = {
    initial: { top: 0 },
    enter: (i) => ({
      top: "100vh",
      transition: { duration: 0.4, delay: 0.05 * i },
      transitionEnd: { height: "0", top: "0" },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: (i) => ({
      height: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };
  const backdrop = {
    initial: { opacity: 0.5 },
    enter: { opacity: 0 },
    end: { opacity: 0.5 },
  };
  const numOfCol = 5;
  return (
    <div className="stairs">
      <motion.div {...anim(backdrop)} className="backdrop" />
      <div className="transition-container">
        {[...Array(numOfCol)].map((_, i) => (
          <motion.div {...anim(expand, numOfCol - i)} key={i} />
        ))}
      </div>
      {children}
    </div>
  );
};
