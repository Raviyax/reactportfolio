import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar is-fixed-top is-mobile"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        id="navbarBasicExample is-mobile"
        style={{ float: "right" }}
        className="navbar-menu nav"
      >
        <div id="myDIV" className="navbar-start">
          <button
            href
            className="navbar-item is-size-4 has-text-weight-bold btn mr-2"
            style={{ borderColor: "white", backgroundColor: "white" }}
          >
            <a href="l#aboutme">About Me</a>
          </button>
          <button
            href
            className="navbar-item is-size-4 has-text-weight-bold btn mr-2"
            style={{ borderColor: "white", backgroundColor: "white" }}
          >
            <a href="#whatido">What I Do</a>
          </button>
          <button
            href
            className="navbar-item is-size-4 has-text-weight-bold btn mr-2"
            style={{ borderColor: "white", backgroundColor: "white" }}
          >
            <a href="#qualifications">Qualifications</a>
          </button>
          <button
            href
            className="navbar-item is-size-4 has-text-weight-bold btn mr-2"
            style={{ borderColor: "white", backgroundColor: "white" }}
          >
            <a href="l#mywork">My Work</a>
          </button>
          <button
            className="navbar-item is-size-4 has-text-weight-bold btn"
            style={{ borderColor: "white", backgroundColor: "white" }}
          >
            <a href="#contactme">Contact Me</a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
