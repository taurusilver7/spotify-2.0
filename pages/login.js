import { signIn, getProviders } from "next-auth/react";

const login = () => {
  return (
    <div>
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      provider,
    },
  };
}
