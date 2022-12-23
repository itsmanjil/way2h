import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

const Activities = () => {
  const [activity, setActivity] = useState([]);
  //DELETE ACTIVITY BY ID
  const deleteActivity = (id) => {
    axios
      .delete(`http://localhost:8070/activities/delete/${id}`)
      .then((res) => alert(res.data));
    setActivity(activity.filter((elem) => elem._id !== id));
  };

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
      <HeaderAdmin />

      <MainContainer>
        <div className="info">
          <div className="container ">
            <input
              id="search-input form1 p-activities "
              type="search"
              class="form-outline form-control"
              style={{
                width: "200px",
                marginlnlineStart: "14%",
                marginLeft: "1190px",
                marginTop: "-70px",
                background: "#ADD8E6",
                position:"absolute"
              }}
              placeholder="Search Activity"
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="row my-10"style={{position:"relative",top:"-65px"}}>
              <div className="col-sm-6"  >
                <Link to="/add-activity" className="btn btn-outline-secondary" style={{left:"440px"}}>
                  <i class="fas fa-plus">&nbsp;Add New Activity</i>
                </Link>
              </div>
              <div className="col-sm-2">
                <Link
                  to="/activity-select"
                  className="btn btn-outline-secondary"
                >
                  Print Select Details
                </Link>
              </div>

              <div className="col-sm-2">
                <Link
                  to="/activity-details"
                  className="btn btn-outline-secondary"
                >
                  Print Activity Details
                </Link>
              </div>
            </div>
          </div>
          <div className="container p-activities" style={{position:"absolute",left:"226px",top:"190px"}}>
            <Row xs={1} md={3} className="g-4 rounded " id="by p-activities">
              {filterdActivity.map((activity) => (
                <Col>
                  <div className="card-group py-5 ">
                    <div className="card" style={{ borderRadius: "15px" }}>
                      <img
                        src={`/uploads/${activity.activityImage}`}
                        alt="..."
                        style={{

                          borderRadius: "10px",
                        }}
                      />

                      <Link
                        to={{
                          pathname: `/activity/${activity._id}`,
                        }}
                      >
                    
                        <h2>{activity.aname}</h2>
                      </Link>
                      <h6>{activity.category}</h6>
                     
                      <p>{activity.mindescription}</p>
                     
                      <p>
                        <i className="fas fa-tag">{activity.price}</i>
                      </p>

                      <div className="row my-1">
                   
                        <div className="col-sm-3" style={{top:"-40px"}}>
                          <Link
                            to={`/update/${activity._id}`}
                            className="btn btn-outline-success" style={{width:"160px",height:"0vh",top:"10px",borderRadius:"20px"}}
                          >
                            <i className="far fa-edit" style={{right:"28px",position:"relative",top:"-10px "}}>
                              &nbsp;&nbsp;Edit Activity
                            </i>
                          </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-2"style={{top:"-40px"}}>
                          <button
                            className="btn btn-outline-danger"style={{width:"160px",height:"0vh",top:"10px",borderRadius:"20px"}}
                          >
                            <i className="far fa-trash-alt"style={{right:"28px",position:"relative",top:"-10px "}}>
                              &nbsp;&nbsp;Delete Activity
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Activities;
//MAIN CONTAINER
const MainContainer = styled.div`
  margin: 7rem 0;
`;
