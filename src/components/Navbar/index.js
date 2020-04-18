import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-9">
      <li className="flex-sm-fill text-sm-center">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="nav-link active"
        >
          About
          </NavLink>
      </li>
      <li className="flex-sm-fill text-sm-center">
        <NavLink
          to="/portfolio"
          className="nav-link"
          activeClassName="nav-link active"
        >
          Portfolio
          </NavLink>
      </li>
      <li className="flex-sm-fill text-sm-center">
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="nav-link active"
        >
          Contact
          </NavLink>
      </li>
      <a
        className="flex-sm-fill text-sm-center nav-link"
        href="https://github.com/Gannim1986/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/github.png")}
          alt="GitHub"
          height="25"
          width="25"
          className="github"
        />
      </a>
      <a
        className="flex-sm-fill text-sm-center nav-link"
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/linkedin.png")}
          alt="Linkedin"
          height="24"
          width="29"
          className="linkedin"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/resume.jpg")}
          alt="resume"
          height="28"
          width="28"
          className="resume"
        />
      </a>
    </nav>
  );
}

export default Navbar;