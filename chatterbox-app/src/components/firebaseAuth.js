import React, { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const App = () => {
  const [user] = useAuthState(auth);

  const signInWithGooglePopup = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("User signed in with Google: ", result.user);
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };

  const signInWithGoogleRedirect = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const signInWithFacebookPopup = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log("User signed in with Facebook: ", result.user);
      })
      .catch((error) => {
        console.error("Error signing in with Facebook: ", error);
      });
  };

  const signInWithFacebookRedirect = () => {
    signInWithRedirect(auth, facebookProvider);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in: ", user);
      } else {
        console.log("User is signed out");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Auth Example</h1>
        {user ? (
          <>
            <p>Welcome, {user.displayName}</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <button onClick={signInWithGooglePopup}>Sign In with Google (Popup)</button>
            <button onClick={signInWithGoogleRedirect}>Sign In with Google (Redirect)</button>
            <button onClick={signInWithFacebookPopup}>Sign In with Facebook (Popup)</button>
            <button onClick={signInWithFacebookRedirect}>Sign In with Facebook (Redirect)</button>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
