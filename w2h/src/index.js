import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import HomeV5 from "./components/home-v5";

import ResetPassword from "./components/resetpassword";
import Shop from "./components/shop";
import Navbar from "./components/global-components/navbar-v4";
import Login from "./components/login";
import Register from "./components/register";
import SignIn from "./components/SignIn/SingIn";
import SignUp from "./components/SignUp/SignUp";
import sighUpform from "./components/sighUp";
import Footer from "./components/global-components/footer";
import MyaccountV1 from "./components/my-account";
import ProfilePage from "./components/shop-components/edit_profile";

class Root extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
          <Switch>
            <Route exact path="/" component={HomeV5} />

            <Route path="/shop" component={Shop} />
            <Route
              exact
              path="/password/reset/:token"
              component={ResetPassword}
            />
            <Route path="/login" exact component={Login} />
            {/* <Route path="/login" exact component={sighUpform} /> */}
            <Route path="/register" component={Register} />
            {/* <Route path="/register" component={sighUpform} /> */}
            <Route path="/my-account" exact component={MyaccountV1}/>
            <Route path="/edit-profile" exact component={ProfilePage}/>

            </Switch>
          <Footer />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
