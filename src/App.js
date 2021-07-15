import "./App.css";
import React from "react";
import { motion } from "framer-motion";
import Beepotext from "./Beepotext";
import { instruments } from "./instruments";
import HomePage from "./HomePage";

function App() {
  const [currentInstrument, setCurrentInstrument] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [page, setPage] = React.useState("home");
  const [touchMe, setTouchMe] = React.useState(true);
  const [letterColor, setLetterColor] = React.useState("white");

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
            const instrument = instruments[note].instrumentName;
            const currentColor = instruments[note].color;
            setCurrentInstrument(instrument);
            setLetterColor(currentColor);
            setTouchMe(false);
            if (midiMessage.target.name !== "Playtron") {
              setErrorMessage(
                "This online synth has been designed to work with a Playtron by Playtronica, however, all midi devices will work between C1 and D#2."
              );
            }
          } else {
            endOfNote();
          }
          break;
        case 128:
          endOfNote();
          function endOfNote() {
            setTimeout(function () {
              setCurrentInstrument("");
              setLetterColor("white");
            }, 300);
          }
          break;
      }
    }
  };

  const onFail = function () {
    setErrorMessage("Could not connect to your midi device");
  };

  navigator.requestMIDIAccess().then(onSuccess, onFail);

  return (
    <div className="App">
      {page === "home" ? (
        <HomePage setPage={setPage} />
      ) : (
        <div className="snyth-page">
          <Beepotext letterColor={letterColor} />
          {touchMe ? <h3>Make some noise...</h3> : null}
          {currentInstrument ? (
            <motion.div
              initial="visible"
              animate="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                transition: {
                  delay: 0.01,
                },
              }}
            >
              <h2>{currentInstrument}</h2>
            </motion.div>
          ) : null}
          {errorMessage ? <h3>{errorMessage}</h3> : null}
        </div>
      )}
    </div>
  );
}

export default App;
