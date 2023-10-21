import React from "react";
import videoHomepage from "../assets/intro.mp4";
import videoHomepage2 from "../assets/video.mp4";
const Home = () => {
  return (
    <div className=" homepage-container">
      <video className="video" height="600" autoPlay muted loop>
        <source src={videoHomepage2} type="video/mp4" />
      </video>
      <div className="hompagecontent">
        <div className="title-1">Forms that break the norm</div>
        <div>
          Get more data—like signups, feedback, and anything else—with forms
          designed to be
          <span className="fw-bold "> refreshingly different.</span>
        </div>
        <button className="btn-content btn btn-dark">
          Get started-it's free
        </button>
      </div>
    </div>
  );
};

export default Home;
