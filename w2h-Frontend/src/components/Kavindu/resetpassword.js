import React, { Fragment, useState, useEffect } from "react";
import { updatepasswordSchema } from "../schema/updatepasswordSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { instance } from "../../axiosInstance/AxiosInstance";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "../Travel_Packages/page-header";
import { useHistory } from "react-router-dom";

const ResetPassword = () => {
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let history = useHistory();
  const tokenRest = useParams().token;

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const Reset = {
      Password,
      confirmPassword,
    };
    instance
      .put(`Register/password/reset/${tokenRest}`, Reset)
      .then((response) => {
        toast.success("passowrd updated Success!");
        console.log(response);
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

          <form className="resetPasswordForm" onSubmit={resetPasswordSubmit}>
            <div>
              {/* <LockOpenIcon /> */}
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
                type="password"
                placeholder="Confirm Password"
                required
                // value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
