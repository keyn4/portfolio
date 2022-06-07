import React from "react";
import s from "./Landing.module.css";
import { Animated } from "react-animated-css";
import NavBar from "./NavBar";

export default function () {
  return (
    <div className={`${s.LandingDiv}`}>
      <div className={`${s.scroll}`}>
        <div>
          <h3 className={`${s.fullstack}`}>
            &nbsp;&nbsp;FULLSTACK DEVELOPER &nbsp;&nbsp;{" "}
            <span className={`${s.fullstack} ${s.fullstack2}`}>
              FULLSTACK DEVELOPER
            </span>
            &nbsp;&nbsp; FULLSTACK DEVELOPER{" "}
            <span className={`${s.fullstack} ${s.fullstack2}`}>
              &nbsp;&nbsp;FULLSTACK DEVELOPER
            </span>
            &nbsp;&nbsp;FULLSTACK DEVELOPER
          </h3>
        </div>
        <div>
          <h3 className={`${s.fullstack3}`}>
            FULLSTACK DEVELOPER &nbsp;&nbsp;{" "}
            <span className={`${s.fullstack} ${s.fullstack4}`}>
              FULLSTACK DEVELOPER
            </span>
            &nbsp;&nbsp; FULLSTACK DEVELOPER{" "}
            <span className={`${s.fullstack} ${s.fullstack4}`}>
              &nbsp;&nbsp;FULLSTACK DEVELOPER
            </span>
            &nbsp;&nbsp;FULLSTACK DEVELOPER
          </h3>
          &nbsp;&nbsp;
          {/* <h3 className={`${s.fullstack3}`}>FULLSTACK DEVELOPER &nbsp;&nbsp;<span className={`${s.fullstack} ${s.fullstack4}`}>FULLSTACK DEVELOPER</span>&nbsp;&nbsp; FULLSTACK DEVELOPER <span className={`${s.fullstack} ${s.fullstack4}`}>&nbsp;&nbsp;FULLSTACK DEVELOPER</span>&nbsp;&nbsp;FULLSTACK DEVELOPER</h3>    */}
        </div>
      </div>
      <div className={`${s.SaludoDiv}`}>
        <Animated animationIn="bounceIn" isVisible={true}>
          <h2 className={`${s.Title}`}>Hi, my name is Keyna</h2>
        </Animated>
      </div>
      <div className={`${s.BottomDiv}`}>
        <NavBar />
        <div className={`${s.Saludo}`}>
          <Animated animationIn="flipInX" isVisible={true}>
            <h3 className={`${s.TitleIntro}`}>
              {" "}
              I'm a fullstack developer and project manager.<br></br> I'm
              passionate about music, learning, fashion,<br></br> languages and
              brain teasers.
            </h3>
            <h3 className={`${s.TitleIntro}`}> Friends call me Key [K]</h3>
          </Animated>
        </div>
      </div>
    </div>
  );
}
