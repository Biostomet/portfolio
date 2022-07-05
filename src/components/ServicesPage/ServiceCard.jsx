import React from "react";
import "./ServiceCard.scss";

export default function ServiceCard(src, titre, text) {
  return (
    <div className="serviceCardWrapper">
      <div className="logoServiceWrapper">
        <img src={src} alt="#" />
      </div>
      <div className="descriptionWrapper">
        <h2>{titre}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
