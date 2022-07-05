import React from "react";
import CardRightMainTitle from "../components/Global/CardRightMainTitle";
import Layout from "../components/Layout";
import TestimonyCaroussel from "../components/Testimony/TestimonyCaroussel";
import "./Testimony.scss";

export default function Testimony() {
  return (
    <div className="TestimonyPage">
      <Layout>
        <CardRightMainTitle
          mainTitle="Témoignages"
          titleText="Ce que les client disent"
        />
        <TestimonyCaroussel />
      </Layout>
    </div>
  );
}
