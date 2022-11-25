import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import bsdk from "./images/bsdk.jpg";
import './LoginForm.css';

const LoginForm = () => {
  const [baba, setBaba] = useState(false);
  const [tryCount, setTryCount] = useState(4);
  const [wrongPass, setWrongPass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    axios.get("http://localhost:8080/api/users").then((res) => {
      const user = res.data.find((user) => {
        if (
          user.emailAddress === data.emailAddress &&
          user.password === data.password
        ) {
          console.log(user);
          setWrongPass(false);
          return user;
        } else {
          setWrongPass(true);
          tryCount > 0 ? setTryCount(tryCount - 1) : setBaba(true);
        }
      }); // find();
    }); //.get();
  };

  return (
    <div className="p-4 bg-primary form-div ">
      <div className="login-form-container shadow rounded-lg container bg-warning">
        <div>
          <h1>SIGN IN</h1>
        </div>
        <form className="" onSubmit={handleSubmit(submitHandler)}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter E-mail"
            {...register("emailAddress", { required: true })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          {wrongPass && !baba && (
            <p className="warningP shake-horizontal">
              Wrong Password <strong>{tryCount} tries Left</strong>
            </p>
          )}
          {baba ? (
            <div className="p-2   ">
              <img src={bsdk} alt="baba g" className="baba scale-up-center shadow-lg" />
            </div>
          ) : (
            <></>
          )}
          {
            !baba && <button type="submit" className="btn btn-primary btn-lg form-control">
            SIGN IN
          </button>
          }
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
