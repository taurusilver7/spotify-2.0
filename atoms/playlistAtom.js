import { atom } from "recoil";

// atom to get the playlist
export const playlistState = atom({
  key: "playlistState",
  default: null,
});

// atom to get playlist ID and change the state with ID change.
export const playlistIdState = atom({
  key: "playlistIdState",
  default: "5fnPDAb08dLPDkprkIsOdq",
});
