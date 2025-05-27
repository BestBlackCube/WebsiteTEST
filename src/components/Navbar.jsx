import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>여행 소개</h1>
      <input
      type = "text"
      className = "search-input"
      placeholder = "여행지 검색"
      />
    </nav>
  );
}

export default Navbar;