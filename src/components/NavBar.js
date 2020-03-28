import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={require("../assets/icon.png")} alt="" />
          <h1>Corona</h1>
        </Link>
      </div>
      <ul>
        <Link to="/">
          <li>Live Update</li>
        </Link>
        <Link to="/info">
          <li>Information</li>
        </Link>
      </ul>
    </nav>
  );
}
