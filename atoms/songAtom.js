import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackIdState", //a unique ID w.r.t other atoms/selectors
  default: null, // default value (initial value)
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
