import React from "react";
import "./Page3.css";
import first from "./images_3/first.png";
import second from "./images_3/second.png";
import third from "./images_3/third.png";
import fourth from "./images_3/fourth.png";
import fifth from "./images_3/fifth.png";

const Pagee3 = () => {
  return (
    <div className="page3">
      <div className="page3a tbdr">
        <p> Product Dhoop Jarcans</p>
      </div>
      <div className="page3c">
        <p className="page3c_small tbdr">it si for fir 4 pictures</p>
        <div className="page3c_main  tbdr">
          <div className="page3c_main1 tbdr">
            <img src={fifth} alt="" />
          </div>
        </div>
        <div className="page3c_2 tbdr">
          <p>Brand: Rashmi Divine Solutions</p>
          <p>Scent: Floral</p>
          <p>Availability: Only 2 in Stock</p>
          <p>
            Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi Divine
          </p>
          <h1 className="main_heading">
            Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi Divine
          </h1>
          <ul>
            <li>
              Lavender Dhoop sticks activate your senses and relax the nerves,
              making you less anxious. They also hold the power to cleanse the
              air.
            </li>
            <li>
              Lavender Crafted out of the finest quality ingredients, this
              leaves a magnificent and alluring fragrance and adds more to your
              ‘spiritual time
            </li>
            <li>
              Lavender Dhoop sticks are Charcoal Free Dhoop Sticks with soothing
              fragrances which don't cause eye irritation and headache
            </li>
          </ul>
          <p className="price_2">USD(incl. of all taxes)</p>
          <h2 className="price_3">$4.05</h2>
          <div className="buying_1">
            <div className="buying_1a">
              <div className=" same minus">
                <img src="" alt="" />
              </div>
              <p>1</p>
              <div className=" same plus">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page3c_b tbdr">
        <p>Description</p>
        <p>Product Information</p>
        <p>Reviews</p>
      </div>
      <div className="page3d tbdr "></div>
      <div className="page3e_box tbdr ">
        <p>
          Dhoop incence cone made from natual hurbs and scented.Long lasting
          enthralling dhoop batti for regular use - encouraging and cheering
          dhoop incense cones. Use dhoop bati for offering your prayers or while
          meditating or relaxing. It will unquestionably boost up your
          confidence, create encouraging environment and purify the atmosphere
          while spreading the lingering aroma all around. Use it every morning
          while doing prayers, while meditating or exercising. It's one of the
          best incense cones that spread mesmerizing fragrance all around.
          Simply relax and have the time of your lives by getting these incense
          cones. can we use for spiritual and meditation purpose. Its great
          fragrance and long lasting effect. Its heavenly aroma encourages your
          soul and thoughts to be pure and beautiful. For uplifting and
          purifying the ambience.
        </p>
      </div>
      <div className="page3f tbdr"> Related Products</div>
      <div className="page3g">
        <div className="page3g_box tbdr">
          <div className="page3g_small tbdr">
            <img src={first} alt="" />
            <p className="page3g_p1  page3g_p tbdr"> Add to cart</p>
          </div>
        </div>
        <div className="page3g_box tbdr">
          <div className="page3g_small page3g_small2 tbdr ">
            <img src={second} alt="" />
            <p className="page3g_p2 page3g_p tbdr"> Add to cart</p>
          </div>
        </div>
        <div className="page3g_box tbdr">
          <div className="page3g_small page3g_small2 tbdr ">
            <img src={fourth} alt="" />
            <p className="page3g_p3 page3g_p tbdr"> Add to cart</p>
          </div>
        </div>
        <div className="page3g_box tbdr">
          <div className="page3g_small tbdr">
            <img src={third} alt="" />
            <p className="page3g_p4 page3g_p tbdr"> Out of Stock </p>
          </div>
        </div>
      </div>
      <div className="page3h">
        <div className="page3h_text tbdr">
          <p>Musk INCENSE CONES</p>
          <div className="discount">
            <p>$0.75</p>
            <p className="discount_1">$2.66</p>
          </div>
        </div>
        <div className="page3h_text tbdr">
          <p>Sage INCENSE CONES</p>
          <div className="discount">
            <p>$0.75</p>
          </div>
        </div>
        <div className="page3h_text tbdr">
          <p>Yerba Santa INCENSE CONES</p>
          <div className="discount">
            <p>$0.75</p>
          </div>
        </div>
        <div className="page3h_text tbdr">
          <p>Frankincense and Myrrh</p>
          <div className="discount">
            <p>$0.75</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Pagee3;
