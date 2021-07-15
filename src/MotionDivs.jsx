import React from "react";
import { motion } from "framer-motion";

function MotionDivs(props) {
  const { activeNote, letterColor } = props;

  const circleVariables = {
    still: {
      y: 0,
    },
    moving: {
      y: -200,
    },
  };

  const divVariables = {
    start: {
      y: -250,
      x: -87,
    },
    end: {
      y: 0,
      x: -87,
    },
  };

  return (
    <motion.div
      id="motion-divs"
      variants={divVariables}
      initial="start"
      animate="end"
    >
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 36 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 36 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 37 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 37 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 38 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 38 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 39 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 39 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 40 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 40 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 41 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 41 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 42 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 42 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 43 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 43 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 44 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 44 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 45 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 45 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 46 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 46 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 47 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 47 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 48 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 48 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 49 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 49 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 50 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 50 ? letterColor : "white" }}
      ></motion.div>
      <motion.div
        className="animate-circle"
        variants={circleVariables}
        animate={activeNote === 51 ? "moving" : "still"}
        style={{ backgroundColor: activeNote === 51 ? letterColor : "white" }}
      ></motion.div>
    </motion.div>
  );
}

export default MotionDivs;
