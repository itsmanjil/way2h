import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../../src/Form.css";
import axios from "axios";
import { configure } from "@testing-library/react";
import Header from "../Header";
import Footer from "../Footer";
import { toast } from "react-toastify";
import { ElseIf } from "react-if-elseif-else-render";
import NavbarV3 from "../navbar-v4";
// eslint-disable-next-line no-empty-pattern
export default function RegisterUser({}) {
  const history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Num, setNum] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/profile");
    }
  }, [history]);
  function sendData(e) {
    e.preventDefault();
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

    if (Name === "" || Name === null || !isNaN(Name)) {
      alert("Name Required. Please enter a valid name.");
      return false;
    } else if (Email === "" || Email.includes("@" && ".com") === false) {
      alert("Enter Valid email Address");
      return false;
    } else if (Password === "" || Password == null || Password.length < 8) {
      alert("password Required");
      return false;
    } else if (Num === "" || Num == null || Num.length <= 9) {
      alert("Number Required");
      return false;
    } else if (Password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return false;
    }

    const NewReg = {
      Name,
      Email,
      Password,
      Num,
      confirmPassword,
      reward: 0,
    };
    console.log(NewReg);
    axios
      .post("http://localhost:8070/Register/add", NewReg)
      .then(() => {
        toast.success("Register Success!");
        history.push({
          pathname: "/",
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
  const getData = async (e) => {
    e.preventDefault();
    const email = document.getElementById("logemail").value;
    const pass = document.getElementById("logpass");
    if (email === "" || email.includes("@" && ".com") === false) {
      alert("Enter Valid email Address");
      return false;
    } else if (pass.value === "" || pass.value == null) {
      alert("pass Required");
      return false;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoding(true);
      const { data } = await axios.post(
        "http://localhost:8070/Register/login",
        {
          Email,
          Password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("Login Success!");
      history.push({
        pathname: "/profile",
      });
      setLoding(false);
      console.log("err");
    } catch (error) {
      toast.error("login error!");
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <NavbarV3 />{" "}
      <div className="body1 ">
        <div className="info">
          <div className="container containerabc" id="container">
            <div
              className="form-container form-containerabc sign-up-container sign-up-containerabc"
              style={{ height: "400px" }}
            >
              <form
                onSubmit={sendData}
                className="form12"
                style={{ position: "relative", lineHeight: -10 }}
              >
                <h1 className="h111">Create Account</h1>
                <input
                  className="inputabc"
                  type="text"
                  placeholder="Name"
                  id="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <input
                  className="inputabc"
                  type="email"
                  placeholder="Email"
                  id="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <input
                  className="inputabc"
                  type="number"
                  placeholder="Mobile"
                  id="Number"
                  onChange={(e) => {
                    setNum(e.target.value);
                  }}
                  required
                />
                <input
                  className="inputabc"
                  type="password"
                  placeholder="Password"
                  id="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <input
                  className="inputabc"
                  type="password"
                  placeholder="Confirm Password"
                  id="Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
                <button className="button12 " type="submit">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="form-container form-containerabc sign-in-container sign-in-containerabc">
              <form onSubmit={getData} className="form12">
                <h1 className="h111">Sign in</h1>
                <input
                  className="inputabc"
                  type="text"
                  placeholder="Email"
                  id="logemail"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  className="inputabc"
                  type="password"
                  placeholder="Password"
                  id="logpass"
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <a href="/forget" className="a123">
                  Forgot your password?
                </a>
                <button className="button123">Sign In</button>
              </form>
            </div>
            <div className="overlay-container overlay-containerabc">
              <div className="overlay overlayabc">
                <div className="overlay-panel overlay-panelabc overlay-left overlay-leftabc">
                  <h1 className="h111">Welcome Back!</h1>
                  <p className="p123">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="button12 ghost "
                    id="signIn"
                    onClick={window["log"]}
                  >
                    Sign In
                  </button>
                </div>
                <div
                  className="overlay-panel overlay-panelabc overlay-right overlay-rightabc"
                  style={{ color: "red" }}
                >
                  <h1 className="h111">Hello, Friend!</h1>
                  <p className="p123">
                    Enter your personal details and start journey with us
                  </p>
                  <button
                    className="button12 ghost "
                    id="signUp"
                    onClick={window["reg"]}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
