import "./App.css";
import React from "react";
import { motion } from "framer-motion";
import Beepotext from "./Beepotext";
import { instruments } from "./instruments";
import HomePage from "./HomePage";
import MotionDivs from "./MotionDivs";
import useSound from "use-sound";
import Drumloop from "./Drumloop";
import { Howl } from "howler";
// import { originalLibrary } from "./originalLibrary";
// import { pinaLibrary } from "./pinaLibrary";
import { kotoLibrary } from "./kotoLibrary";
// import { blackElephantLibrary } from "./blackElephantLibrary";

import drumLoop1 from "./instrumentSounds/drumloop1.mp3";

function App() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [page, setPage] = React.useState("home");
  const [touchMe, setTouchMe] = React.useState(true);
  const [letterColor, setLetterColor] = React.useState("white");
  const [backgroundColor, setBackgroundColor] = React.useState("#2f333a");
  const [activeNote, setActiveNote] = React.useState(0);
  const [drumLoop, setDrumLoop] = React.useState(false);
  const [currentLibrary /*setCurrentLibrary*/] = React.useState(kotoLibrary);

  const [play36] = useSound(currentLibrary.midi36, { interrupt: true });
  const [play37] = useSound(currentLibrary.midi37, { interrupt: true });
  const [play38] = useSound(currentLibrary.midi38, { interrupt: true });
  const [play39] = useSound(currentLibrary.midi39, { interrupt: true });
  const [play40] = useSound(currentLibrary.midi40, { interrupt: true });
  const [play41] = useSound(currentLibrary.midi41, { interrupt: true });
  const [play42] = useSound(currentLibrary.midi42, { interrupt: true });
  const [play43] = useSound(currentLibrary.midi43, { interrupt: true });
  const [play44] = useSound(currentLibrary.midi44, { interrupt: true });
  const [play45] = useSound(currentLibrary.midi45, { interrupt: true });
  const [play46] = useSound(currentLibrary.midi46, { interrupt: true });
  const [play47] = useSound(currentLibrary.midi47, { interrupt: true });
  const [play48] = useSound(currentLibrary.midi48, { interrupt: true });
  const [play49] = useSound(currentLibrary.midi49, { interrupt: true });
  const [play50] = useSound(currentLibrary.midi50, { interrupt: true });
  const [play51] = useSound(currentLibrary.midi51, { interrupt: true });

  const rhythm = new Howl({
    src: [drumLoop1],
    loop: true,
  });

  // function changeLibrary() {
  //   setCurrentLibrary(pinaLibrary);
  // }

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

            switch (note) {
              case 36:
                play36();
                break;
              case 37:
                play37();
                break;
              case 38:
                play38();
                break;
              case 39:
                play39();
                break;
              case 40:
                play40();
                break;
              case 41:
                play41();
                break;
              case 42:
                play42();
                break;
              case 43:
                play43();
                break;
              case 44:
                play44();
                break;
              case 45:
                play45();
                break;
              case 46:
                play46();
                break;
              case 47:
                play47();
                break;
              case 48:
                play48();
                break;
              case 49:
                play49();
                break;
              case 50:
                play50();
                break;
              case 51:
                play51();
                break;
              default:
                break;
            }

            setActiveNote(note);
            setLetterColor(currentColor);
            setBackgroundColor("#30353d");
            setTouchMe(false);

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
              {/* <motion.button onClick={changeLibrary}>PINA</motion.button> */}
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

export default App;
