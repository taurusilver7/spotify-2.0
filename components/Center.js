import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Center = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-grow text-white">
      <h1>Center logic for spotify</h1>
      <header>
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
    </div>
  );
};

export default Center;
