import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const navigate = () => {
    history.push("/dashboard");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-xs-12">
          <div className="full-page-height centered-flex">
            <div className="login-box center-text">
              <div className="app-form-row">
                <span className="login-header">Please enter your login credentials</span>
              </div>
              <div className="app-form-row">
                <input type="text" placeholder="Enter your email address" className="login-input full-width" />
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
                <button className="app-button full-width text-white bg-dark-green uppercase">Login</button>
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
        </div>
        <div className="col-lg-5 col-xs-12 full-page-height login-img-bg"></div>
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
    <div className="full-page-height centered-flex">
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
