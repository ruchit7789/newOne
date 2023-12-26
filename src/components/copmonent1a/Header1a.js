import React from "react";
import photo11 from "../images/Group.png";
import { Link } from "react-router-dom";
import nucket from "../images/bucket.png";
import persom from "../images/person.png";
import searchicom from "../images/searchicon.png";

const Header1a = () => {
  return (
    <>
      <div className="top">
        <h1 className="top_1"> QUICK BUY! Get up to 25% off on All Stones</h1>
      </div>

      <div className="top_2 ">
        <div className="top_2a  ">
          <img className="main_photo " src={photo11} alt="" />
          <div className="top_3a">
            <p className="top_3a1">PINK FLAMINGO</p>
            <p className="top_3a2">TAGLINE GOES HERE</p>
            <div className="searchbar ">
              <button className="btn_0">
                <div className="map">
                  <p className="map_1">Deliver to</p>
                  <p className="map_1">110094</p>
                </div>
              </button>
              <input
                className="search_0"
                type="search"
                placeholder="Search for medication & Wellness products.."
              />
              <img className="searchicon" src={searchicom} alt="" />
            </div>
            <div className="id_login ">
              <img className="img_1234" src={nucket} alt="" />
              <img className="img_12345" src={persom} alt="" />
              <p className="pclas"> SIGN IN / SIGN UP </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top_3">
        <ul className="ul_1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Product</a>
            <ul className="ul_11  ">
              <li>
                <a
                  className="commom_123 target_1 specialhover special_1"
                  href="/"
                >
                  Dhoop Cones
                </a>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <ul className="ul_1123 ">
                  <li>
                    <Link to="/page" className="commom_123 target_12 special_1">
                      Jar Cones
                    </Link>
                  </li>
                  <li>
                    <a className="commom_123  target_12" href="/">
                      Chandan Bamboo Dhoop
                    </a>
                  </li>
                  <li>
                    <a className="commom_123 target_12 " href="/">
                      Backflow Cone Dhoop
                    </a>
                  </li>
                  <li>
                    <a className="commom_123 target_12 " href="/">
                      Buddha Red Incense Cone
                    </a>
                  </li>
                  <li>
                    <a className="commom_123 target_12 " href="/">
                      ountain Sandal Dhoop
                    </a>
                  </li>
                  <li>
                    <a className="commom_123 target_12 " href="/">
                      Cone Sandal Dhoop
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Incense Holders
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Yantras
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Incense Sticks
                </a>
              </li>
              <li>
                <a className="commom_123 target_1 " href="/">
                  Pooja Thali Sets
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Shankh
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Book Rests
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Kalash
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/">Cource</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Video</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header1a;
