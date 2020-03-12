import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav mb-4">
      <li className="nav-item">
        <NavLink
          to="/"
          exact
          className="nav-link text-dark"
          activeClassName="active"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/leaderboard"
          className="nav-link text-dark"
          activeClassName="active"
        >
          Leaderboard
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/add"
          className="nav-link text-dark"
          activeClassName="active"
        >
          Add Poll
        </NavLink>
      </li>
    </ul>
  );
}
