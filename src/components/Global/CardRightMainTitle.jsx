import React from "react";
import "./CardRightMainTitle.scss";

export default function CardRightMainTitle({ mainTitle, titleText }) {
  return (
    <div className="mainTitleWrapper">
      <p>{titleText}</p>
      <h1>{mainTitle}</h1>
    </div>
  );
}
