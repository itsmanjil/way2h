import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";


const Navbar = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn);
  // if (isLoggedIn) {
  //   return <UserGreeting />;
  // }
  // else{
  // return <GuestGreeting />;
  // }
  return (
    <div>
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
        <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                        <i className="icon-mail" /> info@Way2heaven.com
                      </a>
                    </li>
                    <li>
                      <a href="locations.html">
                        <i className="icon-placeholder" /> Dilibajar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li className="d-none">
                        {/* ltn__language-menu */}
                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                          <ul>
                            <li>
                              <a href="#" className="dropdown-toggle">
                                <span className="active-currency">English</span>
                              </a>
                              <ul>
                                <li>
                                  <Link to="#">Arabic</Link>
                                </li>
                                <li>
                                  <Link to="#">Bengali</Link>
                                </li>
                                <li>
                                  <Link to="#">Chinese</Link>
                                </li>
                                <li>
                                  <Link to="#">English</Link>
                                </li>
                                <li>
                                  <Link to="#">French</Link>
                                </li>
                                <li>
                                  <Link to="#">Hindi</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Social />
                      </li>
                      <li>
                        {/* header-top-btn */}
                        <div className="header-top-btn">
                          <Link to="/add-listing">Add Listing</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo go-top">
                    <Link to="/">
                      <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
                    </Link>
                  </div>
                  <div className="get-support clearfix d-none">
                    <div className="get-support-icon">
                      <i className="icon-call" />
                    </div>
                    <div className="get-support-info">
                      <h6>Get Support</h6>
                      <h4>
                        <a href="tel:+123456789">123-456-789-10</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu go-top">
                      <ul>
                        <li className="menu-icon">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-icon">
                          <Link to="/about">About</Link>
                        </li>
                        <li className="menu-icon">
                          <Link to="/shop">Shop</Link>
                        </li>
                        <li className="menu-icon">
                          <Link to="/blog-grid">News</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                {/* header-search-1 */}
                <div className="header-search-wrap">
                  <div className="header-search-1">
                    <div className="search-icon">
                      <i className="icon-search for-search-show" />
                      <i className="icon-cancel  for-search-close" />
                    </div>
                  </div>
                  <div className="header-search-1-form">
                    <form id="#" method="get" action="#">
                      <input
                        type="text"
                        name="search"
                        defaultValue
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <i className="icon-search" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
                {/* user-menu */}
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="icon-user" />
                      </Link>
                      <ul className="go-top">
                        <li>
                          <Link to="/login">Sign in</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/my-account">My Account</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* mini-cart */}
                <div className="mini-cart-icon">
                  <a
                    href="#ltn__utilize-cart-menu"
                    className="ltn__utilize-toggle"
                  >
                    <i className="icon-shopping-cart"></i>
                    <sup>2</sup>
                  </a>
                </div>
                {/* mini-cart */}
                {/* Mobile Menu Button */}
                <div className="mobile-menu-toggle d-xl-none">
                  <a
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action={"#"}>
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/shop">Package</Link>
              </li>
              <li>
                <Link to="/blog-grid">News</Link>
              </li>
              <li>
                <Link to="#">Pages</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <Link to="/my-account" title="My Account">
                  <span className="utilize-btn-icon">
                    <i className="far fa-user" />
                  </span>
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/wishlist" title="Wishlist">
                  <span className="utilize-btn-icon">
                    <i className="far fa-heart" />
                    <sup>3</sup>
                  </span>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="#" title="Shoping Cart">
                  <span className="utilize-btn-icon">
                    <i className="fas fa-shopping-cart" />
                    <sup>5</sup>
                  </span>
                  Shoping Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Utilize Cart Menu Start */}
      {/* <div
      id="ltn__utilize-cart-menu"
      className="ltn__utilize ltn__utilize-cart-menu"
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <span className="ltn__utilize-menu-title">Cart</span>
          <button className="ltn__utilize-close">×</button>
        </div>
        <div className="mini-cart-product-area ltn__scrollbar">
          <div className="mini-cart-item clearfix">
            <div className="mini-cart-img go-top">
              <Link to="/product-details">
                <img
                  src={publicUrl + "assets/img/product/1.png"}
                  alt="Image"
                />
              </Link>
              <span className="mini-cart-item-delete">
                <i className="icon-cancel" />
              </span>
            </div>
            <div className="mini-cart-info go-top">
              <h6>
                <Link to="/product-details">Wheel Bearing Retainer</Link>
              </h6>
              <span className="mini-cart-quantity">1 x $65.00</span>
            </div>
          </div>
          <div className="mini-cart-item clearfix">
            <div className="mini-cart-img go-top">
              <Link to="/product-details">
                <img
                  src={publicUrl + "assets/img/product/2.png"}
                  alt="Image"
                />
              </Link>
              <span className="mini-cart-item-delete">
                <i className="icon-cancel" />
              </span>
            </div>
            <div className="mini-cart-info go-top">
              <h6>
                <Link to="/product-details">Brake Conversion Kit</Link>
              </h6>
              <span className="mini-cart-quantity">1 x $85.00</span>
            </div>
          </div>
          <div className="mini-cart-item clearfix">
            <div className="mini-cart-img go-top">
              <Link to="/product-details">
                <img
                  src={publicUrl + "assets/img/product/3.png"}
                  alt="Image"
                />
              </Link>
              <span className="mini-cart-item-delete">
                <i className="icon-cancel" />
              </span>
            </div>
            <div className="mini-cart-info go-top">
              <h6>
                <Link to="/product-details">OE Replica Wheels</Link>
              </h6>
              <span className="mini-cart-quantity">1 x $92.00</span>
            </div>
          </div>
          <div className="mini-cart-item clearfix">
            <div className="mini-cart-img go-top">
              <Link to="/product-details">
                <img
                  src={publicUrl + "assets/img/product/4.png"}
                  alt="Image"
                />
              </Link>
              <span className="mini-cart-item-delete">
                <i className="icon-cancel" />
              </span>
            </div>
            <div className="mini-cart-info go-top">
              <h6>
                <Link to="/product-details">Shock Mount Insulator</Link>
              </h6>
              <span className="mini-cart-quantity">1 x $68.00</span>
            </div>
          </div>
        </div>
        <div className="mini-cart-footer">
          <div className="mini-cart-sub-total">
            <h5>
              Subtotal: <span>$310.00</span>
            </h5>
          </div>
          <div className="btn-wrapper go-top">
            <Link to="/cart" className="theme-btn-1 btn btn-effect-1">
              View Cart
            </Link>
            <Link to="/cart" className="theme-btn-2 btn btn-effect-2">
              Checkout
            </Link>
          </div>
          <p>Free Shipping on All Orders Over $100!</p>
        </div>
      </div>
    </div> */}
      {/* Utilize Cart Menu End */}
    </div>
  );
};

export default Navbar;
