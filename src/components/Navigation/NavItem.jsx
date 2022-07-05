import React from "react";
import "./NavItem.scss";
import { Link } from "react-router-dom";

export default function NavItem() {
  const lists = [
    { text: "About", slug: "/" },
    { text: "Skills", slug: "/skills" },
    { text: "Services", slug: "/services" },
    { text: "Portfolio", slug: "/portfolio" },
    { text: "Testimonials", slug: "/testimonials" },
    { text: "Contact", slug: "/contact" },
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
