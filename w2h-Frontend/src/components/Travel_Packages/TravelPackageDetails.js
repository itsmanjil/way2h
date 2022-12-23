import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer";
import AddRating from "./PackageAddRating";
import Header from "../Header";
import Pageheader from "./page-header";
// import "../../assets/css/style.css";
import NavbarV3 from "../navbar-v4";

export default class PackageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:8070/travelpackages/admin/${id}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            post: res.data.post,
          });
        }
      });
  }

  post_comment() {
    const id = post.id;
    console.log(id);
    const userInfo = localStorage.getItem("userInfo");
    console.log(Json.parse(userInfo).id);
    const UserId = "sdfghjk345678";
    const comment = "Avishek khadka";
    // const data = {
    //   UserId,
    //   packageId,
    //   comment
    // }
    // console.log(data)
    // axios
    // .post(`http://localhost:8070/comment`, data)
    // .then(() => {
    //   alert("success");
    // })
    // .catch((err) => {
    //   alert(err);
    // });
  }

  render() {
    // const userInfo = localStorage.getItem('userInfo');
    // const user = JSON.parse(userInfo)
    // console.log(user.id)
    let publicUrl = process.env.PUBLIC_URL + "/";
    const {
      _id,
      packageName,
      destination,
      discription,
      date,
      noofdays,
      noofnights,
      vehical,
      perperson,
      packageImage,
    } = this.state.post;

    return (
      <>
        <div>
          {/* <Header /> */}
          {/* <NavbarV3 /> */}

          <Pageheader headertitle={packageName} />
          <div className="infotr boodydetails">
            <div className="container">
              <div className={{ paddingBottom: "10px" }}>
                <hr />
              </div>
              <ul
                class="postcard__tagbox"
                style={{ fontSize: "16px", marginTop: "40px" }}
              >
                <li>
                  <small class="text-muted" style={{ marginInlineStart: "2%" }}>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{ width: "100px" }}
                    >
                      <a
                        href="/travelpackages"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <i class="fas fa-angle-left mr-2"></i>Back
                      </a>
                    </button>
                  </small>{" "}
                </li>
                <div style={{ marginInlineStart: "59%" }}>
                  <li class="tag__item">
                    <i class="fab fa-cc-visa mr-2"></i>Visa Payment
                  </li>
                  <li class="tag__item">
                    <i class="fas fa-paper-plane mr-2"></i>Full Option
                  </li>
                  <li class="tag__item play blue">
                    {" "}
                    <i class="fas fa-hands mr-2"></i>Security{" "}
                  </li>
                </div>
              </ul>
              <hr />
              <br />

              <div class="card">
                <img
                  style={{ height: "580px" }}
                  class="card-img-top"
                  src={`/uploads/${packageImage}`}
                  alt="..."
                />
                <div class="card-body" style={{ backgroundColor: "#DDE8E8" }}>
                  <h5 class="card-title"> {packageName}</h5>
                  <p class="card-text"> {date} </p>
                  <p class="card-text">
                    <i class="fas fa-long-arrow-alt-right mr-2"></i>
                    <b> {destination} </b>{" "}
                  </p>
                  <p class="card-text">
                    <i class="fas fa-long-arrow-alt-right mr-2"></i>
                    <b> {discription} </b>{" "}
                  </p>
                </div>

                <div
                  class="modal custom-fade"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div
                      class="modal-content"
                      style={{
                        width: "400px",
                        height: "200px",
                        alignContent: "center",
                      }}
                    >
                      <div>
                        <AddRating id={_id} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card-footer"
                  style={{ backgroundColor: "#ADADAD" }}
                >
                  <ul className="postcard__tagbox" style={{ fontSize: "16px" }}>
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>PP Rs.&nbsp;{perperson}
                    </li>
                    <li className="tag__item">
                      <i className="fas fa-clock mr-2"></i>
                      {noofdays}&nbsp;{noofnights}
                    </li>
                    <li className="tag__item play blue">
                      {" "}
                      <i className="fas fa-car mr-2"></i>
                      {vehical}{" "}
                    </li>

                    <li style={{ marginLeft: "12%", paddingBottom: "5px" }}>
                      <button
                        style={{ width: "200px" }}
                        type="button"
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        <b>Give Rating</b>
                      </button>
                    </li>

                    <li style={{ marginLeft: "18%", paddingBottom: "5px" }}>
                      <small className="text-muted">
                        {" "}
                        <button
                          type="submit"
                          className="btn btn-danger"
                          style={{ width: "250px", fontSize: "20px" }}
                        >
                          <a
                            href={`/bookingpackage/${_id}`}
                            style={{
                              textDecoration: "none",
                              color: "white",
                              width: "250px",
                              fontSize: "20px",
                            }}
                          >
                            Book Package
                          </a>
                        </button>
                      </small>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <Footer />
      </>
      // </div>
    );
  }
}
