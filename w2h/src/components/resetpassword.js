import React, { Fragment, useState, useEffect } from "react";
import { updatepasswordSchema } from "../schema/updatepasswordSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { instance } from "../utils/axiosInstance/AxiosInstance";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "./global-components/page-header";
import { useHistory } from "react-router-dom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatepasswordSchema),
  });

  let history = useHistory();
  const tokenRest = useParams().token;

  const resetPasswordSubmit = (data) => {
    instance
      .put(`password/reset/${tokenRest}`, data)
      .then((response) => {
        toast.success("passowrd updated Success!");
        // console.log(response);
        history.push({
          pathname: "/",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <Fragment>
      <PageHeader headertitle="Reset Password" />
      <div className="resetPasswordContainer">
        <div className="resetPasswordBox">
          {/* <h2 className="resetPasswordHeading">Update Password</h2> */}

          <form
            className="resetPasswordForm"
            onSubmit={handleSubmit(resetPasswordSubmit)}
          >
            <div>
              {/* <LockOpenIcon /> */}
              <input
                {...register("password")}
                type="password"
                placeholder="New Password"
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              {/* <LockIcon /> */}
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                required
                // value={confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Update" className="resetPasswordBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
