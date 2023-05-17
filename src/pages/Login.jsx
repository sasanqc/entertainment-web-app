import React, { useRef } from "react";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../store";
const Login = () => {
  const dispatch = useStore(false)[1];
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (
      emailRef.current.value.trim().length === 0 ||
      passwordRef.current.value.trim().length === 0
    ) {
      return;
    }
    if (!emailRef.current.value.includes("@")) {
      return;
    }
    dispatch("LOGIN", { email: emailRef.current.value });
    navigate("/home");
  };
  return (
    <main className="login">
      <LogoIcon className="login__logo" />
      <form className="form">
        <h1 className="heading--l">Login</h1>
        <div className="form__inputContainer">
          <input
            type="email"
            placeholder="Email address"
            className="form__input"
            required
            ref={emailRef}
          />
        </div>

        <div className="form__inputContainer">
          <input
            type="password"
            placeholder="Password"
            className="form__input"
            required
            ref={passwordRef}
          />
        </div>

        <button className="btn btn--primary" onClick={handleSubmitLogin}>
          Login to your account
        </button>
        <div className="form__question">
          <p className="body--m">
            Don't have an account?
            <Link className="form__link" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
