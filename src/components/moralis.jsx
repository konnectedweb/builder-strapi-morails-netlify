import React from "react";
import { useMoralis } from "react-moralis";

const CMoralis = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div className="moralis">
      <button onClick={login} disabled={isAuthenticated}>
        Connect
      </button>
      <button onClick={logOut} disabled={!isAuthenticated}>
        Logout
      </button>
    </div>
  );
};

export default CMoralis;
