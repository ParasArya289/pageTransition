import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./CardPage.css";
export const ShowCard = () => {
  const navigate = useNavigate();
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const expand = {
    initial: { height: "380px", width: "280px" },
    enter: {
      height: "100%",
      width: "100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        width: {
          duration: 1,
          delay: 0.15,
        },
      },
    },
    exit: {
      height: "380px",
      width: "280px",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        height: {
          duration: 0.5,
          delay: 0.5,
        },
      },
    },
  };
  const scale = {
    intial: {
      scale: 0,
    },
    enter: {
      scale: 100,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <>
      <Navbar />
      <div className="page cardPage">
        <motion.div
          className="show-card"
          {...anim(expand)}
          onClick={() => navigate("/show-card")}
        >
          <motion.div {...anim(opacity)} className="show-card-container">
            <h1>Card</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              quibusdam possimus harum amet quod maiores aut similique! Quasi
              omnis nostrum amet eveniet numquam! Assumenda reprehenderit
              veniam, ab consectetur saepe itaque.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
