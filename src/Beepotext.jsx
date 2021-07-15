import React from "react";

function Beepotext(props) {
  const { letterColor } = props;
  return (
    <div>
      <h3 className="beepo-text">
        <span style={{ color: letterColor, transition: "all 0.25s" }}>B</span>
        <span style={{ color: letterColor, transition: "all 0.25s" }}>e</span>
        <span style={{ color: letterColor, transition: "all 0.25s" }}>e</span>
        <span style={{ color: letterColor, transition: "all 0.25s" }}>p</span>
        <span style={{ color: letterColor, transition: "all 0.25s" }}>o</span>
        <span style={{ color: letterColor, transition: "all 0.25s" }}>.</span>
      </h3>
    </div>
  );
}

export default Beepotext;
