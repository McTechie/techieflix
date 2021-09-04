import { useState } from "react";
import { SignUpScreen } from "screens";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login-screen">
      <div className="login-screen-bg">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="login-screen-logo"
        />
        <button className="login-screen-btn" onClick={() => setSignIn(!signIn)}>
          Sign In
        </button>
        <div className="login-screen-gradient" />
        <div className="login-screen-body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Exciting movies, TV shows and more!</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? Enter your email to create or renew your membership.</h3>
              <div className="login-screen-input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button className="login-screen-get-started" onClick={() => setSignIn(true)}>GET STARTED</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
 
export default LoginScreen;