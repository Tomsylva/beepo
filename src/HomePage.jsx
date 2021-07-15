import React from "react";
import { motion } from "framer-motion";

function HomePage(props) {
  const { setPage } = props;

  const loadSynth = function () {
    setPage("synth");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        transition: {
          delay: 0.1,
        },
      }}
    >
      <h1>
        Beepo<span className="yellow">.</span>
      </h1>
      <motion.button
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          transition: {
            delay: 0.5,
          },
        }}
        onClick={loadSynth}
      >
        Let's go!
      </motion.button>
    </motion.div>
  );
}

export default HomePage;
