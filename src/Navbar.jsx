import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

export const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div className="nav-item">
      <a href="#">Home</a>
      {/* <a href="#">About</a> */}
      <a href="#">Product</a>
      <div className="user-info">
        {isAuthenticated && (
          <img className="user-img" src={user.picture} alt={user.name} />
        )}
        ;
        {isAuthenticated ? (
          <button
            className="btn"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button className="btn" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
};
