import React from "react";
import "../../Styles/AboutUS.css";
import "../../Form.css";
import Header from "../Header";
import Footer from "../Footer";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="info" style={{ background: "hsl(0,0%,50%,0.2)	" }}>
        <br />
        <div
          class="container-fluid mx-auto mt-5 mb-5 col-12"
          style={{ textAlign: "center" }}
        >
          <div class="hd" style={{fontSize:"20px",fontWeight:"bold",fontFamily:"cursive"}}>Way2Heaven</div>
          <p>
            <small class="text-muted">
              Always render more and better service than <br />
              is expected of you, no matter what your ask may be.
            </small>
          </p>
          <div class="row" style={{ justifyContent: "center" }}>
            <div class="card col-md-3 col-12">
              <div class="card-content">
                <div class="card-body">
                  {" "}
                  <img
                    class="img"
                    src="https://toppng.com/uploads/preview/travel-icons-travel-icon-free-1155345307059cfuzjxyz.png"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div class="shadow"></div>
                  <div class="card-title"> Book Travel Packages </div>
                  <div class="card-subtitle">
                    <p>
                      {" "}
                      <small class="text-muted">
                        {" "}
                        We are passionate about travel and providing corporate
                        travellers high-touch services to facilitate their
                        travel needs and sharing the world's wonders best
                        experience on the leisure travel side. On behalf of that
                        we offer valuable and time reliable offers for the best
                        prices for our customers
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card col-md-3 col-12 ml-2">
              <div class="card-content">
                <div class="card-body">
                  {" "}
                  <img class="img" src="https://i.imgur.com/xUWJuHB.png" />
                  <div class="card-title"> Book Room Packages</div>
                  <div class="card-subtitle">
                    <p>
                      {" "}
                      <small class="text-muted">
                        {" "}
                        We are passionate about travel and providing corporate
                        travellers high-touch services to facilitate their
                        travel needs and sharing the world's wonders best
                        experience on the leisure travel side. On behalf of that
                        we offer valuable and time reliable offers for the best
                        prices for our customers
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card col-md-3 col-12 ml-2">
              <div class="card-content">
                <div class="card-body">
                  {" "}
                  <img
                    class="img rck"
                    src="https://toppng.com/uploads/preview/travel-icons-travel-icon-free-1155345307059cfuzjxyz.png"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div class="card-title"> Select Activity </div>
                  <div class="card-subtitle">
                    <p>
                      {" "}
                      <small class="text-muted">
                        {" "}
                        We are passionate about travel and providing corporate
                        travellers high-touch services to facilitate their
                        travel needs and sharing the world's wonders best
                        experience on the leisure travel side. On behalf of that
                        we offer valuable and time reliable offers for the best
                        prices for our customers
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <br /> <br />
          <div class="ft">
            {/* <p class="chk">
              <small class="text-muted">Still not sure?</small>
            </p> */}
            <div class="btn btn-primary servicetext">
              <a href="/travelpackages">Travel Packages</a>
            </div>{" "}
            &nbsp;&nbsp;
            <div class="btn btn-primary servicetext">
              {" "}
              <a href="/hotelpackage">Room Packages</a>
            </div>
            &nbsp;&nbsp;
            <div class="btn btn-primary servicetext">
              {" "}
              <a href="/all">Select Activity</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
