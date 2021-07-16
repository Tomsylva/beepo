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

import kickSound from "./instrumentSounds/kick.mp3";
import snareSound from "./instrumentSounds/snare.mp3";
import hatsSound from "./instrumentSounds/hats.mp3";
import crashSound from "./instrumentSounds/crash.mp3";
import AbeepSound from "./instrumentSounds/abeep.mp3";
import CbeepSound from "./instrumentSounds/cbeep.mp3";
import FbeepSound from "./instrumentSounds/fbeep.mp3";
import GbeepSound from "./instrumentSounds/gbeep.mp3";
import Asplatter from "./instrumentSounds/asplatter.mp3";
import Csplatter from "./instrumentSounds/csplatter.mp3";
import Fsplatter from "./instrumentSounds/fsplatter.mp3";
import Gsplatter from "./instrumentSounds/gsplatter.mp3";
import Abass from "./instrumentSounds/abass.mp3";
import Cbass from "./instrumentSounds/cbass.mp3";
import Fbass from "./instrumentSounds/fbass.mp3";
import Gbass from "./instrumentSounds/gbass.mp3";
import drumLoop1 from "./instrumentSounds/drumloop1.mp3";

function App() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [page, setPage] = React.useState("home");
  const [touchMe, setTouchMe] = React.useState(true);
  const [letterColor, setLetterColor] = React.useState("white");
  const [backgroundColor, setBackgroundColor] = React.useState("#2f333a");
  const [activeNote, setActiveNote] = React.useState(0);
  const [drumLoop, setDrumLoop] = React.useState(false);

  const [playKick] = useSound(kickSound, { interrupt: true });
  const [playSnare] = useSound(snareSound, { interrupt: true });
  const [playHats] = useSound(hatsSound, { interrupt: true });
  const [playCrash] = useSound(crashSound, { interrupt: true });
  const [playAbeep] = useSound(AbeepSound, { interrupt: true });
  const [playCbeep] = useSound(CbeepSound, { interrupt: true });
  const [playFbeep] = useSound(FbeepSound, { interrupt: true });
  const [playGbeep] = useSound(GbeepSound, { interrupt: true });
  const [playAsplatter] = useSound(Asplatter, { interrupt: true });
  const [playCsplatter] = useSound(Csplatter, { interrupt: true });
  const [playFsplatter] = useSound(Fsplatter, { interrupt: true });
  const [playGsplatter] = useSound(Gsplatter, { interrupt: true });
  const [playAbass] = useSound(Abass, { interrupt: true });
  const [playCbass] = useSound(Cbass, { interrupt: true });
  const [playFbass] = useSound(Fbass, { interrupt: true });
  const [playGbass] = useSound(Gbass, { interrupt: true });

  const rhythm = new Howl({
    src: [drumLoop1],
    loop: true,
  });

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
                playKick();
                break;
              case 37:
                playSnare();
                break;
              case 38:
                playHats();
                break;
              case 39:
                playCrash();
                break;
              case 40:
                playAbass();
                break;
              case 41:
                playCbass();
                break;
              case 42:
                playFbass();
                break;
              case 43:
                playGbass();
                break;
              case 44:
                playAsplatter();
                break;
              case 45:
                playCsplatter();
                break;
              case 46:
                playFsplatter();
                break;
              case 47:
                playGsplatter();
                break;
              case 48:
                playAbeep();
                break;
              case 49:
                playCbeep();
                break;
              case 50:
                playFbeep();
                break;
              case 51:
                playGbeep();
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
