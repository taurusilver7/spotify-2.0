import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [isPlaying, setIsPlaying] = useRecoilState(currentTrackIdState);
  const [volume, setVolume] = useState(50);
  return (
    <div>
      {/* left */}
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Player;
