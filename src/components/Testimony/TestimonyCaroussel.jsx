import React from "react";
import "./TestimonyCaroussel.scss";

export default function TestimonyCaroussel({
  titre,
  text,
  img,
  fonction,
  name,
}) {
  const lists = [
    {
      text: "qsduhqs uidgsquydgqsyd qsgudyq sfd qgsdfdgshf",
      titre: "Rapide et efficace",
      img: "cust1.webp",
      fonction: "Customer",
      name: "Diane Smith",
    },
    {
      text: "qsfkjbsqdfkjhgdsqqdgs",
      titre: "Fort de Proposition",
      img: "cust2.webp",
      fonction: "Customer",
      name: "Diane Smith",
    },
    {
      text: "qsdbhqsdg hdjf qdgfq dgfqdh fdqs fjfs qjj qdfs jqs",
      titre: "Agréable et pro",
      img: "cust3.webp",
      fonction: "Customer",
      name: "Diane Smith",
    },
  ];
  return (
    <div className="TestimonyCaroussel">
      {lists.map((list) => (
        <div className="cardCustomersWrapper">
          <h3> {list.titre} </h3>
          <p> {list.text} </p>
          <div className="imgWrapper">
            <img src={list.img} alt="#" />
          </div>
          <p>
            {list.name}
            <span> {list.fonction} </span>
          </p>
        </div>
      ))}
    </div>
  );
}
