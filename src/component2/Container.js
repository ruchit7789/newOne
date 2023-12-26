import React from "react";
import "./Container.css";

const Container = (props) => {
  console.log(props);
  return (
    <>
      <div className="container1 tbdr">
        <div className="container1a tbdr">
          <img src={props.srcimg} alt="" />
        </div>
        <div className="container_2b tbdr">
          <p className="container_2bp1">{props.title}</p>
          <p className="container_2bp2">{props.discription}</p>
          <p className="rating">{props.rating}</p>
          <p className="price"> {props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Container;
