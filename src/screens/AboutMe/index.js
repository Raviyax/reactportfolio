import React from "react";

function AboutMe() {
  return (
    <div id="aboutme">
      <div className="section is-medium">
        <div className="columns">
          <div className="column is-5">
            <h1
              className="hero-title has-text-weight-bold"
              style={{ color: "black" }}
            >
              Hello,
            </h1>
            <h1
              className="subtitle-2 has-text-weight-semibold mt-6"
              style={{ color: "black" }}
            >
              I'am Ravishan Jayathilake
            </h1>
            <h1 className="subsubtitle-2" style={{ color: "black" }}>
              UI/UX Designer
            </h1>
            <div className="column is-9">
              <h1
                className=" has-text-weight-medium mt-6 has-text-left"
                style={{ fontSize: "1rem", color: "black" }}
              >
                I'm a product designer based in Sri Lanka. I'm passionate about
                improving the lives of others through design, and is constantly
                looking to learn new things everyday.
              </h1>
              <button className="button is-black mt-6">MORE ABOUT ME</button>
            </div>
            <div className="column is-3" />
          </div>
          <div className="column is-7 ">
            <figure className="image is-256x256 mb-0">
              <img src="me.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
