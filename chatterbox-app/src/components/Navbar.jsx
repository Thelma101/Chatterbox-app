import googlesingin from '../img/googlesingin.png';
import React, { useState } from 'react';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={googlesingin} alt="logo" />
      </div>
      <div className="google-signin">
        {user ? (
          <button className="sign-in" onClick={signOut}>Sign Out</button>
        ) : (
          <button className="sign-in" onClick={googleSignIn}>Sign In</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
