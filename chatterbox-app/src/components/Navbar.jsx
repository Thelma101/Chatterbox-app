import { useState } from 'react';
import SigninImg from '../img/googlesingin'; // Ensure this path is correct
import './Navbar.css'; // Ensure you have a CSS file for styling

const Navbar = () => {
  const [user, setUser] = useState(false);

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

  return (
    <div className="navbar">
      <div className="logo">
        <img src={SigninImg} alt="logo" />
      </div>
      <div className="google-signin">
        {googleSignIn()}
      </div>
    </div>
  );
}

export default Navbar;
