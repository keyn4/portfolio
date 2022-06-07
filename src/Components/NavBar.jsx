import React from "react";
import { HashLink } from "react-router-hash-link";
import classes from "./NavBar.module.css"
import { useState } from "react";

export default function NavBar() {

  const[active, SetActive] = useState("")
  let height = window.innerHeight;
  const changeBg = () => {
    if (window.scrollY <= 0.6 * height) {
      SetActive("");
    }
    if(window.scrollY > 0.6*  height && window.scrollY <= 1.5 * height){
      SetActive("wik");
    }
    if(window.scrollY > 1.5 *height && window.scrollY < 2.1* height){
      SetActive("projects");
    }
    if(window.scrollY >= 2.1 *height){
      SetActive("contactme");
    }

  };
  window.addEventListener("scroll", changeBg);

  return (
      <div className= {`${classes.nav}`}>
        <div>
          <HashLink to="#WhoIsKey">
            <a className= {active === "wik"? `${classes.active} ${classes.navItem}`: `${classes.navItem}` } aria-current="page" href="#">
              WHO IS KEY?
            </a>
          </HashLink>
        </div>
        <div>
          <HashLink to="#Projects">
            <a className= {active === "projects"? `${classes.active} ${classes.navItem}`: `${classes.navItem}` } aria-current="page" href="#">
              PROJECTS
            </a>
          </HashLink>
        </div>
        <div>
          <HashLink to="#ContactMe">
            <a className= {active === "contactme"? `${classes.active} ${classes.navItem}`: `${classes.navItem}` } aria-current="page" href="#">
              CONTACT ME
            </a>
          </HashLink>
        </div>
      </div>
  );
}
