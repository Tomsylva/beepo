import React from "react";

function HomePage(props) {
  const { setPage } = props;

  const loadSynth = function () {
    setPage("synth");
  };

  return (
    <div>
      <h1>
        Beepo<span class="yellow">.</span>
      </h1>
      <button onClick={loadSynth}>Let's go!</button>
    </div>
  );
}

export default HomePage;
