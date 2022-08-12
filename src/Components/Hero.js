import React from "react";
import DArrow from "../images/icons/down-arrow.svg";

export default function Hero() {
  return (
    <section>
      <div className="hero">
        <div className="container">
          <div className="content">
            <div className="logo">
              <h1>
                <span className="firstLetter">W</span>ayys
              </h1>
            </div>
            <p>
              I believe that all Tech should <br />
              <span id="changeText">help build a smarter future.</span>
            </p>
            <div className="actionButtons">
              <a className="btn">Mail Me</a>
              <a className="btn">Profile</a>
            </div>
          </div>
        </div>
        <div className="smallIndicator">
          <p>
            Scroll a bit
            <img src={DArrow} />
          </p>
        </div>
      </div>
    </section>
  );
}
