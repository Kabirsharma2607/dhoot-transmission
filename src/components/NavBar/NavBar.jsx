import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-gap">
        <div className="nav-gap">
          <img
            src="/img1.jpg"
            alt="Smart Udyog"
            width="80px"
            height="43px"
            className="nav-img"
          />
          <img
            src="/img2.jpg"
            alt="Choot Transmissions"
            width="100px"
            height="33px"
            className="nav-img"
          />
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-user-info">
          <div className="nav-user-text">
            <span>Welcome: </span>{" "}
            <span className="nav-user-bold"> Sudheer</span>
          </div>
        </div>
        <div className="nav-icons">
          <svg
            className="nav-svg"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 43.5C26.2 43.5 28 41.7 28 39.5H20C20 41.7 21.8 43.5 24 43.5ZM36 31.5V21.5C36 15.36 32.74 10.22 27 8.86V7.5C27 5.84 25.66 4.5 24 4.5C22.34 4.5 21 5.84 21 7.5V8.86C15.28 10.22 12 15.34 12 21.5V31.5L8 35.5V37.5H40V35.5L36 31.5ZM32 33.5H16V21.5C16 16.54 19.02 12.5 24 12.5C28.98 12.5 32 16.54 32 21.5V33.5Z"
              fill="black"
            />
          </svg>
          <svg
            className="nav-svg"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM14.7 37C17.32 35.12 20.52 34 24 34C27.48 34 30.68 35.12 33.3 37C30.68 38.88 27.48 40 24 40C20.52 40 17.32 38.88 14.7 37ZM36.28 34.24C32.9 31.6 28.64 30 24 30C19.36 30 15.1 31.6 11.72 34.24C9.4 31.46 8 27.9 8 24C8 15.16 15.16 8 24 8C32.84 8 40 15.16 40 24C40 27.9 38.6 31.46 36.28 34.24Z"
              fill="black"
            />
            <path
              d="M24 12C20.14 12 17 15.14 17 19C17 22.86 20.14 26 24 26C27.86 26 31 22.86 31 19C31 15.14 27.86 12 24 12ZM24 22C22.34 22 21 20.66 21 19C21 17.34 22.34 16 24 16C25.66 16 27 17.34 27 19C27 20.66 25.66 22 24 22Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
