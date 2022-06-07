import React from "react";
import s from "./ContactMe.module.css";

export default function () {
  return (
    <div className={`${s.contactDiv}`}>
      <h3 className={`${s.contactText}`} >
        <a href="keynarafaelp@gmail.com">
          <img src="https://img.icons8.com/doodle/48/undefined/new-post.png" />
        </a>
        &nbsp;&nbsp; New challenges? <span className={`${s.email}`}><br></br>[keynarafaelp@gmail.com]</span>
      </h3>
      <h3 className={`${s.contactText}`} >
        <a href="https://github.com/keyn4">
          <img src="https://img.icons8.com/doodle/48/undefined/github--v1.png" />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;Check my github!
      </h3>
      <h3 className={`${s.contactText}`} >
        <a href="https://www.linkedin.com/in/keynarp/">
          <img src="https://img.icons8.com/doodle/48/undefined/linkedin--v2.png" />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;Here is my Linkedin!
      </h3>
    </div>
  );
}
