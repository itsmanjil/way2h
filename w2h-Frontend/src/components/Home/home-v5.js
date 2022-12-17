import React from "react";
import VideoV4 from "./video-v4";

import Featuresv1 from "./features-v1";
// import ProSlider from "./product-slider-v1";
// import Apartment from "./section-components/apartment-v1";
import VideoV1 from "./video-v1";
import Category from "./category-v1";
import NavbarV3 from "../navbar-v4";
import Header from "../Header";

const Home_V5 = () => {
  return (
    <div>
      <NavbarV3 CustomClass="ltn__header-transparent gradient-color-2" />
      {/* <Header /> */}
      {/* <Navbar CustomClass="ltn__header-transparent gradient-color-2" /> */}
      <VideoV4 />
      {/* <AboutV3 /> */}
      <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />
      {/* <ProSlider /> */}
      <VideoV1 />
      <Category />
      {/* <CallToActionV1 /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home_V5;
