import React from "react";
import CardRightMainTitle from "../components/Global/CardRightMainTitle";
import CardRightSecondaryTitle from "../components/Global/CardRightSecondaryTitle";
import Layout from "../components/Layout";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="ContactPage">
      <Layout>
        <CardRightMainTitle mainTitle="Contactez moi" titleText="" />
        <CardRightSecondaryTitle
          secondaryTitle=""
          secondaryText="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta
          debitis sed ratione natus. Accusamus, cum! Et consectetur eveniet
          necessitatibus odit vero. Tempore deleniti aspernatur vitae ad,
          laudantium sint blanditiis!"
        />
      </Layout>
    </div>
  );
}
