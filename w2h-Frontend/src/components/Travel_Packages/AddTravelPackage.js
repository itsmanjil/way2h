import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../Styles/TravelPackage.css";
import HeaderAdmin from "../HeaderAdmin";
import "react-toastify/dist/ReactToastify.min.css";
import { Auth } from "../notify";
import { ToastContainer, toast } from "react-toastify";
import PlacesAutocomplete from "react-places-autocomplete";

const CreatePackage = () => {
  let history = useHistory();

  const [packageName, setPackagename] = useState("");
  const [destination, setDestination] = useState("");
  const [discription, setDiscription] = useState("");
  const [date, setDate] = useState("");
  const [noofdays, setDays] = useState("");
  const [noofnights, setNights] = useState("");
  const [vehical, setVehical] = useState("");
  const [perperson, setPerperson] = useState("");
  const [message, setMessage] = useState("");
  const [packageImage, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    // Validation checks
    if (packageName === "" || !isNaN(packageName)) {
      alert("Package name is invalid");
      return;
    }
    if (
      destination === "" ||
      discription === "" ||
      date === "" ||
      noofdays === "" ||
      noofnights === "" ||
      vehical === "" ||
      perperson === "" ||
      packageImage === ""
    ) {
      alert("All fields are required");
      return;
    }
    if (typeof packageName !== "string") {
      alert("Package name is invalid");
      return;
    }

    if (!/^\d+$/.test(noofdays) || !/^\d+$/.test(noofnights)) {
      alert("Number of days and nights must be positive integers");
      return;
    }
    if (perperson <= 0) {
      alert("Price per person must be a positive number");
      return;
    }

    const formData = new FormData();
    formData.append("packageName", packageName);
    formData.append("destination", destination);
    formData.append("discription", discription);
    formData.append("date", date);
    formData.append("noofdays", noofdays);
    formData.append("noofnights", noofnights);
    formData.append("vehical", vehical);
    formData.append("perperson", perperson);
    formData.append("packageImage", packageImage);

    setPackagename("");
    setDestination("");
    setDiscription("");
    setDate("");
    setDays("");
    setNights("");
    setVehical("");
    setPerperson("");

    axios
      .post("http://localhost:8070/travelpackages/admin/add", formData)
      .then((res) => setMessage(res.data))

      .catch((err) => {
        console.log(err);
      });
    history.push("/travelpackages/admin");
    // alert(" Travel Package Added Successful");
    Auth.notify("success", "Travel Package Added Successfully");
    <ToastContainer />;
  };
  return (
    <div>
      <HeaderAdmin />
      <div className="infoadmin">
        <div className="bodyaa" id="bodytbc">
          <div>
            <div>
              <form
                class="signup-form signup-formtr"
                onSubmit={changeOnClick}
                encType="multipart/form-data"
                style={{ position: "relative", top: "-28px", height: "100vh" }}
              >
                <div class="form-header form-headertr">
                  <h1 style={{ color: "white" }}>
                    <b>Add New Travel Package</b>
                  </h1>
                </div>

                <div class="form-body form-bodytr">
                  <div class="form-group form-grouptr">
                    <lable class="label-title">
                      <b>Package Name *</b>
                    </lable>
                    <input
                      type="text"
                      name="packageName"
                      class="form-input"
                      placeholder="packageName"
                      value={packageName}
                      onChange={(e) => setPackagename(e.target.value)}
                      required="required"
                      style={{ position: "relative", top: "-5px" }}
                    />
                  </div>
                  <div class="form-group form-grouptr">
                    <lable
                      class="label-title"
                      style={{ position: "relative", top: "-45px" }}
                    >
                      <strong>Destination</strong>
                    </lable>
                    <select
                      name="destination"
                      id="floatingInput"
                      className="form-control border-dark"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                      style={{
                        position: "relative",
                        top: "-45px",
                        height: "7vh",
                      }}
                    >
                      <option>Select Destination</option>

                      <option>Pokara</option>
                      <option>Kathmandu</option>
                      <option>Chitwan</option>
                      <option>Bhaktapur</option>
                      <option>Solukhumbu</option>
                      <option>Gorkha</option>
                      <option>Lumbini</option>
                      <option>Nuwakot</option>
                      <option>Dhading</option>
                      <option>Makwanpur</option>
                      <option>Ramechhap</option>
                      <option>Dolakha</option>
                      <option>Sindhupalchowk</option>
                      <option>Kavrepalanchowk</option>
                      <option>Lalitpur</option>
                      <option>Rasuwa</option>
                      <option>Sindhuli</option>
                      <option>Rupandehi</option>
                      <option>Dang</option>
                    </select>
                  </div>

                  <div class="horizontal-group horizontal-grouptr">
                    <div class="form-group form-grouptr left">
                      <lable
                        class="label-title"
                        style={{ position: "relative", top: "-45px" }}
                      >
                        <b>Discription *</b>
                      </lable>
                      <input
                        type="text"
                        name="discription"
                        class="form-input"
                        placeholder="discription"
                        value={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                        required="required"
                        style={{ position: "relative", top: "-45px" }}
                      />
                      <br />
                    </div>
                    <div class="form-group form-grouptr right">
                      <lable
                        class="label-title"
                        style={{ position: "relative", top: "-45px" }}
                      >
                        <b>Date *</b>
                      </lable>
                      <input
                        type="date"
                        name="date"
                        class="form-input"
                        placeholder="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required="required"
                        style={{ position: "relative", top: "-45px" }}
                      />
                      <br />
                    </div>
                  </div>

                  <div class="horizontal-group horizontal-grouptr">
                    <div class="form-group form-grouptr left">
                      <lable
                        class="label-title"
                        style={{
                          position: "relative",
                          top: "-45px",
                          right: "340px",
                        }}
                      >
                        <b>No of Days *</b>
                      </lable>
                      <input
                        type="text"
                        name="noofdays"
                        class="form-input"
                        placeholder="noofdays"
                        maxLength="3"
                        value={noofdays}
                        required="required"
                        onChange={(e) => setDays(e.target.value)}
                        style={{
                          position: "relative",
                          top: "-45px",
                          right: "340px",
                        }}
                      />
                      <br />
                    </div>

                    <div class="form-group form-grouptr right">
                      <lable
                        class="label-title"
                        style={{ position: "relative", top: "-148px" }}
                      >
                        <b>No of Nights *</b>
                      </lable>
                      <input
                        type="text"
                        name="noofnights"
                        class="form-input"
                        placeholder="noofnights"
                        value={noofnights}
                        maxLength="3"
                        required="required"
                        onChange={(e) => setNights(e.target.value)}
                        style={{ position: "relative", top: "-155px" }}
                      />
                      <br />
                    </div>
                  </div>

                  <div class="horizontal-group horizontal-grouptr">
                    <div class="form-group form-grouptr left">
                      <lable
                        class="label-title"
                        style={{ position: "relative", top: "-78px" }}
                      >
                        <b>Vehical *</b>
                      </lable>
                      <input
                        type="text"
                        required="required"
                        name="vehical"
                        class="form-input"
                        placeholder="vehical"
                        value={vehical}
                        onChange={(e) => setVehical(e.target.value)}
                        style={{ position: "relative", top: "-78px" }}
                      />
                      <br />
                    </div>

                    <div class="form-group form-grouptr right">
                      <lable
                        class="label-title"
                        style={{ position: "relative", top: "-188px" }}
                      >
                        <b>Perperson *</b>
                      </lable>
                      <input
                        type="text"
                        name="perperson"
                        required="required"
                        class="form-input"
                        placeholder="perperson"
                        value={perperson}
                        onChange={(e) => setPerperson(e.target.value)}
                        style={{ position: "relative", top: "-188px" }}
                      />
                      <br />
                    </div>
                  </div>

                  <lable
                    class="label-title"
                    style={{ position: "relative", top: "-98px" }}
                  >
                    <b>Add a Image*</b>
                    <div class="mb-3">
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                        filename="packageImage"
                        onChange={onChangeFile}
                        style={{ position: "relative", top: "-88px" }}
                      />
                    </div>
                  </lable>

                  <div style={{ paddingTop: "0px", height: "5vh" }}>
                    <center>
                      <input
                        type="submit"
                        class="reg btn btn-danger"
                        value="Add Package"
                        style={{ position: "relative", top: "-188px" }}
                      />
                    </center>
                  </div>
                  <br />
                </div>

                <br />
              </form>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePackage;
