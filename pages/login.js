import { signIn, getProviders } from "next-auth/react";

const login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#1ED760] text-black p-4 rounded-full hover:bg-black hover:text-[#1ED760]"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Signin with {provider.name} account
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
