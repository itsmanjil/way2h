import React from "react";
import "../Styles/HeaderFooter.css";
import img1 from "../Images/logoo.png";

function Header() {
  return (
    <div class="wrapper">
      <div class="main_content">
        <header class="fixed-top">
          <div class="header">
            <div>
              <div id="logott">
                <img src={img1} style={{ width: "200px", height: "100px" }} />
              </div>
              <div id="hname">
                <h1>
                  <b> Dream Travelers</b>
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
                  <i class="fas fa-user-alt"></i>{" "}
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

              <li class="menupp">
                <a class="actively" href="/aboutus">
                  About Us
                </a>
              </li>
              <li class="menupp">
                <a href="/services">Services</a>
              </li>
              <li class="menupp">
                <a href="/contactus">Contact Us</a>
              </li>
              <li class="menupp">
                <a href="/gallery">Gallery</a>{" "}
              </li>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
