import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Navbar() {
  const dropItems = document.getElementById("dropItems");
  const [isDropped, setDrop] = useState(false);
  function openDrop() {
    setDrop((prevDrop) => !prevDrop);
  }
  const isWide = window.innerWidth > 1000;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="https://Wayys.co.za">
            <span className="firstLetter">W</span>ayys
          </a>
        </div>
        <div onClick={openDrop} className={!isWide && "dropDown"}>
          {!isWide && (
            <h4 className={`${isDropped ? "dropped" : " "}`}>Menu</h4>
          )}
          <ul
            className={`
            ${!isWide ? "dropItems" : "navItems"} 
            ${isDropped ? "shownDropItems" : " "}
          `}
          >
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
