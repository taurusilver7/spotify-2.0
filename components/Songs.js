import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div>
      {playlist?.tracks.items.map((track) => (
        <div>{track.track.name}</div>
      ))}
    </div>
  );
};

export default Songs;
