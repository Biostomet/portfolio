import React from "react";
import CardRightMainTitle from "../components/Global/CardRightMainTitle";
import CardRightSecondaryTitle from "../components/Global/CardRightSecondaryTitle";
import Layout from "../components/Layout";
import "./Skills.scss";

export default function Skills() {
  return (
    <div className="SkillsPage">
      <Layout>
        <CardRightMainTitle
          mainTitle="Mes compétences"
          titleText="Ce que je fais bien"
        />
        <CardRightSecondaryTitle
          secondaryTitle=""
          secondaryText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima perferendis est, magnam explicabo enim laboriosam suscipit aspernatur possimus odio libero similique maxime doloribus nisi facilis? Nesciunt quae facere autem, dolorem impedit repellat debitis reiciendis! Tenetur architecto tempore deserunt id modi reprehenderit repudiandae exercitationem. Nam asperiores est nesciunt voluptas quo! Illo aut quasi excepturi tempore! Earum harum accusamus nesciunt. Fuga?"
        />
        <div className="progressSkillsBarsWrapper">
          <div className="progressInfo">
            <p>HTML</p>
            <p>70%</p>
          </div>
          <progress id="file" max="100" value="70">
            70%
          </progress>
        </div>
      </Layout>
    </div>
  );
}
