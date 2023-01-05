import React, { Component } from "react";
import axios from "axios";
import "../../Styles/HotelRoomStyle.css";
import HeaderAdmin from "../HeaderAdmin";
import { Row } from "react-bootstrap";
export default class AdminHotelBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.retrievePosts();
  }
  retrievePosts() {
    axios.get("http://localhost:8070/hotelpackage/").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPackage,
        });
        console.log(this.state.hotelpackage);
      }
    });
  }
  onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you Sure you want to delete this item?")) {
      axios
        .delete(`http://localhost:8070/hotelpackage/delete/${id}`)
        .then((res) => {
          alert("Delete Successfully");
          this.retrievePosts();
        });
    }
  };
  render() {
    return (
      <div>
        <HeaderAdmin />
        <br></br>
        <br></br>
        <div className="infoadmin" style={{ position: "absolute", left: "30px" }}>
          <div classname="addbttn">
            <button className="btn btn-success" style={{ position: "relative", height: "7vh" }}>
              <a
                href="/adminaddhotelpackage"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i classname="fas fa-plus mr-1"></i>Add New Package
              </a>
            </button>
            &nbsp;
            <button className="btn btn-warning" style={{ position: "relative", height: "7vh" }}>
              <a
                href="/adminhotelbooking"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i classname="fas fa-book mr-2"></i>Hotel Booking
              </a>
            </button>
          </div>
          <br></br>
          <br></br>
          <Row xs={1} md={3} className="g-1 " id="by" class="rounded" style={{ position: "relative", right: "180px", marginLeft: "90px" }} >
            {this.state.posts.map((posts, index) => (
              <section classname="ad" >
                <figure classname="adcard" style={{ border: '3px solid black' }}>
                  <div classname="ad_card">
                    <img
                      classname="card_img" style={{ position: "relative", width: "590px", height: "30vh", display: "flex" }}
                      src={`/uploads/${posts.packageImage}`}
                    />
                  </div>
                  <div classname="ad_content">
                    <div classname="card_info">
                      <h4
                        classname="cardtopic"
                        style={{ fontFamily: "Calibri", fontSize: "28px" }}
                      >
                        {posts.roomType}
                      </h4>
                      <p classname="cardprice">Per Day: Rs {posts.price}</p>
                      <p classname="cardmax">max Person: {posts.maxCapacity}</p>
                    </div>
                    <div classname="cd_bttn">
                      <button classname="btn btn-dark">
                        <a
                          href={`/adminhotelpackagedetails/${posts._id}`}
                          style={{
                            textDecoration: "none", color: "red", display: "inline-block", borderRadius: "4px"
                            , backgroundColor: " #f4511e", border: "none",
                            color: "#FFFFFF",
                            textAlign: "center",
                            fontSize: "28px",
                            Padding: "20px",
                            width: "100px",
                            transition: "all 0.5s",
                            cursor: "pointer",
                            margin: "5px",
                          }}
                        >
                          Details
                        </a>
                      </button>
                    </div>
                  </div>
                </figure>
              </section>

            ))}{" "}
          </Row>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div >


    );
  }
}