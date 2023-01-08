import React from "react";
import Display from "./adminProfileView";
import Header from "../Header";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function Admin() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const adminuser = document.getElementById("user1").value;
    const adminpass = document.getElementById("pass1").value;

    if (userHasRole("admin")) {
      if (adminuser === "admin" && adminpass === "admin") {
        toast.success("Login Successfull");
        history.push("/adminhome");
      } else {
        toast.error("Login Failed");
        // alert("login failed");
      }
    } else {
      toast.error("You do not have permission to log in as an admin");
    }
  };

  return (
    <div className="body1">
      <div className="info">
        <form className="form12" onSubmit={handleSubmit}>
          <br />
          <h2 className="h222">System admin Login</h2>

          <input
            className="inputabc"
            type="text"
            placeholder="Username"
            id="user1"
          />
          <input
            className="inputabc"
            type="password"
            placeholder="Password"
            id="pass1"
          />
          <button className="btn btn-danger a123" type="submit">
            <i className="fas fa-login"></i>&nbsp;Login
          </button>
        </form>
      </div>
    </div>
  );
}

function userHasRole(role) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo && userInfo.role === role) {
    return true;
  }
  return false;
}
