import "./ControlBox.css";
import { motion } from "framer-motion";
export const ControlBox = ({ setTransition, transition }) => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      dragMomentum={false}
      style={{ touchAction: "none" }}
      className="controlbox"
    >
      <label htmlFor="control">
        <input type="radio" name="control" />
        Inter
      </label>
      <label htmlFor="control">
        <input type="radio" name="control" />
        Stairs
      </label>
      <label htmlFor="control">
        <input type="radio" name="control" />
        Curve
      </label>
    </motion.div>
  );
};
