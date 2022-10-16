import React from "react";
import "./TopBar.css";
import logo from "../../images/stackline_logo.svg";

export default function TopBar() {
  return (
    <div className="topbarBackGround">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
}
