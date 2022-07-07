import React from "react";
import "./Button.scss";

export default function Button({ textButton }) {
  return (
    <div className="ButtonBlueWrapper">
      <button className="buttonBlue">{textButton}</button>
    </div>
  );
}
