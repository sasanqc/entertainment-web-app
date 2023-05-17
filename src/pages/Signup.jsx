import React, { useRef } from "react";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../store";
const Signup = () => {
  const dispatch = useStore(false)[1];
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const repPassRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      emailRef.current.value.trim().length === 0 ||
      passRef.current.value.trim().length === 0 ||
      repPassRef.current.value.trim().length === 0
    ) {
      return;
    }

    if (repPassRef.current.value !== passRef.current.value) {
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
        <h1 className="heading--l">Sign Up</h1>
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
            ref={passRef}
          />
        </div>
        <div className="form__inputContainer">
          <input
            type="password"
            placeholder="Reapeat password"
            className="form__input"
            required
            ref={repPassRef}
          />
        </div>

        <button className="btn btn--primary" onClick={handleSubmit}>
          Create an account
        </button>
        <div className="form__question">
          <p className="body--m">
            Already have an account?
            <Link className="form__link" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Signup;
