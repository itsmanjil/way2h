import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderAdmin from "../HeaderAdmin";
import axios from "axios";

const EditActivity = (props) => {
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
    setFileName("");

    axios
      .put(
        `http://localhost:8070/activities/update/${props.match.params.id}`,
        formData
      )
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8070/activities/${props.match.params.id}`)
      .then((res) => [
        setActivityName(res.data.aname),
        setCategory(res.data.category),
        setMindescription(res.data.mindescription),
        setDescription(res.data.description),
        setPrice(res.data.price),
        setFileName(res.data.articleImage),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div >
      <div
        className="background"
        style={{
          background:
            "url(https://previews.123rf.com/images/wstockstudio/wstockstudio1707/wstockstudio170700176/82195391-accessories-for-travel-top-view-on-white-wooden-background-with-copy-space-adventure-and-wanderlust-.jpg)",
            left: "10px",
            width:"100%",
            height:"100vh"
        }}
      >
        <HeaderAdmin />
        <AddActivityContainer>
<<<<<<< Updated upstream
          <div className="info" style={{position:"relative",left:"70px",top:"-230px",lineHeight:"0.5"}}>
            <div className="container" style={{ background: "#78866B" }}>
=======
          <div
            className="info"
            style={{
              position: "relative",
              left: "170px",
              top: "-230px",
              lineHeight: "0.5",
            }}
          >
            <div className="container" style={{ background: "grey",width:"800px",right:"60px",position:"relative",height:"80vh" }}>
>>>>>>> Stashed changes
              &nbsp;&nbsp;
              <h1>Update Activity </h1>
              <span className="message">{message}</span>
              <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="aname">Activity Name</label>
                  <input
                    type="text"
                    value={aname}
                    onChange={(e) => setActivityName(e.target.value)}
                    className="form-control"
                    placeholder="Activity Name"
                    style={{height:"4vh"}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
<<<<<<< Updated upstream
                    className="form-control"
                    placeholder="Category"
                  />
=======
                    required
                    style={{
                      position: "relative",
                      top: "-35px",
                      height: "6vh",
                    }}
                  >
                    <option>Select</option>
                    <option>Sport</option>
                    <option>Adventure</option>
                    <option>Relaxation</option>
                    <option>Nightlife</option>
                    <option>Beach</option>
                    <option>Cultural</option>
                    <option>Landmarks</option>
                  </select>
>>>>>>> Stashed changes
                </div>
                <div className="form-group">
                  <label htmlFor="mindescription" style={{
                      position: "relative",
                      top: "-35px",
                      height: "6vh",
                    }}>Min Description</label>
                  <textarea
                    value={mindescription}
                    onChange={(e) => setMindescription(e.target.value)}
                    className="form-control"
                    rows="3"
                    style={{
                      position: "relative",
                      top: "-70px",
                      height: "6vh",
                    }}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="description"style={{
                      position: "relative",
                      top: "-70px",
                      height: "6vh",
                    }}>Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    rows="5"
                    style={{
                      position: "relative",
                      top: "-100px",
                      height: "6vh",
                    }}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="price"style={{
                      position: "relative",
                      top: "-104px",
                      height: "6vh",
                    }}>Price</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    placeholder="Price"
                    style={{
                      position: "relative",
                      top: "-134px",
                      height: "6vh",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="file"style={{
                      position: "relative",
                      top: "-134px",
                      height: "6vh",
                    }}>Choose activity image</label>
                  <input
                    type="file"
                    filename="activityImage"
                    className="form-control-file"
                    onChange={onChangeFile}
                    style={{
                      position: "relative",
                      top: "-174px",
                      height: "6vh",
                      right:"10px"
                    }}
                  />
                </div>
                <div className="flex-parent jc-center">
                  <button type="submit" className="btnbb"  style={{
                      position: "relative",
                      top: "-219px",
                      height: "6vh",
                      backgroundColor:"red",
                      color:"white"
                      

                    }}>
                    Update Activity
                  </button>
                </div>
                <div className="flex-parent jc-center">
                  <Link
                    to="/activities"
                    type="submit"
                    className="btnaa"
                    style={{ color: "#000000", position: "relative",
                    top: "-294px",
                    height: "6vh",
                  left:"190px" }}
                    
                  >
                    <i class="fas fa-hand-point-left">Back to Activity</i>
                  </Link>
                </div>
                &nbsp;&nbsp;
              </form>
            </div>
          </div>
        </AddActivityContainer>
      </div>
    </div>
  );
};

export default EditActivity;

//MAIN CONTAINER
const AddActivityContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 75.25rem;
  margin: 3rem auto;
  padding: 4rem;

  h1 {
    font-weight: 900;
    text-align: center;
  }

  .btnbb {
    margin-top: 2rem;
    background: #e5e4e2;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #c9c0bb;
      justify-content: center;
    }
  }

  .btnaa {
    margin-top: 2rem;
    background: #b6b6b4;
    width: 8.25rem;
    height: 2.25rem;
    border: none;
    &:hover {
      background: #838996;
      justify-content: center;
    }
  }

  .message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
  }

  h1 {
    font-weight: 900;
    color: #000000;
  }

  .message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
  }
`;
