import { useSession } from "next-auth/react";
import { useEffect } from "react";

const useSpotify = () => {
  const { data: session, status } = useSession();
  useEffect(() => {}, [session]);
  return null;
};

export default useSpotify;
