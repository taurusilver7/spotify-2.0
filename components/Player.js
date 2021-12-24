import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSongInfo from "../hooks/useSongInfo";
import useSpotify from "../hooks/useSpotify";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [isPlaying, setIsPlaying] = useRecoilState(currentTrackIdState);
  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();
  return (
    <div>
      {/* left */}
      <div>
        <img src={songInfo?.album.images?.[0]?.url} alt="" />
      </div>
    </div>
  );
}

export default Player;
