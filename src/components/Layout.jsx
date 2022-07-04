import React from "react";
import Navbar from "./Navigation/Navbar";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="pageWrapper">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
