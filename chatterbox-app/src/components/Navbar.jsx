import SigninImg from '../img/googlesingin'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={SigninImg} alt="logo" />
      </div>
      <div className="google-signin">
        <GoogleSignin />
      </div>
    </div>
  );
}

export default Navbar;