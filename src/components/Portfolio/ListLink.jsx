import React from "react";
import "./ListLink.scss";

export default function ListLink() {
  const lists = [{ text: "Tous" }, { text: "React" }, { text: "Php/Laravel" }];
  return (
    <div className="ListLinkPort">
      <ul>
        {lists.map((list) => (
          <li>{list.text}</li>
        ))}
      </ul>
    </div>
  );
}
