import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.scss";

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const navigate = () => {
    console.log("History");

    history.push("/home");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-sm-7 col-xs-12">
          <div className="full-page-height centered-flex">
            <div className="login-box center-text">
              <form onSubmit={handleSubmit}>
                <div className="app-form-row">
                  <span className="login-header">Please enter your login credentials</span>
                </div>
                <div className="app-form-row">
                  <input type="text" name="emailAddress" placeholder="Enter your email address" className="login-input full-width" ref={register({ required: true })} />
                  {errors.emailAddress && "Please enter your email address"}
                </div>
                <div className="app-form-row">
                  <input type="password" placeholder="Enter your password" className="login-input full-width" />
                </div>
                <div className="app-form-row right-text">
                  <span className="subtitle">
                    Forgot your password{" "}
                    <Link to="/forgot-password">
                      <span className="bold">Click here</span>
                    </Link>
                  </span>
                </div>
                <div className="app-form-row">
                  <button className="app-button full-width text-white bg-dark-green uppercase" onClick={navigate}>
                    Login
                  </button>
                </div>
                <div className="app-form-row">
                  <span className="subtitle">
                    New user?{" "}
                    <Link to="/sign-up">
                      <span className="bold">Click here</span>
                    </Link>{" "}
                    to create an account
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-5 col-xs-12 full-page-height login-img-bg"></div>
      </div>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div className="full-page-height centered-flex">
      <div className="login-box center-text">
        <div className="app-form-row">
          <span className="login-header">Please enter your details to create your account</span>
        </div>
        <div className="app-form-row">
          <input type="text" placeholder="Enter your email address" className="login-input full-width" />
        </div>
        <div className="app-form-row">
          <input type="password" placeholder="Enter your password" className="login-input full-width" />
        </div>

        <div className="app-form-row">
          <button className="app-button full-width text-white bg-dark-green uppercase">Enroll</button>
        </div>

        <div className="app-form-row">
          <span className="subtitle">
            New user?{" "}
            <Link to="/sign-up">
              <span className="bold">Click here</span>
            </Link>{" "}
            to create an account
          </span>
        </div>
      </div>
    </div>
  );
};

export const ForgotPassword = () => {
  return (
    <div className="full-page-height centered-flex bg-forgot-password">
      <div className="container-forgot">
        <div className="login-box center-text">
          <div className="app-form-row">
            <span className="login-header">Please enter your email address</span>
          </div>
          <div className="app-form-row">
            <input type="text" placeholder="Enter your email address" className="login-input full-width" />
          </div>

          <div className="app-form-row">
            <button className="app-button full-width text-white bg-dark-green uppercase">Recover account</button>
          </div>
          <div className="app-form-row">
            <span className="subtitle">
              Don't need this now?{" "}
              <Link to="/">
                <span className="bold">Click here</span>
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SetPassword = () => {
  return (
    <div className="full-page-height centered-flex">
      <div className="login-box center-text">
        <div className="app-form-row">
          <span className="login-header">Please enter your login credentials to activate your account</span>
        </div>

        <div className="app-form-row">
          <input type="password" placeholder="Enter your password" className="login-input full-width" />
        </div>
        <div className="app-form-row">
          <input type="password" placeholder="Confirm your password" className="login-input full-width" />
        </div>
        <div className="app-form-row">
          <button className="app-button full-width text-white bg-dark-green uppercase">Activate account</button>
        </div>
        <div className="app-form-row">
          <span className="subtitle">
            New now?{" "}
            <Link to="/">
              <span className="bold">Click here</span>
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
