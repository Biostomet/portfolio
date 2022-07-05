import React from "react";
import CardRightMainTitle from "../components/Global/CardRightMainTitle";
import CardRightSecondaryTitle from "../components/Global/CardRightSecondaryTitle";
import Layout from "../components/Layout";
import "./About.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function About() {
  const progressList = [
    {
      progress: 75,
      text: "Intuition",
    },
    {
      progress: 83,
      text: "Creativity",
    },
    {
      progress: 25,
      text: "pure luck",
    },
    {
      progress: 95,
      text: "awesomeness",
    },
  ];
  return (
    <div className="AboutPage">
      <Layout>
        <CardRightMainTitle
          mainTitle="Justin Bieber"
          titleText="Développeur full stack"
        />
        <CardRightSecondaryTitle
          secondaryTitle="Description"
          secondaryText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima perferendis est, magnam explicabo enim laboriosam suscipit aspernatur possimus odio libero similique maxime doloribus nisi facilis? Nesciunt quae facere autem, dolorem impedit repellat debitis reiciendis! Tenetur architecto tempore deserunt id modi reprehenderit repudiandae exercitationem. Nam asperiores est nesciunt voluptas quo! Illo aut quasi excepturi tempore! Earum harum accusamus nesciunt. Fuga?"
        />
        <section className="containerProgressbars">
          {progressList.map((list) => (
            <div className="progressBar">
              <CircularProgressbar
                value={list.progress}
                text={`${list.progress}%`}
              />
              <p>{list.text}</p>
            </div>
          ))}
        </section>
      </Layout>
    </div>
  );
}
