import React from "react";
// import "../Styles/HeaderFooter.css";
// import "../Styles/css/traveldetail.css";
// import img1 from "../Images/logo.png";
import NavbarV3 from "./navbar-v4";

function Header() {
  // const userInfo=localStorage.getItem('userInfo');
  // if(userInfo==null){
  //    alert("You are not Authorized User. Please sign in first.")
  //  window.location.replace("/register")}
  return (
    <div class="wrapper">
      <div class="main_content">
        {/* <header class="fixed-top">
          <div class="header">
            <div>
              <div id="logott">
                <img src={img1} style={{ width: "200px", height: "100px" }} />
              </div>
              <div id="hname">
                <h1>
                  <b> Way2Heaven</b>
                </h1>
              </div>

              <div id="dateandtime">
                <p>
                  {" "}
                  {new Date().getFullYear()} : {new Date().getMonth()} :{" "}
                  {new Date().getDate()} - {new Date().toLocaleTimeString()}
                </p>
              </div>

              <div id="login">
                <a
                  href="/register"
                  style={{
                    textDecoration: "none",
                    color: "rgb(218, 213, 213)",
                  }}
                >
                  {" "}
                  <i className="fas fa-user-alt"></i>{" "}
                </a>
              </div>
            </div>

            <div className="menupp" style={{ width: "100%" }}>
              <li className="menupp">
                <a></a>
              </li>

              <li className="menupp mr-0">
                <a></a>
              </li>

              <li className="menupp">
                <a className="actively" href="/aboutus">
                  About Us
                </a>
              </li>
              <li className="menupp">
                <a href="/services">Services</a>
              </li>
              <li className="menupp">
                <a href="/contactus">Contact Us</a>
              </li>
              <li className="menupp">
                <a href="/gallery">Gallery</a>{" "}
              </li>
            </div>
          </div>
        </header>
        {/* <header className="fixed-top">
          <NavbarV3 />
        </header> */}
        {/* <header class="fixed-top"> */}

        <NavbarV3 />
        {/* </header> */}
      </div>
      //{" "}
    </div>
  );
}

export default Header;
