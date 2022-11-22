import React from "react";
import "./SignupForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignupForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = async (data) => {
    if (data.password !== data.confirmPassword) {
      console.log("Passwords Dont Match!");
    } else {
      console.log(data);
      await axios
        .post("http://localhost:8080/api/users", data)
        .then((response) => {
          console.log(response);
          navigate('/login');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="bg-dark p-3 m-auto form-container">
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="form form-group container bg-white p-4 rounded shadow"
      >
        <h2 className="">
          <strong>CREATE AN ACCOUNT</strong>
        </h2>

        <input
          type="text"
          className="form-control"
          defaultValue={""}
          placeholder="First Name"
          {...register(
            "firstName",
            { required: true },
            { minLength: 0 },
            { maxLength: 50 }
          )}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          {...register(
            "lastName",
            { required: true },
            { minLength: 0 },
            { maxLength: 50 }
          )}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
          {...register(
            "emailAddress",
            { required: true },
            { minLength: 5 },
            { maxLength: 50 }
          )}
        />
        {errors.emailaddress && <span>Invalid Email Address</span>}
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          {...register(
            "password",
            { required: true },
            { minLength: 8 },
            { maxLength: 50 }
          )}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Repeat Password"
          {...register(
            "confirmPassword",
            { required: true },
            { minLength: 8 },
            { maxLength: 50 }
          )}
        />
        <button type="submit" className="btn btn-secondary sm:btn-lg ">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
