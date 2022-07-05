import React from "react";
import Navbar from "./Navigation/Navbar";
import "./Layout.scss";
import CardLeft from "./Global/CardLeft";

export default function Layout({ children }) {
  return (
    <div className="pageWrapper">
      <Navbar />
      <main>
        <CardLeft />
        <section className="RightCardWrapper">{children}</section>
      </main>
    </div>
  );
}
