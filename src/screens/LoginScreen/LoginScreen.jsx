import { useState } from "react";
import { SignUpScreen } from "screens";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);
  const [signupEmail, setSignupEmail] = useState("");

  return (
    <div className="login-screen">
      <div className="login-screen-bg">
        <img
          src="/logo_full.png"
          alt="Techieflix Logo"
          className="login-screen-logo"
          onClick={() => setSignIn(false)}
        />
        <button
          className="login-screen-btn"
          onClick={() => setSignIn(!signIn)}
        >
          {signIn === false ? "Sign In" : "Go Back"}
        </button>
        <div className="login-screen-gradient" />
        <div className="login-screen-body">
          {signIn ? (
            <SignUpScreen
              signupEmail={signupEmail}
              setSignupEmail={setSignupEmail}
              toggleRegister={toggleRegister}
            />
          ) : (
              <div className="login-screen-landing">
              <h1>Exciting movies, TV shows and more!</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? Let's Go!</h3>
              <div className="login-screen-input">
                <form>
                  <input
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="login-screen-get-started-btn"
                    onClick={() => {
                      setSignIn(true);
                      setToggleRegister(true);
                    }}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 
export default LoginScreen;