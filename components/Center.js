import {useSession} from 'next-auth/react';

const Center = () => {
  const {data: session} = useSession();
  return (
    <div className="flex flex-grow text-white">
      <h1>Center logic for spotify</h1>
      <header>
        <div>
          <img className='rounded-full w-10 h-10' src={session?.user.image} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Center;
