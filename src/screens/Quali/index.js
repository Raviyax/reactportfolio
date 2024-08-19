import React from "react";

function Quali() {
  return (
    <div id="qualifications">
      <div className="section is-medium">
        <div className="columns">
          <div className="column is-4">
            <div className="columns">
              <div className="column mb-4">
                <h1
                  className="has-text-weight-bold has-text-left "
                  style={{ color: "black", fontSize: "2rem" }}
                >
                  <i
                    className="fa-solid fa-circle mr-2"
                    style={{ fontSize: "1rem" }}
                  />
                  LICERIA DESIGN STUDIO
                </h1>
                <h1
                  className="has-text-weight-semibold has-text-left mt-2 "
                  style={{ color: "black", fontSize: "1rem" }}
                >
                  UX Design Award
                </h1>
                <h1
                  className="has-text-weight-semibold has-text-left "
                  style={{ color: "black", fontSize: "1rem" }}
                >
                  2015
                </h1>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="column mt-4 mb-4">
                  <h1
                    className="has-text-weight-bold has-text-left "
                    style={{ color: "black", fontSize: "2rem" }}
                  >
                    <i
                      className="fa-solid fa-circle mr-2"
                      style={{ fontSize: "1rem" }}
                    >
                      {" "}
                    </i>
                    FIGMA UI UX DESIGN ESSENTIALS
                  </h1>
                  <h1
                    className="has-text-weight-semibold has-text-left mt-2 "
                    style={{ color: "black", fontSize: "1rem" }}
                  >
                    Udemy Academy
                  </h1>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="column mt-4 ">
                  <h1
                    className="has-text-weight-bold has-text-left "
                    style={{ color: "black", fontSize: "2rem" }}
                  >
                    <i
                      className="fa-solid fa-circle mr-2"
                      style={{ fontSize: "1rem" }}
                    />
                    UI UX DESIGN
                  </h1>
                  <h1
                    className="has-text-weight-semibold has-text-left mt-2 "
                    style={{ color: "black", fontSize: "1rem" }}
                  >
                    Coursera
                  </h1>
                  <h1
                    className="has-text-weight-semibold has-text-left "
                    style={{ color: "black", fontSize: "1rem" }}
                  >
                    2021
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-8">
            <figure className="image is-256x256 ">
              <img src="p4.jpg" alt="p4" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quali;
