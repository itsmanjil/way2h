import React, { Component } from "react";

class VideoV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__video-popup-area ltn__video-popup-margin---">
        <div
          className="ltn__video-bg-img ltn__video-popup-height-600--- bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1"
          data-bs-bg={publicUrl + "assets/img/bg/19.jpg"}
        >
          <video autoPlay muted loop id="myVideo">
            <source src={publicUrl + "assets/media/3.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default VideoV1;
