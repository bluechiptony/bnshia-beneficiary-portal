import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();
  const navigate = () => {
    history.push("/dashboard");
  };

  return (
    <div className="full-page-height centered-flex">
      <h1>Login component</h1>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div>
      <h1>Sign up component</h1>
    </div>
  );
};

export const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot password component</h1>
    </div>
  );
};

export const SetPassword = () => {
  return (
    <div>
      <h1>Activate account</h1>
    </div>
  );
};
