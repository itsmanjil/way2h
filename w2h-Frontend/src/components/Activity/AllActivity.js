import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import Pageheader from "../Travel_Packages/page-header";

const Activities = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8070/activities")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  const filterdActivity = posts.filter((post) => {
    return post.aname.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <Header />
      <Pageheader headertitle="Activities" />

      <MainContainer>
        <div className="info">
          <div className="container">
            {/* <input
              id="search-input form1"
              type="search"
              class="form-outline form-control"
              style={{
                width: "400px",
                marginlnlineStart: "14%",
                marginLeft: "990px",
                marginTop: "-50px",
                background: "#BCC6CC",
              }}
              placeholder="Search Activity"
              onChange={(e) => setSearch(e.target.value)}
            /> */}
            <div className="col-lg-12">
              {/* Search Widget */}
              <div className="ltn__search-widget mb-30">
                <form action="#">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search your keyword..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
            </div>

            <Row xs={1} md={3} className="g-4 rounded" id="by">
              {filterdActivity.map((activity) => (
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to={`/travelpackages/travelpackage/${posts._id}`}>
                        <img
                          src={`/uploads/${activity.activityImage}`}
                          alt="#"
                        />
                      </Link>
                      {/* <div className="real-estate-agent">
											<div className="agent-img">
												<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											</div> */}
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        {/* <ul>
                                    <li className="sale-badg">
                                      {posts.packageName}
                                    </li>
                                  </ul> */}
                      </div>
                      <h2 className="product-title go-top">
                        <Link to="/product-details">{activity.aname}</Link>
                      </h2>
                      <div className="product-img-location">
                        <ul>
                          <li className="go-top">{activity.mindescription}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>
                          {activity.price}
                          {/* <label>/perperson</label> */}
                        </span>
                      </div>
                    </div>
                    <div>
                      <Link
                        to={`/view-activity/${activity._id}`}
                        className="btn btn-primary"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
            <hr />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Activities;

//MAIN CONTAINER
const MainContainer = styled.div`
  margin: 7rem 0;
  .card {
    transition: border-color 1s, box-shadow 0.5s;
  }
  .card:hover {
    border-color: rgba(13, 110, 253, 0.7);
    box-shadow: 0px 0px 10px 2px rgba(13, 110, 253, 0.6);
  }
`;

{
  /* <div className="card-group py-3">
                    <div
                      className="card"
                      style={{
                        backgroundImage: "",
                        borderRadius: "15px",
                        width: "20rem",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={`/uploads/${activity.activityImage}`}
                        alt="..."
                        style={{
                          width: "100%",
                          minHeight: "40%",
                          hover: "hoverable",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{activity.aname}</h5>
                        <h6 className="card-title text-muted">
                          {activity.category}
                        </h6>
                        <p className="card-title">{activity.mindescription}</p>
                        <p className="card-text">
                          <i className="fas fa-tag">{activity.price}</i>
                        </p>
                        <Link
                          to={`/view-activity/${activity._id}`}
                          className="btn btn-primary"
                        >
                          View more
                        </Link>
                      </div>
                    </div>
                  </div> */
}
