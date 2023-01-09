import React, { Fragment, useState, useEffect } from "react";
import { updatepasswordSchema } from "../schema/updatepasswordSchema";
import { instance } from "../../axiosInstance/AxiosInstance";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "../Travel_Packages/page-header";
import { useHistory } from "react-router-dom";
import NavbarV3 from "../navbar-v4";

const ResetPassword = () => {
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let history = useHistory();
  const tokenRest = useParams().token;

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (Password === "" || confirmPassword === "") {
      toast.error("Password and confirm password fields cannot be empty");
      return;
    }
    if (Password !== confirmPassword) {
      toast.error("Password and confirm password fields do not match");
      return;
    }
    if (Password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (
      !/\d/.test(Password) ||
      !/[a-z]/.test(Password) ||
      !/[A-Z]/.test(Password) ||
      !/[!@#\$%\^&\*]/.test(Password)
    ) {
      toast.error(
        "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character"
      );
      return;
    }

    const Reset = {
      Password,
      confirmPassword,
    };
    instance
      .put(`Register/password/reset/${tokenRest}`, Reset)
      .then((response) => {
        toast.success("Password updated successfully!");
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
      <NavbarV3 />
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
