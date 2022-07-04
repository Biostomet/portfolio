import React from "react";
import "./NavItem.scss";
import { Link } from "react-router-dom";

export default function NavItem() {
  const lists = [
    { text: "About", slug: "/" },
    { text: "Skills", slug: "/nitro" },
    { text: "Services", slug: "/" },
    { text: "Portfolio", slug: "/" },
    { text: "Testimonials", slug: "/" },
    { text: "Contact", slug: "/" },
  ];
  return (
    <div className="NavItem">
      <ul className="itemWrapper">
        {lists.map((list) => (
          <Link to={list.slug} key={list.text}>
            <li>{list.text}</li>
          </Link>
        ))}
      </ul>
      <div className="hamburger">MENU</div>
    </div>
  );
}
