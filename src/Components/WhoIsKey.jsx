import React from "react";
import s from "./WhoIsKey.module.css";
import { useState } from "react";

export default function () {
  return (
    <div className={`${s.wikDiv}`}>
      <div className={`${s.aboutDiv}`}>
        <div className={`${s.aboutBlock}`}>
          <p className={`${s.Intro}`}>
            Hi, I am a Fullstack Developer from Lima-Perú. I previously worked
            as a project coordinator in ICT, start-ups, business and innovation
            projects for international cooperation agencies.
            <br></br>
            <br></br>
            My background has helped me to know how to work in multicultural and
            multidisciplinary environments, to develop transferible skills such
            as organization, empathy, time management, attention to detail,
            understand the bigger picture and fast-learning.
            <br></br>
            <br></br>
            Always willing to face new professional challenges and use my
            passions and previous experiences to propose unique, creative,
            efficient solutions.
          </p>
        </div>
        <div className={`${s.aboutBlock} ${s.aboutTools}`}>
          <div>
            <p className={`${s.toolsTitle}`}>I work with:</p>
          </div>
          <div className={`${s.toolsLogos}`}>
            <div className={`${s.logoDiv}`}>
              <img className={s.logo} src="https://img.icons8.com/ios/50/undefined/html-5--v1.png" />
              <p className={`${s.Intro}`}>HTML</p>
            </div>
            <div className={`${s.logoDiv}`}>
              <img className={s.logo} src="https://img.icons8.com/wired/64/undefined/css3.png" />
              <p className={`${s.Intro}`}>CSS</p>
            </div>
            <div className={`${s.logoDiv}`}>
              <img className={s.logo} src="https://img.icons8.com/wired/64/undefined/javascript-logo.png" />
              <p className={`${s.Intro}`}>Javascript</p>
            </div>
            <div className={`${s.logoDiv}`}>
              <img className={s.logo} src="https://img.icons8.com/wired/64/undefined/react.png" />
              <p className={`${s.Intro}`}>React</p>
            </div>
            <div className={`${s.logoDiv}`}>
              <img className={s.logo} src="https://img.icons8.com/ios/50/undefined/redux.png" />
              <p className={`${s.Intro}`}>Redux</p>
            </div>
            <div className={`${s.logoDiv}`}>
              <img className={s.logo} src="https://img.icons8.com/windows/32/undefined/node-js.png" />
              <p className={`${s.Intro}`}>Node Js</p>
            </div>
            <div className={`${s.logoDiv}`}>
              <img className={s.logo}src="https://img.icons8.com/ios/50/undefined/postgreesql.png" />
              <p className={`${s.Intro}`}>PostgreSQL</p>
            </div>
            <div className={`${s.logoDiv}`}>
              <img className={s.logo} src="https://icons-for-free.com/download-icon-Sequelize-1324888761732662698_512.png"/>
              <p className={`${s.Intro}`}>Sequelize</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
