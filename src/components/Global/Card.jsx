import React from "react";
import CardLeft from "./CardLeft";
import "./Card.scss";
import CardRight from "./CardRight";

export default function Card() {
  return (
    <div className="cardWrapper">
      <CardLeft />
      <CardRight />
    </div>
  );
}
