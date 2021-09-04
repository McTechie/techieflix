import { useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
      )
      .then(user => {console.log(user)})
      .catch(error => {
        alert(error.message);
      });
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => { })
      .catch(error => {
        alert(error.message);
      });
  }

  return (
    <div className="signup-screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={handleSignIn}>Sign In</button>
        <h4>
          <span className="signup-screen-text-gray">New to Techieflix? </span>
          <span className="signup-screen-link" onClick={handleRegister}>Sign up Now</span>.
        </h4>
      </form>
    </div>
  );
}
 
export default SignUpScreen;