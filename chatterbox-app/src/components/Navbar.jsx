import React, { useState } from 'react'; 
import googlesingin from '../img/googlesingin.png';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useAuthState(auth); 

  const googleSignIn = () => {
    if (user) {
      return (
        <button className="sign-in" onClick={() => setUser(false)}>Sign Out</button>
      );
    }
    return (
      <button className="sign-in" onClick={() => setUser(true)}>Sign In</button>
    );
  }

  const googleSignOut = () => {
    
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={googlesingin} alt="logo" />
      </div>
      <div className="google-signin">
        {googleSignIn()}
      </div>
    </div>
  );
}

export default Navbar;
