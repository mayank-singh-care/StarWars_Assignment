import React from "react";
import "./Header.css";
import src from "../images/starwars.png";
function Header({ category, setCategory }) {
  return (
    <div className="header">
      <img
        id="image0_14_1636"
        alt="img"
        src={src}
        style={{ cursor: "pointer" }}
        onClick={() => setCategory("")}
      />

      {category !== "" && (
        <div className="search">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8555 9.92736L13.6666 12.7384L12.7383 13.6666L9.9273 10.8556C8.91656 11.6643 7.63473 12.148 6.2406 12.148C2.97974 12.148 0.333252 9.50151 0.333252 6.24066C0.333252 2.9798 2.97974 0.333313 6.2406 0.333313C9.50145 0.333313 12.1479 2.9798 12.1479 6.24066C12.1479 7.63479 11.6642 8.91662 10.8555 9.92736ZM9.53866 9.44034C10.3413 8.61318 10.8352 7.48487 10.8352 6.24066C10.8352 3.70214 8.77911 1.64606 6.2406 1.64606C3.70208 1.64606 1.64599 3.70214 1.64599 6.24066C1.64599 8.77917 3.70208 10.8353 6.2406 10.8353C7.48481 10.8353 8.61312 10.3413 9.44027 9.53873L9.53866 9.44034Z"
              fill="white"
            />
          </svg>
          <input type="text" className="searchBar" placeholder="Search"></input>
        </div>
      )}
    </div>
  );
}

export default Header;
