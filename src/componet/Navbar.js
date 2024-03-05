import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="Nav-Home">
          <span>Home</span>
        </div>
        <div className="restFour">
          <div>
            <span>About</span>
          </div>
          <div>
            <span>Services</span>
          </div>
          <div>
            <span>FAQ</span>
          </div>
          <div>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </>
  );
};
