import React from "react";
import "./CardLeft.scss";
import GlobalInfo from "./GlobalInfo";

export default function CardLeft() {
  const personalInfoList = [
    {
      src: "pen.png",
      title: "Name: ",
      text: "Justin Bieber",
    },
    { src: "location.png", title: "Location: ", text: "London UK" },
    { src: "mail.png", title: "", text: "contactme@templatename.com" },
    { src: "phone.png", title: "", text: "+336.00.00.00.00" },
    { src: "computer.png", title: "", text: "www.mytemplates.com" },
  ];
  const socialMediasList = [
    {
      src: "google.svg",
      slug: "https://www.google.com/",
    },
    {
      src: "pinterest.svg",
      slug: "https://www.pinterest.fr/",
    },
    {
      src: "facebook.svg",
      slug: "https://fr-fr.facebook.com/",
    },
    {
      src: "twitter.svg",
      slug: "https://twitter.com/?lang=fr",
    },
  ];
  return (
    <div className="CardLeft">
      <div className="imgWrapper">
        <img className="imgSelfie" src="facedepet.webp" alt="" />
      </div>
      <div className="GlobalInfo">
        <h2>General Information</h2>
        {personalInfoList.map((list) => (
          <GlobalInfo
            key={list.text}
            src={list.src}
            title={list.title}
            text={list.text}
          />
        ))}
        <div className="socialMediaLinksWrapper">
          {socialMediasList.map((list) => (
            <a href={list.slug} key={list.slug}>
              <img className="imgSocialMedias" src={list.src} alt="#" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
