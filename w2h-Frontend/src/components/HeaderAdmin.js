import { orange } from "@material-ui/core/colors";
import React from "react";
import "../Styles/AdminHeader.css";
let publicUrl = process.env.PUBLIC_URL + "/";
import { Link } from "react-router-dom";
function HeaderAdmin() {
  return (
    <div>
      <div class="sidebar-container sidebar-containeradh" style={{height:"100vh",width:"230px",position:"absolute",lineHeight:"-10"}}>
        <div class="sidebar-logo sidebar-logoadh" style={{background:"white"}}>
        <img src={publicUrl + "assets/img/logo.png"} style={{height:"10.6vh",background:"white"}} alt="Logo" />
        </div>
        <ul class="sidebar-navigation sidebar-navigationadh" style={{position:"absolute",lineHeight:"3.9"}}>
          <center>
            {" "}
            <h2
              class="headerad"
              style={{ fontSize: "17px", color: "black" , paddingTop: "15px" }}
            >
              <b>Way2Heaven</b>
            </h2>
          </center>
          <li>
            {/* <Link to="/adminhome">
              <i class="fa fa-home" aria-hidden="true"></i> Homepage
            </Link> */}
            <Link to="/adminhome">
               {/* <Link> */}
              <i class="fa fa-home" aria-hidden="true"></i> Homepage
            {/* </Link> */}
            </Link>
          </li>
          <li>
            <Link to="/travelpackages/admin">
              <i class="fa fa-car" aria-hidden="true"></i> Travel Package
            </Link>
          </li>
          <li>
            <Link to="/adminhotelpackage">
              <i class="fa fa-hotel" aria-hidden="true"></i> Room Package
            </Link>
          </li>
          <li>
            <Link to="/activities">
              <i class="fa fa-swimmer" aria-hidden="true"></i> Activity
            </Link>
          </li>
          <li>
            <Link to="/guide">
              <i class="fa fa-user" aria-hidden="true"></i> Guide
            </Link>
          </li>
          <li>
            <Link to="/equipment/admin">
              <i class="fa fa-campground" aria-hidden="true"></i> Equipment
            </Link>
          </li>
          <li>
            <Link to="/feedbacks/admin">
              <i class="fa fa-comments" aria-hidden="true"></i> FeedBack
            </Link>
          </li>
          <li>
            <Link to="/adView">
              <i class="fa fa-inbox" aria-hidden="true"></i> Inquiry
            </Link>
          </li>
          <li>
            <Link to="/contactus/admin">
              <i class="fa fa-envelope" aria-hidden="true"></i> Messages
            </Link>
          </li>
          <li>
            <Link to="/get">
              <i class="fa fa-user" aria-hidden="true"></i> User Management
            </Link>
          </li>
          <li>
            <Link to="/payment">
              <i class="fa fa-cc-visa" aria-hidden="true"></i> Payment
            </Link>
          </li>
        </ul>
      </div>
      <div class="main_content">
        <div class="headerh" style={{ height: "111px" }}>
          <div id="hnamed">
            <h1
              style={{
                paddingTop: "20px",
                paddingLeft: "80px",
                color: "orange",
              }}
            >
              {" "}
              Way2Heaven Admin DashBord
            </h1>
          </div>
          {/* <div id="loginah">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "hsl(0,0%,70%,0.9)" }}
            >
              {" "}
              <i class="fas fa-user-alt"></i>{" "}
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default HeaderAdmin;