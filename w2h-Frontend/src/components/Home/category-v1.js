import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaHiking } from "react-icons/fa";
import { MdOutlineHotel, MdFlightTakeoff } from "react-icons/md";
import {
  GiMountainClimbing,
  GiWaterfall,
  GiByzantinTemple,
  GiPoolDive,
} from "react-icons/gi";
import { FaDraft2Digital } from "react-icons/fa";

class CategoryV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-90 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Services
                </h6>
                <h1 className="section-title">Activity</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/all">
                  <span className="category-icon">
                    <FaHiking />
                    {/* <i class="fa-solid fa-person-walking-luggage"></i> */}
                  </span>
                  <span className="category-title">Trekking</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/all">
                  <span className="category-icon">
                    <GiMountainClimbing />

                    {/* <i className="flaticon-swimming" /> */}
                  </span>
                  <span className="category-title">MountainClimbing</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/all">
                  <span className="category-icon">
                    <MdOutlineHotel />
                  </span>
                  <span className="category-title">Hotel</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/all">
                  <span className="category-icon">
                    <FaDraft2Digital />
                  </span>
                  <span className="category-title">Rafting</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/all">
                  <span className="category-icon">
                    <GiWaterfall />
                  </span>
                  <span className="category-title">Water Fall</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/all">
                  <span className="category-icon">
                    <GiByzantinTemple />
                  </span>
                  <span className="category-title">Temple</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/all">
                  <span className="category-icon">
                    <GiPoolDive />
                  </span>
                  <span className="category-title">Diving</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/all">
                  <span className="category-icon">
                    <MdFlightTakeoff />
                  </span>
                  <span className="category-title">Flight</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryV1;
