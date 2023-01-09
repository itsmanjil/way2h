import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

function AddActivity() {
  let history = useHistory();
  const [aname, setActivityName] = useState("");
  const [category, setCategory] = useState("");
  const [mindescription, setMindescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("aname", aname);
    formData.append("category", category);
    formData.append("mindescription", mindescription);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("activityImage", fileName);

    setActivityName("");
    setCategory("");
    setMindescription("");
    setDescription("");
    setPrice("");

    axios
      .post(`http://localhost:8070/activities/add/`, formData)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });

    history.push("/activities");
    alert(" Activity Added Successful");
  };

  return (
    <div>
      <div
        className="background"
        style={{
          background:
            "url(https://previews.123rf.com/images/wstockstudio/wstockstudio1707/wstockstudio170700176/82195391-accessories-for-travel-top-view-on-white-wooden-background-with-copy-space-adventure-and-wanderlust-.jpg)",
            height:"100%",
            left:"2px"
        }}
      >
        <HeaderAdmin />
        <AddActivityContainer>
          <div className="info" style={{left:"500px",position:"absolute",top:"-140px"}}>
            <div
              className="container"
              style={{
                background: "#C9C0BB",
                position:"absolute",
                top:"110px",
                width:"750px",
                height:"90vh"
              }}
            >
              &nbsp;&nbsp;
              <h1>Add New Activity </h1>
              <span className="message">{message}</span>
              <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group"style={{position:"relative",top:"-23px"}}>
                  <label htmlFor="aname">Activity Name</label>
                  <input
                    type="text"
                    value={aname}
                    onChange={(e) => setActivityName(e.target.value)}
                    className="form-control"
                    placeholder="Activity Name"
                    style={{position:"relative",top:"-10px",height:"6vh"}}
                  />
                </div>

                <div className="form-group"style={{position:"relative",top:"-53px"}}>
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control"
                    placeholder="Category"
                    style={{position:"relative",top:"-10px",height:"6vh"}}
                  />
                </div>

                <div className="form-group"style={{position:"relative",top:"-73px"}}>
                  <label htmlFor="mindescription">Min Description</label>
                  <textarea
                    value={mindescription}
                    onChange={(e) => setMindescription(e.target.value)}
                    className="form-control"
                    rows="3"
                    style={{position:"relative",top:"-10px",height:"6vh"}}
                  ></textarea>
                </div>

                <div className="form-group"style={{position:"relative",top:"-83px"}}>
                  <label htmlFor="description">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    rows="5"
                    style={{position:"relative",top:"-10px",height:"6vh"}}
                  ></textarea>
                </div>

                <div className="form-group"style={{position:"relative",top:"-93px"}}>
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    placeholder="Price"
                    style={{position:"relative",top:"-10px",height:"6vh"}}
                  />
                </div>

                <div className="form-group"style={{position:"relative",top:"-118px"}}>
                  <label htmlFor="file">Choose activity image</label>
                  <input
                    type="file"
                    filename="activityImage"
                    className="form-control-file"
                    onChange={onChangeFile}
                  />
                </div>

                <div className="row">
                  <div className="flex-parent jc-center">
                    <button type="submit" className="btn btn-primary"style={{position:"relative",top:"-153px"}}>
                      Post Activity
                    </button>
                  </div>
                  <div
                    className="flex-parent jc-center"
                    style={{position:"relative",top:"-173px",align: "center" }}
                  >
                    <Link
                      to="/activities"
                      type="submit"
                      className="btn btn-light"
                    >
                      Back to Activity
                    </Link>
                  </div>
                  &nbsp;&nbsp;
                </div>
              </form>
            </div>
          </div>
        </AddActivityContainer>
      </div>
    </div>
  );
}

export default AddActivity;

//MAIN CONTAINER
const AddActivityContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  padding-left: 1000rem;
  width: 75.25rem;
  margin: 3rem auto;
  padding: 4rem;
  h1 {
    font-weight: 900;
    color: #0b2545;
    text-align: center;
  }

  .btn-primary {
    margin-top: 2rem;
    background: #aeb4a9;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #9a8f97;
      justify-content: center;
    }
  }

  .btn-light {
    margin-top: 2rem;
    background: #7f7f7f;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #595959;
      justify-content: center;
    }
  }

  .message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
  }
`;
