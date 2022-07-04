import React from "react";
import Logo from "./Logo";
import "./Navbar.scss";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Logo prenom="Nassim" />
      <NavItem />
    </nav>
  );
}
