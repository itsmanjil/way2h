import React, { Component } from "react";
import axios from "axios";
import "../../Styles/Payment.css";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { reference } from "@popperjs/core";
import Header from "../Header";
import Footer from "../Footer";
export default class PayForTravelPackage extends Component {
  constructor(props) {
    super(props);
    this.onChangeReference = this.onChangeReference.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePay = this.onChangePay.bind(this);
    this.onChangeMethod = this.onChangeMethod.bind(this);
    this.onChangeCard = this.onChangeCard.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeNo = this.onChangeNo.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.state = {
      validated: false,
      packageName: "",
      price: "",
      img: "",
      tdate: "",
      noofD: "",
      noodN: "",
      reference: "",
      name: "",
      payf: "Travel Package",
      method: "",
      card: "",
      time: "",
      no: "",
      amount: "",
      reward: "",
      actualPrice: "",
      reward_point: 0,
      View: [],
    };
  }
  componentDidMount() {
    const userInfo = localStorage.getItem("userInfo");
    const _id = JSON.parse(userInfo).id;
    console.log(_id);
    const url = "http://localhost:8070/user/Details/" + _id;
    axios.get(url).then((res) => {
      if (res.data.success) {
        console.log(res.data.BackendData);
        this.setState({
          View: res.data.BackendData,
        });
        // console.log(this.state.View);
      } else console.log("cant");
    });
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:8070/travelpackages/admin/${id}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            packageName: res.data.post.packageName,
            actualPrice: res.data.post.perperson,
            price: res.data.post.perperson,
            img: res.data.post.packageImage,
            tdate: res.data.post.date,
            noofD: res.data.post.noofdays,
            noofN: res.data.post.noofnights,
          });
        }
      });
  }
  onChangeReference(e) {
    this.setState({ reference: e.target.value });
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangePay(e) {
    this.setState({ payf: e.target.value });
  }
  onChangeMethod(e) {
    this.setState({ method: e.target.value });
  }
  onChangeCard(e) {
    this.setState({ card: e.target.value });
  }
  onChangeTime(e) {
    this.setState({ time: e.target.value });
  }
  onChangeNo(e) {
    this.setState({ no: e.target.value });
  }
  onChangeAmount(e) {
    this.setState({ amount: e.target.value });
  }
  onChangeReward = (e) => {
    this.setState({ reward_point: e.target.value });
    const { price, actualPrice } = this.state;
    const reward = e.target.value * 1;
    const exact_price = actualPrice - reward;
    this.setState({
      price: exact_price,
    });
  };
  onSubmit = (e) => {
    // const userInfo = localStorage.getItem('userInfo');
    const userInfo = localStorage.getItem("userInfo");
    //alert (userInfo);
    // if (userInfo == null) {
    //   alert("You Are Not Authorized User");
    //   window.location.replace("/register");
    // }
    // var line = [];
    // for (var i = 7, p = 0; i !== 31; i++, p++) {
    //   line.push(userInfo[i]);
    // }
    // const mongoid = line.join("");
    // const reward =(price * 2)/100;
    console.log(this.state.View);
    const previousReward = this.state.View.reward;
    console.log(previousReward);
    if (this.state.reward_point <= previousReward) {
      if (this.state.reward_point > 0) {
        const userInfo = localStorage.getItem("userInfo");
        // const previousReward = JSON.parse(userInfo).reward;
        const currentReward = previousReward - this.state.reward_point;
        const user_id = JSON.parse(userInfo).id;
        const name = JSON.parse(userInfo).Name;
        const email = JSON.parse(userInfo).Email;
        const password = JSON.parse(userInfo).Password;
        const num = JSON.parse(userInfo).Num;
        const Registers = {
          Name: name,
          Email: email,
          Password: password,
          Num: num,
          reward: currentReward,
        };
        // localStorage.setItem('userInfo', JSON.stringify(Registers))
        console.log(Registers);
        axios.put(`http://localhost:8070/user/update/${user_id}`, Registers);
      } else {
        const userInfo = localStorage.getItem("userInfo");
        // const reward =(price * 2)/100;
        const previousReward = this.state.View.reward;
        const reward = (this.state.price * 2) / 100;
        const newReward = previousReward + reward;
        const user_id = JSON.parse(userInfo).id;
        const name = JSON.parse(userInfo).Name;
        const email = JSON.parse(userInfo).Email;
        const password = JSON.parse(userInfo).Password;
        const num = JSON.parse(userInfo).Num;
        const Registers = {
          Name: name,
          Email: email,
          Password: password,
          Num: num,
          reward: newReward,
        };
        // localStorage.removeItem("userInfo");
        // localStorage.setItem("userInfo", JSON.stringify(Registers));
        axios.put(`http://localhost:8070/user/update/${user_id}`, Registers);
        // localStorage.setItem("userInfo", JSON.stringify(Registers))
        // history.push("/profile");
        alert("  Successful");
      }
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        console.log("Payment Added");
        const { packageName, price } = this.state;
        const { reference, name, payf, method, card, time, no, amount } =
          this.state;
        const reward = (price * 2) / 100;
        const data = {
          reference: packageName,
          name: name,
          payf: payf,
          method: method,
          card: card,
          time: time,
          no: no,
          amount: price,
          reward: reward,
        };
        console.log(data);
        axios.post("http://localhost:8070/payment/add", data).then((res) => {
          if (res.data.success) {
            window.location.replace("/confirm/payment");
            this.setState();
          }
        });
      }
      this.setState({ validated: true });
    } else {
      alert("Not enough funds");
    }
  };
  render() {
    const { packageName, price, payf, method, img, tdate, noofD, noofN } =
      this.state;
    // const userInfo = localStorage.getItem('userInfo');
    // // const reward =(price * 2)/100;
    // const previousReward = JSON.parse(userInfo).reward;
    // const reward =(this.state.price * 2)/100;
    // const newReward = previousReward + reward;
    // console.log(newReward);
    return (
      <div>
        <Header />
        <div className="info">
          <div class="card" style={{ backgroundColor: "hsl(0,0%,75%,0.5)" }}>
            <div class="card-body">
              <div class="row">
                <div class="col-md-5">
                  <div
                    class="righta border"
                    style={{ backgroundColor: "white", borderRadius: "10px" }}
                  >
                    <div class="text-center mb-2">
                      {" "}
                      <h2>Your Booking Package</h2>{" "}
                    </div>
                    <hr class="text-center mb-4" />
                    <h4 style={{ color: "hsl(0,0%,0%,0.6)" }}>{packageName}</h4>
                    <div>
                      <div class="col-12 ">
                        <img
                          class="img-fluid"
                          src={`/uploads/${img}`}
                          style={{ height: "200px", width: "100%" }}
                        />
                      </div>
                    </div>
                    <hr />
                    <div class="row lower">
                      <div class="col text-lefta">Departure Date</div>
                      <div class="col text-righta">{tdate}</div>
                    </div>
                    <div class="row lower">
                      <div class="col text-lefta">No of Days</div>
                      <div class="col text-righta">
                        {noofD} {noofN}
                      </div>
                    </div>
                    <hr />
                    <div class="row lower">
                      <div class="col text-lefta">
                        <b>Price Per Person</b>
                      </div>
                      <div class="col text-righta">
                        <b>{price}</b>
                      </div>
                    </div>
                    <div class="row lower">
                      <div class="col text-lefta">
                        <b>Reward Point for Buying</b>
                      </div>
                      {/* <div class="col text-righta"><b></b></div> */}
                      {/* <form onSubmit={this.onSubmit}> */}
                      <div class="form-outline mb-2 col-9">
                        <input
                          type="text"
                          id="formControlLgcvv"
                          class="form-control form-control-lg"
                          placeholder="Points"
                          maxLength="3"
                          onChange={this.onChangeReward}
                          required="required"
                        />
                      </div>
                      {/* <button type="submit" class="btn btn-danger btn-lg btn-block" style={{height:"43px"}}><b>Use Reward</b></button> */}
                      {/* </form> */}
                    </div>
                    <br />
                    <p class="text-muted text-center">
                      Apply Terms and Condition
                    </p>
                  </div>
                </div>
                <div class="col-md-7">
                  <div
                    class="lefta border"
                    style={{
                      backgroundColor: "hsl(0,0%,99% ,0.8",
                      borderRadius: "15px",
                    }}
                  >
                    <div class="row">
                      {" "}
                      <span
                        class="text-center mb-1"
                        style={{ fontSize: "40px" }}
                      >
                        Payment{" "}
                      </span>
                      <div class="d-flex  mb-3">
                        <p class="fw-bold  payicon">We Accept</p>
                        <div>
                          &nbsp;&nbsp; &nbsp;&nbsp;
                          <img src="https://img.icons8.com/color/48/000000/visa.png" />{" "}
                          <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />{" "}
                          <img src="https://img.icons8.com/color/48/000000/maestro.png" />{" "}
                        </div>
                      </div>
                    </div>
                    <Form
                      noValidate
                      validated={this.state.validated}
                      onSubmit={this.onSubmit}
                    >
                      <div class="row mb-2">
                        <div class="col">
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span
                                class="input-group-text"
                                id="basic-addon1"
                                style={{
                                  backgroundColor: "hsl(0,0%,0%,0.3)",
                                  color: "white",
                                }}
                              >
                                Package Name
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              name="reference"
                              value={packageName}
                              onChange={this.onChangeReference}
                              disabled
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span
                                class="input-group-text"
                                id="basic-addon1"
                                style={{
                                  backgroundColor: "hsl(0,0%,0%,0.3)",
                                  color: "white",
                                }}
                              >
                                Price
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              name="amount"
                              value={price}
                              onChange={this.onChangeAmount}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-3">
                        <label class="form-label fw-bold mr-4">
                          <i class="fas fa-plane mr-3"></i> Pay For &nbsp;{" "}
                        </label>
                        <div class="form-outline mb-2 col-7">
                          <input
                            type="text"
                            className="form-control"
                            name="payf"
                            value="Travel Package"
                            onChange={this.onChangePay}
                            disabled
                          />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <label class="form-label fw-bold">
                          <i class="fas fa-plane mr-2"></i> Enter Name &nbsp;{" "}
                        </label>
                        <div class="form-outline mb-2 col-9">
                          <input
                            type="text"
                            id="formControlLgXc"
                            class="form-control form-control-lg"
                            name="name"
                            placeholder="Card Holder Name"
                            required="required"
                            value={this.state.name}
                            onChange={this.onChangeName}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide Card Holder Name
                          </Form.Control.Feedback>{" "}
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <label class="form-label fw-bold">
                          {" "}
                          <i class="fas fa-plane mr-3"></i>Card Type :
                        </label>
                        <div class="form-outline mb-2 col-9">
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            className="form-check-input"
                            type="radio"
                            id="flexRadioDefault1"
                            value="Visa"
                            checked={method === "Visa"}
                            onChange={this.onChangeMethod}
                          />
                          &nbsp;&nbsp;
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            <b> Visa</b>
                          </label>
                          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                          &nbsp;&nbsp;
                          <input
                            className="form-check-input"
                            type="radio"
                            id="flexRadioDefault1"
                            value="MasterCard"
                            checked={method === "MasterCard"}
                            onChange={this.onChangeMethod}
                          />
                          &nbsp;&nbsp;
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            <b> Master Card</b>
                          </label>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <label class="form-label fw-bold">
                          {" "}
                          <i class="fas fa-plane mr-3"></i>Card Number
                        </label>
                        <div class="form-outline mb-2 col-9">
                          <input
                            type="text"
                            id="formControlLgXc"
                            class="form-control form-control-lg"
                            name="card"
                            placeholder="Enter Card Number"
                            value={this.state.card}
                            onChange={this.onChangeCard}
                            maxLength="12"
                            required="required"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Card Number
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <label class="form-label fw-bold">
                          {" "}
                          <i class="fas fa-plane mr-3"></i>Expire
                          Date&nbsp;&nbsp;
                        </label>
                        <div class="form-outline mb-2 col-4">
                          <input
                            type="date"
                            id="formControlLgExpk"
                            class="form-control form-control-lg"
                            placeholder="MM/YY"
                            value={this.state.time}
                            onChange={this.onChangeTime}
                            required="required"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please the provide the date
                          </Form.Control.Feedback>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <label class="form-label fw-bold">
                          {" "}
                          <i class="fas fa-plane mr-3"></i>CVV&nbsp;&nbsp;
                        </label>
                        <div class="form-outline mb-2 col-3">
                          <input
                            type="text"
                            id="formControlLgcvv"
                            class="form-control form-control-lg"
                            placeholder="CVV"
                            value={this.state.no}
                            onChange={this.onChangeNo}
                            maxLength="3"
                            required="required"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid CVV
                          </Form.Control.Feedback>{" "}
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-danger btn-lg btn-block"
                        style={{ height: "43px" }}
                      >
                        <b>Pay Now</b>
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div> </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
