import React from "react";
import CardRightMainTitle from "../components/Global/CardRightMainTitle";
import Layout from "../components/Layout";
import ImageProjet from "../components/Portfolio/ImageProjet";
import ListLink from "../components/Portfolio/ListLink";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolioPage">
      <Layout>
        <CardRightMainTitle mainTitle="Mon Portfolio" titleText="" />
        <ListLink />
        <ImageProjet />
      </Layout>
    </div>
  );
}
