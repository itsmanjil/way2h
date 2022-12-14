import React, { useReducer, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../Styles/TravelPackage.css";
import HeaderAdmin from "../HeaderAdmin";

const EditPackage = (props) => {
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
    setFileName("");

    axios
      .put(
        `http://localhost:8070/travelpackages/admin/update/${props.match.params.id}`,
        formData
      )
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });

    alert(" Travel Package Update Successful");
    history.push("/travelpackages/admin");
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8070/travelpackages/admin/${props.match.params.id}`
      )
      .then((res) => [
        setPackagename(res.data.post.packageName),
        setDestination(res.data.post.destination),
        setDiscription(res.data.post.discription),
        setDate(res.data.post.date),
        setDays(res.data.post.noofdays),
        setNights(res.data.post.noofnights),
        setVehical(res.data.post.vehical),
        setPerperson(res.data.post.perperson),
        setFileName(res.data.post.packageImage),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <HeaderAdmin />

      <div className="infoadmin">
        <div className="bodyaa" id="bodytbc">
          <div style={{ position: "relative", top: "-70px" }}>
            <div>
              <form
                class="signup-form signup-formtr"
                onSubmit={changeOnClick}
                encType="multipart/form-data"
              >
                <div class="form-header form-headertr">
                  <h1 style={{ color: "white" }}>
                    <b>Edit Travel Package Details</b>
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
                    />
                  </div>

                  <div class="form-group form-grouptr">
                    <lable class="label-title">
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
                    </select>
                  </div>

                  <div
                    class="horizontal-group horizontal-grouptr"
                    style={{ position: "relative", top: "-52px" }}
                  >
                    <div class="form-group form-grouptr left">
                      <lable class="label-title">
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
                      />
                    </div>

                    <div class="form-group form-grouptr right">
                      <lable class="label-title">
                        <b>Date *</b>
                      </lable>
                      <input
                        type="text"
                        name="date"
                        class="form-input"
                        placeholder="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required="required"
                      />
                    </div>
                  </div>

                  <div
                    class="horizontal-group horizontal-grouptr"
                    style={{ position: "relative", top: "-82px" }}
                  >
                    <div class="form-group form-grouptr left">
                      <lable class="label-title">
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
                      />
                    </div>

                    <div class="form-group form-grouptr right">
                      <lable class="label-title">
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
                      />
                    </div>
                  </div>

                  <div
                    class="horizontal-group horizontal-grouptr"
                    style={{ position: "relative", top: "-112px" }}
                  >
                    <div class="form-group form-grouptr left">
                      <lable class="label-title">
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
                      />
                      <br />
                    </div>

                    <div class="form-group form-grouptr right">
                      <lable class="label-title">
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
                      />
                    </div>
                  </div>

                  <lable
                    class="label-title"
                    style={{ position: "relative", top: "-152px" }}
                  >
                    <b>Edit Image*</b>
                    <div class="mb-3">
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                        filename="packageImage"
                        onChange={onChangeFile}
                      />
                    </div>
                  </lable>

                  <div
                    class="form-footer"
                    style={{
                      position: "relative",
                      backgroundColor: "transparent",
                      top: "-150px",
                      height: "2vh",
                    }}
                  >
                    <input
                      type="submit"
                      name="submit"
                      class="editt"
                      value="Edit Package"
                    />
                  </div>
                </div>

                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPackage;
