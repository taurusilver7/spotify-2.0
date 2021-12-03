import { signIn, getProviders } from "next-auth/react";

const login = ({ providers }) => {
  return (
    <div>
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />

      {Object.values(providers).map((provider) => (
        <div>
          <button>Login with {provider.name}</button>
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
