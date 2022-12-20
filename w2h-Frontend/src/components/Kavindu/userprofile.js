import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import Sub from "./goldpack";
import Pageheader from "../Travel_Packages/page-header";

import "../../Styles/profilepage.css";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      View: [],
    };
  }

  logout() {
    if (window.confirm("You Want To LogOut ")) {
      const dat = localStorage.removeItem("userInfo");

      if (dat == null) {
        alert("log  Out Success ");
        window.location.replace("/");
      }
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const userInfo = localStorage.getItem("userInfo");
    //alert (userInfo);
    if (userInfo == null) {
      alert("You Are Not Authorized User");
      window.location.replace("/register");
    }
    var line = [];

    for (var i = 7, p = 0; i !== 31; i++, p++) {
      line.push(userInfo[i]);
    }
    const mongoid = line.join("");
    const url = "http://localhost:8070/user/Details/";

    axios.get(url + mongoid).then((res) => {
      if (res.data.success) {
        this.setState({
          View: res.data.BackendData,
        });
        // console.log(this.state.View);
      } else console.log("cant");
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Pageheader headertitle="Profile" />

        <div>
          {/* <Sub/> */}
          {/*                
            <div className="body1">
                <div className="info">
            <div style={{marginLeft:300}}> 
                 <button className="button12" onClick={this.logout} >Log out</button>
                 </div>        
              
            
               <form className="form12">
               <h2> {this.state.View.Name}'s profile </h2> 
              <hr/>
               <input className="inputabc" id="Email" type="text" value={this.state.View.Name} />
               <input className="inputabc" id="Name" type="text" value={this.state.View.Email} />
               <input className="inputabc" id="Num" type="text" value={this.state.View.Num} />
               <input className="inputabc" id="Password" type="Password" value={this.state.View.Password} />

              
               <a className="btn btn-danger a123"  href={"edit/" + this.state.View._id}>
                                <i className ="fas fa-edit"></i>&nbsp;Edit My Details
                            </a>
        
                            </form> 
                           
                            </div>
                </div> */}

          {/* <Footer/> */}

          <div className="container-xl px-4 mt-4">
            <nav className="nav nav-borders">
              {/* <a
                className="nav-link active ms-0"
                href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
                target="__blank"
              >
                Profile
              </a> */}
              {/* <a
                className="nav-link"
                href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page"
                target="__blank"
              >
                Billing
              </a>
              <a
                className="nav-link"
                href="https://www.bootdey.com/snippets/view/bs5-profile-security-page"
                target="__blank"
              >
                Security
              </a>
              <a
                className="nav-link"
                href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"
                target="__blank"
              >
                Notifications
              </a> */}
            </nav>
            <hr className="mt-0 mb-4" />
            <div className="row">
              <div className="col-xl-4">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src="http://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />

                    <div className="small font-italic text-muted mb-4">
                      JPG or PNG no larger than 5 MB
                    </div>

                    <button className="btn btn-primary" type="button">
                      Upload new image
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card mb-4">
                  <div className="card-header">Account Details</div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label>
                          Email (how your name will appear to other users on the
                          site)
                        </label>
                        <input
                          className="inputabc"
                          id="Email"
                          type="text"
                          value={this.state.View.Name}
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label>Name</label>
                          <input
                            className="inputabc"
                            id="Name"
                            type="text"
                            value={this.state.View.Email}
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>

                        <div className="col-md-6">
                          <label>Number</label>
                          <input
                            className="inputabc"
                            id="Num"
                            type="text"
                            value={this.state.View.Num}
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label>Password</label>
                          <input
                            className="inputabc"
                            id="Password"
                            type="password"
                            value={this.state.View.Password}
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>

                        {/* <div className="col-md-6">
                                <label className="small mb-1" for="inputLocation">Location</label>
                                <input className="inputabc" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA" />
                            </div> */}
                      </div>

                      {/* <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">Email address</label>
                            <input className="inputabc" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" />
                        </div>
                       
                        <div className="row gx-3 mb-3">
                           
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                <input className="inputabc" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567" />
                            </div>
                          
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputBirthday">Birthday</label>
                                <input className="inputabc" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988" />
                            </div>
                        </div>
                       */}
                      {/* <button className="btn btn-primary" type="button">Save changes</button> */}
                      <a
                        className="btn btn-danger a123"
                        href={"edit/" + this.state.View._id}
                      >
                        <i className="fas fa-edit"></i>&nbsp;Edit My Details
                      </a>
                      <button className="button12" onClick={this.logout}>
                        Log out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
