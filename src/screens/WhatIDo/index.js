import React from "react";

function WhatIDo() {
  return (
    <div id="whatido">
      <div className="container-fluid is-small">
        <div className="columns">
          <div className="column is-4 pl-0 is-align-self-flex-end is-pulled-left">
            <figure className="image is-256x256 mb-0">
              <img src="p3.png" />
            </figure>
          </div>
          <div className="column is-2"></div>
          <div className="column is-6">
            <h1
              className="has-text-weight-bold has-text-left"
              style={{ color: "black", fontSize: "5rem" }}
            >
              Expert On
            </h1>
            <h1
              className="has-text-weight-bold has-text-left "
              style={{ color: "black", fontSize: "5rem", lineHeight: "0.8em" }}
            >
              Making Dreams
            </h1>
            <h1
              className="has-text-weight-bold has-text-left "
              style={{ color: "black", fontSize: "5rem" }}
            >
              True
            </h1>
            <div className="column is-8">
              <h1
                className="has-text-weight-normal has-text-left mt-6"
                style={{ color: "black", fontSize: "1rem" }}
              >
                Are you looking for a person who can turn a marvelous idea into
                a thoughtful design in the little things? I can help you to
                boost conversion of the site or the app, take care of the UX and
                UI of the project so that it will be convenient and friendly for
                users.
              </h1>
            </div>
            <div className="column is-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
