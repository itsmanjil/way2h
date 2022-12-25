import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import emailjs from "emailjs-com";
import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { ResetSchema } from "../schema/resetSchema";
// import { yupResolver } from "@hookform/resolvers/yup";
import { instance } from "../../axiosInstance/AxiosInstance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

// function foremail(e) {
//   e.preventDefault();
//   const email = document.getElementById("input").value;
//   if (email == "" || email.includes("@" && ".com") == false) {
//     alert("Enter Valid email Address");
//     return false;
//   }

//   var hidden = false;
//   //document.getElementById('emailval').innerHTML= "Password Rest Success! Check Your Email";

//   document.getElementById("h2").style.visibility = "hidden";
//   // document.getElementById('inputa').style.visibility = 'hidden';
//   document.getElementById("button").style.visibility = "hidden";
//   document.getElementById("demo").style.visibility = "hidden";
//   document.getElementById("hari").style.visibility = "visible";
//   document.getElementById("form").style.visibility = "hidden";
//   document.getElementById("input").style.visibility = "hidden";

//   axios.get("http://localhost:8070/access/search/" + email).then((res) => {
//     if (res.data.success) {
//       document.getElementById("id").value = res.data.SearchData[0]._id;
//       document.getElementById("em").value = email;
//     } else {
//       alert("eee");
//     }
//   });
// }

// function emailsend(e) {
//   emailjs.sendForm(
//     "service_sy66xoc",
//     "template_fdhg1ym",
//     e.target,
//     "user_iKzC1886DPbUEbUDzO1bY"
//   );
//   alert("Check Your Email").then(
//     (result) => {
//       alert("okgiyaaaa");
//       console.log(result.text);
//     },
//     (error) => {
//       console.log(error.text);
//     }
//   );
//   e.target.reset();
// }

const forget = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(ResetSchema),
  //   });
  let history = useHistory();
  const [Email, setEmail] = useState("");

  const onSubmitreset = (e) => {
    e.preventDefault();

    const Reset = {
      Email,
    };
    console.log(Reset);
    instance
      .post("Register/password/forgot", Reset)
      .then(function (response) {
        toast.success("reset Success!");
        history.push({
          pathname: "/",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        toast.success("reset failed!");
      });
  };
  return (
    <div>
      <Header />

      <div className="body1">
        <form className="form12" onSubmit={onSubmitreset} id="form">
          <h2 id="h2">Enter Your Email</h2>
          <h2 id="emailval"></h2>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="inputabc"
            id="input"
            name="a"
            type="email"
            placeholder="Email"
            required
          />
          {/* <input className ="inputabc" id="demo" name="a" type="text" placeholder="name" /> */}

          <button id="button" className="button12" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default forget;
