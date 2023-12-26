import React from "react";
import "./Header.css";
import Header1a from "./copmonent1a/Header1a";
import photo22 from "./images/allha.png";

const Header = () => {
  return (
    <>
      <Header1a />
      <div className="top_4">
        <div className=" tbdr top_4a ">
          <div className="tbdr top4_1">
            <img src={photo22} alt="" />
          </div>
          <div className=" top4_2">
            <p>Transform Your Mind & Soul:</p>
            <p>Discover Your Spiritual Path with Our Courses</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
