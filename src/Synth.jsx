import React from "react";
import { motion } from "framer-motion";
import Beepotext from "./Beepotext";
import { instruments } from "./instruments";
import HomePage from "./HomePage";
import MotionDivs from "./MotionDivs";
// import useSound from "use-sound";
import Drumloop from "./Drumloop";
import { Howl } from "howler";
// import { pinaLibrary } from "./pinaLibrary";
import { kotoLibrary } from "./kotoLibrary";
// import { originalLibrary } from "./originalLibrary";
// import { blackElephantLibrary } from "./blackElephantLibrary";

import drumLoop1 from "./instrumentSounds/drumloop1.mp3";

function Synth(props) {
  const { currentLibrary, setCurrentLibrary } = props;

  const [errorMessage, setErrorMessage] = React.useState("");
  const [page, setPage] = React.useState("home");
  const [touchMe, setTouchMe] = React.useState(true);
  const [letterColor, setLetterColor] = React.useState("white");
  const [backgroundColor, setBackgroundColor] = React.useState("#2f333a");
  const [activeNote, setActiveNote] = React.useState(0);
  const [drumLoop, setDrumLoop] = React.useState(false);

  const rhythm = new Howl({
    src: [drumLoop1],
    loop: true,
  });

  function changeKoto() {
    setCurrentLibrary(kotoLibrary);
  }

  const onSuccess = function (midiAccess) {
    const inputs = midiAccess.inputs;
    for (let input of inputs.values()) {
      input.onmidimessage = getMIDIMessage;
    }
    function getMIDIMessage(midiMessage) {
      const command = midiMessage.data[0];
      const note = midiMessage.data[1];
      const velocity = midiMessage.data.length > 2 ? midiMessage.data[2] : 0;
      // eslint-disable-next-line
      switch (command) {
        case 144:
          if (velocity > 0) {
            const currentColor = instruments[note].color;

            if (
              currentLibrary[note] &&
              currentLibrary[note].playing() !== true
            ) {
              currentLibrary[note].play();
              console.log(
                "CURRENT NOTE: ",
                currentLibrary.name,
                currentLibrary[note]
              );
              setActiveNote(note);
              setLetterColor(currentColor);
              setBackgroundColor("#30353d");
              setTouchMe(false);
            }

            if (midiMessage.target.name !== "Playtron") {
              setErrorMessage(
                "This online synth has been designed to work with a Playtron by Playtronica, however, all midi devices will work between C1 and D#2."
              );
            }
          } else {
          }
          break;
        case 128:
          setActiveNote(0);
          setLetterColor("white");
          setBackgroundColor("#2f333a");
          break;
      }
    }
  };

  const onFail = function () {
    setErrorMessage("Could not connect to your midi device");
  };

  navigator.requestMIDIAccess().then(onSuccess, onFail);

  return (
    <div
      className="App"
      style={{ backgroundColor: backgroundColor, transition: "all 0.05s" }}
    >
      {page === "home" ? (
        <HomePage setPage={setPage} />
      ) : (
        <div className="snyth-page">
          {touchMe ? (
            <motion.h6
              className="touch-me"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: -150 },
                transition: {
                  delay: 1,
                },
              }}
            >
              Make some noise...
            </motion.h6>
          ) : (
            <>
              <Drumloop
                drumLoop={drumLoop}
                setDrumLoop={setDrumLoop}
                rhythm={rhythm}
              />
              <Beepotext letterColor={letterColor} activeNote={activeNote} />
              <motion.button onClick={changeKoto}>KOTO</motion.button>
              <MotionDivs activeNote={activeNote} letterColor={letterColor} />
            </>
          )}
          {errorMessage ? <h3>{errorMessage}</h3> : null}
        </div>
      )}
      <footer>
        <p>
          <a
            href="https://www.linkedin.com/in/thomas-sylva/"
            target="_blank"
            rel="noreferrer"
          >
            © Tom Sylva 2021
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Synth;
