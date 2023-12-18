import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";
import Logo from "../../img/logo.png";
import { login, signUp } from "../../redux/actions/authActions.js";

const Auth = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state?.authReducer);

  // for check whether show signup or login
  const [isSignUp, setIsSignUp] = useState(true);

  // for checking is password and confirmPassword are smae
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);

  // data which get from form input
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // handle input change
  const handleChange = (e) => {
    setData((preData) => {
      return { ...preData, [e.target.name]: e.target.value };
    });
  };

  // reset forms of login and signup
  const resetForm = () => {
    setData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setIsConfirmPassword(true);
  };

  // handle form submit for both login and signup
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (data?.password !== data?.confirmPassword) {
        setIsConfirmPassword(false);
      } else {
        const res = dispatch(signUp(data));
        resetForm();
      }
    } else {
      const res = dispatch(
        login({
          username: data?.username,
          password: data?.password,
        })
      );
      resetForm();
    }
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="web-name">
          <h1>My Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* right side */}
      <div className="a-right">
        <form className="info-form auth-form" onSubmit={handleSubmit}>
          <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
          {!isConfirmPassword && (
            <span
              style={{
                color: "red",
                fontSize: "12px",
              }}
            >
              Please confirm password is not same
            </span>
          )}
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
                value={data?.firstName}
                className="info-input"
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
                value={data?.lastName}
                className="info-input"
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data?.username}
              className="info-input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
              value={data?.password}
              className="info-input"
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                onChange={handleChange}
                value={data?.confirmPassword}
                className="info-input"
              />
            )}
          </div>
          <div className="auth-ask-link">
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsSignUp((val) => !val);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account Login!"
                : "Don't have an account SignUp"}
            </span>
            <button
              className="primary-btn info-button"
              type="submit"
              disabled={loading ? true : false}
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
