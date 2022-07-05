import React from "react";
import "./CardRightSecondaryTitle.scss";

export default function CardRightSecondaryTitle({
  secondaryTitle,
  secondaryText,
}) {
  return (
    <div className="secondaryContent">
      <h2>{secondaryTitle}</h2>
      <p>{secondaryText}</p>
    </div>
  );
}
