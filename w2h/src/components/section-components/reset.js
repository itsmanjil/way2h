import React from "react";
import { ResetSchema } from "../../schema/resetSchema";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { instance } from "../../utils/axiosInstance/AxiosInstance";

const Reset = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ResetSchema),
  });
  let history = useHistory();
  const onSubmitreset = (data) => {
    instance
      .post("password/forgot", data)
      .then(function (response) {
        toast.success("reset Success!");
        history.push({
          pathname: "/",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        toast.success("reset failed!");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitreset)} className="ltn__form-box">
      <input
        {...register("email")}
        type="text"
        name="email"
        placeholder="Type your register email*"
      />
      <div className="btn-wrapper mt-0">
        <button className="theme-btn-1 btn btn-full-width-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Reset;
