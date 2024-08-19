import React from "react";

function MyWork() {
  return (
    <div id="mywork">
      <div className="section is-medium">
        <div className="columns">
          <div className="column is-6">
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <figure className="image">
                      <img src="docapp.png" about="docapp" />
                    </figure>
                    <h1
                      className="has-text-weight-semibold has-text-centered "
                      style={{ color: "black", fontSize: "1rem" }}
                    >
                      <i
                        className="fa-brands fa-google-play"
                        style={{ fontSize: "1.5rem" }}
                      />{" "}
                      Doc channel
                    </h1>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <figure className="image is-256x256">
                      <img src="desktop.png" alt="desktop" />
                    </figure>
                    <h1
                      className="has-text-weight-semibold has-text-centered "
                      style={{ color: "black", fontSize: "1rem" }}
                    >
                      <i
                        className="fa-brands fa-google"
                        style={{ fontSize: "1.5rem" }}
                      />{" "}
                      https://ucsc.cmb.ac.lk/
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <h1
              className="has-text-weight-bold has-text-centered"
              style={{ color: "black", fontSize: "5rem" }}
            >
              My Work
            </h1>
            <figure className="image is-256x256 mt-6 ">
              <img src="pos.png" alt="pos" />
            </figure>
            <div className="section">
              <figure className="image google is-pulled-right ">
                <img className="google" src="google.PNG" alt="google" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
