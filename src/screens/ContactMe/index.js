import React from "react";

function ContactMe() {
  return (
    <div>
      <div className="container"></div>
      <div id="contactme">
        <div className="section is-small">
          <h1
            className="has-text-weight-bold has-text-centered mb-6"
            style={{ color: "black", fontSize: "5rem" }}
          >
            Contact Me
          </h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your Name Here"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left ">
              <input
                className="input "
                type="email"
                placeholder="Enter Your Email Here"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Textarea"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link"
                style={{ backgroundColor: "black" }}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
