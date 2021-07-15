import "./App.css";
import React from "react";
import { motion } from "framer-motion";
import Beepotext from "./Beepotext";
import { instruments } from "./instruments";
import HomePage from "./HomePage";

function App() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [page, setPage] = React.useState("home");
  const [touchMe, setTouchMe] = React.useState(true);
  const [letterColor, setLetterColor] = React.useState("white");
  const [backgroundColor, setBackgroundColor] = React.useState("#2f333a");

  const onSuccess = function (midiAccess) {
    const inputs = midiAccess.inputs;
    for (let input of inputs.values()) {
      input.onmidimessage = getMIDIMessage;
    }
    function getMIDIMessage(midiMessage) {
      const command = midiMessage.data[0];
      const note = midiMessage.data[1];
      const velocity = midiMessage.data.length > 2 ? midiMessage.data[2] : 0;

      function endOfNote() {
        setTimeout(function () {
          setLetterColor("white");
          setBackgroundColor("#2f333a");
        }, 150);
      }

      // eslint-disable-next-line
      switch (command) {
        case 144:
          if (velocity > 0) {
            const currentColor = instruments[note].color;
            setLetterColor(currentColor);
            setBackgroundColor("#30353d");
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
          <Beepotext letterColor={letterColor} />
          {touchMe ? (
            <motion.h3
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
              Make some noise...
            </motion.h3>
          ) : null}
          {errorMessage ? <h3>{errorMessage}</h3> : null}
        </div>
      )}
    </div>
  );
}

export default App;
