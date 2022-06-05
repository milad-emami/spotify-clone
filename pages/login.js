import { getProviders } from "next-auth/react";
import React from "react";

function Login({ providers }) {
  console.log("PROVIDERS", providers);
  return (
    <div className="flex flex-col items-center bg-black min-h-screen justify-center w-full ">
      <img className="w-96 mb-5" src="spotify-icon.png" alt="" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-[#18D360] rounded p-5 text-white">
            login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
