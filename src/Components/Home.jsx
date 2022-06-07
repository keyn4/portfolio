import React from "react";
import ContactMe from "./ContactMe";
import Landing from "./Landing";
import NavBar from "./NavBar";
import Projects from "./Projects";
import WhoIsKey from "./WhoIsKey";
import s from "./Home.module.css";
import { useState } from "react";

export default function Home() {

  const[wikBg, SetWikBg] = useState("")
  let height = window.innerHeight;
  const changeBg = () => {
    if (window.scrollY <= 0.6 * height) {
      SetWikBg("");
    }
    if(window.scrollY > 0.6 * height && window.scrollY <= 1.5 * height){
      SetWikBg("changeB");
    }
    if(window.scrollY > 1.5 *height){
      SetWikBg("changeC");
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
   
      <div className={wikBg === ""? `${s.homeDiv}` : `${s[wikBg]}  ${s.homeDiv}`}>
        <div id="Landing" >
          <Landing />
        </div>
        <div id="WhoIsKey" >
          <WhoIsKey />
        </div>
        <div id="Projects" >
          <Projects />
        </div>
        <div id="ContactMe" >
          <ContactMe />
        </div>
      </div>
  
  );
}
