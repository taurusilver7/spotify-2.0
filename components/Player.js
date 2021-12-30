import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSongInfo from "../hooks/useSongInfo";
import useSpotify from "../hooks/useSpotify";
import { PauseIcon, SwitchHorizontalIcon } from "@heroicons/react/outline";
import {
  HeartIcon,
  VolumeUpIcon as VolumeDownIcon,
} from "@heroicons/react/outline";
import {
  RewindIcon,
  FastForwardIcon,
  PlayIcon,
  ReplyIcon,
  VolumeUpIcon,
} from "@heroicons/react/solid";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log("Now Playing:", data.body?.item);
        //   change the current track details (information)
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };

  const handlePlayPause = () => {
    spotifdyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      //   fetch the song info.
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackIdState, spotifyApi, session]);
  return (
    <div className="grid grid-cols-3 text-xs md:text-base px-2 md:px-8 h-24 bg-gradient-to-b from-black to-gray-900 text-white">
      {/* left */}
      <div className="flex items-center space-x-4">
        <img
          className="hidden md:inline h-10 w-10"
          src={songInfo?.album.images?.[0]?.url}
          alt=""
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artist?.[0]?.name}</p>
        </div>
      </div>

      {/* center */}
      <div className="flex items-center justify-evenly">
        {/* player buttons */}
        <SwitchHorizontalIcon className="button" />
        <RewindIcon
          // onClick={() => spotifyApi.skipToPrevious()} API not working properly
          className="button"
        />
        {isPlaying ? (
          <PauseIcon onClick={handlePlayPause} className="button w-10 h-10" />
        ) : (
          <PlayIcon onClick={handlePlayPause} className="button w-10 h-10" />
        )}
        <FastForwardIcon
          // onClick={() => spotifyApi.skipToNext()} API not working properly
          className="button"
        />
        <ReplyIcon className="button" />
      </div>

      {/* Right—Volume */}
      <div className="flex items-center space-x-3 justify-end md:space-x-4 pr-5">
        <VolumeDownIcon className="button" />
        <input
          className="w-14 md:w-20"
          type="range"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          min={0}
          max={100}
        />
        <VolumeUpIcon className="button" />
      </div>
    </div>
  );
}

export default Player;
