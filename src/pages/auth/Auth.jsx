import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="web-name">
          <h1>My Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

const Login = () => {
  return (
    <div className="a-right">
      <form className="info-form auth-form">
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            className="info-input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            className="info-input"
          />
        </div>
        <div className="auth-ask-link">
          <span
            style={{
              fontSize: "12px",
              margin: "auto",
            }}
          >
            Create an account SignUp!
          </span>
          <button className="primary-btn info-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
const SignUp = () => {
  return (
    <div className="a-right">
      <form className="info-form auth-form">
        <h1>Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            className="info-input"
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            className="info-input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            className="info-input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            className="info-input"
          />
          <input
            type="text"
            placeholder="confirm password"
            name="confirmPassword"
            className="info-input"
          />
        </div>
        <div className="auth-ask-link">
          <span
            style={{
              fontSize: "12px",
              margin: "auto",
            }}
          >
            Already have an account Login!
          </span>
        </div>
        <button className="primary-btn info-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Auth;
