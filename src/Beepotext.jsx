import React from "react";
import { motion } from "framer-motion";

function Beepotext(props) {
  const { letterColor, activeNote } = props;

  const randomLetter = Math.ceil(Math.random() * 6);

  const h1Variants = {
    small: { scale: 1 },
    big: { scale: 1.05 },
  };

  return (
    <div>
      <motion.h1
        className="beepo-text"
        initial="small"
        animate={activeNote > 0 ? "big" : "small"}
        variants={h1Variants}
      >
        <span
          style={{
            color: randomLetter === 1 ? letterColor : "white",
            transition: "all 0.1s",
          }}
        >
          B
        </span>
        <span
          style={{
            color: randomLetter === 2 ? letterColor : "white",
            transition: "all 0.1s",
          }}
        >
          e
        </span>
        <span
          style={{
            color: randomLetter === 3 ? letterColor : "white",
            transition: "all 0.1s",
          }}
        >
          e
        </span>
        <span
          style={{
            color: randomLetter === 4 ? letterColor : "white",
            transition: "all 0.1s",
          }}
        >
          p
        </span>
        <span
          style={{
            color: randomLetter === 5 ? letterColor : "white",
            transition: "all 0.1s",
          }}
        >
          o
        </span>
        <span
          style={{
            color: randomLetter === 6 ? letterColor : "white",
            transition: "all 0.1s",
          }}
        >
          .
        </span>
      </motion.h1>
    </div>
  );
}

export default Beepotext;
