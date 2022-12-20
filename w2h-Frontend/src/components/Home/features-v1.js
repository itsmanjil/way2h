import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbBrandBooking, TbShoppingCartDiscount } from "react-icons/tb";

class FeaturesV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";

    return (
      <div className={customClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Services
                </h6>
                <h1 className="section-title">Our Main Focus</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__custom-gutter--- justify-content-center go-top">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  {/* <img
                    src={publicUrl + "assets/img/icons/icon-img/21.png"}
                    alt="#"
                  /> */}
                  <MdOutlineTravelExplore />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Travel information</Link>
                  </h3>
                  <p>
                    Providing customers with detailed information about their
                    destination, including maps, travel advisories, and weather
                    forecasts
                  </p>
                  <Link className="ltn__service-btn" to="travelpackages">
                    Find A Destination <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                <div className="ltn__feature-icon">
                  {/* <img
                    src={publicUrl + "assets/img/icons/icon-img/22.png"}
                    alt="#"
                  /> */}
                  <TbBrandBooking />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Booking and ticketing</Link>
                  </h3>
                  <p>
                    Providing customers with the ability to book and purchase
                    tickets for flights, hotels, car rentals, tours, and other
                    services.
                  </p>
                  <Link className="ltn__service-btn" to="/travelpackages">
                    Find A Destination <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  {/* <img
                    src={publicUrl + "assets/img/icons/icon-img/23.png"}
                    alt="#"
                  /> */}
                  <TbShoppingCartDiscount />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Deals and discounts</Link>
                  </h3>
                  <p>
                    Offering customers exclusive discounts and promotional
                    offers on airline tickets, hotel stays, car rentals, and
                    other services.
                  </p>
                  <Link className="ltn__service-btn" to="/travelpackages">
                    Find A Destination <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesV1;
