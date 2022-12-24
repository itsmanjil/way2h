import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import Pageheader from "../Travel_Packages/page-header";

const ViewActivity = (props) => {
  const [aname, setActivityName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8070/activities/${props.match.params.id}`)
      .then((res) => [
        setActivityName(res.data.aname),
        setCategory(res.data.category),
        setDescription(res.data.description),
        setPrice(res.data.price),
        setFileName(res.data.activityImage),
      ])
      .catch((error) => console.log(error));
  }, []);

  //console.log(props);
  return (
    <div>
      <Header />
      <Pageheader headertitle={aname} />

      <ActivityContainer>
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
                      href="/all"
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
                src={`/uploads/${fileName}`}
                alt="..."
              />
              <div class="card-body" style={{ backgroundColor: "#DDE8E8" }}>
                <h5 class="card-title"> {aname}</h5>
                {/* <p class="card-text"> {date} </p> */}
                <p class="card-text">
                  <i class="fas fa-long-arrow-alt-right mr-2"></i>
                  <b> {category} </b>{" "}
                </p>
                <p class="card-text">
                  <i class="fas fa-long-arrow-alt-right mr-2"></i>
                  <b> {description} </b>{" "}
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
                {/* <div class="modal-dialog modal-dialog-centered" role="document">
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
                </div> */}
              </div>

              <div
                className="card-footer"
                style={{ backgroundColor: "#ADADAD" }}
              >
                <ul className="postcard__tagbox" style={{ fontSize: "16px" }}>
                  <li className="tag__item">
                    <i className="fas fa-tag mr-2"></i>Rs.&nbsp;{price}
                  </li>
                  {/* <li className="tag__item">
                    <i className="fas fa-clock mr-2"></i>
                    {noofdays}&nbsp;{noofnights}
                  </li> */}
                  {/* <li className="tag__item play blue">
                    {" "}
                    <i className="fas fa-car mr-2"></i>
                    {vehical}{" "}
                  </li> */}

                  {/* <li style={{ marginLeft: "12%", paddingBottom: "5px" }}>
                    <button
                      style={{ width: "200px" }}
                      type="button"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <b>Give Rating</b>
                    </button>
                  </li> */}

                  <li style={{ marginLeft: "18%", paddingBottom: "5px" }}>
                    <small className="text-muted">
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-danger"
                        style={{ width: "250px", fontSize: "20px" }}
                      >
                        <a
                          href={`/activity-user/${props.match.params.id}`}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            width: "250px",
                            fontSize: "20px",
                          }}
                        >
                          Select Activity
                        </a>
                      </button>
                    </small>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="info">
          <div className="container">
            <div className="row my-5">
              <div className="col-sm-2">
                <Link to="/all" type="submit" className="btn">
                  <i class="fas fa-hand-point-left">&nbsp;&nbsp;Back</i>
                </Link>
              </div>
            </div>
          </div>
          <h2>{aname}</h2>
          <img
            src={`/uploads/${fileName}`}
            alt="..."
            style={{ margin: "0 auto", width: "60%", display: "flex" }}
          />
          <br />
          <br />
          <h5>
            <div className="threeD">{category}</div>
          </h5>
          <br />
          <p>{description}</p>
          <p>
            <i className="fas fa-tag">{price}</i>
          </p>
          <br />
          <div class="grid gap-5 grid-cols-5">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to={`/activity-user/${props.match.params.id}`}
              className="btn"
              style={{ color: "#b6465f", background: "#9bb1ff" }}
            >
              Select Activity
            </Link>
          </div>
        </div> */}
      </ActivityContainer>
      <Footer />
    </div>
  );
};

export default ViewActivity;

//MAIN CONTAINER
const ActivityContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2 {
        text-align: center;
    text-transform: Uppercase;
    margin-bottom: .5em;
    font-family: 'Rubik', sans-serif;
    font-size: 4rem;
    color: #E4E5E6; 
    position: relative;
    background: linear-gradient(to right, #24243e, #141E30, #0f0c29);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    
    h2:before,
    h2:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0; 
    
    h2:before 
    z-index: -1;
    text-shadow: -0.001em -0.001em 1px rgba(255,255,255,.15)}
    
    h2:after 
    z-index: -2;
    text-shadow: 10px 10px 10px rgba(0,0,0,.5), 20px 20px 20px rgba(0,0,0,.4), 30px 30px 30px rgba(0,0,0,.1);
    mix-blend-mode: multiply; }
    }

    .btn {
        background: #a5a5a5;
        border: none;
        &:hover {
            background: #aeb4a9;
        }
    }

    h5 {
        position: relative;
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 700;
        color: #ded6d1;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        perspective: 500px;
    }
    
    h5::before,
    h5::after {
        content: attr(aria-label);
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        text-shadow: 0.01em 0.01em 0.01em rgba(0, 0, 0, 0.3);
    }
    
    h5::before {
        animation: floatAbove 3.5s ease-in-out infinite;
        -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
                clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
    }
    
    h5::after {
        opacity: 0.65;
        filter: blur(0.02em);
        transform: translate(-50%, -50%) rotateX(21deg);
        animation: floatBelow 3.5s ease-in-out infinite;
        -webkit-clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
                clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
    }
    
    @keyframes floatAbove {
        50% {
            transform: translate(-50%, -60%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
                    clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
        }
    }
    
    @keyframes floatBelow {
        50% {
            transform: translate(-50%, -60%) rotateX(10deg);
            -webkit-clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
                    clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
        }

    }
 
`;
