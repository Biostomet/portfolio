import React from "react";
import Button from "../Global/Button";
import "./ContactForm.scss";

export default function ContactForm() {
  return (
    <div className="ContactForm">
      <form action="">
        <div className="inputFlex">
          <input className="firstInputFlex" type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
        </div>
        <div className="inputSubject">
          <input className="maxInputWidth" type="text" placeholder="Subject" />
        </div>
        <div className="inputMessage">
          <textarea
            className="maxInputWidth"
            rows="6"
            cols="50"
            placeholder="Message"
          ></textarea>
        </div>
        <Button textButton="Send message" />
      </form>
    </div>
  );
}
