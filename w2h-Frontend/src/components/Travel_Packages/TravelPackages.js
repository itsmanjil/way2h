import React, { Component } from "react";
import axios from "axios";
import { Button, Row } from "react-bootstrap";
import "../../Styles/TravelPackage.css";
import Header from "../Header";
import Footer from "../Footer";
import Reactstars from "react-rating-stars-component";

export default class CardItemsT extends Component {
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
    axios.get("http://localhost:8070/travelpackages").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPackage,
        });
        console.log(this.state.travelpackages);
      }
    });
  }

  filterData(posts, searchkey) {
    const result = posts.filter(
      (post) =>
        post.packageName.toLowerCase().includes(searchkey) ||
        post.packageName.toUpperCase().includes(searchkey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("http://localhost:8070/travelpackages").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPackage, searchkey);
      }
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="infotr bodytravelpackage">
          <div className="bodytravelpackage container" id="bbimg">
            <div>
              <br />
              <div class="row text-center text-lg-start"></div>
              <hr />

              <div
                class="d-flex flex-row align-items-center mb-2"
                style={{
                  backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                  paddingBottom: "5px",
                  paddingTop: "7px",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h1>
                  <b>Our Travel Packages</b>
                </h1>
                <input
                  id="search-input form1"
                  type="search"
                  class="form-outline form-control"
                  style={{ width: "400px", marginInlineStart: "29%" }}
                  placeholder="Search Package"
                  onChange={this.handleSearchArea}
                />
                <button
                  id="search-button"
                  type="button"
                  class="btn btn-primary"
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>

              <hr />
              <Row xs={1} md={2} className="g-4" id="by" class="rounded">
                {this.state.posts.map((posts, idx) => (
                  <div class="container py-1">
                    <article class="postcard postcardtr dark blue">
                      <a class="postcard__img_link">
                        <img
                          class="postcard__img"
                          src={`/uploads/${posts.packageImage}`}
                          alt="..."
                        />
                      </a>
                      <div class="postcard__text">
                        <h1 class="postcard__title blue">
                          <a href="#"> {posts.packageName}</a>
                        </h1>

                        <div class="d-flex">
                          <div class="form-outline mr-4">
                            <time
                              class="postcard__subtitle small smalltr"
                              datetime="2020-05-25 12:00:00"
                            >
                              <i class="fas fa-calendar-alt mr-2"></i>
                              {posts.date}
                            </time>
                          </div>
                          <div class="form-outline ">
                            <Reactstars
                              edit={false}
                              size={20}
                              value={Math.floor(posts.reviewsAvg)}
                            />
                          </div>
                        </div>

                        <div class="postcard__bar"></div>
                        {/* <div class="postcard__preview-txt">
                          {posts.discription}
                        </div> */}
                        <br />
                        {/* {posts.destination} */}

                        <ul class="postcard__tagbox">
                          <li class="tag__item">
                            <i class="fas fa-tag mr-2"></i>PP Rs.&nbsp;
                            <a style={{ color: " hsl(180,100%,50%)" }}>
                              {posts.perperson}
                            </a>
                          </li>
                          <li class="tag__item">
                            <i class="fas fa-clock mr-2"></i>
                            {posts.noofdays}&nbsp;{posts.noofnights}
                          </li>
                          <li class="tag__item play blue">
                            <a style={{ color: "  hsl(60,100%,50%) " }}>
                              <i class="fas fa-car mr-2"></i>
                              {posts.vehical}
                            </a>
                          </li>
                        </ul>

                        <button
                          type="button"
                          class="btn btn-primary abv d-flex"
                          id="cardbtn2"
                        >
                          <a
                            href={`/travelpackages/travelpackage/${posts.id}`}
                            style={{
                              textDecoration: "none",
                              color: "white",
                            }}
                          >
                            View Details &nbsp;
                            <i class="fas fa-hand-point-right"> </i>
                          </a>
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </Row>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
