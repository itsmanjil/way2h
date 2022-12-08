import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyle } from "../Input/FormField";
import SectionTitle from "../SectionTitle";
import { schemaSignUp } from "../../schema/signUpSchema";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { instance } from "../../utils/axiosInstance/AxiosInstance";
import axios from "axios";
import { MdPerson, MdPersonAddAlt1 } from "react-icons/md";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignUp),
  });

  const onSubmit = (data) => {
    console.log("abc");

    instance
      .post("/user/register", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(watch("email")); // watch input value by passing the name of it
  console.log(watch("password")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <FormStyle>
      <SectionTitle>
        Login
        <h5>Welcom!</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="first name">
              Full Name
              <div className="input_wrapper">
                <div className="input_icon">
                  <MdPerson />
                </div>
                <div className="input_text">
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    name="name"
                  />
                </div>
              </div>
              <p>{errors.name?.message}</p>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
              <div className="input_wrapper">
                <div className="input_icon">
                  <AiOutlineMail />
                </div>
                <div className="input_text">
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <p>{errors.email?.message}</p>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              Password
              <div className="input_wrapper">
                <div className="input_icon">
                  <AiFillLock />
                </div>
                <div className="input_text">
                  <input
                    {...register("password")}
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>
              </div>
              <p>{errors.password?.message}</p>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="first name">
              Phone
              <div className="input_wrapper">
                <div className="input_icon">
                  <MdPerson />
                </div>
                <div className="input_text">
                  <input
                    {...register("phone")}
                    type="number"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>
              <p>{errors.phone?.message}</p>
            </label>
          </div>
          <button type="submit">Login</button>
          <div>{/* <Link to={SignIn}>register now</Link> */}</div>
        </form>
      </SectionTitle>
    </FormStyle>
    //
  );
}
