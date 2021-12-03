import 

const login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>The login page</p>
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
}
