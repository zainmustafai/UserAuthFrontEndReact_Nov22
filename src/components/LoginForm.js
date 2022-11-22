import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="p-4 bg-primary form-div ">
      <div className="login-form-container shadow rounded-lg container bg-warning">
        <div>
          <h1>SIGN IN</h1>
        </div>
        <form className="">
          <input
            type="email"
            className="form-control"
            placeholder="Enter E-mail"
            {...register("emailAddress", { required: true })}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          <button type="submit" className="btn btn-primary btn-lg form-control">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
