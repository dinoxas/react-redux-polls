import React from "react";
import { FaReact, FaPoll } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand text-white text-lg" href="/">
            Polls app
          </a>
        </div>
        <ul className="navbar-nav ml-auto text-light d-inline-block">
          <li className="nav-item">
            <FaReact color="#00d8ff" size="40" />{" "}
            <FaPoll color="#ffffff" size="40" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
