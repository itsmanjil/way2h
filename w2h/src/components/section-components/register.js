import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
const axios = require("axios");
import { instance } from "../../utils/axiosInstance/AxiosInstance";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignUp } from "../../schema/signUpSchema";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignUp),
  });

  let history = useHistory();

  const onSubmit = (data) => {
    instance
      .post("register", data)
      .then(function (response) {
        history.push({
          pathname: "/shop",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(watch("email")); // watch input value by passing the name of it
  console.log(watch("password")); // watch input value by passing the name of it
  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">
                Register <br />
                Your Account
              </h1>
              {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Sit aliquid, Non distinctio vel iste.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="ltn__form-box contact-form-box"
              >
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  {...register("name")}
                  name="name"
                />
                <p>{errors.name?.message}</p>

                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
                <p>{errors.email?.message}</p>

                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                />
                <p>{errors.password?.message}</p>
                {/* <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password*"
                /> */}
                {/* <label className="checkbox-inline">
				<input type="checkbox" defaultValue />
				&nbsp; I consent to Herboil processing my personal data in
				order to send personalized marketing material in accordance
				with the consent form and the privacy policy.
			  </label> */}
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue /> &nbsp; By clicking
                  "create account", I consent to the privacy policy.
                </label>
                <div className="btn-wrapper">
                  <button
                    className="theme-btn-1 btn reverse-color btn-block"
                    type="submit"
                    //   disabled={
                    // 	this.state.username == "" && this.state.password == ""
                    //   }
                    //   onClick={this.register}
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </form>
              <div className="by-agree text-center">
                {/* <p>By creating an account, you agree to our:</p>
                <p>
                  <a href="#">
                    TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                    POLICY
                  </a>
                </p> */}
                <div className="go-to-btn mt-50 go-top">
                  <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
