import React from "react";
import "./Logo.scss";

export default function Logo({ prenom }) {
  return (
    <div className="logo">
      <p className="logoName">
        {prenom}
        <span className="spanLogo">.</span>CV
      </p>
    </div>
  );
}
