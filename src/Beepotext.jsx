import React from "react";

function Beepotext(props) {
  const { letterColor } = props;

  const randomLetter = Math.floor(Math.random() * 6);

  return (
    <div>
      <h1 className="beepo-text">
        <span
          style={{
            color: randomLetter === 0 ? letterColor : "white",
            transition: "all 0.25s",
          }}
        >
          B
        </span>
        <span
          style={{
            color: randomLetter === 1 ? letterColor : "white",
            transition: "all 0.25s",
          }}
        >
          e
        </span>
        <span
          style={{
            color: randomLetter === 2 ? letterColor : "white",
            transition: "all 0.25s",
          }}
        >
          e
        </span>
        <span
          style={{
            color: randomLetter === 3 ? letterColor : "white",
            transition: "all 0.25s",
          }}
        >
          p
        </span>
        <span
          style={{
            color: randomLetter === 4 ? letterColor : "white",
            transition: "all 0.25s",
          }}
        >
          o
        </span>
        <span
          style={{
            color: randomLetter === 5 ? letterColor : "white",
            transition: "all 0.25s",
          }}
        >
          .
        </span>
      </h1>
    </div>
  );
}

export default Beepotext;
