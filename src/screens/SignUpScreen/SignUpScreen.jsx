import "./SignUpScreen.css";

const SignUpScreen = () => {
  return (
    <div className="signup-screen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signup-screen-text-gray">New to Techieflix? </span>
          <span className="signup-screen-link">Sign up Now</span>.
        </h4>
      </form>
    </div>
  );
}
 
export default SignUpScreen;