import React from "react";
import Button from "../components/Global/Button";
import CardRightMainTitle from "../components/Global/CardRightMainTitle";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServicesPage/ServiceCard";
import "./Services.scss";

export default function Services() {
  const serviceCardList = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod rem, error, dicta molestiae sint qui tempora aliquid earum expedita officiis esse.",
      src: "horloge.webp",
      titre: "qsdqsd",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod rem, error, dicta molestiae sint qui tempora aliquid earum expedita officiis esse repellendus eligendi sequi ",
      src: "maintenance.webp",
      titre: "qsdqsd",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod rem, error, dicta molestiae sint qui tempora aliquid earum expedita officiis esse repellendus eligendi.",
      src: "reference.webp",
      titre: "fdsfdsf",
    },
  ];
  return (
    <div className="ServicesPage">
      <Layout>
        <CardRightMainTitle
          mainTitle="Mes Services"
          titleText="Ce que je vous offre"
        />
        <div className="ServiceCard">
          {serviceCardList.map((liste) => (
            <ServiceCard
              src={liste.src}
              titre={liste.titre}
              text={liste.text}
            />
          ))}
        </div>
        <Button textButton="Contactez-moi" />
      </Layout>
    </div>
  );
}
