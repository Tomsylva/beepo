import { Howl } from "howler";

import s36 from "./instrumentSounds/kick.mp3";

export const originalLibrary = {
  name: "ORIGINAL LIBRARY",
  36: new Howl({
    src: [s36],
  }),
  37: new Howl({
    src: ["./instrumentSounds/snare.mp3"],
  }),
  38: new Howl({
    src: ["./instrumentSounds/hats.mp3"],
  }),
  39: new Howl({
    src: ["./instrumentSounds/crash.mp3"],
  }),
  40: new Howl({
    src: ["./instrumentSounds/abeep.mp3"],
  }),
  41: new Howl({
    src: ["./instrumentSounds/cbeep.mp3"],
  }),
  42: new Howl({
    src: ["./instrumentSounds/fbeep.mp3"],
  }),
  43: new Howl({
    src: ["./instrumentSounds/gbeep.mp3"],
  }),
  44: new Howl({
    src: ["./instrumentSounds/asplatter.mp3"],
  }),
  45: new Howl({
    src: ["./instrumentSounds/csplatter.mp3"],
  }),
  46: new Howl({
    src: ["./instrumentSounds/fsplatter.mp3"],
  }),
  47: new Howl({
    src: ["./instrumentSounds/gsplatter.mp3"],
  }),
  48: new Howl({
    src: ["./instrumentSounds/abass.mp3"],
  }),
  49: new Howl({
    src: ["./instrumentSounds/cbass.mp3"],
  }),
  50: new Howl({
    src: ["./instrumentSounds/fbass.mp3"],
  }),
  51: new Howl({
    src: ["./instrumentSounds/gbass.mp3"],
  }),
};
