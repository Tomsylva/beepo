import React from "react";
import { motion } from "framer-motion";
import { Howler } from "howler";

function Drumloop(props) {
  const { drumLoop, setDrumLoop, rhythm } = props;

  function toggleDrums() {
    setDrumLoop(!drumLoop);
    drumLoop ? Howler.stop() : rhythm.play();
  }

  const drumButtonVariables = {
    off: {
      scale: 1,
    },
    on: {
      scale: 1.5,
    },
  };

  return (
    <div>
      <motion.div
        className="drum-loop-button"
        style={{
          backgroundColor: drumLoop ? "rgb(255, 255, 98)" : "#434953",
          transition: "all 0.12s",
        }}
        onClick={toggleDrums}
        variants={drumButtonVariables}
        initial="off"
        animate={drumLoop ? "on" : "off"}
      ></motion.div>
    </div>
  );
}

export default Drumloop;
