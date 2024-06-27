import React from 'react'
import GoogleSignin from "../img/googlesingin.png"

const Welcome = () => {
  const googleSignIn = () => {
    window.location.href = "http://localhost:3001/auth/google";
  }
  return (
    <div>
      <main>
        <h2>Welcome to React Chat.</h2>
        <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
        <p>Sign in with Google to chat with with your fellow React Developers.</p>
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      </main>
    </div>
  );
};

export default Welcome;