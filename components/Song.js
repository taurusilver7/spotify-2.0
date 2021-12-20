import useSpotify from "../hooks/useSpotify";
import { msToMinsAndSecs } from "../lib/time";

const Song = ({ track, order }) => {
  const spotifyApi = useSpotify();
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt="album-image"
        />
        <div>
          <p>{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className='hidden md:inline'>{track.track.album.name}</p>
        <p>{msToMinsAndSecs(track.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
