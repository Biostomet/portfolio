import React from "react";
import "./GlobalInfo.scss";

export default function GlobalInfo({ src, title, text }) {
  return (
    <div className="personalInfosWrapper">
      <img className="imgSvg" src={src} alt="#" />
      <div className="persoTextInfoWrapper">
        <p className="globalInfoText">{title}</p>
        <span> {text}</span>
      </div>
    </div>
  );
}
