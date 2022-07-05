import React from "react";
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
        <div>
          <button className="contactMessage">Send Message</button>
        </div>
      </form>
    </div>
  );
}
