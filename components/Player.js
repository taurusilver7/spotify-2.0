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

  const fetchCurrentSong = () => {
      if(!songInfo) {
          spotifyApi.getMyCurrentPlayingTrack().then(data => {
            //   change the current track details (information)
          })
      }
  }

  useEffect(() => {
      if(spotifyApi.getAccessToken() && !currentTrackId) {
        //   fetch the song info.
      }
  }, [currentTrackId, spotifyApi, session]);
  return (
    <div>
      {/* left */}
      <div>
        <img
          className="hidden md:inline h-10 w-10"
          src={songInfo?.album.images?.[0]?.url}
          alt=""
        />
      </div>
    </div>
  );
}

export default Player;
