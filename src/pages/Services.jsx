import React from "react";
import CardRightMainTitle from "../components/Global/CardRightMainTitle";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServicesPage/ServiceCard";
import "./Services.scss";

export default function Services() {
  const serviceCardList = [
    {
      text: "La création de site lqsifgskjlsfdqiusdf gdqsky ufgqsdhf gqdsfhgqsdk qdfhs",
      src: "horloge.webp",
      titre: "qsdqsd",
    },
    {
      text: "Un site internet en bonne santé isugqsuyofgd sqoufy sdquo ifygdsqyf gqdsoufg",
      src: "maintenance.webp",
      titre: "qsdqsd",
    },
    {
      text: "Votre site internet apparait quysdfg fdsyfsdjhf dsfk sdf",
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
      </Layout>
    </div>
  );
}
