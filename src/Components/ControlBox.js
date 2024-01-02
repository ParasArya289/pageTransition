import "./ControlBox.css";
import { motion } from "framer-motion";
export const ControlBox = ({ transition = "inter", setTransition }) => {
  const changeTransition = (e) => {
    setTransition(e.target.value);
  };
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      dragMomentum={false}
      defaultChecke={true}
      style={{ touchAction: "none" }}
      className="controlbox"
    >
      <label htmlFor="control">
        <input
          type="radio"
          name="control"
          value="inter"
          checked={transition === "inter"}
          onChange={changeTransition}
        />
        Inter
      </label>
      <label htmlFor="control">
        <input
          type="radio"
          name="control"
          value="stairs"
          onChange={changeTransition}
        />
        Stairs
      </label>
      <label htmlFor="control">
        <input
          type="radio"
          name="control"
          value="curve"
          onChange={changeTransition}
        />
        Curve
      </label>
    </motion.div>
  );
};
