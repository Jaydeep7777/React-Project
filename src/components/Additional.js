import React from "react";

function Additional(props) {
  return (
    <div>
    <h5>{props.item}</h5>
    <div className="container sec">
        <img className="image" src={props.image} alt="chillies-img" />
        <p className="price">{props.price}</p>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>  
    </div>
    </div>
  );
}

export default Additional;
