import React from "react";
import Navbar from "./global-components/navbar-v4";
import VideoV4 from "./section-components/video-v4";
import Aboutv1 from "./section-components/about-v1";
import Counter from "./section-components/counter-v1";
import AboutV3 from "./section-components/about-v3";
import Featuresv1 from "./section-components/features-v1";
import ProSlider from "./section-components/product-slider-v1";
// import Apartment from "./section-components/apartment-v1";
import VideoV1 from "./section-components/video-v1";
import Category from "./section-components/category-v1";
import Testimonial from "./section-components/testimonial-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const Home_V5 = () => {
  return (
    <div>
      <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
      <VideoV4 />
      {/* <AboutV3 /> */}
      <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />
      <ProSlider />
      <VideoV1 />
      <Category />
      <CallToActionV1 />

      <Footer />
    </div>
  );
};

export default Home_V5;
