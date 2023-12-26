import React from "react";
import "./Main.css";
import bigcrane from "./images/bigcrane.png";
import photo33 from "./images/picture_1.png";
import photo44 from "./images/picture_2.png";
import photo55 from "./images/picture_3.png";
import photo1 from "./images/photot11.png";
import photo2 from "./images/photo22.png";
import photo3 from "./images/photo33.png";
import photo4 from "./images/photo44.png";
import photo5 from "./images/photo55.png";
import photo6 from "./images/photo66.png";

const Main = () => {
  return (
    <>
      <div className="main_2">
        <p>Shop From Our Top Categories</p>
        <div className="main_7sd tbdr ">
          <div className="main_7sdf tbdr">
            <img src={photo1} alt="" />

            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
            <img src={photo6} alt="" />
          </div>

          <div className=" main_7sdcontent  tbdr">
            <div className="main_678 tbdr">
              <p>Cone Dhoop</p>
              <p className="main_7000">Shop Now</p>
            </div>
            <div className="main_678 tbdr">
              <p>Incense Holders</p>
              <p className="main_7000">Shop Now</p>
            </div>
            <div className="main_678 tbdr">
              <p>Incense Sticks</p>
              <p className="main_7000">Shop Now</p>
            </div>
            <div className="main_678 tbdr">
              <p>Shankh</p>
              <p className="main_7000">Shop Now</p>
            </div>
            <div className="main_678 tbdr">
              <p>Kalash</p>
              <p className="main_7000">Shop Now</p>
            </div>
            <div className="main_678 tbdr">
              <p>Buddha Statue</p>
              <p className="main_7000">Shop Now</p>
            </div>
          </div>
        </div>
        <div className="main_6 tbdr">
          <p className="main_6p">Why PINK FLAMINGO ?</p>
          <div className="main_6b tbdr">
            <img src={bigcrane} alt="" />
          </div>
          <div className="main_6c tbdr">
            <p style={{ height: "38px ", width: "459.57px" }}>
              Spirituality can provide them with a framework for understanding
              the universe and their role in it
            </p>
            <p style={{ height: "19px ", width: "461.19px" }}>
              Coping with stress and uncertainty
            </p>
            <p style={{ height: "19px ", width: "461.29px" }}>
              Spirituality can be a path to personal growth and self-discovery
            </p>
            <p style={{ height: "38px ", width: "461.20px" }}>
              Spirituality can provide people with a sense of community and
              connection with others
            </p>
          </div>
        </div>
        <div className="main_8 tbdr ">
          <p className="p_6">our latest blog</p>
        </div>
        <div className="main_7 tbdr ">
          <div>
            <img src={photo33} alt="" />
            <div className="main_7sec">
              <h1>The Power of Mindfulness</h1>
              <p className="main_7para tbdr">
                Mindfulness is the practice of being present and fully engaged
                in the moment. It is about paying attention to our thoughts,
                feelings, and sensations in a non-judgmental way.
              </p>
            </div>
            <div className="price_area tbdr ">
              <p className="opio">Read More</p>
            </div>
            <div className="date1">
              <p className="ooppii">08-05-2022</p>
            </div>
          </div>
          <div>
            <img src={photo44} alt="" />
            <div className="main_7sec ">
              <h1>Connecting with the Divine</h1>
              <p className="main_7para tbdr">
                Connecting with the Divine refers to the process of establishing
                a spiritual connection or relationship with a higher power, such
                as God, the Universe, or a higher consciousness.{" "}
              </p>
            </div>
            <div className="price_area2 tbdr">
              <p className="opio">Read More</p>
            </div>
            <div className="date2">
              <p className="ooppii">08-05-2022</p>
            </div>
          </div>

          <div>
            <img src={photo55} alt="" />
            <div className="main_7sec">
              <h1>The Beauty of Forgiveness</h1>
              <p className="main_7para tbdr">
                The beauty of forgiveness lies in its transformative power. It
                has the ability to heal wounds and to restore relationships that
                have been damaged. Forgiveness brings a new level of
                understanding.
              </p>
            </div>
            <div className="price_area3 tbdr">
              <p className="opio">Read More</p>
            </div>
            <div className="date3">
              <p className="ooppii">08-05-2022</p>
            </div>
          </div>
        </div>
        <div className="main_8 tbdr">
          <p className="p_6">Let's connect</p>
        </div>
        <div className="main_9 tbdr">
          <form action="">
            <div className="input">
              <input
                className="input_1"
                type="text"
                id="1"
                placeholder=" YOUR NAME"
              ></input>
              <input
                className="input_2"
                type="text"
                id="2"
                placeholder="PHONE NUMBER"
              />
            </div>
            <input
              className="input_3"
              type="email"
              id="3"
              placeholder="E-MAIL ID "
            ></input>
            <input
              className="input_4"
              type=" text"
              id="4"
              placeholder="Write a msge here"
            />
          </form>
        </div>
      </div>

      <div className="main_3">
        <p className="main_3p">Sigh Up To Show Now </p>
        <form className="search" action="#">
          <input
            className="search_1"
            type="text"
            placeholder="email address"
            name="search"
          />
          <button>subscribe </button>
        </form>
      </div>
    </>
  );
};

export default Main;
